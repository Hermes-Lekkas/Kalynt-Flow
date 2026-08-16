import React, { useState } from 'react';
import { Translation, Section } from '../i18n';
import { SectionCard, FAQAccordion } from './SectionCard';
import { motion } from 'motion/react';
import { Mail, Copy, Check, Send } from 'lucide-react';

interface DeletionDocumentProps {
  t: Translation;
  filteredSections: Section[];
  onCopyLink: (id: string) => void;
  isLargeFont: boolean;
}

export const DeletionDocument: React.FC<DeletionDocumentProps> = ({
  t,
  filteredSections,
  onCopyLink,
  isLargeFont,
}) => {
  const g = t.deletion.generator;
  
  const [userEmail, setUserEmail] = useState('');
  const [scopeAuth, setScopeAuth] = useState(true);
  const [scopeCloud, setScopeCloud] = useState(true);
  const [scopeWorkspaces, setScopeWorkspaces] = useState(true);
  const [reason, setReason] = useState('');
  const [copiedRequest, setCopiedRequest] = useState(false);

  const getScopeList = () => {
    const list: string[] = [];
    if (scopeAuth) list.push(`- ${g.scopeAuth}`);
    if (scopeCloud) list.push(`- ${g.scopeCloud}`);
    if (scopeWorkspaces) list.push(`- ${g.scopeWorkspaces}`);
    return list.join('\n');
  };

  const emailBody = `To: Kalynt Flow Support (KalyntFlow@protonmail.com)
Subject: ${g.emailSubject}

Dear Kalynt Flow Support Team,

I am writing to formally request the complete, permanent deletion of my account and all associated personal data under Google Play User Data policies and international privacy regulations (GDPR / CCPA).

ACCOUNT IDENTIFIER:
- Email Address: ${userEmail.trim() || '[User Email Address]'}
- Application: Kalynt Flow Android (Package ID: com.aistudio.kalyntflow.app)

SCOPE OF REQUESTED DELETION:
${getScopeList()}

REASON / NOTES:
${reason.trim() ? reason.trim() : 'Account closure and permanent data erasure request.'}

I confirm that I am the authorized owner of this account. Please process this deletion and send written confirmation once completed.

Thank you,
${userEmail.trim() || 'Kalynt Flow User'}`;

  const handleCopyGenerator = () => {
    navigator.clipboard.writeText(emailBody);
    setCopiedRequest(true);
    setTimeout(() => setCopiedRequest(false), 2000);
  };

  const mailtoUrl = `mailto:KalyntFlow@protonmail.com?subject=${encodeURIComponent(
    g.emailSubject
  )}&body=${encodeURIComponent(emailBody)}`;

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

      {/* Interactive Formal Deletion Request Generator */}
      <motion.section 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="p-5 sm:p-6 rounded-xl bg-white dark:bg-neutral-900 border border-blue-200 dark:border-blue-900/80 shadow-sm space-y-5"
      >
        <div className="flex items-center gap-2 pb-2 border-b border-neutral-100 dark:border-neutral-800">
          <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-neutral-50">
              {g.title}
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              {g.desc}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Email input */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300">
              {g.emailLabel}
            </label>
            <input
              type="email"
              placeholder={g.emailPlaceholder}
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800/80 text-xs sm:text-sm text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>

          {/* Reason input */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300">
              {g.reasonLabel}
            </label>
            <input
              type="text"
              placeholder={g.reasonPlaceholder}
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="w-full px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800/80 text-xs sm:text-sm text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>
        </div>

        {/* Scope Checkboxes */}
        <div className="space-y-2">
          <label className="block text-xs font-semibold text-neutral-700 dark:text-neutral-300">
            {g.scopeLabel}
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
            <label className={`flex items-center gap-2 p-2.5 rounded-lg border cursor-pointer transition-all ${
              scopeAuth ? 'border-blue-400 dark:border-blue-600 bg-blue-50/50 dark:bg-blue-950/40' : 'border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800/50'
            }`}>
              <input
                type="checkbox"
                checked={scopeAuth}
                onChange={(e) => setScopeAuth(e.target.checked)}
                className="rounded text-blue-600 focus:ring-blue-500"
              />
              <span className="text-neutral-800 dark:text-neutral-200 font-medium">{g.scopeAuth}</span>
            </label>
            <label className={`flex items-center gap-2 p-2.5 rounded-lg border cursor-pointer transition-all ${
              scopeCloud ? 'border-blue-400 dark:border-blue-600 bg-blue-50/50 dark:bg-blue-950/40' : 'border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800/50'
            }`}>
              <input
                type="checkbox"
                checked={scopeCloud}
                onChange={(e) => setScopeCloud(e.target.checked)}
                className="rounded text-blue-600 focus:ring-blue-500"
              />
              <span className="text-neutral-800 dark:text-neutral-200 font-medium">{g.scopeCloud}</span>
            </label>
            <label className={`flex items-center gap-2 p-2.5 rounded-lg border cursor-pointer transition-all ${
              scopeWorkspaces ? 'border-blue-400 dark:border-blue-600 bg-blue-50/50 dark:bg-blue-950/40' : 'border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800/50'
            }`}>
              <input
                type="checkbox"
                checked={scopeWorkspaces}
                onChange={(e) => setScopeWorkspaces(e.target.checked)}
                className="rounded text-blue-600 focus:ring-blue-500"
              />
              <span className="text-neutral-800 dark:text-neutral-200 font-medium">{g.scopeWorkspaces}</span>
            </label>
          </div>
        </div>

        {/* Live Preview Box */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-neutral-700 dark:text-neutral-300">
              {g.previewTitle}
            </span>
            <div className="flex items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                id="copy-request-text-btn"
                onClick={handleCopyGenerator}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs font-medium bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 transition-colors"
              >
                {copiedRequest ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{t.actions.copiedNotice}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>{g.copyBtn}</span>
                  </>
                )}
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                id="open-email-client-btn"
                href={mailtoUrl}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-xs transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{g.sendEmailBtn}</span>
              </motion.a>
            </div>
          </div>

          <pre className="p-3.5 rounded-lg bg-neutral-900 text-neutral-200 text-xs font-mono whitespace-pre-wrap overflow-x-auto border border-neutral-800 leading-relaxed transition-all">
            {emailBody}
          </pre>
        </div>
      </motion.section>

      {t.deletion.faqs && t.deletion.faqs.length > 0 && (
        <FAQAccordion
          title={t.deletion.faqTitle || 'Frequently Asked Questions'}
          faqs={t.deletion.faqs}
        />
      )}
    </motion.div>
  );
};

