import { Card } from "@/components/ui/card";
import { editor } from "monaco-editor";
import IEditor = editor.IEditor;
import React, { RefObject, useState } from "react";
import { Button } from "@/components/ui/button";
import { executeCode } from "@/app/api/api";

interface Props {
  editorRef: RefObject<IEditor | null>;
  language: string;
}

const Output = ({ editorRef, language }: Props) => {
  const [output, setOutput] = useState<Array<string>>([""]);

  const runCode = async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;
    try {
      const { run: result } = await executeCode(language, sourceCode);
      setOutput(result.output.split("\n"));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Card className="h-full w-full p-4 rounded-lg">
        {output
          ? output.map((line, i) => <div key={i}>{line}</div>)
          : 'Click "Run Code" to see the output here'}
      </Card>
      <Button
        className="cursor-pointer h-[50px] text-[1.1rem] mt-4"
        variant="outline"
        onClick={runCode}
      >
        Submit
      </Button>
    </>
  );
};

export default Output;
