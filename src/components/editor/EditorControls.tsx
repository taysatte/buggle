import React from "react";
import { LanguageSelector } from "@/components/editor/LanguageSelector";
import RunButton from "@/components/editor/RunButton";
import { SubmitButton } from "@/components/editor/SubmitButton";

export interface EditorControlsProps {
  language: string;
  setLanguage: (language: string) => void;
  onRun: () => void;
  onSubmit: () => void;
}

export const EditorControls = ({
  language,
  setLanguage,
  onRun,
  onSubmit,
}: EditorControlsProps) => {
  return (
    <div className="flex items-center gap-2 mb-2">
      <LanguageSelector language={language} setLanguage={setLanguage} />
      <RunButton onRun={onRun} />
      <SubmitButton onSubmit={onSubmit} />
    </div>
  );
};
