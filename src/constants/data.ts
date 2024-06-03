import { CampaignType } from '@/types';

export const categories = [
  { label: 'Art', value: 1 },
  { label: 'Education', value: 2 },
  { label: 'Comics', value: 3 },
  { label: 'Real Estate', value: 4 },
  { label: 'Design', value: 5 },
  { label: 'Fashion', value: 6 },
  { label: 'Film', value: 7 },
  { label: 'Food', value: 8 },
  { label: 'Games', value: 9 },
  { label: 'Journalism', value: 10 },
  { label: 'Music', value: 11 },
  { label: 'Photography', value: 12 },
  { label: 'Technology', value: 13 },
  { label: 'Theater', value: 14 }
];

export const popularCampaigns: CampaignType[] = [
  {
    id: 1,
    category: 2,
    title: 'Powered Kits Learning Boxes',
    country: 'USA',
    totalBackers: 173,
    description: 'Fun, durable and reusable boxes with eco-friendly options.',
    image:
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    goal: 2000,
    raised: 1900,
    startDate: new Date(),
    endDate: new Date(),
    videoUrl: ''
  },
  {
    id: 2,
    category: 4,
    title: 'Building Hope Village',
    country: 'USA',
    totalBackers: 50,
    description: 'Together we can create access for everyone!',
    image:
      'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9tZXxlbnwwfHwwfHx8MA%3D%3D',
    goal: 2500,
    raised: 2200,
    startDate: new Date(),
    endDate: new Date(),
    videoUrl: ''
  },
  {
    id: 3,
    category: 13,
    title: 'New iMac For My Business!',
    country: 'USA',
    totalBackers: 12,
    description: 'My computer decided to die. As a result, my small business.',
    image:
      'https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW1hY3xlbnwwfHwwfHx8MA%3D%3D',
    goal: 1800,
    raised: 1200,
    startDate: new Date(),
    endDate: new Date(),
    videoUrl: ''
  },
  {
    id: 4,
    category: 5,
    title: "The Watchman's Chairs",
    country: 'USA',
    totalBackers: 100,
    description:
      'Your home for indie and classic cinema has just been handed an...',
    image:
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhaXJ8ZW58MHx8MHx8fDA%3D',
    goal: 10900,
    raised: 5000,
    startDate: new Date(),
    endDate: new Date(),
    videoUrl: ''
  }
];
export const recentCampaigns: CampaignType[] = [
  {
    id: 5,
    category: 13,
    title: 'Advanced 4K Action Camera',
    country: 'USA',
    totalBackers: 12,
    description: 'THE SV RIG. - Start Creating Now Without Limitation.',
    image:
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtZXJhfGVufDB8fDB8fHww',
    goal: 1100,
    raised: 500,
    startDate: new Date(),
    endDate: new Date(),
    videoUrl: ''
  },
  {
    id: 6,
    category: 8,
    title: 'Resturants Open Business',
    country: 'USA',
    totalBackers: 50,
    description:
      'A unique restaurant, bar, beer garden, and tailgating location',
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D',
    goal: 1200,
    raised: 950,
    startDate: new Date(),
    endDate: new Date(),
    videoUrl: ''
  },
  {
    id: 7,
    category: 3,
    title: '“Lost Soul” graphic novel',
    country: 'USA',
    totalBackers: 5,
    description: 'A team of ex-superheroes attempt to save a "monster"',
    image:
      'https://images.unsplash.com/photo-1615928081877-3885aba162ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bm92ZWx8ZW58MHx8MHx8fDA%3D',
    goal: 1900,
    raised: 1800,
    startDate: new Date(),
    endDate: new Date(),
    videoUrl: ''
  },
  {
    id: 8,
    category: 6,
    title: 'Cool Comfy Shoes easy on You',
    country: 'USA',
    totalBackers: 100,
    description: 'A new category of super comfortable casual shoes.',
    image:
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXN8ZW58MHx8MHx8fDA%3D',
    goal: 5000,
    raised: 4000,
    startDate: new Date(),
    endDate: new Date(),
    videoUrl: ''
  }
];
