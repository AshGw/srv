import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/app/components/ui/accordion';

import { Button } from './components/ui/button';
import { ModeToggle } from './components/reusables/theme-mode-toggler';

function page() {
  return (
    <div>
      <div className="flex justify-center items-center">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Button>subsnine</Button>
      <ModeToggle></ModeToggle>
    </div>
    </div>

  );
}

export default page;
