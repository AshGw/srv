'use client'

import React from "react";
import {Listbox, ListboxItem} from "@nextui-org/react";
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
        <ListboxItem key="new">Getting stared</ListboxItem>
        <ListboxItem key="copy">Models</ListboxItem>
        <ListboxItem key="edit">Documentation</ListboxItem>
      </Listbox>
    </ListboxWrapper>
  );
}
