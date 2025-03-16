import { Settings2, Sun } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <nav className="bg-neutral-900/75 border-b-2 h-[64px] px-40 w-full flex items-center justify-between text-neutral-200">
        <div className="flex items-center justify-start">
          <Image
            src="/buggle-logo.svg"
            alt="buggle logo"
            height={100}
            width={100}
          />
        </div>
        <div className="flex items-center justify-end gap-6">
          <Sun className="h-6 w-6 text-neutral-200" />
          <Settings2 className="h-6 w-6 text-neutral-200" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
