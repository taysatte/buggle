import { useRef, useState } from "react";
import { Editor } from "@monaco-editor/react";
import { editor } from "monaco-editor";
import IEditor = editor.IEditor;

interface Props {
  code: string;
  theme: string;
  language: string;
}

export default function CodeEditor({ code, theme, language }: Props) {
  const editorRef = useRef<IEditor>(null);
  const [value, setValue] = useState(code);

  const onMount = (editor: IEditor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const options = {
    fontFamily: "Fira Code",
    fontSize: 16,
    minimap: {
      enabled: false,
    },
    contextmenu: false,
    roundedSelection: true,
    scrollbarVisibility: 2,
    fontLigatures: true,
    padding: {
      bottom: 0,
      top: 10,
    },
  };

  return (
    <>
      <div className="h-full w-full border border-gray-700 rounded-lg overflow-hidden">
        <Editor
          theme={theme}
          defaultLanguage={language}
          options={options}
          value={value}
          onChange={(newValue: string | undefined) => {
            if (newValue !== undefined) {
              setValue(newValue);
            }
          }}
          onMount={onMount}
        />
      </div>
    </>
  );
}
