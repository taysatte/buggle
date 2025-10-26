"use client";

import React, { useRef, useState } from "react";
import { Editor, Monaco } from "@monaco-editor/react";
import { editor } from "monaco-editor";
import RosePine from "@/themes/rose-pine.json";
import { puzzle } from "./puzzle";

const CodeEditor = () => {
  const [value, setValue] = useState<string>(puzzle);
  const [language, setLanguage] = useState<string>("javascript");
  const [theme, setTheme] = useState<string>("RosePine");
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);

  const options: editor.IStandaloneEditorConstructionOptions = {
    fontSize: 16,
    fontFamily: "Fira Code",
    fontLigatures: true,
    minimap: { enabled: false },
    contextmenu: false,
    roundedSelection: true,
    padding: { bottom: 0, top: 0 },
    formatOnPaste: true,
    smoothScrolling: true,
    "bracketPairColorization.enabled": false,
    "semanticHighlighting.enabled": true,
    suggest: {
      showFields: false,
      showFunctions: false,
      showKeywords: false,
      showSnippets: false,
      showReferences: false,
    },
  } as editor.IStandaloneEditorConstructionOptions;

  const handleBeforeMount = (monaco: Monaco) => {
    const { rules, colors } = RosePine;
    monaco.editor.defineTheme(theme, {
      base: "vs-dark",
      inherit: true,
      rules: rules,
      colors: colors,
    });
  };

  const handleOnMount = (editor: editor.IStandaloneCodeEditor) => {
    editorRef.current = editor;
  };

  const handleEditorValueChange = (value: string | undefined) => {
    setValue(value ?? "");
  };

  return (
    <>
      <Editor
        height="100%"
        theme={theme}
        language={language}
        value={value}
        options={options}
        beforeMount={handleBeforeMount}
        onChange={handleEditorValueChange}
        onMount={handleOnMount}
      />
    </>
  );
};

export default CodeEditor;
