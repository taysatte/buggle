import { Card } from "@/components/ui/card";
import { editor } from "monaco-editor";
import IEditor = editor.IEditor;
import React, { RefObject, useState } from "react";
import { Button } from "@/components/ui/button";
import { executeCode } from "@/app/api/api";
import { Loader2 } from "lucide-react"; //example of using a spinner

interface Props {
  editorRef: RefObject<IEditor | null>;
  language: string;
}

const Output = ({ editorRef, language }: Props) => {
  const [output, setOutput] = useState<string[]>([
    "Click 'Submit' to see the output here...",
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const runCode = async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;
    try {
      setIsLoading(true);
      const { run: result } = await executeCode(language, sourceCode);
      setOutput(result.output.split("\n"));
    } catch (error) {
      console.error(error);
      setOutput(["An error occurred during execution."]); // Display error message
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Card className="h-full w-full p-4 rounded-lg">
        {isLoading ? (
          <div className="flex items-center justify-center h-full">
            <Loader2 className="animate-spin h-6 w-6 mr-2" /> Loading...
          </div>
        ) : (
          <div className="text-gray-600">
            {output.map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </div>
        )}
      </Card>
      <Button
        className="cursor-pointer h-[50px] text-[1.1rem] mt-4"
        variant="outline"
        onClick={runCode}
        disabled={isLoading} // Disable button when loading
      >
        {isLoading ? "Loading..." : "Submit"}
      </Button>
    </>
  );
};

export default Output;
