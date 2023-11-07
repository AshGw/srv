import env from '@/lib/env';

test('Environment variables should actually load', async () => {
  // production environment variables

  expect(env.prod.GOOGLE_CLIENT_ID).toBeDefined();
  expect(env.prod.GOOGLE_CLIENT_SECRET).toBeDefined();
  expect(env.prod.MONGO_DB_PASSWORD).toBeDefined();
  expect(env.prod.MONGO_DB_USERNAME).toBeDefined();
  expect(env.prod.MONGO_DB_URL).toBeDefined();
  expect(env.prod.NEXTAUTH_SECRET).toBeDefined();
  expect(env.prod.NEXTAUTH_URL).toBeDefined();

  // development environment variables

  expect(env.dev.GOOGLE_CLIENT_ID).toBeDefined();
  expect(env.dev.GOOGLE_CLIENT_SECRET).toBeDefined();
  expect(env.dev.PUBLIC_DEV_URL).toBeDefined();

  // public environment variables

  expect(env.public.ClientTestTokens.FREE).toBeDefined();
  expect(env.public.NEXT_PUBLIC_URL).toBeDefined();
  expect(env.public.NODE_ENV).toBeDefined();
  expect(env.public.URLs.LOGO).toBeDefined();
  expect(env.public.URLs.MCS).toBeDefined();
  expect(env.public.URLs.SITE).toBeDefined();

  // shared environment variables

  expect(env.shared.GENERATE_SOURCEMAP).toBeDefined();
});
