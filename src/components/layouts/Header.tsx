import React from 'react'
import { Avatar, AvatarFallback, AvatarImage, Button } from '../ui'
import { SearchNormal1 } from 'iconsax-react'
import Link from 'next/link'
import { PATH } from '@/constants'
import MobileLink from './MobileLink'

export const Header = () => {

  return (
    <nav className='flex flex-row items-center justify-between gap-4'>
      <div className="sm:hidden block">
        <MobileLink />
      </div>
      <div className="flex-1 flex flex-row max-w-[458px] py-2 pl-6 pr-2 h-[52px] bg-card rounded-full shadow gap-1">
        <input type="text" placeholder="Do fundrise now" className="flex w-full text-sm text-card-foreground bg-transparent outline-none" />
        <div className="w-[72px] h-full rounded-full bg-primary hover:bg-opacity-80 flex justify-center items-center cursor-pointer text-white">
          <SearchNormal1 />
        </div>
      </div>
      <div className="sm:flex hidden flex-row justify-end gap-4">
        <Link href={PATH.createCampaign}>
          <Button variant={"secondary"}>Start a campaign</Button>
        </Link>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  )
}
