import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

import MainNavBar from '@/app/components/nav/navbar';
import PromptSection from '@/app/components/generation/text-prompt';
export default function Home() {
  return (
    <div>
      <MainNavBar></MainNavBar>
      <PromptSection></PromptSection>
    </div>
  );
}
