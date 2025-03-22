import React from "react";
import SubmitButton from "./SubmitButton";
import { Button } from "./ui/button";
import { Loader2, Play } from "lucide-react";

type EditorControlsProps = {
  sourceCode: string;
  language: string;
  challengeId: string;
  runCode: () => void;
  isLoading: boolean;
};

const EditorControls = ({
  sourceCode,
  language,
  challengeId,
  runCode,
  isLoading,
}: EditorControlsProps) => {
  return (
    <div className="flex flex-row gap-4">
      <SubmitButton onClick={runCode} isLoading={isLoading} />
      <Button className="cursor-pointer" variant={"secondary"}>
        {isLoading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Play className="mr-2 h-4 w-4" />
        )}
        {isLoading ? "running..." : "run code"}
      </Button>
    </div>
  );
};

export default EditorControls;
