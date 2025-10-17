"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  TimerIcon,
  SunMediumIcon,
  MoonIcon,
  Settings2Icon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Item, ItemContent, ItemMedia } from "@/components/ui/item";
import { Separator } from "@/components/ui/separator";
import { useTheme } from "next-themes";

const PuzzlePage = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const activeTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => setMounted(true), []);

  const handleModeSwitch = () => {
    if (activeTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <>
      <nav className="px-4 flex flex-row items-center h-[64px] w-full">
        <div className="flex-1 flex justify-start h-full">
          <Image
            src="/svgs/buggle-bug-logo.svg"
            alt="Buggle Bug Logo"
            width={38}
            height={38}
          />
        </div>
        {/* TODO: Countdown component */}
        <div className="flex-1 flex items-center justify-center h-full">
          <Item
            variant="outline"
            className="px-4 py-1 rounded-xl bg-input/30 drop-shadow-2xl backdrop-blur-md"
          >
            <ItemMedia>
              <TimerIcon className="text-primary" size={20} />
            </ItemMedia>
            <ItemContent>
              <h1 className="text-lg text-foreground font-bold font-mono">
                23:43:02
              </h1>
            </ItemContent>
          </Item>
        </div>
        <div className="flex-1 flex gap-4 justify-end items-center h-6">
          <Button
            className="cursor-pointer rounded-xl"
            size="icon"
            variant="outline"
            onClick={() => handleModeSwitch()}
            aria-label="Toggle theme"
          >
            {/* Render both icons stacked and crossfade by toggling opacity */}
            {!mounted ? (
              <span className="w-6 h-6" />
            ) : (
              <span className="relative w-8 h-8 inline-block">
                <SunMediumIcon
                  className={`absolute inset-0 m-auto transition-all duration-300 transform ${
                    activeTheme === "dark"
                      ? "opacity-100 rotate-0 scale-100 text-primary"
                      : "opacity-0 -rotate-12 scale-75 text-primary"
                  }`}
                  size={30}
                />
                <MoonIcon
                  className={`absolute inset-0 m-auto transition-all duration-300 transform ${
                    activeTheme === "dark"
                      ? "opacity-0 rotate-12 scale-75 text-primary"
                      : "opacity-100 rotate-0 scale-100 text-primary"
                  }`}
                  size={30}
                />
              </span>
            )}
          </Button>
          {/* TODO: Implement settings */}
          <Button
            className="cursor-pointer rounded-xl"
            size="icon"
            variant="outline"
          >
            <Settings2Icon className="text-primary" size={30} />
          </Button>
          <Separator orientation="vertical" decorative />
          {/* TODO: User profile dropdown */}
          <Avatar>
            <AvatarImage src="https://avatar.iran.liara.run/public" />
            <AvatarFallback>BG</AvatarFallback>
          </Avatar>
        </div>
      </nav>

      {/* Main content area */}
      <main>
        <section>{/* TODO: Code Editor component */}</section>
        <section>{/* TODO: Puzzle description component */}</section>
      </main>
    </>
  );
};

export default PuzzlePage;
