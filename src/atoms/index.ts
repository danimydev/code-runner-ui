import { atom } from "jotai";
import {fetchLanguages} from "@/services/code-runner-api";

const languages = await fetchLanguages();

export const languagesAtom = atom(languages);

export const selectedLanguageAtom = atom("");

export const editorValueAtom = atom("");

export const outputValueAtom = atom("");

export const isExecutingCodeAtom = atom(false);
