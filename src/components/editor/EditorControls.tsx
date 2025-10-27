import { LanguageSelector } from "@/components/editor/LanguageSelector";
import { RunButton } from "@/components/editor/RunButton";
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
    <div className="flex justify-between items-center gap-2 mb-4">
      <div className="flex items-center gap-2">
        {/* <RunButton onRun={onRun} /> */}
        {/* <SubmitButton onSubmit={onSubmit} /> */}
      </div>
      <LanguageSelector language={language} setLanguage={setLanguage} />
    </div>
  );
};
