import { Card } from "@/components/ui/card";
import { editor } from "monaco-editor";
import IEditor = editor.IEditor;
import React, { RefObject, useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface Props {
  editorRef: RefObject<IEditor | null>;
  language: string;
  challengeId: string;
}

const Output = ({ editorRef, language, challengeId }: Props) => {
  const [output, setOutput] = useState<string[]>([
    'click "submit" to see the output here...',
  ]);
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
      <div className="flex flex-col w-full h-full gap-6">
        <Card className="h-[250px] w-full p-4 rounded-xl border-1 font-mono-default text-[1rem]">
          {isLoading ? (
            <div className="flex items-center justify-center h-full">
              <Loader2 className="animate-spin h-6 w-6 mr-2" /> loading...
            </div>
          ) : (
            <div className="text-muted-foreground">
              {output.map((line, i) => (
                <div key={i}>{line}</div>
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
        </Card>
        <Button
          className="cursor-pointer h-[50px] border-1 text-[1.1rem]"
          variant="outline"
          onClick={runCode}
          disabled={isLoading}
        >
          {isLoading ? "loading..." : "submit"}
        </Button>
      </div>
    </>
  );
};

export default Output;
