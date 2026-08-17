import React from 'react';
import { Translation } from './index';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Search, 
  X, 
  Copy, 
  Check, 
  Clock, 
  FileCheck, 
  Cpu, 
  Tag, 
  Sparkles,
  Lock,
  MessageSquareOff,
  UserX
} from 'lucide-react';

interface HeroProps {
  t: Translation;
  activeDoc: 'terms' | 'privacy' | 'deletion';
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  onCopyAll: () => void;
  copied: boolean;
  wordCount: number;
  readingTime: number;
}

export const Hero: React.FC<HeroProps> = ({
  t,
  activeDoc,
  searchQuery,
  setSearchQuery,
  activeFilter,
  setActiveFilter,
  onCopyAll,
  copied,
  wordCount,
  readingTime,
}) => {
  const getHeroInfo = () => {
    switch (activeDoc) {
      case 'terms':
        return {
          title: t.hero.termsTitle,
          subtitle: t.hero.termsSubtitle,
        };
      case 'privacy':
        return {
          title: t.hero.privacyTitle,
          subtitle: t.hero.privacySubtitle,
        };
      case 'deletion':
        return {
          title: t.hero.deletionTitle,
          subtitle: t.hero.deletionSubtitle,
        };
    }
  };

  const heroInfo = getHeroInfo();

  const filterButtons = [
    { id: 'all', label: t.hero.filterAll, icon: Tag },
    { id: 'ai', label: t.hero.filterAI, icon: Sparkles },
    { id: 'privacy', label: t.hero.filterPrivacy, icon: Lock },
    { id: 'moderation', label: t.hero.filterModeration, icon: MessageSquareOff },
    { id: 'deletion', label: t.hero.filterDeletion, icon: UserX },
  ];

  return (
    <section className="bg-gradient-to-b from-blue-50/70 via-white to-transparent dark:from-blue-950/20 dark:via-neutral-900/30 dark:to-transparent border-b border-neutral-200/80 dark:border-neutral-800/80 pt-8 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compliance Badge & Copy Button */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="flex flex-wrap items-center justify-between gap-3 mb-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 shadow-xs">
            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 animate-pulse" />
            <span>{t.meta.badge}</span>
          </div>

          {/* Quick Copy Full Agreement Button with Spring Feedback */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            id="hero-copy-agreement-btn"
            onClick={onCopyAll}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium bg-white dark:bg-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-750 text-neutral-700 dark:text-neutral-300 border border-neutral-300 dark:border-neutral-700 shadow-xs transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{t.actions.copiedNotice}</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-neutral-500" />
                <span>{t.actions.copyAgreement}</span>
              </>
            )}
          </motion.button>
        </motion.div>

        {/* Hero Title & Subtitle */}
        <motion.div
          key={activeDoc}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 dark:text-neutral-50 tracking-tight mb-3">
            {heroInfo.title}
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 max-w-3xl leading-relaxed mb-6">
            {heroInfo.subtitle}
          </p>
        </motion.div>

        {/* Metadata Strip */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-neutral-500 dark:text-neutral-400 pb-6 border-b border-neutral-200/60 dark:border-neutral-800/60"
        >
          <div className="flex items-center gap-1.5">
            <FileCheck className="w-3.5 h-3.5 text-blue-500" />
            <span>{t.meta.packageIdLabel} <strong className="font-mono text-neutral-700 dark:text-neutral-300">com.aistudio.kalyntflow.app</strong></span>
          </div>
          <div className="flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-indigo-500" />
            <span>{t.meta.archLabel} <strong className="text-neutral-700 dark:text-neutral-300">{t.meta.archValue}</strong></span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-emerald-500" />
            <span>{t.meta.effectiveDateLabel} <strong className="text-neutral-700 dark:text-neutral-300">{t.meta.effectiveDateValue}</strong></span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-600"></span>
            <span>{t.meta.readingTimePrefix} <strong>{readingTime} {t.meta.readingTimeSuffix}</strong> ({wordCount} {t.meta.wordsSuffix})</span>
          </div>
        </motion.div>

        {/* Search & Topic Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="pt-5 space-y-3"
        >
          {/* Search Bar */}
          <div className="relative max-w-2xl group">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400 group-focus-within:text-blue-500 transition-colors" />
            <input
              id="policy-search-input"
              type="text"
              placeholder={t.hero.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 text-sm text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-xs transition-all"
            />
            {searchQuery && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-md text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200"
              >
                <X className="w-4 h-4" />
              </motion.button>
            )}
          </div>

          {/* Filter Chips with Animated Selection Pill */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs no-scrollbar">
            {filterButtons.map((btn) => {
              const Icon = btn.icon;
              const isSelected = activeFilter === btn.id;
              return (
                <button
                  key={btn.id}
                  id={`filter-chip-${btn.id}`}
                  onClick={() => setActiveFilter(btn.id)}
                  className={`relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
                    isSelected
                      ? 'text-white'
                      : 'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-750'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeFilterPill"
                      className="absolute inset-0 bg-blue-600 rounded-lg shadow-xs -z-0"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    <Icon className="w-3.5 h-3.5" />
                    <span>{btn.label}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

