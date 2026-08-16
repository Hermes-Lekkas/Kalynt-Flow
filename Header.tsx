import React, { useState, useRef, useEffect } from 'react';
import { Translation, availableLanguages, LanguageInfo } from '../i18n';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sun, 
  Moon, 
  Type, 
  Printer, 
  Mail, 
  FileText, 
  Shield, 
  UserX, 
  Search,
  Check, 
  ChevronDown
} from 'lucide-react';

interface HeaderProps {
  t: Translation;
  activeDoc: 'terms' | 'privacy' | 'deletion';
  setActiveDoc: (doc: 'terms' | 'privacy' | 'deletion') => void;
  isDark: boolean;
  setIsDark: (dark: boolean) => void;
  isLargeFont: boolean;
  setIsLargeFont: (large: boolean) => void;
  currentLang: string;
  onSelectLang: (code: string) => void;
  onPrint: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  t,
  activeDoc,
  setActiveDoc,
  isDark,
  setIsDark,
  isLargeFont,
  setIsLargeFont,
  currentLang,
  onSelectLang,
  onPrint,
}) => {
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [langSearch, setLangSearch] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLangInfo = availableLanguages.find(l => l.code === currentLang) || availableLanguages[0];

  const filteredLanguages = availableLanguages.filter(l => 
    l.name.toLowerCase().includes(langSearch.toLowerCase()) || 
    l.nativeName.toLowerCase().includes(langSearch.toLowerCase()) ||
    l.code.toLowerCase().includes(langSearch.toLowerCase())
  );

  const tabs: { id: 'terms' | 'privacy' | 'deletion'; label: string; icon: typeof FileText }[] = [
    { id: 'terms', label: t.nav.terms, icon: FileText },
    { id: 'privacy', label: t.nav.privacy, icon: Shield },
    { id: 'deletion', label: t.nav.deletion, icon: UserX },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/95 dark:bg-[#121212]/95 border-b border-neutral-200 dark:border-neutral-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 gap-4">
          
          {/* Brand Logo & Title */}
          <motion.div 
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-3 min-w-0"
          >
            <motion.img 
              whileHover={{ scale: 1.06, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              src="/Kalynt_Flow_Icon.png" 
              alt="Kalynt Flow" 
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl shadow-xs shrink-0 object-contain cursor-pointer"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = 'none';
              }}
            />
            <div className="truncate">
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg sm:text-xl text-neutral-900 dark:text-neutral-50 tracking-tight">
                  Kalynt Flow
                </span>
                <span className="hidden md:inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                  Legal & Privacy
                </span>
              </div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 hidden sm:block truncate">
                com.aistudio.kalyntflow.app
              </p>
            </div>
          </motion.div>

          {/* Center Tabs Navigation with Fluid Layout Pill */}
          <nav className="hidden lg:flex items-center gap-1 p-1 bg-neutral-100 dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 relative">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeDoc === tab.id;
              return (
                <button
                  key={tab.id}
                  id={`tab-btn-${tab.id}`}
                  onClick={() => setActiveDoc(tab.id)}
                  className={`relative flex items-center gap-2 px-4 py-1.5 rounded-lg text-sm font-medium transition-colors z-10 ${
                    isActive
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="headerActivePill"
                      className="absolute inset-0 bg-white dark:bg-neutral-800 rounded-lg shadow-xs border border-neutral-200/60 dark:border-neutral-700/60 -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Controls (Language, Theme, Font, Print, Contact) */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            
            {/* Language Selector Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                id="language-picker-btn"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm font-medium bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-800 transition-colors"
                title={t.nav.language}
                aria-label={t.nav.language}
              >
                <span className="text-base">{currentLangInfo.flag}</span>
                <span className="hidden sm:inline-block max-w-[80px] truncate">{currentLangInfo.nativeName}</span>
                <ChevronDown className={`w-3.5 h-3.5 text-neutral-400 transition-transform duration-200 ${langDropdownOpen ? 'rotate-180' : ''}`} />
              </motion.button>

              <AnimatePresence>
                {langDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.15, ease: 'easeOut' }}
                    className="absolute right-0 mt-2 w-64 max-h-96 bg-white dark:bg-neutral-900 rounded-xl shadow-xl border border-neutral-200 dark:border-neutral-800 py-2 z-50 flex flex-col"
                  >
                    {/* Search inside language dropdown */}
                    <div className="px-3 pb-2 border-b border-neutral-100 dark:border-neutral-800">
                      <div className="relative">
                        <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-neutral-400" />
                        <input
                          type="text"
                          placeholder={t.nav.searchLangPlaceholder}
                          value={langSearch}
                          onChange={(e) => setLangSearch(e.target.value)}
                          className="w-full pl-8 pr-2 py-1 text-xs rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-1 focus:ring-blue-500"
                          autoFocus
                        />
                      </div>
                    </div>

                    {/* List of 14 languages */}
                    <div className="overflow-y-auto max-h-64 py-1">
                      {filteredLanguages.map((lang: LanguageInfo) => (
                        <button
                          key={lang.code}
                          id={`lang-select-${lang.code}`}
                          onClick={() => {
                            onSelectLang(lang.code);
                            setLangDropdownOpen(false);
                            setLangSearch('');
                          }}
                          className={`w-full flex items-center justify-between px-3 py-2 text-xs sm:text-sm text-left hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors ${
                            currentLang === lang.code ? 'font-semibold text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-950/30' : 'text-neutral-700 dark:text-neutral-300'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-base">{lang.flag}</span>
                            <span>{lang.nativeName}</span>
                            <span className="text-xs text-neutral-400">({lang.name})</span>
                          </div>
                          {currentLang === lang.code && <Check className="w-4 h-4 text-blue-600 dark:text-blue-400" />}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Font Size Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              id="font-size-toggle-btn"
              onClick={() => setIsLargeFont(!isLargeFont)}
              className={`p-2 rounded-lg text-sm border transition-colors ${
                isLargeFont 
                  ? 'bg-blue-50 dark:bg-blue-950/60 border-blue-300 dark:border-blue-700 text-blue-600 dark:text-blue-400' 
                  : 'bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300'
              }`}
              title={t.nav.fontSize}
              aria-label={t.nav.fontSize}
            >
              <Type className="w-4 h-4" />
            </motion.button>

            {/* Dark / Light Mode Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              id="theme-toggle-btn"
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg text-sm bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 transition-colors"
              title={t.nav.toggleTheme}
              aria-label={t.nav.toggleTheme}
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-neutral-600" />}
            </motion.button>

            {/* Print Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              id="print-doc-btn"
              onClick={onPrint}
              className="hidden sm:inline-flex p-2 rounded-lg text-sm bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 transition-colors"
              title={t.nav.print}
              aria-label={t.nav.print}
            >
              <Printer className="w-4 h-4" />
            </motion.button>

            {/* Mail Support Button */}
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              id="contact-support-btn"
              href="mailto:KalyntFlow@protonmail.com"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-xs transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{t.nav.contact}</span>
            </motion.a>
          </div>
        </div>

        {/* Mobile Sub-Navigation Tabs with Animated Indicators */}
        <div className="flex lg:hidden items-center justify-around py-2 border-t border-neutral-200 dark:border-neutral-800 relative">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeDoc === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveDoc(tab.id)}
                className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  isActive
                    ? 'text-blue-600 dark:text-blue-400 font-semibold'
                    : 'text-neutral-600 dark:text-neutral-400'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="mobileActivePill"
                    className="absolute inset-0 bg-blue-50 dark:bg-blue-950/60 rounded-lg -z-10"
                    transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                  />
                )}
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};

