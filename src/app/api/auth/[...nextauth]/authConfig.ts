'server-only';

import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { addUserIfNotExists } from '@/lib/funcs/database/user/operations';
import env from '@/lib/env';

const isDevelopment = process.env.NODE_ENV === 'development';

export const authOptions: NextAuthOptions = {
  secret: env.prod.NEXTAUTH_SECRET,
  theme: {
    colorScheme: 'auto',
    logo: env.public.URLs.LOGO,
    brandColor: '#ffffff',
    buttonText: '#000000',
  },
  providers: [
    GoogleProvider({
      clientId: isDevelopment
        ? env.dev.GOOGLE_CLIENT_ID
        : env.prod.GOOGLE_CLIENT_ID,
      clientSecret: isDevelopment
        ? env.dev.GOOGLE_CLIENT_SECRET
        : env.prod.GOOGLE_CLIENT_SECRET,
    }),
  ],
  debug: isDevelopment,
  callbacks: {
    async signIn({ profile }) {
      if (profile && profile.email) {
        await addUserIfNotExists(profile.email as string);
      }
      return true;
    },
  },
};
