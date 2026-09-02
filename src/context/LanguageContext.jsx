import { createContext, useContext, useState } from 'react';

// Supported languages (cycle order: en → ta → kn → en)
export const LANGUAGES = {
  en: 'English',
  ta: 'தமிழ்',
  kn: 'ಕನ್ನಡ',
};

export const LANG_CYCLE = ['en', 'ta', 'kn'];

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem('gg_lang') || 'ta';
    } catch {
      return 'en';
    }
  });

  const switchLang = (code) => {
    setLang(code);
    try {
      localStorage.setItem('gg_lang', code);
    } catch {
      // ignore
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, switchLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider');
  return ctx;
}
