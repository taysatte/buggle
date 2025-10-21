import { Editor } from "@monaco-editor/react";
import { editor } from "monaco-editor";
import { useRef } from "react";

const CodeEditor = () => {
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);

  const options = {
    fontFamily: "Fira Code",
    fontSize: 15,
    minimap: { enabled: false },
    contextmenu: false,
    roundedSelection: true,
    scrollbarVisibility: 2,
    fontLigatures: true,
    padding: { bottom: 0, top: 0 },
  };

  const buggle: editor.IStandaloneThemeData = {
    base: "vs-dark",
    inherit: true,
    rules: [],
    colors: {
      "editor.background": "#1B1922",
      "editor.foreground": "#e2e0e7",
      "editorCursor.foreground": "#ffcc00",
      "editor.lineHighlightBackground": "#332e40",
      "editor.selectionBackground": "#28243280",
      "editor.inactiveSelectionBackground": "#264f78aa",
      "editor.selectionHighlightBackground": "#28243280",
    },
  };

  const value =
    "function sumArray(numbers) {\n" +
    "  let total = 0;\n" +
    "  for (let i = 1; i <= numbers.length; i++) { // Bug is here!\n" +
    "    total += numbers[i];\n" +
    "  }\n" +
    "  return total;\n" +
    "}";

  return (
    <Editor
      options={options}
      value={value}
      defaultLanguage="javascript"
      theme="vs-dark"
      onMount={(editor, monaco) => {
        editorRef.current = editor;
        monaco.editor.defineTheme("buggle-theme", buggle);
        monaco.editor.setTheme("buggle-theme");
        editor.focus();
      }}
    />
  );
};

export default CodeEditor;
