// TO BE TESTED

import { prisma } from '@/lib/funcs/database/db/client';
import { isGmail, gmailParser } from '@/lib/validators/parsers/gmail-parser';

export async function doesUserExist(email: string): Promise<boolean> {
  if (isGmail(email)) {
    email = gmailParser(email);
  }
  try {
    const existingUser = await prisma.user.findUnique({
      where: { email: email },
    });

    return !!existingUser;
  } catch (error) {
    console.error('Error checking user existence:', error);
    throw error;
  }
}
