import { Input, Label, Textarea } from "@/components/ui";

export default function CreateCampaign() {
  return (
    <div className="p-10 bg-card rounded-xl shadow flex flex-col gap-10 max-w-screen-xl mx-auto">
      <h1 className="py-5 px-14 bg-border text-muted-foreground w-fit mx-auto text-2xl font-bold rounded-xl">Start a Campaign 🚀</h1>
      <div className="flex flex-col gap-6">
        <div className="flex gap-11">
          <div className="flex-1 grid gap-2">
            <Label htmlFor="title">Title *</Label>
            <Input type="text" id="title" placeholder="Write a title" />
          </div>
          <div className="flex-1 grid gap-2">
            <Label htmlFor="category">Category *</Label>

          </div>
        </div>
        <div className="grid w-full gap-2">
          <Label htmlFor="description">Description *</Label>
          <Textarea placeholder="Write a description" id="description" />
        </div>
      </div>
      <div className="w-full flex justify-start items-center p-4 bg-secondary h-[120px] rounded-xl">
        {/* <img src={money} alt="money" className="w-[40px] h-[40px] object-contain" /> */}
        <h4 className="font-bold text-2xl text-white ml-5">You will get 90% of total raised</h4>
      </div>
    </div>
  );
}