import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

import MainNavBar from '@/app/components/nav/navbar';
import PromptSection from '@/app/components/generation/text-prompt';
import PromptTextArea from '@/app/components/randoms/text-underlined-area';

export default function Home() {
  return (
    <div>
      <MainNavBar></MainNavBar>
      <div className="flex h-screen">
        <div className="w-1/4"></div>
        <div className="w-1/2 md:w-90">
          <PromptTextArea />
        </div>
      </div>
    </div>
  );
}
