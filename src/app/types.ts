import { type Language } from "@/lib/languageVersions";

/**
 * Props for executing code
 */
export interface RunCodeProps {
  code: string;
  language: Language; // Changed from string to Language for type safety
}
