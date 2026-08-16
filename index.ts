import { Translation } from './types';
import { en } from './en';
import { zh } from './zh';
import { de } from './de';
import { fr } from './fr';
import { ru } from './ru';
import { el } from './el';
import { tr } from './tr';
import { it } from './it';
import { es } from './es';
import { pl } from './pl';
import { fi } from './fi';
import { sv } from './sv';
import { no } from './no';
import { da } from './da';

export * from './types';

export interface LanguageInfo {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
}

export const languages: Record<string, Translation> = {
  en,
  zh,
  de,
  fr,
  ru,
  el,
  tr,
  it,
  es,
  pl,
  fi,
  sv,
  no,
  da,
};

export const availableLanguages: LanguageInfo[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
  { code: 'zh', name: 'Chinese', nativeName: '简体中文', flag: '🇨🇳' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский', flag: '🇷🇺' },
  { code: 'el', name: 'Greek', nativeName: 'Ελληνικά', flag: '🇬🇷' },
  { code: 'tr', name: 'Turkish', nativeName: 'Türkçe', flag: '🇹🇷' },
  { code: 'pl', name: 'Polish', nativeName: 'Polski', flag: '🇵🇱' },
  { code: 'fi', name: 'Finnish', nativeName: 'Suomi', flag: '🇫🇮' },
  { code: 'sv', name: 'Swedish', nativeName: 'Svenska', flag: '🇸🇪' },
  { code: 'no', name: 'Norwegian', nativeName: 'Norsk', flag: '🇳🇴' },
  { code: 'da', name: 'Danish', nativeName: 'Dansk', flag: '🇩🇰' },
];

export function getTranslation(langCode: string): Translation {
  return languages[langCode] || languages.en;
}
