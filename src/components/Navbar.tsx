import { BugIcon, Settings2, Sun, SunMoon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="h-[64px] px-6 w-full flex items-center justify-between text-foreground">
        <div className="flex items-center justify-start text-2xl font-bold font-mono-default">
          <Link href={"/"}>
            <div className="flex gap-4 w-[104px] items-center">
              <BugIcon
                size={24}
                className="text-primary hover:text-primary/75 ease-in-out transition-colors duration-200"
              />
            </div>
          </Link>
        </div>
        {/** TODO: add countdown component */}
        <span className="items-center justify-center text-primary/50 font-normal text-xl font-mono-default">
          {"{ 00:00:00 }"}
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
        </div>
      </nav>
    </>
  );
};

export default Navbar;
