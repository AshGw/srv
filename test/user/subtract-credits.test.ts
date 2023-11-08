 import {
    addUserIfNotExists,
    deleteUser,
  } from '@/lib/funcs/database/user/operations';

  import { removeCredits, addCredits } from '@/lib/funcs/database/user/credit/operations';

  import { v4 as uuidv4 } from 'uuid';
  
  describe('removeCreditsFromUser', () => {
    let createdEmail: string;
  
    beforeEach(async () => {
      createdEmail = uuidv4() + '@gmail.com';
      await addUserIfNotExists(createdEmail);
      // by default each new user has 100 points of credit
    });
  
    it('should subtract credits from the user', async () => {
      const amountToSubtract = 100;
      const result = await removeCredits(createdEmail, amountToSubtract);
  
      expect(result).toBe(true);
    });
    it('should NOT subtract credits from the if they have <= 0', async () => {
      const amountToSubtract2 = 200;
      const result = await removeCredits(createdEmail, amountToSubtract2);
  
      expect(result).toBe(false);
    });
  
    it('should return null for non-existent user', async () => {
      const nonExistentUserEmail = 'x' + createdEmail;
      const amountToSubtract = 50;
      const result = await removeCredits(
        nonExistentUserEmail,
        amountToSubtract
      );
  
      expect(result).toBe(null);
    });
    afterEach(async () => {
      await deleteUser(createdEmail);
    });
  });