import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { BugIcon, Settings2, SunMoon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="h-[64px] px-6 w-full flex items-center justify-between text-foreground">
        <div className="flex items-center justify-start text-2xl font-bold font-mono-default">
          <div className="flex gap-4 w-[152px] items-center">
            <Link href={"/"}>
              <BugIcon
                size={24}
                className="text-primary hover:text-primary/75 ease-in-out transition-colors duration-200"
              />
            </Link>
          </div>
        </div>
        {/** TODO: add countdown component */}
        <span className="items-center justify-center text-primary font-normal text-xl font-mono-default">
          {"[ 00:00:00 ]"}
        </span>
        <div className="flex items-center justify-end gap-4">
          <Button
            variant={"ghost"}
            size={"icon"}
            className="rounded-full cursor-pointer h-11 w-11"
          >
            <SunMoon size={24} className="text-primary" />
          </Button>
          <Button
            variant={"ghost"}
            size={"icon"}
            className="rounded-full cursor-pointer h-11 w-11"
          >
            <Settings2 size={24} className="text-primary" />
          </Button>
          <Avatar className="cursor-pointer">
            <AvatarImage src="https://robohash.org/bug-robot.png?set=set3"></AvatarImage>
            <AvatarFallback className="font-mono-default font-medium">
              BG
            </AvatarFallback>
          </Avatar>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
