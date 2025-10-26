"use client";

import Image from "next/image";
import { TimerIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Item, ItemContent, ItemMedia } from "@/components/ui/item";
import { Separator } from "@/components/ui/separator";

export default function Navbar() {
  return (
    <nav className="px-4 flex flex-row items-center h-[64px] w-full pt-2">
      <div className="flex-1 flex justify-start h-full">
        <Image
          src="/svgs/buggle-bug-logo.svg"
          alt="Buggle Bug Logo"
          width={0}
          height={0}
          className="w-[38px] h-auto"
        />
      </div>
      {/* TODO: Timer component */}
      <div className="flex-1 flex items-center justify-center h-full">
        <Item
          variant="default"
          className="px-4 py-1.5 rounded-2xl border border-border bg-card shadow-sm"
        >
          <ItemMedia>
            <TimerIcon className="text-primary" size={18} />
          </ItemMedia>
          <ItemContent>
            <h1 className="text-lg text-foreground font-bold font-mono">
              23:43:02
            </h1>
          </ItemContent>
        </Item>
      </div>
      <div className="flex-1 flex gap-4 justify-end items-center h-full">
        <div className="flex flex-1 gap-2 justify-end items-center h-full"></div>
        {/* TODO: Implement user settings */}
        <div className="h-6">
          <Separator orientation="vertical" decorative />
        </div>
        <Avatar className="ml-2">
          <AvatarImage src="https://avatar.iran.liara.run/public" />
          <AvatarFallback>BG</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
}
