export interface FAQItem {
  q: string;
  a: string;
}

export interface SectionContent {
  id: string;
  title: string;
  takeaway?: string;
  content: string[]; // paragraph strings or HTML-friendly strings
  bullets?: string[];
  callout?: {
    type: 'info' | 'warning' | 'danger' | 'success' | 'purple';
    title: string;
    text: string;
  };
  table?: {
    headers: string[];
    rows: string[][];
  };
  subsections?: {
    subtitle: string;
    text?: string;
    bullets?: string[];
  }[];
}

export type Section = SectionContent;

export interface Translation {
  langCode: string;
  langName: string;
  nativeName: string;
  flag: string;
  
  meta: {
    title: string;
    description: string;
    badge: string;
    packageIdLabel: string;
    archLabel: string;
    archValue: string;
    effectiveDateLabel: string;
    effectiveDateValue: string;
    readingTimePrefix: string;
    readingTimeSuffix: string;
    wordsSuffix: string;
  };

  nav: {
    terms: string;
    privacy: string;
    deletion: string;
    fontSize: string;
    toggleTheme: string;
    print: string;
    contact: string;
    language: string;
    searchLangPlaceholder: string;
  };

  hero: {
    termsTitle: string;
    termsSubtitle: string;
    privacyTitle: string;
    privacySubtitle: string;
    deletionTitle: string;
    deletionSubtitle: string;
    searchPlaceholder: string;
    filterAll: string;
    filterAI: string;
    filterPrivacy: string;
    filterModeration: string;
    filterDeletion: string;
  };

  pillars: {
    privacyTitle: string;
    privacyDesc: string;
    aiTitle: string;
    aiDesc: string;
    ugcTitle: string;
    ugcDesc: string;
    deletionTitle: string;
    deletionDesc: string;
  };

  sidebar: {
    tocTitle: string;
  };

  actions: {
    copyLink: string;
    copyAgreement: string;
    copiedNotice: string;
    backToTop: string;
  };

  terms: {
    sections: SectionContent[];
    faqTitle: string;
    faqs: FAQItem[];
  };

  privacy: {
    sections: SectionContent[];
    faqTitle: string;
    faqs: FAQItem[];
  };

  deletion: {
    sections: SectionContent[];
    generator: {
      title: string;
      desc: string;
      emailLabel: string;
      emailPlaceholder: string;
      scopeLabel: string;
      scopeAuth: string;
      scopeCloud: string;
      scopeWorkspaces: string;
      reasonLabel: string;
      reasonPlaceholder: string;
      previewTitle: string;
      copyBtn: string;
      sendEmailBtn: string;
      emailSubject: string;
    };
    faqTitle: string;
    faqs: FAQItem[];
  };

  footer: {
    brandSubtitle: string;
    rights: string;
    termsLink: string;
    privacyLink: string;
    deletionLink: string;
    contactSupport: string;
  };
}
