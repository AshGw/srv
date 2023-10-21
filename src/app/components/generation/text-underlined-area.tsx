'use client';
import React , {useState}from 'react';
import { Textarea } from '@nextui-org/react';
import { Button } from '../ui/button';
import { Toaster, toast } from 'sonner'


export default function PromptTextArea() {

  return (
    <div>
      <div className="conatainer">
        <div className="my-5 py-5">
          <div className="grid w-full gap-2">
            <Textarea
              variant="underlined"
              labelPlacement="outside"
              placeholder="Your prompt.."
            />{' '}
            <Button onClick={() => {toast.success('Image Generated')}} >Generate</Button>
            <Toaster richColors/>
          </div>
        </div>
      </div>
    </div>
  );
}
