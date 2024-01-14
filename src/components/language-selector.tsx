import { useEffect, useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { useAtom } from "jotai";

import { selectedLanguageAtom } from "@/atoms";

import { fetchLanguages } from "@/services/code-runner-api";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type Language = {
  value: string;
  label: string;
};

export function LanguageSelector() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useAtom(selectedLanguageAtom);
  const [languages, setLanguages] = useState<Language[]>([]);

  useEffect(() => {
    const loadApiLanguages = async () => {
      const languages = await fetchLanguages();
      const formattedLanguages = languages.map((l) => ({
        value: l.name,
        label: `${l.name.at(0)?.toUpperCase()}${l.name.substring(1)}`,
      }));
      setLanguages(formattedLanguages);
    };
    void loadApiLanguages();
  }, [languages]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? languages.find((language) => language.value === value)?.label
            : "Select language..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search language..." />
          <CommandEmpty>No language found.</CommandEmpty>
          <CommandGroup>
            {languages.map((language) => (
              <CommandItem
                key={language.value}
                value={language.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === language.value ? "opacity-100" : "opacity-0",
                  )}
                />
                {language.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
