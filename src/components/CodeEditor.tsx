import { useRef, useState } from "react";
import { Editor } from "@monaco-editor/react";
import { editor } from "monaco-editor";
import IEditor = editor.IEditor;
import Output from "@/components/Output";
import { BUGGLE_THEME } from "@/lib/themes";
import { Challenge } from "@/types/challenge";
import { Card } from "./ui/card";

type CodeEditorProps = {
  challenge: Challenge;
  theme: string;
  language: string;
};

const CodeEditor = ({ challenge, theme, language }: CodeEditorProps) => {
  const editorRef = useRef<IEditor>(null);
  const [value, setValue] = useState(challenge.code);

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
      <div className="flex flex-col w-full h-[calc(100vh-160px)]">
        <Card className="w-full h-full py-2">
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
          <Output
            editorRef={editorRef}
            language={language}
            challengeId={challenge.id}
          />
        </Card>
      </div>
    </>
  );
};

export default CodeEditor;
