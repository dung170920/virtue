import Image from "next/image";

const data = {
  id: 8,
  category: 6,
  title: 'Cool Comfy Shoes easy on You',
  country: 'USA',
  totalBackers: 100,
  description: 'A new category of super comfortable casual shoes.',
  image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXN8ZW58MHx8MHx8fDA%3D',
  goal: 5000,
  raised: 4000,
  startDate: new Date(),
  endDate: new Date(),
  videoUrl: ''
}

export default function CampaignDetails() {
  return (
    <>
      <div className="w-full flex md:flex-row flex-col mt-10 gap-[30px]">
        <div className="flex-1 flex-col">
          <Image src={data.image} alt="campaign" className="w-full h-[410px] object-cover rounded-xl" />
        </div>
      </div>
    </>
  );
}