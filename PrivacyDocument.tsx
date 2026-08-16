import React from 'react';
import { Translation, Section } from '../i18n';
import { SectionCard, FAQAccordion } from './SectionCard';
import { motion } from 'motion/react';

interface PrivacyDocumentProps {
  t: Translation;
  filteredSections: Section[];
  onCopyLink: (id: string) => void;
  isLargeFont: boolean;
}

export const PrivacyDocument: React.FC<PrivacyDocumentProps> = ({
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

      {t.privacy.faqs && t.privacy.faqs.length > 0 && (
        <FAQAccordion
          title={t.privacy.faqTitle || 'Frequently Asked Questions'}
          faqs={t.privacy.faqs}
        />
      )}
    </motion.div>
  );
};

