import { prisma } from '@/lib/funcs/database/db/client';
import { isGmail, gmailParser } from '@/lib/funcs/reusables/gmail-parser';

import { setScopes } from '@/lib/validators/user-scopes/objectifier'; 

const STARTER_ACCOUNT_CREDITS = 100;

export async function addClientIfNotExists(email: string): Promise<void> {
  try {
    let rawEmail = email;
    if (isGmail(email)) {
      rawEmail = gmailParser(email);
    }

    const existingUser = await prisma.user.findUnique({
      where: { email: rawEmail },
    });
    // a new client is always going to be on the free plan 
    const newClientScopes = setScopes.forClient.setPlan.toFree.makeObject(); 
    if (!existingUser) {
      await prisma.user.create({
        data: {
          email: rawEmail,
          accountCredit: STARTER_ACCOUNT_CREDITS,
          // implicit any here champ, always using the scopes to set the right scopes
          scopes: newClientScopes as any,   
        },
      });
    }
  } catch (error) {
    // log this out to a logging service or some
    console.log(error)
  } finally {
    await prisma.$disconnect();
  }
}
