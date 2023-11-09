import {
  addUserIfNotExists,
  deleteUser,
} from '@/lib/funcs/database/user/operations';

import { v4 as uuidv4 } from 'uuid';

describe('adding/deleting a given user', () => {
  let createdEmail: string;
  it('this should just work', async () => {
    createdEmail = uuidv4() + '@gmail.com';
    await addUserIfNotExists(createdEmail);
    await deleteUser(createdEmail);
  });

});
