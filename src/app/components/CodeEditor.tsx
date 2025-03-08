import {useRef, useState} from "react";
import {Editor, OnMount} from "@monaco-editor/react";
import {editor} from "monaco-editor";
import IEditor = editor.IEditor;

interface Props {
    code: string;
    theme: string;
}

export default function CodeEditor( { code, theme }: Props ) {
    const editorRef = useRef<IEditor>(null);

    // stores state for value in the editor
    const [value, setValue] = useState("");

    // focuses the editor on mount
    const onMount = (editor: IEditor) => {
        editorRef.current = editor;
        editor.focus();
    }

    // temp opts for editor
    const options = {
        fontFamily: "Fira Code",
        fontSize: 16,
        minimap: {
            enabled: false,
        },
        contextmenu: false,
    }
    return <>
        <Editor
            theme={theme}
            defaultLanguage="javascript"
            options={options}
            value={code}
            onChange={(value) => {
                // @ts-ignore
                setValue(value);
            }}
            onMount={onMount}
        />
    </>;
}