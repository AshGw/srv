import { updateClientPlan } from '@/lib/funcs/database/user/plan/ops';
import { doesUserExist } from '@/lib/funcs/database/user/existance';
import { addUserIfNotExists, deleteUser} from '@/lib/funcs/database/user/operations';
import { prisma } from '@/lib/funcs/database/db/client';

import { v4 as uuidv4 } from 'uuid';

const EXISTING_CLIENT_EMAIL = uuidv4() + '@gmail.com';
const NON_EXISTENT_CLIENT_EMAIL = uuidv4() + '@gmail.com';

describe('updateClientPlan', () => {
  beforeAll(async () => {
    await addUserIfNotExists(EXISTING_CLIENT_EMAIL); 
  });

  afterAll(async () => {
    await deleteUser(EXISTING_CLIENT_EMAIL)
    await prisma.$disconnect();
  });

  it('should set plan to free if the user exists', async () => {
    const userEmail = EXISTING_CLIENT_EMAIL
    const userExistence = await doesUserExist(userEmail);
    await updateClientPlan(userEmail, 'free', userExistence);
  });

  it('should update plan to hobby if the user indeed exists', async () => {
    const userEmail = EXISTING_CLIENT_EMAIL
    const userExistence = await doesUserExist(userEmail);
    await updateClientPlan(userEmail, 'hobby', userExistence);
  });

  it('should update plan to pro if the user exists', async () => {
    const userEmail = EXISTING_CLIENT_EMAIL
    const userExistence = await doesUserExist(userEmail);
    await updateClientPlan(userEmail, 'pro', userExistence);
  });

  it('should not update plan if user does not exist', async () => {
    const userEmail = NON_EXISTENT_CLIENT_EMAIL
    const userExistence = await doesUserExist(userEmail);
    await updateClientPlan(userEmail, 'pro', userExistence);
  });
});
