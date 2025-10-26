"use client";

import CodeEditor from "@/components/editor/CodeEditor";
import Navbar from "@/components/navbar/Navbar";
import { Card } from "@/components/ui/card";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";
import Output from "@/components/output/Output";

const PuzzlePage = () => {
  return (
    <>
      <Navbar />
      {/* Main content area */}
      <main className="h-[calc(100vh-64px)] px-4 pb-2">
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={70}>
            <ResizablePanelGroup direction="vertical">
              <ResizablePanel defaultSize={70} className="pl-0 p-2">
                <Card className="shadow-lg h-full w-full p-2">
                  <CodeEditor />
                </Card>
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel
                collapsible
                collapsedSize={0}
                defaultSize={30}
                className="pl-0 p-2"
              >
                <Card className="shadow-lg h-full w-full p-2">
                  <Output output={[]} isLoading={false} testsPassed={null} />
                </Card>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={30} className="pr-0 p-2">
            <Card className="shadow-lg h-full w-full p-2">
              <p className="text-sm text-muted-foreground">
                Puzzle Description
              </p>
            </Card>
          </ResizablePanel>
        </ResizablePanelGroup>
      </main>
    </>
  );
};

export default PuzzlePage;
