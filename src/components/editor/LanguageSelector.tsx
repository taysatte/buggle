import React from "react";

export interface LanguageSelectorProps {
  language: string;
  setLanguage: (language: string) => void;
}

export const LanguageSelector = ({
  language,
  setLanguage,
}: LanguageSelectorProps) => {
  return (
    <div>
      {/* TODO: Implement language selector UI */}Current: {language}
    </div>
  );
};
