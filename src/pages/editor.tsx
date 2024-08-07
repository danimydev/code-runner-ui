import { useAtom } from "jotai";

import { isExecutingCodeAtom, outputValueAtom } from "@/atoms";

import { getUserAgentName } from "@/lib/utils";

import { EditorControls } from "@/components/editor-controls";
import { MonacoEditor } from "@/components/monaco-editor";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Textarea } from "@/components/ui/textarea";

export const EditorPage = () => {
  const [outputValue] = useAtom(outputValueAtom);
  const [isExecutingCode] = useAtom(isExecutingCodeAtom);

  return (
    <div>
      <div className="flex items-center justify-between border py-2 px-6 rounded-tr-lg rounded-tl-lg">
        <div className="font-bold">
          Playground
        </div>
        <div className="space-x-2 items-center flex">
          <EditorControls />
        </div>
      </div>
      <ResizablePanelGroup
        direction="horizontal"
        className="rounded-lg border rounded-tr-none rounded-tl-none border-t-0 py-2 px-6"
      >
        <ResizablePanel>
          <div className="flex h-[500px] items-center justify-center">
            <MonacoEditor />
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel>
          <div className="h-full px-2">
            <code className="text-green-600 dark:text-green-500 text-xs">
              {getUserAgentName().toLowerCase()}/code-runner %
            </code>
            {!isExecutingCode
              ? (
                <Textarea
                  className="text-xs w-full font-mono h-full border-none resize-none p-0"
                  value={outputValue}
                  readOnly
                />
              )
              : (
                <Textarea
                  className="text-xs w-full font-mono h-full border-none resize-none p-0"
                  value={"loading..."}
                  readOnly
                />
              )}
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};
