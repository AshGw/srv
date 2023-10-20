'use client'
import React from "react";
import { Textarea } from "@nextui-org/react";

export default function PromptTextArea() {

  return (
    <div className="w-full grid grid-cols-12 gap-4">
        <Textarea
          variant="underlined"
          labelPlacement="outside"
          placeholder="Your prompt.."
          className="col-span-12 md:col-span-6 mb-6 md:mb-0"
        />
    </div>
  );
}
