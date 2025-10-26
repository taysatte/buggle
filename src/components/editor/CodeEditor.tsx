import React, { useRef, useState } from "react";
import { Editor } from "@monaco-editor/react";
import type * as monaco from "monaco-editor";

const CodeEditor = () => {
  const [value, setValue] = useState<string>("");

  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);

  const options: monaco.editor.IStandaloneEditorConstructionOptions = {
    fontSize: 16,
    minimap: { enabled: false },
  };

  const handleOnMount = (editor: monaco.editor.IStandaloneCodeEditor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const handleEditorValueChange = (value: string | undefined) => {
    setValue(value ?? "");
  };

  return (
    <>
      <Editor
        height="100vh"
        theme="vs-dark"
        language="typescript"
        value={value}
        options={options}
        onChange={handleEditorValueChange}
        onMount={handleOnMount}
      />
    </>
  );
};

export default CodeEditor;
