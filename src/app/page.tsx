"use client";

import CodeEditor from "@/components/CodeEditor";
import { challenges } from "@/lib/challenges";

export default function App() {
  const theme = "vs-dark";
  const challenge = challenges[0].initialCode;

  return (
    <>
      <div className="h-screen w-full">
        <CodeEditor code={challenge} theme={theme} language={"javascript"} />
      </div>
    </>
  );
}
