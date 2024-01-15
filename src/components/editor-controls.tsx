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
  const [editorValue] = useAtom(editorValueAtom);
  const [, setOutputValue] = useAtom(outputValueAtom);
  const [selectedLanguage] = useAtom(selectedLanguageAtom);
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
      <Button variant={"secondary"}>Export</Button>
      <Button variant={"secondary"}>
        <RefreshCcw width={16} height={16} />
      </Button>
    </>
  );
};
