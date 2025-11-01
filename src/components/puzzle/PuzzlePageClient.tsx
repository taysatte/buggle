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

interface PuzzlePageClientProps {
  puzzle: {
    id: number;
    dailyPuzzleId: number;
    date: string;
    title: string;
    description: string;
    starterCode: string;
    difficulty: string | null;
    language: string | null;
    hints: string | null;
    testCases: Array<{
      id: number;
      input: string;
      expectedOutput: string;
      isPublic: boolean;
    }>;
  };
}

const PuzzlePageClient = ({ puzzle }: PuzzlePageClientProps) => {
  const [isPuzzleOpen, setIsPuzzleOpen] = useState(false);
  const [isOutputOpen, setIsOutputOpen] = useState(false);
  const [output, setOutput] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [testsPassed, setTestsPassed] = useState<boolean | null>(null);

  const handleRunCode = async ({ code, language }: RunCodeProps) => {
    setIsLoading(true);
    setTestsPassed(null);
    setOutput([]);

    try {
      const response = await fetch("/api/execute", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code, language }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to execute code");
      }

      const data = await response.json();
      if (data.error) {
        setOutput([data.error]);
      } else {
        setOutput(data.output || []);
      }

      // TODO: Update testsPassed based on test results when implemented
      setTestsPassed(null);
    } catch (error) {
      // Handle errors
      const errorMessage =
        error instanceof Error ? error.message : "Execution failed";
      setOutput([`Error: ${errorMessage}`]);
      setTestsPassed(null);
    } finally {
      setIsLoading(false);
    }
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
                    <CodeEditor
                      onRunCode={handleRunCode}
                      isLoading={isLoading}
                      initialCode={puzzle.starterCode}
                    />
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
                    <Output
                      output={output}
                      isLoading={isLoading}
                      testsPassed={testsPassed}
                    />
                  </Card>
                </ResizablePanel>
              </ResizablePanelGroup>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={40} className="pr-0 p-2">
              <Card className="shadow-lg h-full w-full p-4">
                <div className="space-y-4">
                  <div>
                    <h2 className="text-xl font-bold">{puzzle.title}</h2>
                    <p className="text-sm text-muted-foreground mt-1">
                      {puzzle.difficulty && (
                        <span className="capitalize">{puzzle.difficulty}</span>
                      )}
                    </p>
                  </div>
                  <div className="text-sm text-muted-foreground whitespace-pre-wrap">
                    {puzzle.description}
                  </div>
                  {puzzle.hints && (
                    <details className="text-sm">
                      <summary className="cursor-pointer font-semibold">
                        Hints
                      </summary>
                      <div className="mt-2 text-muted-foreground whitespace-pre-wrap">
                        {puzzle.hints}
                      </div>
                    </details>
                  )}
                </div>
              </Card>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>

        {/* Mobile Layout - Visible on mobile only */}
        <div className="md:hidden flex flex-col h-full gap-2">
          {/* Puzzle Description - Collapsible */}
          <Collapsible open={isPuzzleOpen} onOpenChange={setIsPuzzleOpen}>
            <Card className="shadow-lg p-0">
              <CollapsibleTrigger className="w-full p-3 flex items-center justify-between transition-all duration-100 hover:bg-primary/5">
                <p className="text-lg font-bold text-primary">{puzzle.title}</p>
                {isPuzzleOpen ? (
                  <ChevronUp className="text-primary/60 h-4 w-4" />
                ) : (
                  <ChevronDown className="text-primary/60 h-4 w-4" />
                )}
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="px-3 pb-3">
                  <p className="text-sm text-muted-foreground whitespace-pre-wrap">
                    {puzzle.description}
                  </p>
                  {puzzle.hints && (
                    <details className="mt-2 text-sm">
                      <summary className="cursor-pointer font-semibold">
                        Hints
                      </summary>
                      <div className="mt-2 text-muted-foreground whitespace-pre-wrap">
                        {puzzle.hints}
                      </div>
                    </details>
                  )}
                </div>
              </CollapsibleContent>
            </Card>
          </Collapsible>

          {/* Code Editor */}
          <Card className="shadow-lg flex-1 py-4 overflow-hidden">
            <CodeEditor
              onRunCode={handleRunCode}
              isLoading={isLoading}
              initialCode={puzzle.starterCode}
            />
          </Card>

          {/* Output - Collapsible */}
          <Collapsible open={isOutputOpen} onOpenChange={setIsOutputOpen}>
            <Card className="shadow-lg p-0">
              <CollapsibleTrigger className="w-full p-3 flex items-center justify-between">
                <p className="text-sm font-semibold text-muted-foreground">
                  output
                </p>
                {isOutputOpen ? (
                  <ChevronUp className="text-primary/60 h-4 w-4" />
                ) : (
                  <ChevronDown className="text-primary/60 h-4 w-4" />
                )}
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="px-3 pb-3 max-h-[200px] overflow-auto">
                  <Output
                    output={output}
                    isLoading={isLoading}
                    testsPassed={testsPassed}
                  />
                </div>
              </CollapsibleContent>
            </Card>
          </Collapsible>
        </div>
      </main>
    </>
  );
};

export default PuzzlePageClient;
