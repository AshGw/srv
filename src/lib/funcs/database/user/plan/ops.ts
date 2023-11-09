import { prisma } from '@/lib/funcs/database/db/client';
import { isGmail, gmailParser } from '@/lib/validators/parsers/gmail-parser';
import { Plan } from '@/lib/validators/user-scopes/scopes';
import { setScopes } from '@/lib/validators/user-scopes/objectifier';

export async function updateClientPlan(
  email: string,
  plan: Plan,
  userExistance: boolean
): Promise<void> {
  try {
    if (isGmail(email)) {
      email = gmailParser(email);
    }
    if (userExistance) {
      let Scopes = setScopes.forClient.setPlan.toFree.makeObject();
      if (plan == 'hobby') {
        Scopes = setScopes.forClient.setPlan.toHobby.makeObject();
      }
      if (plan == 'pro') {
        Scopes = setScopes.forClient.setPlan.toPro.makeObject();
      }
      await prisma.user.update({
        where: { email: email },
        data: {
          scopes: Scopes as any,
        },
      });
      // if they exist then nothing happens
    }
  } catch (error) {
    // log this out to a logging service or some
    console.log(error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}
