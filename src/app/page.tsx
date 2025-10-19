"use client";

import Navbar from "@/components/navbar/Navbar";
import { Allotment } from "allotment";
import "allotment/dist/style.css";

const PuzzlePage = () => {
  return (
    <>
      <Navbar />
      {/* Main content area */}
      <main className="h-[calc(100vh-64px)]">
        {/* TODO: Code Editor component */}
        <div className="allotment-theme h-full">
          <Allotment className="h-full" defaultSizes={[60, 40]}>
            {/* Code editor pane - should take 3/4 of the width on load */}
            <div className="h-full flex flex-col items-center justify-center">
              <span className="text-xl font-bold"> {"{ editor } "} </span>
            </div>
            {/* Puzzle description pane - should take 1/4 of the width on load */}
            <div className="h-full flex flex-col items-center justify-center">
              <span className="text-xl font-bold">{"{ description }"}</span>
            </div>
          </Allotment>
        </div>
      </main>
    </>
  );
};

export default PuzzlePage;
