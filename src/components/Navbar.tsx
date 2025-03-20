import { BugIcon, Settings2, Sun, SunMoon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="bg-secondary/15 border-b-1 h-[64px] px-6 w-full flex items-center justify-between text-foreground">
        <div className="flex items-center justify-start text-2xl font-bold font-mono-default">
          <Link href={"/"}>
            <div className="flex gap-4 items-center">
              <BugIcon size={24} className="text-primary" />
              <span className="text-muted text-2xl font-mono-default">
                {"{buggle}"}
              </span>
            </div>
          </Link>
        </div>
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
