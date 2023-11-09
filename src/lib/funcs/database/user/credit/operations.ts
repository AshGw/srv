import { prisma } from '@/lib/funcs/database/db/client';
import { isGmail, gmailParser } from '@/lib/validators/parsers/gmail-parser';

export async function removeCredits(email: string, amount: number) {
  try {
    let rawEmail = email;
    if (isGmail(email)) {
      rawEmail = gmailParser(email);
    }

    const existingUser = await prisma.user.findUnique({
      where: { email: rawEmail },
    });

    if (existingUser) {
      if (existingUser.accountCredit >= amount) {
        await prisma.user.update({
          where: { email: rawEmail },
          data: {
            accountCredit: {
              decrement: amount,
            },
          },
        });

        return true; // User indeed exists ==> subtract credits
      } else {
        return false; // User exists, but not enough credits to decrement
      }
    }

    return null; // User does not even exist "Rare case if this happen u messed up some logic G"
  } catch (error) {
    return error;
  } finally {
    await prisma.$disconnect();
  }
}

export async function addCredits(email: string, amount: number) {
  try {
    let rawEmail = email;
    if (isGmail(email)) {
      rawEmail = gmailParser(email);
    }

    const existingUser = await prisma.user.findUnique({
      where: { email: rawEmail },
    });

    if (existingUser) {
      await prisma.user.update({
        where: { email: rawEmail },
        data: {
          accountCredit: {
            increment: amount,
          },
        },
      });

      return true; // User indeed exists and added credit
    }

    return null; // User does not exist
  } catch (error) {
    return error;
  } finally {
    await prisma.$disconnect();
  }
}
