import "./styles/globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import SessionProvider from "@/app/components/extras/SessionProvider";
import { getServerSession } from "next-auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rovxr",
  description: "Your personalized AI art made with one word",
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
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  );
}
