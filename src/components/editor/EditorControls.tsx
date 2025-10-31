import { LanguageSelector } from "@/components/editor/LanguageSelector";
import { RunButton } from "@/components/editor/RunButton";
import { SubmitButton } from "@/components/editor/SubmitButton";

export interface EditorControlsProps {
  language: string;
  setLanguage: (language: string) => void;
  onRun: () => void;
  onSubmit: () => void;
  isLoading?: boolean;
}

export const EditorControls = ({
  language,
  setLanguage,
  onRun,
  onSubmit,
  isLoading,
}: EditorControlsProps) => {
  return (
    <div className="px-4 flex sm:flex-row justify-between items-center sm:items-center gap-2 mb-2 md:mb-4">
      <div className="flex flex-row items-center gap-2">
        <RunButton onRun={onRun} isLoading={isLoading} />
        <SubmitButton onSubmit={onSubmit} isLoading={isLoading} />
      </div>
      <LanguageSelector language={language} setLanguage={setLanguage} />
    </div>
  );
};
