import React, { useEffect, useRef, useState } from "react";
import Editor from "@monaco-editor/react";
import { editor } from "monaco-editor";
import { BUGGLE_THEME } from "@/lib/themes";
import { Challenge } from "@/types/challenge";
import { Card } from "./ui/card";

type CodeEditorProps = {
  challenge: Challenge;
  theme: string;
  language: string;
  onCodeChange: (code: string) => void;
};

const CodeEditor = ({
  challenge,
  theme,
  language,
  onCodeChange,
}: CodeEditorProps) => {
  const [value, setValue] = useState(challenge.code);
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);

  const options = {
    fontFamily: "Fira Code",
    fontSize: 16,
    minimap: { enabled: false },
    contextmenu: false,
    roundedSelection: true,
    scrollbarVisibility: 2,
    fontLigatures: true,
    padding: { bottom: 0, top: 0 },
  };

  useEffect(() => {
    onCodeChange(value);
  }, [value, onCodeChange]);

  return (
    <Editor
      theme={theme}
      language={language}
      options={options}
      value={value}
      onChange={(newValue: string | undefined) => {
        if (newValue !== undefined) {
          setValue(newValue);
        }
      }}
      onMount={(editor, monaco) => {
        editorRef.current = editor;
        monaco.editor.defineTheme("buggle-theme", BUGGLE_THEME);
        monaco.editor.setTheme("buggle-theme");
        editor.focus();
      }}
    />
  );
};

export default CodeEditor;
