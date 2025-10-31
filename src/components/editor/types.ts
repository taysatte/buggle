/**
 * CodeEditor component props
 */

import { RunCodeProps } from "@/app/types";

export interface CodeEditorProps {
  onRunCode: ({ code, lang }: RunCodeProps) => void;
}
