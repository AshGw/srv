export type Plan = 'free' | 'hobby' | 'pro'; 

export interface ClientPlans {
  plan: Plan
}

export interface ServerAccess {
  access?: 'admin' | 'non-admin';
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
