import React from 'react'
import { Progress } from './ui';
import { Folder } from 'iconsax-react';
import Image from 'next/image';
import { CampaignType } from '@/types';

type Props = {
  isHorizontal?: boolean;
  campaign: CampaignType
}

const Campaign = ({ isHorizontal = false, campaign }: Props) => {
  return <>
    {
      !isHorizontal ? (
        <div className="overflow-hidden rounded-xl w-[288px] bg-card">
          <Image
            src={campaign.images[0]}
            alt=""
            className="aspect-video h-auto w-full object-cover rounded-xl"
            width={1000}
            height={1000}
          />
          <div className="px-5 py-4 flex flex-col gap-4 flex-1">
            <span className="flex items-center gap-2 text-xs font-medium text-neutral-500">
              <Folder />
              {campaign.category}
            </span>
            <h3 className="font-semibold">{campaign.title}</h3>
            <p className="text-xs text-neutral-500">{campaign.description}</p>
            <div className="flex justify-between">
              <div className="flex flex-col gap-2 text-neutral-400 text-xs">
                <span className="text-sm font-semibold text-foreground">${campaign.raised}</span>
                <span>Raised of ${campaign.goal}</span>
              </div>
              <div className="flex flex-col gap-2 text-neutral-400 text-xs">
                <span className="text-sm font-semibold text-foreground">{campaign.totalBackers}</span>
                <span>Total backers</span>
              </div>
            </div>
          </div>

        </div>
      ) : (
        <div className="flex gap-[30px] items-center">
          <div className="flex-1 rounded-3xl overflow-hidden">
            <Image src={"https://images.unsplash.com/photo-1714138667579-d085b8bf1d2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D"} width={1000} height={1000} alt="" className="aspect-video h-auto w-full object-cover" />
          </div>
          <div className="flex flex-col gap-4 flex-1">
            <span className="flex items-center gap-2 text-sm font-medium text-neutral-500">
              <Folder />
              Architecture
            </span>
            <h3 className="text-xl font-bold">Remake - We Make architecture exhibition</h3>
            <p className="text-sm text-neutral-500">Remake - We Make: an exhibition about architecture's social agency in the face of urbanisation</p>
            <Progress value={60} className="h-[5px]" />
            <div className="flex justify-between">
              <div className="flex flex-col gap-2 text-neutral-400">
                <span className="text-xl font-bold text-foreground">$2,000</span>
                <span>Raised of $2,500</span>
              </div>
              <div className="flex flex-col gap-2 text-neutral-400">
                <span className="text-xl font-bold text-foreground">173</span>
                <span>Total backers</span>
              </div>
              <div className="flex flex-col gap-2 text-neutral-400">
                <span className="text-xl font-bold text-foreground">30</span>
                <span>Days left</span>
              </div>
            </div>
          </div>
        </div>
      )}
  </>
}

export default Campaign