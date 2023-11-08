import { prisma } from '@/lib/funcs/database/db/client';
import { isGmail, gmailParser } from '@/lib/funcs/reusables/gmail-parser';

const STARTER_ACCOUNT_CREDITS = 100;

export async function addUserIfNotExists(email: string) {
  try {
    let rawEmail = email;
    if (isGmail(email)) {
      rawEmail = gmailParser(email);
    }

    const existingUser = await prisma.user.findUnique({
      where: { email: rawEmail },
    });

    if (!existingUser) {
      await prisma.user.create({
        data: {
          email: rawEmail,
          accountCredit: STARTER_ACCOUNT_CREDITS,
        },
      });
      return true;
    }

    return false;
  } catch (error) {
    // log this out to a logging service or some 
    return error;
  } finally {
    await prisma.$disconnect();
  }
}

export async function deleteUser(email: string) {
  try {
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      await prisma.user.delete({
        where: { email },
      });
      return true;
    }

    return false;
  } catch (error) {
    return error;
  } finally {
    await prisma.$disconnect();
  }
}
