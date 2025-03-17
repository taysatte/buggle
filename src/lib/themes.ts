import { editor } from "monaco-editor";

const BASE_THEME = "vs-dark";

// TODO: define a custom theme for the code editor
export const BUGGLE_THEME: editor.IStandaloneThemeData = {
  base: BASE_THEME,
  inherit: true,
  rules: [],
  colors: {
    "editor.background": "#0a0a0a",
    "editor.foreground": "#ffffff",
    "editorCursor.foreground": "#ffcc00",
    "editor.lineHighlightBackground": "#333333",
    "editor.selectionBackground": "#264f78",
    "editor.inactiveSelectionBackground": "#264f78aa",
    "editor.selectionHighlightBackground": "#264f78aa",
  },
};
