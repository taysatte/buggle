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
                <Card className="bg-card h-[calc(100%-8px)] w-[calc(100%-8px)]">
                  <CodeEditor />
                </Card>
              </Allotment.Pane>
              {/* Output Window */}
              <Allotment.Pane minSize={100}>
                <Card className="h-[calc(100%-8px)] w-[calc(100%-8px)] mt-2 flex justify-center items-center bg-card"></Card>
              </Allotment.Pane>
            </Allotment>
            {/* Puzzle Description */}
            <Allotment.Pane minSize={100}>
              <Card className="h-full w-[calc(100%-8px)] bg-card ml-2"></Card>
            </Allotment.Pane>
          </Allotment>
        </div>
      </main>
    </>
  );
};

export default PuzzlePage;
