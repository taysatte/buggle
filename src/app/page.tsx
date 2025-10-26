"use client";

import CodeEditor from "@/components/editor/CodeEditor";
import Navbar from "@/components/navbar/Navbar";
import { Card } from "@/components/ui/card";
import Output from "@/components/output/Output";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@radix-ui/react-collapsible";

const PuzzlePage = () => {
  return (
    <>
      <Navbar />
      {/* Main content area */}
      <main className="h-[calc(100vh-64px)] px-4 pb-4">
        <div className="h-full">
          {/* Code Editor */}
          <Card className="rounded-3xl h-[calc(100%-6px)] w-[calc(100%-6px)] shadow-md">
            <CodeEditor />
          </Card>
          {/* Output Window */}
          <Card className="h-[calc(100%-6px)] px-4 rounded-3xl w-[calc(100%-6px)] mt-1.5 flex justify-start items-start shadow-md">
            <Collapsible>
              <CollapsibleTrigger>Toggle Output</CollapsibleTrigger>
              <CollapsibleContent>
                <Output output={[]} isLoading={false} testsPassed={null} />
              </CollapsibleContent>
            </Collapsible>
          </Card>
          {/* Puzzle Description */}
          <Card className="h-full w-[calc(100%-6px)] rounded-3xl ml-1.5 shadow-md"></Card>
        </div>
      </main>
    </>
  );
};

export default PuzzlePage;
