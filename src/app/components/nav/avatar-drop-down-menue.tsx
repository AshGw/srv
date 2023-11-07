'use client';

import {
  Cloud,
  FileText,
  CreditCard,
  VenetianMask,
  ExternalLink,
  LogOut,
  Receipt,
  Settings,
  User,
  Coins,
  UserPlus,
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '@/app/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/app/components/ui/dropdown-menu';

import { signIn, signOut, useSession } from 'next-auth/react';
import { Skeleton } from '@/app/components/ui/skeleton';
import Loading from '@/app/components/reusables/loading/loading';
import { useState, useEffect } from 'react';

// Make a function to detect user actual API acces tho
// rn shit is disabled

// also upgrade button make it actually upgrade according to user

// Fix all the links G

// also setup bonus code and its testing

// account deletion and its testing

/*  Test bonus code as in you're not allowed to use ur own code 
    but be able to use other people's code   
    Test correct code geenration 
    Test  correct code disposal 
    */

export default function FullMeDropDownMenue() {
  const [imgSrc, setImgSrc] = useState(
    'https://github-production-user-asset-6210df.s3.amazonaws.com/126174609/277190495-5881e8eb-f372-4101-9850-837d99364587.png'
  );
  const [disable, setDisable] = useState(true);
  const [ctaContent, setCtaContent] = useState('Sign in');

  const { data: session } = useSession();

  const clientBuysCredits = () => {
    // pass for now
  };
  const clientSignsIn = () => {
    signIn('google');
  };

  useEffect(() => {
    if (session) {
      setDisable(false);
      setCtaContent('Get Credits');
      const image = session.user?.image as string;
      if (image !== imgSrc) {
        setImgSrc(image);
      }
    }
  }, [session, imgSrc, disable, ctaContent]);

  return (
    <div className="cursor-pointer">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar>
            <AvatarImage src={imgSrc} />
            <AvatarFallback>
              <Skeleton className="rounded-full" />
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuGroup>
            <DropdownMenuItem disabled={disable}>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <DropdownMenuShortcut className="hidden md:inline-block">
                ⇧⌘P
              </DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem disabled={disable}>
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Billing</span>
              <DropdownMenuShortcut className="hidden md:inline-block">
                ⌘B
              </DropdownMenuShortcut>
            </DropdownMenuItem>
            
            <DropdownMenuItem disabled={disable}>
              <Cloud className="mr-2 h-4 w-4" />
              <span>API</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />

          {/* 
          <DropdownMenuGroup>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <UserPlus className="mr-2 h-4 w-4" />
                <span>Invite users</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>
                    <Receipt className="mr-2 h-4 w-4" />
                    <span>Get Bonus Code</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Coins className="mr-2 h-4 w-4" />
                    <span>Use Bonus Code</span>
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />    
          */}
          <DropdownMenuItem>
            <VenetianMask className="mr-2 h-4 w-4" />
            <span>Privacy</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <FileText className="mr-2 h-4 w-4" />
            <span>Terms</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <ExternalLink className="mr-2 h-4 w-4" />
            <span>Homepage</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => signOut()} disabled={disable}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
            <DropdownMenuShortcut className="hidden md:inline-block">
              ⇧⌘Q
            </DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Button
              className="w-full"
              onClick={() => {
                if (session) {
                  clientBuysCredits();
                } else {
                  clientSignsIn();
                }
              }}
            >
              {ctaContent}
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
