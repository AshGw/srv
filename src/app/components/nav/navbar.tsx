'use client';

import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
} from '@nextui-org/react';
import ModeToggle from '@/app/components/nav/theme-mode-toggler';
import FullMeDropDownMenue from '@/app/components/nav/avatar-drop-down-menue';
import Logo from './logo';
import SCDropDownMenue from '@/app/components/nav/sm-left-drop-down';

import { NavHoverable } from './min-nav';

export default function MainNavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header>
      <nav>
        <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
          <NavbarContent className="sm:hidden" justify="start">
            <NavbarMenuToggle
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            />
          </NavbarContent>
          <NavbarContent className="sm:hidden pr-3" justify="center">
            <NavbarBrand>
              <Logo></Logo>
            </NavbarBrand>
          </NavbarContent>

          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarBrand>
              <Logo></Logo>
            </NavbarBrand>
            <NavHoverable></NavHoverable>
          </NavbarContent>

          <NavbarContent justify="end">
            <NavbarItem className="lg:flex">
              <ModeToggle></ModeToggle>
            </NavbarItem>
            <NavbarItem>
              <FullMeDropDownMenue></FullMeDropDownMenue>
            </NavbarItem>
          </NavbarContent>
          <NavbarMenu>
            <SCDropDownMenue></SCDropDownMenue>
          </NavbarMenu>
        </Navbar>
      </nav>
    </header>
  );
}
