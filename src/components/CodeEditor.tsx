import { useRef, useState } from "react";
import { Editor } from "@monaco-editor/react";
import { editor } from "monaco-editor";
import IEditor = editor.IEditor;
import { Card } from "@/components/ui/card";
import Output from "@/components/Output";

interface Props {
  code: string;
  theme: string;
  language: string;
}

const CodeEditor = ({ code, theme, language }: Props) => {
  const editorRef = useRef<IEditor>(null);
  const [value, setValue] = useState(code);

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
      top: 15,
    },
  };

  return (
    <>
      <Card className="flex flex-row h-dvh w-full p-4 border-0 rounded-lg">
        <Card className="w-full h-full p-0 rounded-lg border-2 overflow-hidden">
          <Editor
            theme={theme}
            defaultLanguage={"javascript"}
            language={language}
            options={options}
            value={value}
            onChange={(newValue: string | undefined) => {
              if (newValue !== undefined) {
                setValue(newValue);
                console.log(newValue);
              }
            }}
            onMount={(editor, monaco) => {
              editorRef.current = editor;

              // setting custom theme future ref
              monaco.editor.defineTheme("buggle-theme", {
                base: "vs-dark",
                inherit: true,
                colors: {
                  "editor.background": "#0A0A0AFF",
                  "editor.lineHighlightBackground": "#252525FF",
                },
                rules: [],
              });
              monaco.editor.setTheme("buggle-theme");
              editor.focus();
            }}
          />
        </Card>
        <div className="flex w-full h-full flex-col">
          <Output
            editorRef={editorRef}
            language={language}
            challengeId={"sum-array"}
          />
        </div>
      </Card>
    </>
  );
};

export default CodeEditor;
