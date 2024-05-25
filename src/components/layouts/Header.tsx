"use client";
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage, Button, Popover, PopoverContent, PopoverTrigger, Separator } from '../ui'
import { HambergerMenu, Logout, SearchNormal, SearchNormal1 } from 'iconsax-react'
import Link from 'next/link'
import { LINKS, PATH } from '@/constants'
import Image from 'next/image'
import { usePathname } from 'next/navigation';
import ThemeSwitcher from './ThemeSwitcher';

export const Header = () => {
  const pathname = usePathname();

  return (
    <nav className='flex flex-row items-center justify-between gap-4'>
      <div className="sm:hidden">
        <Popover>
          <PopoverTrigger>
            <Button variant={"ghost"} size={"icon"}><HambergerMenu /></Button>
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
          </PopoverContent>
        </Popover>
      </div>

      <div className="flex-1 flex flex-row max-w-[458px] py-2 pl-6 pr-2 h-[52px] bg-card rounded-full shadow gap-1">
        <input type="text" placeholder="Do fundrise now" className="flex w-full text-sm text-card-foreground bg-transparent outline-none" />
        <div className="w-[72px] h-full rounded-full bg-primary hover:bg-opacity-80 flex justify-center items-center cursor-pointer text-white">
          <SearchNormal1 />
        </div>
      </div>
      <div className="sm:flex hidden flex-row justify-end gap-4">
        <Button variant={"secondary"}>Start a campaign</Button>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  )
}
