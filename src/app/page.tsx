import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import MainNavBar from '@/app/components/nav/navbar';
export default function Home() {
  return (
    <div>
      <MainNavBar></MainNavBar>
    </div>
  );
}
