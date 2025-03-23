import React from "react";
import SubmitButton from "./SubmitButton";
import RunButton from "./RunButton";

type EditorControlsProps = {
  sourceCode: string;
  language: string;
  challengeId: string;
  submitCode: () => void;
  runCode: () => void;
  isSubmitLoading: boolean;
  isRunCodeLoading: boolean;
};

const EditorControls = ({
  sourceCode,
  language,
  challengeId,
  submitCode,
  runCode,
  isSubmitLoading,
  isRunCodeLoading,
}: EditorControlsProps) => {
  return (
    <div className="flex flex-row gap-4">
      <SubmitButton onClick={submitCode} isLoading={isSubmitLoading} />
      <RunButton onClick={runCode} isLoading={isRunCodeLoading} />
    </div>
  );
};

export default EditorControls;
