export type CampaignType = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: number;
  goal: number;
  raised: number;
  totalBackers: number;
  startDate: Date;
  endDate: Date;
  videoUrl: string;
  country: string;
};
