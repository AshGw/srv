'use client';
import React, { useState } from 'react';
import { Textarea } from '@nextui-org/react';
import { Image } from '@nextui-org/react';
import { Button } from '../ui/button';
import { Toaster, toast } from 'sonner';
import { Switch } from '@nextui-org/react';
import Public from '@/../public/consts';

export default function PromptTextArea() {
  const [disable, setDisable] = useState(false);
  const [value, setValue] = React.useState('');
  const [bigPrompt, setbigPrompt] = useState(false);
  const [raw, setRaw] = useState(true);
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
                    "The prompt shouldn't be longer than 255 characters"
                  );
                  return;
                }
                toast.loading('Generating..');
                setbigPrompt(false);
                setDisable(true);
                try {
                  let res = await fetch(
                    Public.URLs.MCS_URL + `/generate/free/?enhance=${!raw}`,
                    {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                        Authorization: 'Bearer ' + Public.ClientTestTokens.free, // do not forget the spacing
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
                  isSelected={raw}
                  onValueChange={setRaw}
                >
                  Raw
                </Switch>
                <p className=" hidden text-small text-default-500 ">
                  Will run the prompts as is and won&apos;t add additional words
                  : {raw ? 'true' : 'false'}
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
