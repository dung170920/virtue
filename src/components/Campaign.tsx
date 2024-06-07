import React from 'react'
import { Progress } from './ui';
import { Folder } from 'iconsax-react';
import Image from 'next/image';
import { CampaignType } from '@/types';
import { categories } from '@/constants';
import { caculateProgress } from '@/lib/utils';

type Props = {
  isHorizontal?: boolean;
  campaign: CampaignType
}

const Campaign = ({ isHorizontal = false, campaign }: Props) => {
  return <>
    {
      !isHorizontal ? (
        <div className="overflow-hidden rounded-xl w-[288px] bg-card shadow-card">
          <Image
            src={campaign.image}
            alt=""
            className="aspect-video h-auto w-full object-cover rounded-xl"
            width={1000}
            height={1000}
          />
          <div className="px-5 py-4 flex flex-col gap-4 flex-1">
            <span className="flex items-center gap-2 text-xs font-medium text-neutral-500">
              <Folder className='h-5 w-5' />
              <span className='mt-1'>{categories.find(category => category.value === campaign.category)?.label}</span>
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
        <div className="flex gap-[30px] items-center flex-col lg:flex-row">
          <div className="flex-1 rounded-3xl overflow-hidden">
            <Image src={campaign.image} width={1000} height={1000} alt="" className="aspect-video h-auto w-full object-cover" />
          </div>
          <div className="flex flex-col gap-4 flex-1 w-full">
            <span className="flex items-center gap-2 text-sm font-medium text-neutral-500">
              <Folder />
              <span className='mt-1'>{categories.find(category => category.value === campaign.category)?.label}</span>
            </span>
            <h3 className="text-xl font-bold">{campaign.title}</h3>
            <p className="text-sm text-neutral-500">{campaign.description}</p>
            <Progress value={caculateProgress(campaign.goal, campaign.raised)} className="h-[5px]" />
            <div className="flex justify-between">
              <div className="flex flex-col gap-2 text-neutral-400">
                <span className="text-xl font-bold text-foreground">${campaign.raised}</span>
                <span>Raised of ${campaign.goal}</span>
              </div>
              <div className="flex flex-col gap-2 text-neutral-400">
                <span className="text-xl font-bold text-foreground">{campaign.totalBackers}</span>
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