"use client";

import React, { useRef, useState, useMemo } from "react";
import RosePine from "@/themes/rose-pine.json";
import { Editor, Monaco } from "@monaco-editor/react";
import { editor } from "monaco-editor";
import { puzzle } from "@/components/editor/puzzle";
import { options } from "@/components/editor/options";
import { EditorControls } from "@/components/editor/EditorControls";
import { useIsMobile } from "@/lib/useMediaQuery";
import { CodeEditorProps } from "@/components/editor/types";

const CodeEditor = ({ onRunCode }: CodeEditorProps) => {
  const [value, setValue] = useState<string>(puzzle);
  const [language, setLanguage] = useState<string>("javascript");
  const [version, setVersion] = useState<string>("18.15.0");
  const [theme, setTheme] = useState<string>("RosePine");
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);
  const isMobile = useIsMobile();

  const editorOptions = useMemo(() => {
    return {
      ...options,
      fontSize: isMobile ? 14 : 16,
      wordWrap: isMobile ? "on" : "off",
      lineNumbers: isMobile ? "off" : "on",
      folding: !isMobile,
      glyphMargin: !isMobile,
    } as editor.IStandaloneEditorConstructionOptions;
  }, [isMobile]);

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
    console.log(value, language);
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
      <div className="flex-1 min-h-0">
        <Editor
          height="100%"
          theme={theme}
          language={language}
          value={value}
          options={editorOptions}
          beforeMount={handleBeforeMount}
          onChange={handleEditorValueChange}
          onMount={handleOnMount}
        />
      </div>
    </div>
  );
};

export default CodeEditor;
