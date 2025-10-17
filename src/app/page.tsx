import Image from "next/image";
import { SunMediumIcon, Settings2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
          <h1 className="text-xl font-bold font-mono">23:43:02</h1>
        </div>
        <div className="flex-1 flex gap-3 justify-end items-center h-full">
          {/* TODO: Dark/light mode logic */}
          <Button
            className="cursor-pointer rounded-xl"
            size="icon"
            variant="outline"
          >
            <SunMediumIcon className="text-foreground" size={30} />
          </Button>
          {/* TODO: Implement settings */}
          <Button
            className="cursor-pointer rounded-xl"
            size="icon"
            variant="outline"
          >
            <Settings2Icon size={30} />
          </Button>
          {/* TODO: User profile dropdown */}
          <Avatar className="ml-2">
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
