import { atom } from "jotai";
import { atomWithQuery } from "jotai-tanstack-query";

import { fetchLanguages } from "@/services/code-runner-api";

export const languagesAtom = atomWithQuery((_get) => ({
  queryKey: ['languages'],
  queryFn: async () => await fetchLanguages(),
}));

export const selectedLanguageAtom = atom("");

export const editorValueAtom = atom("");

export const outputValueAtom = atom("");

export const isExecutingCodeAtom = atom(false);
