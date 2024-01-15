import { useAtom } from "jotai";
import { PlayIcon, RefreshCcw } from "lucide-react";

import {
  editorValueAtom,
  isExecutingCodeAtom,
  outputValueAtom,
  selectedLanguageAtom,
} from "@/atoms";

import { fetchCodeExecution } from "@/services/code-runner-api";

import { LanguageSelector } from "@/components/language-selector";
import { Button } from "@/components/ui/button";

export const EditorControls = () => {
  const [editorValue, setEditorValue] = useAtom(editorValueAtom);
  const [, setOutputValue] = useAtom(outputValueAtom);
  const [selectedLanguage, setSelectedLanguage] = useAtom(selectedLanguageAtom);
  const [isExecutingCode, setIsExecutingCode] = useAtom(isExecutingCodeAtom);

  const executeCode = async () => {
    setIsExecutingCode(true);
    const data = await fetchCodeExecution({
      body: {
        code: editorValue,
        language: selectedLanguage,
      },
    });
    setOutputValue(data.stdout);
    setIsExecutingCode(false);
  };

  const resetEditor = () => {
    setEditorValue("");
    setSelectedLanguage("");
    setOutputValue("");
  };

  return (
    <>
      <LanguageSelector />
      <Button
        className="space-x-1"
        onClick={executeCode}
        disabled={isExecutingCode}
      >
        <PlayIcon width={16} height={16} />
        <div>
          Run
        </div>
      </Button>
      <Button variant={"secondary"}>
        Export
      </Button>
      <Button
        variant={"secondary"}
        onClick={resetEditor}
      >
        <RefreshCcw width={16} height={16} />
      </Button>
    </>
  );
};
