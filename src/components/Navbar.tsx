import { Settings2, Sun, SunMoon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <nav className="border-b-1 h-[64px] px-60 w-full flex items-center justify-between text-foreground">
        <div className="flex items-center justify-start text-xl font-bold font-mono-default">
          <Image
            src="/buggle-logo.svg"
            alt="buggle logo"
            height={100}
            width={100}
          />
          {/* {"{ buggle }"} */}
        </div>
        <div className="flex items-center justify-end gap-4">
          <Button
            variant={"ghost"}
            size={"icon"}
            className="rounded-full cursor-pointer h-10 w-10"
          >
            <SunMoon size={24} className="text-primary" />
          </Button>
          <Button
            variant={"ghost"}
            size={"icon"}
            className="rounded-full cursor-pointer h-10 w-10"
          >
            <Settings2 size={24} className="text-primary" />
          </Button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
