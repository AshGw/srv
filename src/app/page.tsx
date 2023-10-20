import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

import MainNavBar from '@/app/components/nav/navbar';
import PromptTextArea from '@/app/components/generation/text-underlined-area';
import PricingCard from './components/pages/pricing/pricing-card';

export default function Home() {
  return (
    <div>
      <MainNavBar></MainNavBar>
      <div>
        <div>
        <div className="mx-auto container sm:max-w-xl md:max-w-3xl lg:max-w-3xl xl:max-w-3xl">
            <PromptTextArea></PromptTextArea>
          </div>
        </div>
      </div>
    </div>
  );
}
