"use client";

import React, { useRef, useEffect } from "react";
import { ScrollArea } from "./ui/scroll-area";
import { Loader2 } from "lucide-react";

interface OutputProps {
  output: string[];
  isLoading: boolean;
  testsPassed: boolean | null;
}

const Output = ({ output, isLoading, testsPassed }: OutputProps) => {
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [output]);

  return (
    <ScrollArea
      className="h-full w-full py-4 px-6 font-mono-default text-[1rem]"
      ref={scrollAreaRef}
    >
      {isLoading ? (
        <div className="flex items-center justify-center h-full">
          <Loader2 className="animate-spin h-6 w-6 mr-2" /> loading...
        </div>
      ) : (
        <div className="text-muted-foreground">
          {output
            .filter((line) => line.trim() !== "")
            .map((line, i) => (
              <div key={i}>{`> buggle@user ~> ${line}`}</div>
            ))}
          {testsPassed !== null && (
            <div
              className={`${
                testsPassed ? "text-green-500" : "text-destructive-foreground"
              }`}
            >
              {testsPassed ? "tests passed!" : "tests failed!"}
            </div>
          )}
        </div>
      )}
    </ScrollArea>
  );
};

export default Output;
