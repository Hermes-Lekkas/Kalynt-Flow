import React from 'react';
import { Translation, Section } from '../i18n';
import { SectionCard, FAQAccordion } from './SectionCard';
import { motion } from 'motion/react';

interface TermsDocumentProps {
  t: Translation;
  filteredSections: Section[];
  onCopyLink: (id: string) => void;
  isLargeFont: boolean;
}

export const TermsDocument: React.FC<TermsDocumentProps> = ({
  t,
  filteredSections,
  onCopyLink,
  isLargeFont,
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25 }}
      className="space-y-6"
    >
      {filteredSections.map((sec) => (
        <SectionCard
          key={sec.id}
          section={sec}
          t={t}
          onCopyLink={onCopyLink}
          isLargeFont={isLargeFont}
        />
      ))}

      {t.terms.faqs && t.terms.faqs.length > 0 && (
        <FAQAccordion
          title={t.terms.faqTitle || 'Frequently Asked Questions'}
          faqs={t.terms.faqs}
        />
      )}
    </motion.div>
  );
};

