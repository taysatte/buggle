import { useRef, useState } from "react";
import { Editor } from "@monaco-editor/react";
import { editor } from "monaco-editor";
import IEditor = editor.IEditor;
import { Card } from "@/components/ui/card";
import Output from "@/components/Output";
import { BUGGLE_THEME } from "@/lib/themes";

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
      <Card className="flex flex-col w-full h-[900px] border-0 rounded-xl p-0 gap-6">
        <Card className="w-full h-full p-0 rounded-lg border-2 overflow-hidden">
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
        </Card>
        <div className="flex w-full">
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
