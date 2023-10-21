'use client';

import { Rocket, PackageOpen, Wand2, BrainCircuit } from 'lucide-react';

import React from 'react';
import { Listbox, ListboxItem } from '@nextui-org/react';
import { ReactNode } from 'react';

const ListboxWrapper = ({ children }: { children: ReactNode }) => (
  <div className="w-full max-w-[260px] border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
    {children}
  </div>
);

export default function SCDropDownMenue() {
  return (
    <ListboxWrapper>
      <Listbox
        aria-label="Actions"
        onAction={(key) => alert(key)} // pop a modal instead
      >
        <ListboxItem key="new">
          <div className="flex  items-center">
            <Rocket></Rocket>
            <span className="ml-2 font-normal text-xl">Getting Started</span>
          </div>
        </ListboxItem>

        <ListboxItem key="copy">
          <div className="flex items-center">
            <BrainCircuit></BrainCircuit>
            <span className="ml-2 font-normal text-xl">Models</span>
          </div>
        </ListboxItem>
        <ListboxItem key="edit">
          <div className="flex items-center">
            <Wand2></Wand2>
            <span className="ml-2 font-normal text-xl">Examples</span>
          </div>
        </ListboxItem>
      </Listbox>
    </ListboxWrapper>
  );
}
