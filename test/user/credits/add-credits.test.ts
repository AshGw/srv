import {
  addUserIfNotExists,
  deleteUser,
} from '@/lib/funcs/database/user/operations';

import { addCredits } from '@/lib/funcs/database/user/credit/operations';

import { v4 as uuidv4 } from 'uuid';

describe('addCreditToUser', () => {
  let createdEmail: string;

  beforeEach(async () => {
    createdEmail = uuidv4() + '@gmail.com';
    await addUserIfNotExists(createdEmail);
  });

  it('should add credits to the user', async () => {
    const amountToAdd = 50;
    const result = await addCredits(createdEmail, amountToAdd);

    expect(result).toBe(true);
  });

  it('should return null for non-existent user', async () => {
    const nonExistentUserEmail = 'x' + createdEmail;
    const amountToAdd = 50;
    const result = await addCredits(nonExistentUserEmail, amountToAdd);

    expect(result).toBe(null);
  });
  afterEach(async () => {
    await deleteUser(createdEmail);
  });
});
