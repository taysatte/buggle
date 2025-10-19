"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { TimerIcon, SunMediumIcon, MoonIcon, SettingsIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Item, ItemContent, ItemMedia } from "@/components/ui/item";
import { Separator } from "@/components/ui/separator";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const activeTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => setMounted(true), []);

  const handleModeSwitch = () => {
    const current =
      activeTheme ?? (theme === "system" ? systemTheme : theme) ?? "light";
    const next = current === "dark" ? "light" : "dark";
    setTheme(next);
  };

  return (
    <nav className="px-4 flex flex-row items-center h-[64px] w-full border-b border-border">
      <div className="flex-1 flex justify-start h-full">
        <Image
          src="/svgs/buggle-bug-logo.svg"
          alt="Buggle Bug Logo"
          width={38}
          height={38}
        />
      </div>

      <div className="flex-1 flex items-center justify-center h-full">
        <Item variant="outline" className="px-4 py-1 rounded-2xl bg-card">
          <ItemMedia>
            <TimerIcon className="text-primary" size={22} />
          </ItemMedia>
          <ItemContent>
            <h1 className="text-lg text-foreground font-bold font-mono">
              23:43:02
            </h1>
          </ItemContent>
        </Item>
      </div>

      <div className="flex-1 flex gap-4 justify-end items-center h-full">
        <div className="flex flex-1 gap-2 justify-end items-center h-full">
          <Button
            className="cursor-pointer rounded-xl relative p-0 flex items-center justify-center"
            size="icon"
            variant="outline"
            onClick={handleModeSwitch}
            aria-label="Toggle theme"
          >
            {!mounted ? (
              <span className="w-6 h-6" />
            ) : (
              <>
                <SunMediumIcon
                  className={
                    activeTheme === "dark"
                      ? "inline-block text-primary"
                      : "hidden text-primary"
                  }
                  aria-hidden
                  size={30}
                />
                <MoonIcon
                  className={
                    activeTheme === "dark"
                      ? "hidden text-primary"
                      : "inline-block text-primary"
                  }
                  aria-hidden
                  size={30}
                />
              </>
            )}
          </Button>

          <Button
            className="cursor-pointer rounded-xl"
            size="icon"
            variant="outline"
          >
            <SettingsIcon className="text-primary" />
          </Button>
        </div>

        <div className="h-6">
          <Separator orientation="vertical" decorative />
        </div>

        <Avatar>
          <AvatarImage src="https://avatar.iran.liara.run/public" />
          <AvatarFallback>BG</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
}
