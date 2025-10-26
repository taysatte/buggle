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
          <Card className="shadow-md h-full w-full">
            <CodeEditor />
          </Card>
          {/* Output Window */}
          <Card className="h-full w-full shadow-md">
            <Output output={[]} isLoading={false} testsPassed={null} />
          </Card>
          {/* Puzzle Description */}
          <Card className="h-full w-full shadow-md">
            <p>Puzzle Description</p>
          </Card>
        </div>
      </main>
    </>
  );
};

export default PuzzlePage;
