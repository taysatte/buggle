import React, { useRef, useState } from "react";
import { Editor } from "@monaco-editor/react";
import type * as monaco from "monaco-editor";

const CodeEditor = () => {
  const [value, setValue] = useState("");
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
  const options: monaco.editor.IStandaloneEditorConstructionOptions = {
    fontSize: 16,
    minimap: { enabled: false },
  };

  return (
    <>
      <Editor
        height="100vh"
        theme="vs-dark"
        language="typescript"
        value={value}
        options={options}
        onChange={(value) => {
          setValue(value ?? "");
          console.log(value);
        }}
        onMount={(editor) => {
          editorRef.current = editor;
          editor.focus();
        }}
      />
    </>
  );
};

export default CodeEditor;
