import React from 'react';
import PricingCard from '@/app/components/pages/pricing/pricing-card';
import PromptTextArea from '@/app/components/generation/text-underlined-area';

export default function Page() {
  return (
    <div>
      <div className="grid grid-cols-3">
        <div id='main' className="bg-blue col-span-3 xlg:col-span-1 2xl:w-3/4 lg:mx-32">
          <PromptTextArea></PromptTextArea>
        </div>
      </div>
    </div>
  );
}
