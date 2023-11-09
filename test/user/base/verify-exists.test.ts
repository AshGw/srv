import { doesUserExist } from '@/lib/funcs/database/user/existance';
import {
  addUserIfNotExists,
  deleteUser,
} from '@/lib/funcs/database/user/operations';
import { prisma } from '@/lib/funcs/database/db/client';
import { v4 as uuidv4 } from 'uuid';

const EXISTING_CLIENT_EMAIL = uuidv4() + '@gmail.com';
const NON_EXISTENT_CLIENT_EMAIL = uuidv4() + '@gmail.com';

describe('updateClientPlan', () => {
  beforeAll(async () => {
    await addUserIfNotExists(EXISTING_CLIENT_EMAIL);
  });

  afterAll(async () => {
    await deleteUser(EXISTING_CLIENT_EMAIL);
    await prisma.$disconnect();
  });
  it('should return true if the user exists', async () => {
    const userExists = await doesUserExist(EXISTING_CLIENT_EMAIL);
    expect(userExists).toBe(true);
  });
  it('should return false if the user does not exist', async () => {
    const userExists = await doesUserExist(NON_EXISTENT_CLIENT_EMAIL);
    expect(userExists).toBe(false);
  });
});
