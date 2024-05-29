"use client";
import React, { useEffect, useState } from 'react'
import { Button, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, Popover, PopoverContent, PopoverTrigger, Separator } from '../ui'
import { ArrowDown2, Check, HambergerMenu, Logout } from 'iconsax-react'
import { LINKS, PATH } from '@/constants';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import ThemeSwitcher from './ThemeSwitcher';
import { cn } from '@/lib/utils';


const categories = [
  { label: "Art", value: "Art" },
  { label: "Comics", value: "Comics" },
  { label: "Crafts", value: "Crafts" },
  { label: "Dance", value: "Dance" },
  { label: "Design", value: "Design" },
  { label: "Fashion", value: "Fashion" },
  { label: "Film", value: "Film" },
  { label: "Food", value: "Food" },
  { label: "Games", value: "Games" },
  { label: "Journalism", value: "Journalism" },
  { label: "Music", value: "Music" },
  { label: "Photography", value: "Photography" },
  { label: "Technology", value: "Technology" },
  { label: "Theater", value: "Theater" },
];

const MobileLink = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const pathname = usePathname();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant={"ghost"} size={"icon"}>
          <HambergerMenu />
        </Button>
      </PopoverTrigger>
      <PopoverContent align='start' className='p-0'>
        <div className="px-5 pt-6">
          <Link href={PATH.dashboard}>
            <Image src={"/logo.svg"} alt="logo" width={52} height={52} className='size-9' />
          </Link>
        </div>
        <Separator className='my-5' />
        <ul className="flex flex-col gap-4 text-neutral-600 mb-6">
          {LINKS.map((link) => {
            const isActive = pathname === link.path;
            return (
              <li key={link.name}>
                <Link href={link.path}>
                  <Button variant={isActive ? 'invert' : 'ghost'} className='h-12 w-full justify-start rounded-none '>
                    <link.icon className='size-5 mr-5' />
                    <p>{link.name}</p>
                  </Button>
                </Link>
              </li>
            )
          })}
          <li>
            <Button variant={'ghost'} className='h-12 w-full justify-start rounded-none'>
              <Logout className='size-5 mr-5' />
              <p>Logout</p>
            </Button>
          </li>
          <li>
            <ThemeSwitcher className='h-12 w-full justify-start rounded-none' />
          </li>
        </ul>
        <div className="px-5 pb-6">
          <Link href={PATH.createCampaign}>
            <Button variant={"secondary"}>Start a campaign</Button>
          </Link>
        </div>
      </PopoverContent>
    </Popover>

  )
}

export default MobileLink