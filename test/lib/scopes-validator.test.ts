import { scopesSetter, UserMapper } from '@/lib/validators/scopes'; 

// values are literally hard-coded here cuz they never ever meant to change
// this verfies if the function DID NOT break 

describe('scopesSetter function', () => {
  test('returns correct object for client event', () => {
    const clientData: UserMapper['client'] = { plan: 'free'};
    const result = scopesSetter('client', clientData);

    expect(result).toEqual({ client: clientData });
  });

  test('returns correct object for client event', () => {
    const clientData: UserMapper['client'] = { plan: 'hobby'};
    const result = scopesSetter('client', clientData);

    expect(result).toEqual({ client: clientData });
  });

  test('returns correct object for client event', () => {
    const clientData: UserMapper['client'] = { plan: 'pro'};
    const result = scopesSetter('client', clientData);

    expect(result).toEqual({ client: clientData });
  });

  test('returns correct object for server event', () => {
    const serverData: UserMapper['server'] = { access: 'admin' };
    const result = scopesSetter('server', serverData);

    expect(result).toEqual({ server: serverData });
  });

  test('returns correct object for server event', () => {
    const serverData: UserMapper['server'] = { access: 'non-admin' };
    const result = scopesSetter('server', serverData);

    expect(result).toEqual({ server: serverData });
  });

});
