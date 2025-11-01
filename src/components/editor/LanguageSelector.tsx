import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { languageVersions, type Language } from "@/lib/languageVersions";

export interface LanguageSelectorProps {
  language: Language;
  setLanguage: (language: Language) => void;
}

export const LanguageSelector = ({
  language,
  setLanguage,
}: LanguageSelectorProps) => {
  const handleLanguageChange = (value: string) => {
    // Explicit type guard: only setLanguage if value is a supported Language
    if (Object.keys(languageVersions).includes(value)) {
      setLanguage(value as Language);
      localStorage.setItem("buggle-selected-language", value);
    }
  };

  return (
    <Select value={language} onValueChange={handleLanguageChange}>
      <SelectTrigger className="cursor-pointer shadow-md rounded-lg px-4">
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="rounded-lg">
        <SelectGroup>
          <SelectLabel>Languages</SelectLabel>
          {Object.entries(languageVersions).map(([lang, version]) => {
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
