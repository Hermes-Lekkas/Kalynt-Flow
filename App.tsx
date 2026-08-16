import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { getTranslation, Translation, Section } from './i18n';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Pillars } from './components/Pillars';
import { SidebarTOC } from './components/SidebarTOC';
import { TermsDocument } from './components/TermsDocument';
import { PrivacyDocument } from './components/PrivacyDocument';
import { DeletionDocument } from './components/DeletionDocument';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export default function App() {
  // 1. Language State
  const [currentLang, setCurrentLang] = useState<string>(() => {
    const saved = localStorage.getItem('kf_lang');
    if (saved) return saved;
    // Auto-detect browser language if available
    const navLang = navigator.language?.slice(0, 2).toLowerCase();
    const supported = ['en', 'zh', 'de', 'fr', 'es', 'it', 'ru', 'el', 'tr', 'pl', 'fi', 'sv', 'no', 'da'];
    return supported.includes(navLang) ? navLang : 'en';
  });

  const t: Translation = useMemo(() => getTranslation(currentLang), [currentLang]);

  const handleSelectLang = (code: string) => {
    setCurrentLang(code);
    localStorage.setItem('kf_lang', code);
    showToast(`Language switched to ${code.toUpperCase()}`);
  };

  // 2. Theme State (Dark AMOLED / Light)
  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem('kf_theme');
    if (saved) return saved === 'dark';
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
      localStorage.setItem('kf_theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.removeAttribute('data-theme');
      localStorage.setItem('kf_theme', 'light');
    }
  }, [isDark]);

  // 3. Font Size State (Standard / Large)
  const [isLargeFont, setIsLargeFont] = useState<boolean>(() => {
    return localStorage.getItem('kf_font_size') === 'large';
  });

  const handleToggleFontSize = (large: boolean) => {
    setIsLargeFont(large);
    localStorage.setItem('kf_font_size', large ? 'large' : 'normal');
    showToast(large ? 'Font size: Large' : 'Font size: Standard');
  };

  // 4. Document Tab State
  const [activeDoc, setActiveDoc] = useState<'terms' | 'privacy' | 'deletion'>('terms');

  // 5. Search & Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  // 6. Active Section for TOC ScrollSpy
  const [activeSectionId, setActiveSectionId] = useState<string>('');

  // 7. Scroll Progress & Back to Top
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // 8. Toast Feedback
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = useCallback((msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  }, []);

  // Update HTML document title & description on language/doc change
  useEffect(() => {
    document.title = `${t.meta.title}`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', t.meta.description);
    }
  }, [t]);

  // Handle URL hash on initial load
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash.startsWith('priv')) {
      setActiveDoc('privacy');
    } else if (hash.startsWith('del')) {
      setActiveDoc('deletion');
    } else if (hash.startsWith('terms')) {
      setActiveDoc('terms');
    }
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  }, []);

  // Window scroll event listener for progress bar & back-to-top & scrollspy
  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(scrolled);
      setShowBackToTop(winScroll > 350);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Get active raw sections based on current doc
  const currentRawSections: Section[] = useMemo(() => {
    switch (activeDoc) {
      case 'terms':
        return t.terms.sections;
      case 'privacy':
        return t.privacy.sections;
      case 'deletion':
        return t.deletion.sections;
    }
  }, [activeDoc, t]);

  // Filter sections by search query and category chips
  const filteredSections = useMemo(() => {
    return currentRawSections.filter((sec) => {
      // Category filter check
      if (activeFilter === 'ai' && !sec.id.includes('ai')) return false;
      if (activeFilter === 'privacy' && !sec.id.includes('priv') && !sec.id.includes('storage') && !sec.id.includes('github')) return false;
      if (activeFilter === 'moderation' && !sec.id.includes('ugc')) return false;
      if (activeFilter === 'deletion' && !sec.id.includes('del')) return false;

      // Text search check
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      const matchTitle = sec.title.toLowerCase().includes(q);
      const matchContent = sec.content.some((c) => c.toLowerCase().includes(q));
      const matchBullets = sec.bullets?.some((b) => b.toLowerCase().includes(q));
      const matchTakeaway = sec.takeaway?.toLowerCase().includes(q);
      const matchCallout = sec.callout?.text.toLowerCase().includes(q) || sec.callout?.title.toLowerCase().includes(q);
      
      return matchTitle || matchContent || matchBullets || matchTakeaway || matchCallout;
    });
  }, [currentRawSections, activeFilter, searchQuery]);

  // Calculate word count & reading time
  const { wordCount, readingTime } = useMemo(() => {
    let text = '';
    currentRawSections.forEach((s) => {
      text += s.title + ' ' + s.content.join(' ') + ' ';
      if (s.bullets) text += s.bullets.join(' ') + ' ';
      if (s.takeaway) text += s.takeaway + ' ';
    });
    const words = text.trim().split(/\s+/).filter(Boolean).length;
    const minutes = Math.max(1, Math.ceil(words / 180));
    return { wordCount: words, readingTime: minutes };
  }, [currentRawSections]);

  // Copy full document agreement
  const [copiedAll, setCopiedAll] = useState(false);
  const handleCopyAll = () => {
    let fullText = `${t.meta.title}\n`;
    fullText += `Package: com.aistudio.kalyntflow.app\n`;
    fullText += `Effective: ${t.meta.effectiveDateValue}\n\n`;
    fullText += `--------------------------------------------------\n\n`;

    currentRawSections.forEach((sec) => {
      fullText += `${sec.title}\n\n`;
      if (sec.takeaway) fullText += `Key Principle: ${sec.takeaway}\n\n`;
      sec.content.forEach((p) => {
        fullText += `${p}\n\n`;
      });
      if (sec.bullets) {
        sec.bullets.forEach((b) => {
          fullText += `• ${b}\n`;
        });
        fullText += '\n';
      }
      if (sec.callout) {
        fullText += `[${sec.callout.title}]: ${sec.callout.text}\n\n`;
      }
      fullText += `--------------------------------------------------\n\n`;
    });

    navigator.clipboard.writeText(fullText);
    setCopiedAll(true);
    showToast(t.actions.copiedNotice);
    setTimeout(() => setCopiedAll(false), 2000);
  };

  // Copy Section Link
  const handleCopyLink = (id: string) => {
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    navigator.clipboard.writeText(url);
    showToast(t.actions.copiedNotice);
  };

  // Pillar click handler
  const handleSelectPillar = (pillarId: string) => {
    if (pillarId === 'privacy') {
      setActiveDoc('privacy');
      setActiveFilter('privacy');
    } else if (pillarId === 'ai') {
      setActiveDoc('terms');
      setActiveFilter('ai');
    } else if (pillarId === 'moderation') {
      setActiveDoc('terms');
      setActiveFilter('moderation');
    } else if (pillarId === 'deletion') {
      setActiveDoc('deletion');
      setActiveFilter('deletion');
    }
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  const handlePrint = () => {
    window.print();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 dark:bg-black text-neutral-900 dark:text-neutral-100 transition-colors duration-200">
      
      {/* Top Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[3px] z-[60] bg-transparent pointer-events-none">
        <motion.div 
          className="h-full bg-blue-600 dark:bg-blue-400" 
          style={{ width: `${scrollProgress}%` }}
          transition={{ ease: 'easeOut', duration: 0.1 }}
        />
      </div>

      {/* Header */}
      <Header
        t={t}
        activeDoc={activeDoc}
        setActiveDoc={(doc) => {
          setActiveDoc(doc);
          setActiveFilter('all');
          setSearchQuery('');
        }}
        isDark={isDark}
        setIsDark={setIsDark}
        isLargeFont={isLargeFont}
        setIsLargeFont={handleToggleFontSize}
        currentLang={currentLang}
        onSelectLang={handleSelectLang}
        onPrint={handlePrint}
      />

      {/* Hero Section */}
      <Hero
        t={t}
        activeDoc={activeDoc}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        onCopyAll={handleCopyAll}
        copied={copiedAll}
        wordCount={wordCount}
        readingTime={readingTime}
      />

      {/* Pillars */}
      <Pillars
        t={t}
        onSelectPillar={handleSelectPillar}
      />

      {/* Main Document Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Table of contents sidebar */}
          <SidebarTOC
            t={t}
            sections={filteredSections}
            activeSectionId={activeSectionId}
            onSelectSection={(id) => {
              setActiveSectionId(id);
              const el = document.getElementById(id);
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          />

          {/* Active Document Viewer with smooth tab fade */}
          <div className="flex-1 w-full min-w-0">
            <AnimatePresence mode="wait">
              {activeDoc === 'terms' && (
                <TermsDocument
                  key="terms"
                  t={t}
                  filteredSections={filteredSections}
                  onCopyLink={handleCopyLink}
                  isLargeFont={isLargeFont}
                />
              )}

              {activeDoc === 'privacy' && (
                <PrivacyDocument
                  key="privacy"
                  t={t}
                  filteredSections={filteredSections}
                  onCopyLink={handleCopyLink}
                  isLargeFont={isLargeFont}
                />
              )}

              {activeDoc === 'deletion' && (
                <DeletionDocument
                  key="deletion"
                  t={t}
                  filteredSections={filteredSections}
                  onCopyLink={handleCopyLink}
                  isLargeFont={isLargeFont}
                />
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer
        t={t}
        setActiveDoc={(doc) => {
          setActiveDoc(doc);
          setActiveFilter('all');
          setSearchQuery('');
        }}
      />

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.92 }}
            id="back-to-top-btn"
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-xl transition-colors z-40"
            title={t.actions.backToTop}
            aria-label={t.actions.backToTop}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Toast Notification */}
      <Toast message={toastMessage} />
    </div>
  );
}

