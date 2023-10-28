'use client';
import React, { useState } from 'react';
import { Textarea } from '@nextui-org/react';
import { Image } from '@nextui-org/react';
import { Button } from '../ui/button';
import { Toaster, toast } from 'sonner';

export default function PromptTextArea() {
  const [disable, setDisable] = useState(false);
  const [value, setValue] = React.useState('');
  const [bigPrompt, setbigPrompt] = React.useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>('');
 
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
                    toast.error("Can't generate nothing");
                    return;
                  }
                  if (value.length > 255) {
                    setbigPrompt(true);
                    toast.error(
                      "The prompt shouldn'be longer than 255 characters"
                    );
                    return;
                  }
                  toast.loading('Generating..');
                  setbigPrompt(false);
                  setDisable(true);
                  (async () => {
                    let res = await fetch('/api/generate', {
                      method: 'POST',
                      body: JSON.stringify({ value: value }),
                    });
                    console.log(res);
                    let blob = await res.blob();
                    const imageUrl = URL.createObjectURL(blob);
                    setGeneratedImage(imageUrl);
                    console.log('Image URL:', imageUrl);
                    setDisable(false);
                  })();
                } catch (error) {
                  toast.error('Oops! Something went wrong.');
                  setDisable(false);
                }
              }}
            >
              Generate
            </Button>
            {generatedImage && (
              <Image
                src={generatedImage}
                alt="Generated"
                isBlurred={disable}
                isLoading={disable}
              />
            )}
            <Toaster richColors />
          </div>
        </div>
      </div>
    </div>
  );
}
