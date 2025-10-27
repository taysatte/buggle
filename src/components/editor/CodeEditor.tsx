"use client";

import React, { useRef, useState } from "react";
import RosePine from "@/themes/rose-pine.json";
import { Editor, Monaco } from "@monaco-editor/react";
import { editor } from "monaco-editor";
import { puzzle } from "@/components/editor/puzzle";
import { options } from "@/components/editor/options";
import { EditorControls } from "@/components/editor/EditorControls";

const CodeEditor = () => {
  const [value, setValue] = useState<string>(puzzle);
  const [language, setLanguage] = useState<string>("javascript");
  const [theme, setTheme] = useState<string>("RosePine");
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);

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

  const handleRun = () => {
    // TODO: Implement run logic
  };

  const handleSubmit = () => {
    // TODO: Implement submit logic
  };

  return (
    <div className="flex flex-col h-full">
      <EditorControls
        language={language}
        setLanguage={setLanguage}
        onRun={handleRun}
        onSubmit={handleSubmit}
      />
      <div className="flex-1">
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
      </div>
    </div>
  );
};

export default CodeEditor;
