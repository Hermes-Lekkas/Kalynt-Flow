import React, { useState } from 'react';
import { Section, Translation } from '../i18n';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Link2, 
  Check, 
  AlertTriangle, 
  Info, 
  ShieldAlert, 
  Sparkles, 
  ChevronDown, 
  Lightbulb
} from 'lucide-react';

interface SectionCardProps {
  section: Section;
  t: Translation;
  onCopyLink: (id: string) => void;
  isLargeFont: boolean;
}

export const SectionCard: React.FC<SectionCardProps> = ({
  section,
  t,
  onCopyLink,
  isLargeFont,
}) => {
  const [copiedLink, setCopiedLink] = useState(false);

  const handleCopyLink = () => {
    onCopyLink(section.id);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const getCalloutIcon = (type?: string) => {
    switch (type) {
      case 'danger':
        return <ShieldAlert className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0" />;
      case 'purple':
        return <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400 shrink-0" />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0" />;
      default:
        return <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />;
    }
  };

  const getCalloutClasses = (type?: string) => {
    switch (type) {
      case 'danger':
        return 'bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-900 text-rose-900 dark:text-rose-200';
      case 'purple':
        return 'bg-purple-50 dark:bg-purple-950/40 border-purple-200 dark:border-purple-900 text-purple-900 dark:text-purple-200';
      case 'warning':
        return 'bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-900 text-amber-900 dark:text-amber-200';
      default:
        return 'bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-900 text-blue-900 dark:text-blue-200';
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      id={section.id}
      className="p-5 sm:p-6 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 shadow-xs hover:border-neutral-300 dark:hover:border-neutral-700 scroll-mt-24 space-y-4 transition-colors"
    >
      {/* Header with Title and Copy Anchor Link */}
      <div className="flex items-start justify-between gap-4 pb-2 border-b border-neutral-100 dark:border-neutral-800/80">
        <h2 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-neutral-50 tracking-tight">
          {section.title}
        </h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleCopyLink}
          className="inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium text-neutral-500 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          title={t.actions.copyLink}
        >
          {copiedLink ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{t.actions.copiedNotice}</span>
            </>
          ) : (
            <>
              <Link2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{t.actions.copyLink}</span>
            </>
          )}
        </motion.button>
      </div>

      {/* Key Takeaway box */}
      {section.takeaway && (
        <motion.div 
          initial={{ opacity: 0, x: -6 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-start gap-2.5 p-3 rounded-lg bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200/70 dark:border-blue-900/60"
        >
          <Lightbulb className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm font-medium text-blue-900 dark:text-blue-200">
            {section.takeaway}
          </p>
        </motion.div>
      )}

      {/* Main Paragraphs */}
      <div className={`space-y-3 ${isLargeFont ? 'text-base sm:text-lg' : 'text-sm sm:text-base'} text-neutral-700 dark:text-neutral-300 leading-relaxed`}>
        {section.content.map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </div>

      {/* Bullet points */}
      {section.bullets && section.bullets.length > 0 && (
        <ul className="space-y-2 pl-4 list-disc marker:text-blue-500 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
          {section.bullets.map((bullet, idx) => (
            <li key={idx} className="leading-relaxed">
              {bullet}
            </li>
          ))}
        </ul>
      )}

      {/* Highlight Callout */}
      {section.callout && (
        <motion.div 
          whileHover={{ scale: 1.008 }}
          transition={{ duration: 0.15 }}
          className={`p-4 rounded-xl border flex items-start gap-3 shadow-xs ${getCalloutClasses(section.callout.type)}`}
        >
          {getCalloutIcon(section.callout.type)}
          <div className="space-y-1">
            <h4 className="text-xs sm:text-sm font-bold">{section.callout.title}</h4>
            <p className="text-xs sm:text-sm leading-relaxed opacity-90">{section.callout.text}</p>
          </div>
        </motion.div>
      )}

      {/* Data Table */}
      {section.table && (
        <div className="overflow-x-auto my-3 rounded-lg border border-neutral-200 dark:border-neutral-800">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="bg-neutral-50 dark:bg-neutral-800/60 border-b border-neutral-200 dark:border-neutral-800">
                {section.table.headers.map((hdr, idx) => (
                  <th key={idx} className="px-3.5 py-2.5 font-bold text-neutral-900 dark:text-neutral-100">
                    {hdr}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800 bg-white dark:bg-neutral-900">
              {section.table.rows.map((row, rIdx) => (
                <tr key={rIdx} className="hover:bg-neutral-50/50 dark:hover:bg-neutral-800/30 transition-colors">
                  {row.map((cell, cIdx) => (
                    <td key={cIdx} className="px-3.5 py-2.5 text-neutral-700 dark:text-neutral-300">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Subsections */}
      {section.subsections && section.subsections.length > 0 && (
        <div className="space-y-3 pt-2">
          {section.subsections.map((sub, idx) => (
            <div key={idx} className="p-3.5 rounded-lg bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200/70 dark:border-neutral-800 space-y-2">
              <h4 className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-neutral-100">
                {sub.subtitle}
              </h4>
              {sub.text && (
                <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  {sub.text}
                </p>
              )}
              {sub.bullets && sub.bullets.length > 0 && (
                <ul className="space-y-1.5 pl-4 list-disc marker:text-blue-500 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
                  {sub.bullets.map((b, bIdx) => (
                    <li key={bIdx}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </motion.article>
  );
};

interface FAQAccordionProps {
  title: string;
  faqs: { q: string; a: string }[];
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ title, faqs }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="mt-8 p-5 sm:p-6 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 shadow-xs space-y-4"
    >
      <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-neutral-50">
        {title}
      </h3>
      <div className="space-y-2">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className="rounded-lg border border-neutral-200 dark:border-neutral-800 overflow-hidden"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between p-3.5 text-left text-xs sm:text-sm font-semibold text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors"
              >
                <span>{faq.q}</span>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="shrink-0 ml-2"
                >
                  <ChevronDown className="w-4 h-4 text-neutral-500" />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="p-3.5 bg-neutral-50 dark:bg-neutral-800/30 border-t border-neutral-200 dark:border-neutral-800 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

