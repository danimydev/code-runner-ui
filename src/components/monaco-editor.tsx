import { useEffect, useRef, useState } from "react";
import { Editor } from "@monaco-editor/react";
import { useAtom } from "jotai";

import { editorValueAtom, selectedLanguageAtom } from "@/atoms";

import { useTheme } from "@/providers/theme-provider";

export const MonacoEditor = () => {
  const [selectedLanguage] = useAtom(selectedLanguageAtom);
  const [editorValue, setEditorValue] = useAtom(editorValueAtom);
  const [editorTheme, setEditorTheme] = useState("light");
  const themeProviderState = useTheme();
  const editorRef = useRef<any>(null);

  useEffect(() => {
    if (themeProviderState.theme === "dark") {
      setEditorTheme("vs-dark");
    }
    if (themeProviderState.theme === "light") {
      setEditorTheme("light");
    }
  }, [editorTheme, themeProviderState.theme]);

  return (
    <Editor
      language={selectedLanguage}
      theme={editorTheme}
      onMount={(editor) => {
        editorRef.current = editor;
      }}
      onChange={(value) => {
        setEditorValue(value || "");
      }}
      defaultLanguage={selectedLanguage}
      defaultValue={editorValue}
      options={{
        automaticLayout: true,
        tabSize: 2,
        renderLineHighlight: "none",
        minimap: {
          enabled: false,
        },
        scrollbar: {
          verticalScrollbarSize: 0,
        },
        padding: {
          top: 0,
          bottom: 0,
        },
        fontSize: 13,
        lineNumbers: "on",
      }}
    />
  );
};
