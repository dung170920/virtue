"use client";
import { LINKS, PATH } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'
import ThemeSwitcher from './ThemeSwitcher';
import { usePathname } from 'next/navigation'

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className='flex flex-col gap-[30px] items-center h-full'>
      <Link href={PATH.dashboard}>
        <Image src={"/logo.svg"} alt="logo" width={52} height={52} className='size-10 max-xl:size-[52px]' />
      </Link>
      <div className="flex flex-1 flex-col items-center justify-between bg-card py-10 px-4 shadow rounded-2xl text-neutral-600">
        <ul className="flex flex-col gap-8">
          {LINKS.map((link) => {
            const isActive = pathname === link.path;
            return (
              <li key={link.name}>
                <Link href={link.path}>
                  <Button variant={isActive ? 'invert' : 'ghost'} size={'icon'}><link.icon className='size-5' /></Button>
                </Link>
              </li>
            )
          })}
        </ul>
        <ThemeSwitcher isIcon />
      </div>
    </div>
  )
}
