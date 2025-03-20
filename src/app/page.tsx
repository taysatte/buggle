"use client";

import CodeEditor from "@/components/CodeEditor";
import { Card } from "@/components/ui/card";
import { TEST_CHALLENGES, THEME_BASE, TEST_LANG } from "@/constants";

export default function App() {
  const theme = THEME_BASE;
  const challenge = TEST_CHALLENGES[0];
  const language = TEST_LANG;

  return (
    <>
      <div className="flex flex-col w-full h-full gap-4 px-4">
        {/** TODO: editor controls component */}
        <div className="w-full h-[64px]">
          <Card className="w-full h-full flex justify-center items-center text-primary/50 bg-secondary/50">{`{ Editor Controls }`}</Card>
        </div>
        <div className="flex flex-row w-full h-full gap-4">
          <div className="w-2/3 h-full">
            <CodeEditor
              challenge={challenge}
              theme={theme}
              language={language}
            />
          </div>
          {/** TODO: content section component */}
          <div className="w-1/3 h-[calc(100vh-160px)]">
            <Card className="w-full h-full flex justify-center items-center text-primary/50 bg-secondary/50">
              {`{ Content Section }`}
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
