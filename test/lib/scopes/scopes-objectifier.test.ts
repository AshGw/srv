import { scopesSetter } from '@/lib/validators/user-scopes/scopes'; 
import { setScopes } from '@/lib/validators/user-scopes/objectifier'; 

describe('setScopes class', () => {
    // server scopes testing 
  test('returns correct object for server admin access', () => {
    const result = setScopes.forServer.setAccess.toAdmin.makeObject();
    const expected = scopesSetter('server', {access:'admin'})
    expect(result).toEqual(expected);
  });

  test('returns correct object for server non-admin access', () => {
    const result = setScopes.forServer.setAccess.toNonAdmin.makeObject();
    const expected = scopesSetter('server', {access:'non-admin'})
    expect(result).toEqual(expected);
  });
  // client scopes testing 
  test('returns correct object for server admin access', () => {
    const result = setScopes.forClient.setPlan.toFree.makeObject();
    const expected = scopesSetter('client', {plan:'free'})
    expect(result).toEqual(expected);
  });

  test('returns correct object for server non-admin access', () => {
    const result = setScopes.forClient.setPlan.toHobby.makeObject();
    const expected = scopesSetter('client', {plan:'hobby'})
    expect(result).toEqual(expected);
  });

  test('returns correct object for server non-admin access', () => {
    const result = setScopes.forClient.setPlan.toPro.makeObject();
    const expected = scopesSetter('client', {plan:'pro'})
    expect(result).toEqual(expected);
  });


});
