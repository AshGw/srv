import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import { NavHoverable } from '@/app/components/nav/min-nav';
import FullNavbarMenue from '@/app/components/nav/navbar';
export default function Home() {
  return (
    <div>
      <FullNavbarMenue mt-5></FullNavbarMenue>
      <div m-5 p-5></div>
      <NavHoverable></NavHoverable>
    </div>
  );
}
