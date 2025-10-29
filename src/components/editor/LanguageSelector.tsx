import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { languages } from "./languages";

export interface LanguageSelectorProps {
  language: string;
  setLanguage: (language: string) => void;
}

export const LanguageSelector = ({
  language,
  setLanguage,
}: LanguageSelectorProps) => {
  const handleLanguageChange = (value: string) => {
    setLanguage(value);
    localStorage.setItem("buggle-selected-language", value);
  };

  return (
    <Select value={language} onValueChange={handleLanguageChange}>
      <SelectTrigger className="cursor-pointer shadow-md rounded-lg px-4">
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="rounded-lg">
        <SelectGroup>
          <SelectLabel>Languages</SelectLabel>
          {Object.entries(languages).map(([lang, version]) => {
            const languageName = lang.toLowerCase();
            return (
              <SelectItem
                className="cursor-pointer flex items-center justify-between gap-2"
                key={lang}
                value={lang}
              >
                <span className="text-foreground/70 font-semibold font-mono">
                  {languageName}
                </span>
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
