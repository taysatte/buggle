import { Card } from "@/components/ui/card";
import { editor } from "monaco-editor";
import IEditor = editor.IEditor;
import React, { RefObject } from "react";
import { Button } from "@/components/ui/button";

interface Props {
  editorRef: RefObject<IEditor | null>;
  language: string;
}

const Output = ({ editorRef, language }: Props) => {
  const runCode = async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const sourceCode = editorRef.current.getValue();

    // testing
    console.log(sourceCode);
    console.log(language);

    if (!sourceCode) return;
  };

  return (
    <>
      <Card className="h-full w-full p-4 rounded-lg"></Card>
      <Button
        className="cursor-pointer h-[50px] text-[1.1rem] mt-2"
        variant="outline"
        onClick={runCode}
      >
        Submit
      </Button>
    </>
  );
};

export default Output;
