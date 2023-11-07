'use client';
import React, { useState } from 'react';
import { Textarea } from '@nextui-org/react';
import { Image } from '@nextui-org/react';
import { Button } from '@/app/components/ui/button';
import { Toaster, toast } from 'sonner';
import { Switch } from '@nextui-org/react';
import { getImage, isBadFetch, ErrorStatusCode} from '@/app/components/generation/funcs/get-generated-image';

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
               // requesting the image from the server
               const fetchResult = await getImage(value,raw);
               if (isBadFetch(fetchResult)){
                // returning a silent error to the client  as a toast 

                toast.error('Oops! Looks like some error has occured')
                if (fetchResult.statusCode == ErrorStatusCode.BAD_FETCH) {
                  console.log(fetchResult.errorMessage)
                  setDisable(false);
                }
                if (fetchResult.statusCode == ErrorStatusCode.BAD_REQUEST) {
                  console.log(fetchResult.errorMessage)
                  setDisable(false);
                }
                if (fetchResult.statusCode == ErrorStatusCode.PROXY) {
                  console.log(fetchResult.errorMessage)
                  setDisable(false);
                }
                if (fetchResult.statusCode == ErrorStatusCode.THIRD_PARTY) {
                  console.log(fetchResult.errorMessage)
                  setDisable(false);
                }
              }  
               if (fetchResult instanceof Blob){
                  toast.success('Image generation went successful');
                  const imageUrl = URL.createObjectURL(fetchResult);
                  setGeneratedImage(imageUrl);
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
