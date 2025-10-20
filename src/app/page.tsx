"use client";

import CodeEditor from "@/components/editor/CodeEditor";
import Navbar from "@/components/navbar/Navbar";
import { Allotment } from "allotment";
import { Card, CardContent, CardAction } from "@/components/ui/card";
import "allotment/dist/style.css";

const PuzzlePage = () => {
  return (
    <>
      <Navbar />
      {/* Main content area */}
      <main className="h-[calc(100vh-64px)]">
        <div className="allotment-theme h-full">
          <Allotment className="h-full" defaultSizes={[50, 50]}>
            {/* Code Editor */}
            <div className="h-full flex flex-col items-center justify-center pr-2 pl-4 pb-4">
              <Card className="h-full w-full">
                <CodeEditor />
              </Card>
            </div>
            {/* Puzzle description component */}
            <div className="h-full flex flex-col items-center justify-center pr-4 pl-2 pb-4">
              <Card className="h-full w-full"></Card>
            </div>
          </Allotment>
        </div>
      </main>
    </>
  );
};

export default PuzzlePage;
