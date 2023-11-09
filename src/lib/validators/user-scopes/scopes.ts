export type Plan = 'free' | 'hobby' | 'pro';
export type Access = 'admin' | 'non-admin';

export interface ClientPlans {
  plan: Plan;
}

export interface ServerAccess {
  access: Access;
}

export interface UserMapper {
  server: ServerAccess;
  client: ClientPlans;
}

export function scopesSetter<SpecialScope extends keyof UserMapper>(
  e: SpecialScope,
  data: UserMapper[SpecialScope]
): Record<SpecialScope, UserMapper[SpecialScope]> {
  return { [e]: data } as Record<SpecialScope, UserMapper[SpecialScope]>;
}
