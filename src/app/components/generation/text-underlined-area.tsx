'use client';
import React, { useState } from 'react';
import { Textarea } from '@nextui-org/react';
import { Image } from '@nextui-org/react';
import { Button } from '../ui/button';
import { Toaster, toast } from 'sonner';
import { Switch } from '@nextui-org/react';

export default function PromptTextArea() {
  const [disable, setDisable] = useState(false);
  const [value, setValue] = React.useState('');
  const [bigPrompt, setbigPrompt] = React.useState(false);
  const [isEnhanced, setIsEnhanced] = React.useState(true);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

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
                try {
                  let res = await fetch(
                    `https://jolly-still-lark.ngrok-free.app/generate/?enhance=${isEnhanced}`,
                    {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                        Authorization:
                          'Bearer f8ae9e72a17052cee5bffb816fc724e3b9273c02e3f3483a95df4e98a9cce2b2',
                      },
                      body: JSON.stringify({ prompt: value }),
                    }
                  );

                  if (!res.ok) {
                    toast.error('Something went wrong with the server');
                    setDisable(false);
                  }

                  const contentType = res.headers.get('content-type');
                  if (contentType && contentType.includes('application/json')) {
                    const data = await res.json();
                    toast.error(
                      'Data type is JSON, not an image go check the server'
                    );
                    setDisable(false);
                  } else if (
                    contentType &&
                    contentType.includes('image/jpeg')
                  ) {
                    toast.success('Image generation went successful');

                    const blob = await res.blob();
                    const imageUrl = URL.createObjectURL(blob);
                    setGeneratedImage(imageUrl);
                    setDisable(false);
                  }
                } catch (error) {
                  console.log('Some error with ur code G, check yosself');
                  setDisable(false);
                }
              }}
            >
              Generate
            </Button>
            <div className="flex flex-col gap-2 m-2">
              <div className="flex flex-col gap-2 justify-center items-center">
                <Switch
                  defaultSelected
                  color="primary"
                  isSelected={isEnhanced}
                  onValueChange={setIsEnhanced}
                >
                  Enhance
                </Switch>
                <p className="hidden text-small text-default-500 ">
                  Recommended to be enabled for small prompts:{' '}
                  {isEnhanced ? 'true' : 'false'}
                </p>
              </div>
            </div>
            {generatedImage && (
              <Image
                src={generatedImage}
                alt="Generated"
                isBlurred={disable}
                isLoading={disable}
                isZoomed={true}
              />
            )}
            <Toaster richColors />
          </div>
        </div>
      </div>
    </div>
  );
}
