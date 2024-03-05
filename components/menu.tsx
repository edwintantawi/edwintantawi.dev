'use client';

import * as React from 'react';
import Link from 'next/link';

import { Icons } from '~/components/icons';
import { Button } from '~/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/components/ui/dialog';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '~/components/ui/drawer';
import { siteConfig } from '~/configs/site';
import { contacts } from '~/contents/contacts';
import { useMediaQuery } from '~/hooks/use-media-query';

const TITLE = 'Explore All Parts Of Me';
const DESCRIPTION = 'Get to know more about me and my work';

export function Menu() {
  const isDialogMode = useMediaQuery('(min-width: 640px)');

  const navigationList = siteConfig.navigations.map((navigation) => {
    return (
      <li key={navigation.title}>
        <Button asChild variant="outline" className="h-20 w-full">
          {/* TODO: replace href with actual url */}
          <Link href="#">{navigation.title}</Link>
        </Button>
      </li>
    );
  });

  const contactList = contacts.map((contact) => {
    return (
      <li key={contact.title}>
        <Button asChild size="icon" variant="ghost">
          <a href={contact.url} target="_blank">
            <contact.Icon />
            <span className="sr-only">{contact.title}</span>
          </a>
        </Button>
      </li>
    );
  });

  if (isDialogMode) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button size="icon" variant="outline">
            <Icons.Menu />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{TITLE}</DialogTitle>
            <DialogDescription>{DESCRIPTION}</DialogDescription>
          </DialogHeader>

          <div className="py-2">
            <ul className="grid grid-cols-2 gap-2 text-sm">{navigationList}</ul>
          </div>

          <ul className="flex justify-between gap-2">{contactList}</ul>

          <DialogFooter>
            <Button asChild size="lg" variant="outline" className="w-full">
              <DialogClose>Back</DialogClose>
            </Button>
            <Button asChild size="lg" className="w-full">
              <Link href="#">Get in touch</Link>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button size="icon" variant="outline">
          <Icons.Menu />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>{TITLE}</DrawerTitle>
            <DrawerDescription>{DESCRIPTION}</DrawerDescription>
          </DrawerHeader>

          <div className="px-4 py-2">
            <ul className="grid grid-cols-2 gap-2 text-sm">{navigationList}</ul>
          </div>

          <DrawerFooter>
            <ul className="flex justify-between gap-2">{contactList}</ul>

            <Button asChild size="lg">
              <Link href="#">Get in touch</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <DrawerClose>Back</DrawerClose>
            </Button>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
