import Image from "next/image";
import { SunMediumIcon, Settings2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const PuzzlePage = () => {
  return (
    <>
      {/* TODO: Navigation bar component with logo, daily timer, and links */}
      <nav className="px-6 flex flex-row items-center h-[55px] w-full border-b-1">
        <div className="flex-1 flex justify-start h-full">
          <Image
            src="/svgs/buggle-bug-logo.svg"
            alt="Buggle Bug Logo"
            width={34}
            height={34}
          />
        </div>
        {/* TODO: Countdown component */}
        <div className="flex-1 flex items-center justify-center h-full">
          <h1 className="text-2xl font-bold">00:00:00</h1>
        </div>
        <div className="flex-1 flex gap-2 justify-end items-center">
          <Button className="cursor-pointer" size="icon" variant="outline">
            <SunMediumIcon size={30} />
          </Button>
          <Button className="cursor-pointer" size="icon" variant="outline">
            <Settings2Icon size={30} />
          </Button>
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
