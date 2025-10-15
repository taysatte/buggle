"use client";

import { Button } from "@/components/ui/button";

export default function Home() {
  const handleButtonClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-24 bg-background">
      <Button className="cursor-pointer" onClick={handleButtonClick}>
        Testing
      </Button>
    </div>
  );
}
