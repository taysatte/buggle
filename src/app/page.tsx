"use client";

import CodeEditor from "@/components/CodeEditor";
import { TEST_CHALLENGES, THEME_BASE, TEST_LANG } from "@/constants";

export default function App() {
  const theme = THEME_BASE;
  const challenge = TEST_CHALLENGES[0].initialCode;
  const language = TEST_LANG;

  return (
    <>
      <div className="h-full px-60 max-w-screen py-6">
        <CodeEditor code={challenge} theme={theme} language={language} />
      </div>
    </>
  );
}
