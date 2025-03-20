"use client";

import CodeEditor from "@/components/CodeEditor";
import { TEST_CHALLENGES, THEME_BASE, TEST_LANG } from "@/constants";

export default function App() {
  const theme = THEME_BASE;
  const challenge = TEST_CHALLENGES[0];
  const language = TEST_LANG;

  return (
    <>
      <CodeEditor challenge={challenge} theme={theme} language={language} />
    </>
  );
}
