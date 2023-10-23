'use client';
import React, { useState } from 'react';
import { Textarea } from '@nextui-org/react';
import { Button } from '../ui/button';
import { Toaster, toast } from 'sonner';

export default function PromptTextArea() {

  const [disable, setDisable] = useState(false);
  const [value, setValue] = React.useState("");
  const [bigPrompt, setbigPrompt] = React.useState(false);


  return (
    <div>
      <div className="conatainer">
        <div className="my-5 py-5">
          <div className="grid w-full gap-2">
            <Textarea
              isInvalid={bigPrompt}
              variant="underlined"
              labelPlacement="outside"
              placeholder="Your prompt.."
              isDisabled={disable}
              value={value}
              onValueChange={setValue}
            />{' '}
            <Button
            disabled={disable}
              onClick={async () => {
                try {
                  if (!value) {
                    toast.error("Can't generate nothing")
                    return;}
                  if (value.length > 255){
                    setbigPrompt(true);
                    toast.error("The prompt shouldn'be longer than 255 characters")
                    return;
                  }
                  setbigPrompt(false);
                  setDisable(true);
                  toast('Spinning containers..');
                  await new Promise(resolve => setTimeout(resolve, 2000));
                  toast.success('Image Generated with: ' + value);

                } catch (error) {
                  console.error('Error fetching data:', error);
                } finally {
                  // Don't forget setDisable is called to re-enable the button
                  setDisable(false);
                }
  }}
>
  Generate
</Button>

            <Toaster richColors />
          </div>
        </div>
      </div>
    </div>
  );
}
