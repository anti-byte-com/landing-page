import React from 'react';
import { useTranslation } from 'react-i18next';

interface LanguageSelectorProps {
  className?: string;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ className = '' }) => {
  const { i18n } = useTranslation();

  const currentLang = i18n.language;

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
        {currentLang === 'pt-BR' ? '🇧🇷' : '🇺🇸'}
      </span>
      <button
        onClick={() => changeLanguage(currentLang === 'pt-BR' ? 'en-US' : 'pt-BR')}
        className="px-3 py-1 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
        aria-label="Alternar idioma"
      >
        {currentLang === 'pt-BR' ? 'English' : 'Português'}
      </button>
      <span className="capitalize ml-1 text-xs text-gray-500 dark:text-gray-400">
        {currentLang === 'pt-BR' ? 'PT' : 'EN'}
      </span>
    </div>
  );
};

export default LanguageSelector;
