import { editor } from "monaco-editor";
import IEditor = editor.IEditor;
import React, { RefObject, useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, SendHorizonal } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";

type OutputProps = {
  editorRef: RefObject<IEditor | null>;
  language: string;
  challengeId: string;
};

const Output = ({ editorRef, language, challengeId }: OutputProps) => {
  const [output, setOutput] = useState<string[]>([""]);
  const [isLoading, setIsLoading] = useState(false);
  const [testsPassed, setTestsPassed] = useState<boolean | null>(null);

  const runCode = async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error

    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;
    try {
      setIsLoading(true);
      setTestsPassed(null); // Reset test results
      const response = await fetch("/api/execute", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          language,
          sourceCode,
          challengeId,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const pistonOutput = data.pistonResult.run.output;
      setOutput(pistonOutput.split("\n"));
      setTestsPassed(data.testsPassed);
    } catch (error) {
      console.error(error);
      setOutput(["An error occurred during execution."]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-col w-full h-[250px] border-t-2 border-b-2">
        <ScrollArea className="h-[250px] w-full py-4 px-6 font-mono-default text-[1rem]">
          {isLoading ? (
            <div className="flex items-center justify-center h-full">
              <Loader2 className="animate-spin h-6 w-6 mr-2" /> loading...
            </div>
          ) : (
            <div className="text-muted-foreground">
              {output.map((line, i) => (
                <div key={i}>{`> buggle@user ~> ${line}`}</div>
              ))}
              {testsPassed !== null && (
                <div
                  className={`${testsPassed ? "text-green-500" : "text-destructive-foreground"}`}
                >
                  {testsPassed ? "tests passed!" : "tests failed!"}
                </div>
              )}
            </div>
          )}
        </ScrollArea>
      </div>
      <div className="flex w-full h-auto items-center justify-center mb-4">
        <Button
          className="cursor-pointer w-fit border-2 text-[1rem] font-mono-default p-6"
          variant="outline"
          onClick={runCode}
          disabled={isLoading}
        >
          <SendHorizonal className="w-4 h-4" />
          {isLoading ? "loading..." : "submit"}
        </Button>
      </div>
    </>
  );
};

export default Output;
