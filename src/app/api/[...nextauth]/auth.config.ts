'server-only';

import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const isDevelopment = process.env.NODE_ENV === 'development';

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET as string,
  theme: {
    colorScheme: 'auto',
    logo: process.env.LOGO_URL as string,
    brandColor: '#ffffff',
    buttonText: '#000000',
  },
  providers: [
    GoogleProvider({
      clientId: isDevelopment
        ? (process.env.DEV_GOOGLE_CLIENT_ID as string)
        : (process.env.GOOGLE_CLIENT_ID as string),
      clientSecret: isDevelopment
        ? (process.env.DEV_GOOGLE_CLIENT_SECRET as string)
        : (process.env.GOOGLE_CLIENT_SECRET as string),
    }),
  ],
  debug: process.env.NEXT_ENV === 'development',
};
