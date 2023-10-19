import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import FullDropDownMenue from '@/app/components/reusables/full-drop-down';
import Navbar from '@/app/components/pages/home/navbar/navbar';
export default function Home() {
  return (
    <div className="container">
      <main className="p-5 m-5"></main>
      <FullDropDownMenue mt-5></FullDropDownMenue>
      <Navbar mt-5></Navbar>
    </div>
  );
}
