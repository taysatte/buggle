import { languageVersions, type Language } from "@/lib/languageVersions";

// Re-export for backwards compatibility
export const languages = languageVersions;
export type { Language };

export type LanguageWithVersion = {
  [K in Language]: {
    language: K;
    version: (typeof languages)[K];
  };
}[Language];

export interface RunCodeProps {
  code: string;
  language: string;
}
