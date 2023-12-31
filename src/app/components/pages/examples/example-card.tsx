'use client';

import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from '@nextui-org/react';

export default function ExampleCard() {
  // Conatining div  className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8"

  return (
    <div>
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-5"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Astronaut
          </p>
          <h4 className="text-black font-medium text-2xl"></h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src="https://github-production-user-asset-6210df.s3.amazonaws.com/126174609/276966879-488c55ad-6dc0-439e-a03d-a49110226189.jpg"
        />
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="opacity-75  font-bold">Stable Diffusion V1.5L</p>
          </div>
          <Button
            className="opacity-75  font-medium"
            color="primary"
            radius="full"
            size="sm"
          >
            Checkout
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
