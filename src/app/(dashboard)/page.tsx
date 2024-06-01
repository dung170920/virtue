import Campaign from "@/components/Campaign";
import { popularCampaigns, recentCampaigns } from "@/constants";

export default function Dashboard() {
  return (
    <>
      <h4 className="text-lg font-semibold mb-3">Your Campaign <span className="text-secondary">(4)</span></h4>
      <Campaign isHorizontal campaign={popularCampaigns[0]} />

      <h4 className="text-lg font-semibold mb-3 mt-[30px]">Popular Campaign</h4>
      <div className="w-full overflow-x-auto">
        <div className="flex gap-[30px] w-max mb-2">
          {popularCampaigns.map(c => (
            <Campaign isHorizontal={false} campaign={c} />
          ))}
        </div>
      </div>

      <h4 className="text-lg font-semibold mb-3 mt-[30px]">Recent Campaign</h4>
      <div className="w-full overflow-x-auto">
        <div className="flex gap-[30px] w-max mb-2">
          {recentCampaigns.map(c => (
            <Campaign isHorizontal={false} campaign={c} />
          ))}
        </div>
      </div >
    </>

  );
}
