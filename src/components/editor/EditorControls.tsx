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
    <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-2 mb-2 md:mb-4">
      <div className="flex items-center gap-2">
        {/* <RunButton onRun={onRun} /> */}
        {/* <SubmitButton onSubmit={onSubmit} /> */}
      </div>
      <LanguageSelector language={language} setLanguage={setLanguage} />
    </div>
  );
};
