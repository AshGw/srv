import React from 'react';
import { Check, X } from 'lucide-react';
import { Button } from '../../ui/button';

export default function PricingCard() {
  return (
    <div>
      <div className="divide-y rounded-md border border-primary shadow-sm">
        <div className="p-6 sm:px-8">
          <h2 className="text-lg font-medium">
            FREE
            <span className="sr-only">Plan</span>
          </h2>

          <p className="mt-2 text-primary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <p className="mt-2 sm:mt-4">
            <strong className="text-3xl font-bold text-primary sm:text-4xl">
              $0
            </strong>

            <span className="text-sm font-medium text-primary">/month</span>
          </p>
          <Button disabled={true} className="mt-4 block w-full">
            Active
          </Button>
        </div>

        <div className="p-6 sm:px-8">
          <p className="text-lg font-medium text-primary-900 sm:text-xl">
            You will get:
          </p>
          <ul className="mt-2 space-y-2 sm:mt-4">
            <li className="flex items-center gap-1">
              <Check></Check>
              <span className="text-primary ml-1">
                100 Points of free Credits per Month
              </span>
            </li>
            <li className="flex items-center gap-1">
              <Check></Check>
              <span className="text-primary ml-1">
                High Resolution Generation
              </span>
            </li>
            <li className="flex items-center gap-1">
              <X></X>
              <span className="text-primary ml-1">Access to ALL AI Models</span>
            </li>
            <li className="flex items-center gap-1">
              <X></X>
              <span className="text-primary ml-1">API Access</span>
            </li>
            <li className="flex items-center gap-1">
              <X></X>
              <span className="text-primary ml-1">Priority Support</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
