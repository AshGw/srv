'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LogoLight from '@/../public/assets/logo-for-light-mode.png';
import { useTheme } from 'next-themes';

import env from '@/lib/env';

const logoSourceLight = LogoLight;
const logoSourceDark = env.public.URLs.LOGO_DARK
function Logo() {
  const { theme } = useTheme();

  return (
    <div className="flex items-center justify-center m-5 p-5">
      <Link href={'/'}>
        <Image
          src={theme === 'light' ? logoSourceLight : logoSourceDark}
          alt="LOGO"
          width={40}
          height={40}
        />
      </Link>
    </div>
  );
}

export default Logo;
