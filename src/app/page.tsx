"use client";

import CodeEditor from "@/components/CodeEditor";
import { TEST_CHALLENGES, THEME_BASE, TEST_LANG } from "@/constants";

export default function App() {
  const theme = THEME_BASE;
  const challenge = TEST_CHALLENGES[0];
  const language = TEST_LANG;

  return (
    <>
      <div className="w-full h-[64px] flex justify-center items-center text-muted border-b-2">
        {`{ Editor Controls }`}
      </div>
      <div className="flex flex-row w-full h-full">
        <div className="w-2/3 h-full">
          <CodeEditor challenge={challenge} theme={theme} language={language} />
        </div>
        <div className="w-1/3 h-[calc(100vh-128px)] flex justify-center items-center text-muted border-l-2">{`{ Content Section }`}</div>
      </div>
    </>
  );
}
