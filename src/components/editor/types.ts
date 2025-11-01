/**
 * CodeEditor component props
 */

import { RunCodeProps } from "@/app/types";

export interface CodeEditorProps {
  isLoading: boolean;
  onRunCode: ({ code, language }: RunCodeProps) => void;
  initialCode?: string; // Optional initial code (e.g., from puzzle starterCode)
}
