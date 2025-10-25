"use client";

import CodeEditor from "@/components/editor/CodeEditor";
import Navbar from "@/components/navbar/Navbar";
import { Allotment } from "allotment";
import { Card } from "@/components/ui/card";
import "allotment/dist/style.css";
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
        <div className="allotment-theme h-full">
          <Allotment className="h-full" defaultSizes={[65, 35]} minSize={100}>
            {/* Code Editor */}
            <Allotment
              className="h-full"
              defaultSizes={[90, 10]}
              vertical
              minSize={100}
            >
              <Allotment.Pane minSize={100}>
                <Card className="bg-card rounded-3xl h-[calc(100%-6px)] w-[calc(100%-6px)]">
                  {/* <CodeEditor /> */}
                </Card>
              </Allotment.Pane>
              {/* Output Window */}
              <Allotment.Pane minSize={100}>
                <Card className="h-[calc(100%-6px)] px-4 rounded-3xl w-[calc(100%-6px)] mt-1.5 flex justify-start items-start bg-card">
                  <Collapsible>
                    <CollapsibleTrigger>Toggle Output</CollapsibleTrigger>
                    <CollapsibleContent>
                      <Output
                        output={[]}
                        isLoading={false}
                        testsPassed={null}
                      />
                    </CollapsibleContent>
                  </Collapsible>
                </Card>
              </Allotment.Pane>
            </Allotment>
            {/* Puzzle Description */}
            <Allotment.Pane minSize={100}>
              <Card className="h-full w-[calc(100%-6px)] rounded-3xl bg-card ml-1.5"></Card>
            </Allotment.Pane>
          </Allotment>
        </div>
      </main>
    </>
  );
};

export default PuzzlePage;
