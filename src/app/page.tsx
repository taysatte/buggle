"use client";

import React, { useRef, useState } from "react";
import CodeEditor from "@/components/CodeEditor";
import { Card } from "@/components/ui/card";
import { TEST_CHALLENGES, THEME_BASE, TEST_LANG } from "@/constants";
import EditorControls from "@/components/EditorControls";
import Output from "@/components/Output"; // Import Output

export default function App() {
  const theme = THEME_BASE;
  const challenge = TEST_CHALLENGES[0];
  const language = TEST_LANG;

  const [sourceCode, setSourceCode] = useState("");
  const [output, setOutput] = useState<string[]>([""]);
  const [isRunCodeLoading, setIsRunCodeLoading] = useState(false);
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);
  const [isOutputLoading, setIsOutputLoading] = useState(false);
  const [testsPassed, setTestsPassed] = useState<boolean | null>(null);

  const handleSubmitCode = async () => {
    if (!sourceCode) return;
    try {
      setIsSubmitLoading(true);
      setTestsPassed(null);
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          language,
          sourceCode,
          challengeId: challenge.id,
        }),
      });
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      setOutput(data.pistonResult.run.output.split("\n"));
      setTestsPassed(data.testsPassed);
    } catch (error) {
      console.error(error);
      setOutput(["An error occurred during submission."]);
    } finally {
      setIsSubmitLoading(false);
    }
  };

  const handleRunCode = async () => {
    if (!sourceCode) return;
    try {
      setIsOutputLoading(true);
      setIsRunCodeLoading(true);
      setOutput([]); // Reset output before new execution
      const response = await fetch("/api/execute", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          language,
          sourceCode,
        }),
      });
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      if (data.vmOutput) {
        setOutput(data.vmOutput.toString().split("\n")); // Use vmOutput
      } else if (
        data &&
        data.pistonResult &&
        data.pistonResult.run &&
        data.pistonResult.run.output
      ) {
        setOutput(data.pistonResult.run.output.split("\n")); // Use pistonResult
      } else {
        setOutput(["No Output Returned"]);
      }
    } catch (error) {
      console.error(error);
      setOutput(["An error occurred during execution."]);
    } finally {
      setIsOutputLoading(false);
      setIsRunCodeLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-col w-full h-full gap-4 px-4">
        <div className="w-full h-[64px]">
          <Card className="w-full h-full bg-card flex items-center justify-center p-4">
            <EditorControls
              sourceCode={sourceCode}
              language={language}
              challengeId={challenge.id}
              submitCode={handleSubmitCode}
              runCode={handleRunCode}
              isSubmitLoading={isSubmitLoading}
              isRunCodeLoading={isRunCodeLoading}
            />
          </Card>
        </div>
        <div className="flex flex-row w-full h-[calc(100vh-160px)] gap-4">
          <div className="w-7/12 h-full">
            <Card className="w-full h-full flex flex-col">
              <div className="w-full h-3/4">
                <CodeEditor
                  onCodeChange={setSourceCode}
                  theme={theme}
                  challenge={challenge}
                  language={language}
                />
              </div>
              <div className="w-full h-1/4 border-t-2">
                <Output
                  output={output}
                  isLoading={isOutputLoading}
                  testsPassed={testsPassed}
                />
              </div>
            </Card>
          </div>
          {/* TODO: content section somponent */}
          <div className="w-5/12 h-[calc(100vh-160px)]">
            <Card className="w-full h-full flex justify-center items-center text-primary bg-card">
              {`{ Content Section }`}
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
