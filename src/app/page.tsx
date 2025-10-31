"use client";

import React, { useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import { Card } from "@/components/ui/card";
import CodeEditor from "@/components/editor/CodeEditor";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";
import Output from "@/components/output/Output";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp } from "lucide-react";
import { RunCodeProps } from "@/app/types";

const PuzzlePage = () => {
  const [isPuzzleOpen, setIsPuzzleOpen] = useState(false);
  const [isOutputOpen, setIsOutputOpen] = useState(false);
  const [output, setOutput] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [testsPassed, setTestsPassed] = useState<Boolean | null>(null);

  const handleRunCode = ({ code, lang }: RunCodeProps) => {
    // set loading state
    setIsLoading(true);
    // call execution logic to piston api

    // on success, update the output and isLoading states

    // on error, update the error state accordingly
  };

  return (
    <>
      <Navbar />
      {/* Main content area */}
      <main className="h-[calc(100vh-64px)] px-2 md:px-4 pb-2">
        {/* Desktop Layout - Hidden on mobile */}
        <div className="hidden md:block h-full">
          <ResizablePanelGroup direction="horizontal">
            <ResizablePanel defaultSize={60}>
              <ResizablePanelGroup direction="vertical">
                <ResizablePanel defaultSize={70} className="pl-0 p-2">
                  <Card className="shadow-lg h-full w-full pt-4 pb-4">
                    <CodeEditor onRunCode={handleRunCode} />
                  </Card>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel
                  collapsible
                  collapsedSize={0}
                  defaultSize={30}
                  className="pl-0 p-2"
                >
                  <Card className="shadow-lg h-full w-full p-4">
                    <Output output={[]} isLoading={false} testsPassed={null} />
                  </Card>
                </ResizablePanel>
              </ResizablePanelGroup>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={40} className="pr-0 p-2">
              <Card className="shadow-lg h-full w-full p-4">
                <p className="text-sm text-muted-foreground">
                  Puzzle Description
                </p>
              </Card>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>

        {/* Mobile Layout - Visible on mobile only */}
        <div className="md:hidden flex flex-col h-full gap-2">
          {/* Puzzle Description - Collapsible */}
          <Collapsible open={isPuzzleOpen} onOpenChange={setIsPuzzleOpen}>
            <Card className="shadow-lg">
              <CollapsibleTrigger className="w-full p-3 flex items-center justify-between">
                <p className="text-sm font-medium text-muted-foreground">
                  Puzzle Description
                </p>
                {isPuzzleOpen ? (
                  <ChevronUp className="text-primary h-5 w-5" />
                ) : (
                  <ChevronDown className="text-primary h-5 w-5" />
                )}
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="px-3 pb-3">
                  <p className="text-sm text-muted-foreground">
                    Puzzle Description
                  </p>
                </div>
              </CollapsibleContent>
            </Card>
          </Collapsible>

          {/* Code Editor */}
          <Card className="shadow-lg flex-1 p-3 overflow-hidden">
            <CodeEditor onRunCode={handleRunCode} />
          </Card>

          {/* Output - Collapsible */}
          <Collapsible open={isOutputOpen} onOpenChange={setIsOutputOpen}>
            <Card className="shadow-lg">
              <CollapsibleTrigger className="w-full p-3 flex items-center justify-between">
                <p className="text-sm font-medium text-muted-foreground">
                  Output
                </p>
                {isOutputOpen ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="px-3 pb-3 max-h-[200px] overflow-auto">
                  <Output output={[]} isLoading={false} testsPassed={null} />
                </div>
              </CollapsibleContent>
            </Card>
          </Collapsible>
        </div>
      </main>
    </>
  );
};

export default PuzzlePage;
