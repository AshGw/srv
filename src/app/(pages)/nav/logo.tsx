'use client'
import React from 'react';
import Image from 'next/image';
import LogoLight from '@/../public/assets/logo-for-light-mode.png';
import { useTheme } from 'next-themes';

const logoSourceLight = LogoLight;
const logoSourceDark = "https://github-production-user-asset-6210df.s3.amazonaws.com/126174609/275323996-cf3911ab-d85a-43b1-95cd-4dd96e247db1.png";

function Logo() {
    const { theme } = useTheme();

    return (
        <div className="flex items-center justify-center m-5 p-5">
            <Image
                src={theme === 'light' ? logoSourceLight : logoSourceDark}
                alt="LOGO"
                width={45}
                height={45}
            />
        </div>
    );
}

export default Logo;
