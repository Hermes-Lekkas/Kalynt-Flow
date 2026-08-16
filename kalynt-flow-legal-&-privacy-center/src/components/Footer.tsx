import React from 'react';
import { Translation } from '../i18n';
import { motion } from 'motion/react';
import { Mail, Shield, FileText, UserX } from 'lucide-react';

interface FooterProps {
  t: Translation;
  setActiveDoc: (doc: 'terms' | 'privacy' | 'deletion') => void;
}

export const Footer: React.FC<FooterProps> = ({ t, setActiveDoc }) => {
  return (
    <footer className="mt-16 border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121212] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-neutral-100 dark:border-neutral-800">
          
          {/* Logo & Brand description */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2.5">
              <img 
                src="/Kalynt_Flow_Icon.png" 
                alt="Kalynt Flow" 
                className="w-7 h-7 rounded-lg object-contain"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = 'none';
                }}
              />
              <span className="font-bold text-base text-neutral-900 dark:text-neutral-100">
                Kalynt Flow
              </span>
            </div>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 max-w-md">
              {t.footer.brandSubtitle}
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-neutral-600 dark:text-neutral-400">
            <motion.button
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => {
                setActiveDoc('terms');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{t.footer.termsLink}</span>
            </motion.button>
            <motion.button
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => {
                setActiveDoc('privacy');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Shield className="w-3.5 h-3.5" />
              <span>{t.footer.privacyLink}</span>
            </motion.button>
            <motion.button
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => {
                setActiveDoc('deletion');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <UserX className="w-3.5 h-3.5" />
              <span>{t.footer.deletionLink}</span>
            </motion.button>
            <motion.a
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.96 }}
              href="mailto:KalyntFlow@protonmail.com"
              className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{t.footer.contactSupport}</span>
            </motion.a>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-neutral-400 dark:text-neutral-500">
          <p>
            © {new Date().getFullYear()} Kalynt Flow. {t.footer.rights}
          </p>
          <p className="font-mono text-[11px]">
            Package: com.aistudio.kalyntflow.app
          </p>
        </div>
      </div>
    </footer>
  );
};

