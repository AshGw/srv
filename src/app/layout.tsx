import './styles/globals.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { ThemeProvider } from '@/app/components/providers/theme-provider';
import { NextUIProv } from './components/providers/next-ui-provider';
import { getServerSession } from 'next-auth';
import SessionProvider from '@/app/components/providers/session-provider';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rovxr',
  description: 'Your personalized AI art made with one word',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        ><NextUIProv>
          <SessionProvider session={session}>{children}</SessionProvider>
          </NextUIProv>
        </ThemeProvider>
      </body>
    </html>
  );
}
