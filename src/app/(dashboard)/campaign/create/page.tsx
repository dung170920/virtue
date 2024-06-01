"use client";
import { MoneyBagIcon } from "@/components/icons";
import { Button, Calendar, Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, Input, Label, Popover, PopoverContent, PopoverTrigger, Textarea } from "@/components/ui";
import { categories } from "@/constants";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { ArrowDown2, Calendar as CalendarIcon, TickCircle } from "iconsax-react";
import { useState } from "react";



export default function CreateCampaign() {
  const [value, setValue] = useState<number>(-1);
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();

  return (
    <div className="p-10 bg-card rounded-xl shadow flex flex-col gap-10 items-center">
      <h1 className="py-5 px-14 bg-border text-muted-foreground w-fit mx-auto text-2xl font-bold rounded-xl">Start a Campaign 🚀</h1>
      <div className="flex flex-col gap-6 w-full">
        <div className="flex gap-11">
          <div className="flex-1 grid gap-2">
            <Label htmlFor="title">Title *</Label>
            <Input type="text" id="title" placeholder="Write a title" />
          </div>
          <div className="flex-1 grid gap-2">
            <Label htmlFor="category">Category *</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  className="w-full justify-between"
                >
                  {value > 0
                    ? categories.find((category) => category.value === value)?.label
                    : "Select a category"}
                  <ArrowDown2 className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandInput placeholder="Search category..." />
                  <CommandList>
                    <CommandEmpty>No category found.</CommandEmpty>

                    <CommandGroup>
                      {categories.map((category) => (
                        <CommandItem
                          key={category.value}
                          value={category.value.toString()}
                          className="cursor-pointer"
                          onSelect={(currentValue) => {
                            setValue(Number(currentValue) === value ? -1 : Number(currentValue));
                          }}
                        >
                          <TickCircle
                            className={cn(
                              "mr-2 h-4 w-4",
                              value === category.value ? "opacity-100" : "opacity-0"
                            )}
                          />
                          {category.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>

                </Command>
              </PopoverContent>
            </Popover>

          </div>
        </div>
        <div className="grid w-full gap-2">
          <Label htmlFor="description">Description *</Label>
          <Textarea placeholder="Write a description" id="description" />
        </div>
        <div className="grid w-full gap-2">
          <Label htmlFor="image">Image *</Label>
          <Input id="image" type="file" multiple />
        </div>
      </div>
      <div className="w-full flex justify-start items-center py-10 px-11 bg-secondary h-[120px] rounded-xl text-white">
        <MoneyBagIcon className="w-10 h-10" />
        <h4 className="font-bold text-2xl ml-5">You will get 90% of total raised</h4>
      </div>
      <div className="flex flex-col gap-6 w-full">
        <div className="flex gap-11">
          <div className="flex-1 grid gap-2">
            <Label htmlFor="goal">Goal *</Label>
            <Input type="number" id="goal" placeholder="$0.00 USD" />
          </div>
          <div className="flex-1 grid gap-2">
            <Label htmlFor="rasied">Raised Amount *</Label>
            <Input type="number" id="rasied" placeholder="$0.00 USD" />
          </div>
        </div>
        <div className="flex gap-11">
          <div className="flex-1 grid w-full gap-2">
            <Label htmlFor="prefilled">Amount Prefilled</Label>
            <Input type="number" id="prefilled" placeholder="$0.00 USD" />
            <span className="text-sm text-neutral-500">It will help fill amount box by click, place each amount by comma, ex: <b>10,20,30,40</b></span>
          </div>
          <div className="flex-1 grid w-full gap-2">
            <Label htmlFor="video">Video</Label>
            <Input type="url" id="video" placeholder="Video" />
            <span className="text-sm text-neutral-500">Place Youtube or Vimeo Video URL</span>
          </div>
        </div>
        <div className="flex gap-11">
          <div className="flex-1 grid gap-2">
            <Label htmlFor="method">Campaign End Method</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  className="w-full justify-between"
                >
                  Select one
                  <ArrowDown2 className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandInput placeholder="Search method..." />
                  <CommandList>
                    <CommandEmpty>No method found.</CommandEmpty>
                  </CommandList>

                </Command>
              </PopoverContent>
            </Popover>
          </div>
          <div className="flex-1 grid gap-2">
            <Label htmlFor="category">Country</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  className="w-full justify-between"
                >
                  Select a country
                  <ArrowDown2 className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandInput placeholder="Search language..." />
                  <CommandList>
                    <CommandEmpty>No country found.</CommandEmpty>
                  </CommandList>

                </Command>
              </PopoverContent>
            </Popover>

          </div>
        </div>
        <div className="flex gap-11">
          <div className="flex-1 grid gap-2">
            <Label htmlFor="startDate">Start Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "justify-start text-left font-normal",
                    !startDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {startDate ? format(startDate, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={startDate}
                  onSelect={setStartDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="flex-1 grid gap-2">
            <Label htmlFor="endDate">End Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "justify-start text-left font-normal",
                    !endDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {endDate ? format(endDate, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={endDate}
                  onSelect={setEndDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
      <div className="">
        <Button>Submit new campaign</Button>
      </div>

    </div>
  );
}