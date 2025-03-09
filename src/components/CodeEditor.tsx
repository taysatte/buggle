import { useRef, useState } from "react";
import { Editor } from "@monaco-editor/react";
import { editor } from "monaco-editor";
import IEditor = editor.IEditor;
import { Card } from "@/components/ui/card";
import Output from "@/components/Output";
import SubmitButton from "@/components/SubmitButton";

interface Props {
  code: string;
  theme: string;
  language: string;
}

const CodeEditor = ({ code, theme, language }: Props) => {
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
      <Card className="flex flex-row h-dvh w-full p-4 border-0 rounded-lg">
        <Card className="w-full h-full p-0 rounded-lg overflow-hidden">
          <Editor
            theme={theme}
            defaultLanguage={language}
            options={options}
            value={value}
            onChange={(newValue: string | undefined) => {
              if (newValue !== undefined) {
                setValue(newValue);
                console.log(newValue);
              }
            }}
            onMount={onMount}
          />
        </Card>
        <div className="flex w-full h-full flex-col">
          <Output />
          <SubmitButton />
        </div>
      </Card>
    </>
  );
};

export default CodeEditor;
