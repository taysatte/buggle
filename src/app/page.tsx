import Image from "next/image";
import { TimerIcon, SunMediumIcon, Settings2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Item, ItemContent, ItemMedia } from "@/components/ui/item";
import { Separator } from "@/components/ui/separator";

const PuzzlePage = () => {
  return (
    <>
      {/* TODO: Navigation bar component with logo, daily timer, and links */}
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
          {/* TODO: Dark/light mode logic */}
          <Button
            className="cursor-pointer rounded-xl"
            size="icon"
            variant="outline"
          >
            <SunMediumIcon className="text-primary" size={30} />
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
            <AvatarImage src="https://github.com/shadcn.png" />
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
