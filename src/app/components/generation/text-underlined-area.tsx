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
  const [generatedImage, setGeneratedImage] = useState<string | null>('https://github-production-user-asset-6210df.s3.amazonaws.com/126174609/278848021-45145905-b05c-4e5a-a60d-55274e3e287a.jpg');

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
                setbigPrompt(false);
                setDisable(true);
                toast.loading('Generating..');
                try { 
                  let res = await fetch(
                    'https://jolly-still-lark.ngrok-free.app/generate',
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
                  }

                  const contentType = res.headers.get('content-type');
                  if (contentType && contentType.includes('application/json')) {
                    const data = await res.json();
                    toast.error(
                      'Data type is JSON not image go check the server'
                    );
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
                  console.log('Some error with ur code G, check yosself')
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