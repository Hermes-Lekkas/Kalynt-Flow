import { Translation } from './types';

export const en: Translation = {
  langCode: 'en',
  langName: 'English',
  nativeName: 'English',
  flag: 'US',

  meta: {
    title: 'Kalynt Flow — Legal, Terms of Service & Privacy Policy',
    description: 'Official Terms of Service, Privacy Policy, and User Data Deletion compliance documentation for Kalynt Flow Android application.',
    badge: 'Google Play Store Policy Compliant',
    packageIdLabel: 'Package ID:',
    archLabel: 'Architecture:',
    archValue: 'Offline-First (Room SQLite + Firestore)',
    effectiveDateLabel: 'Effective Date:',
    effectiveDateValue: 'August 16, 2026',
    readingTimePrefix: 'Estimated reading time:',
    readingTimeSuffix: 'mins',
    wordsSuffix: 'words',
  },

  nav: {
    terms: 'Terms of Service',
    privacy: 'Privacy Policy',
    deletion: 'Account Deletion',
    fontSize: 'Toggle Font Size',
    toggleTheme: 'Toggle Dark/Light Mode',
    print: 'Print Document',
    contact: 'Contact Support',
    language: 'Language',
    searchLangPlaceholder: 'Search language...',
  },

  hero: {
    termsTitle: 'Terms of Service',
    termsSubtitle: 'Review the legal terms, acceptable use policies, generative AI safety guardrails, and data protections that govern Kalynt Flow.',
    privacyTitle: 'Privacy Policy',
    privacySubtitle: 'Transparent details on how Kalynt Flow stores your data locally on Android via SQLite, synchronizes with Google Cloud, and protects your personal privacy.',
    deletionTitle: 'Account & Data Deletion',
    deletionSubtitle: 'Step-by-step instructions, automatic deletion tools, and formal request generators to permanently purge your account and cloud records.',
    searchPlaceholder: 'Search policies (e.g. "AI reporting", "delete data", "GitHub token", "moderation")...',
    filterAll: 'All Clauses',
    filterAI: 'AI Safety & Guardrails',
    filterPrivacy: 'Privacy & Encryption',
    filterModeration: 'UGC & Moderation',
    filterDeletion: 'Account Deletion',
  },

  pillars: {
    privacyTitle: 'Offline-First Privacy',
    privacyDesc: 'All tasks, notes, and calendars reside in on-device SQLite storage by default. Cloud synchronization occurs only when explicitly authenticated.',
    aiTitle: 'AI Safety & Guardrails',
    aiDesc: 'Mandatory AI-Generated labeling on all model responses, built-in output reporting, and dynamic safety prompt filters.',
    ugcTitle: 'Zero-Tolerance UGC',
    ugcDesc: '1-tap message reporting, immediate member blocking, and proactive moderation compliant with Google Play safety requirements.',
    deletionTitle: '1-Tap Account Deletion',
    deletionDesc: 'Unconditional right to delete your entire local database, cloud Firestore documents, and auth credentials instantly in-app or via email.',
  },

  sidebar: {
    tocTitle: 'Table of Contents',
  },

  actions: {
    copyLink: 'Copy Link',
    copyAgreement: 'Copy Full Agreement',
    copiedNotice: 'Copied to clipboard!',
    backToTop: 'Back to top',
  },

  terms: {
    sections: [
      {
        id: 'terms-acceptance',
        title: '1. Acceptance of Terms',
        takeaway: 'By installing or using Kalynt Flow, you enter into a legally binding agreement under these terms.',
        content: [
          'Welcome to Kalynt Flow. These Terms of Service ("Terms") constitute a legally binding agreement between you ("User", "you", or "your") and the developers of Kalynt Flow ("we", "us", or "our") regarding your use of the Kalynt Flow mobile application for Android and related cloud synchronization services.',
          'By downloading, installing, launching, or using Kalynt Flow, you affirm that you have read, understood, and agreed to be bound by these Terms. If you do not agree to these Terms, you must discontinue use and uninstall the application immediately.'
        ]
      },
      {
        id: 'terms-services',
        title: '2. Description of Services & Architecture',
        takeaway: 'Kalynt Flow provides offline-first productivity, workspace orchestration, and optional cloud sync.',
        content: [
          'Kalynt Flow is an offline-first productivity, task orchestration, technical knowledge base, and team workspace application. Key modules include:'
        ],
        bullets: [
          'Hierarchical Workspaces: Isolated environments for personal, team, or project workflows with scoped member access.',
          'Task & Subtask Orchestration: Priority tracking (Low, Medium, High, Urgent), due date scheduling, and interactive checklist items.',
          'Rich Markdown Documentation: Syntax-highlighted notes, custom tagging, and full-text local search.',
          'Visual Calendar: Time-blocking, agenda views, and task timeline synchronization.',
          'GitHub Client Integration: Direct client-side repository, commit, and issue inspection via the official GitHub REST API.',
          'Team Workspace Channels: Real-time group collaboration and channel-based chat.',
          'Context-Aware AI Copilot: Task automation, summarization, and interactive productivity tools.'
        ]
      },
      {
        id: 'terms-accounts',
        title: '3. User Accounts & Security',
        content: [
          'Core local productivity tools operate without requiring an online account. Online cloud synchronization, shared team workspaces, and Pro features require authentication via:',
          'You agree to maintain the confidentiality of your account credentials and accept full responsibility for all activities conducted under your authenticated profile.'
        ],
        bullets: [
          'Google Sign-In: Secure authentication facilitated by Android Jetpack Credential Manager.',
          'Email/Password: Authentication processed securely through Google Firebase Auth.'
        ]
      },
      {
        id: 'terms-ugc',
        title: '4. User Content & UGC Zero-Tolerance Policy',
        content: [
          'Kalynt Flow allows users to create notes, organize tasks, and post messages in shared workspace channels. You retain full ownership of the intellectual property you generate.'
        ],
        callout: {
          type: 'danger',
          title: 'Zero-Tolerance Policy for Objectionable Content & Abusive Behavior',
          text: 'In strict compliance with Google Play Developer Policy on User-Generated Content (UGC), Kalynt Flow enforces a strict zero-tolerance policy against objectionable content, hate speech, harassment, sexually explicit material, violence incitement, or copyright infringement.'
        },
        subsections: [
          {
            subtitle: 'Built-In Moderation & Reporting Mechanisms',
            bullets: [
              '1-Tap In-App Reporting: Users can flag any objectionable message, note, or channel directly within the UI.',
              'Instant User Blocking: Users can block abusive members with 1 tap, immediately filtering their content from view.',
              '24-Hour Triage: Our moderation team reviews flagged reports within 24 hours and terminates offending accounts.'
            ]
          }
        ]
      },
      {
        id: 'terms-ai',
        title: '5. Generative AI Services & Safety Guardrails',
        content: [
          'Kalynt Flow integrates Generative AI features powered by Google Gemini API to assist with task generation, markdown formatting, summarization, and workflow automation.'
        ],
        callout: {
          type: 'purple',
          title: 'Explicit AI Transparency & Disclosure',
          text: 'All AI-generated responses are explicitly identified within the interface with an "AI-Generated Response" badge and persistent disclosure banner.'
        },
        subsections: [
          {
            subtitle: 'AI Output Flagging & Continuous Safety Refinement',
            text: 'Users can flag any AI output that produces inaccurate, offensive, or inappropriate content using the in-app reporting button. Flagged prompts undergo safety review and feed into dynamic system prompt guardrails.'
          }
        ]
      },
      {
        id: 'terms-github',
        title: '6. Third-Party Integrations (GitHub REST API)',
        content: [
          'Kalynt Flow offers optional client-side GitHub repository inspection. GitHub Personal Access Tokens (PAT) are stored exclusively in Android EncryptedSharedPreferences on your local device and are NEVER transmitted to Kalynt Flow backend servers.'
        ]
      },
      {
        id: 'terms-billing',
        title: '7. Subscriptions, Payments & Google Play Billing',
        content: [
          'All digital purchases, upgrades, and recurring Pro subscriptions are processed exclusively through Google Play In-App Billing in full compliance with Google Play Developer Policies. Subscription management, renewals, and cancellations are handled directly via your Google Play account.'
        ]
      },
      {
        id: 'terms-disclaimers',
        title: '8. Disclaimers & Limitation of Liability',
        content: [
          'Kalynt Flow is provided "AS IS" and "AS AVAILABLE" without warranties of any kind, express or implied. To the maximum extent permitted by applicable law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages.'
        ]
      },
      {
        id: 'terms-contact',
        title: '9. Contact & Support',
        content: [
          'For legal inquiries, dispute resolution, or technical support, contact our dedicated legal compliance team at KalyntFlow@protonmail.com.'
        ]
      }
    ],
    faqTitle: 'Frequently Asked Questions (Terms & Legal)',
    faqs: [
      {
        q: 'Do I need an account to use Kalynt Flow?',
        a: 'No. You can use all core productivity tools (tasks, markdown notes, calendar) entirely offline without an account. An account is only needed if you want cloud sync or team workspaces.'
      },
      {
        q: 'Where are my GitHub Personal Access Tokens stored?',
        a: 'GitHub tokens are stored strictly inside your local device hardware-backed EncryptedSharedPreferences (Android Keystore). They never touch our servers.'
      },
      {
        q: 'How does Kalynt Flow moderate abusive team members?',
        a: 'Every message in team channels features a 1-tap flag and block action. Blocked members are instantly hidden, and reported content is investigated within 24 hours.'
      }
    ]
  },

  privacy: {
    sections: [
      {
        id: 'priv-intro',
        title: '1. Introduction & Privacy Philosophy',
        takeaway: 'We believe your personal tasks and notes belong to you. We do not sell your data or use your personal content for ad targeting.',
        content: [
          'This Privacy Policy describes how Kalynt Flow ("we", "us", "our") collects, uses, stores, and protects personal information when you use our Android application (Package ID: com.aistudio.kalyntflow.app) and associated cloud services.',
          'Our architecture is designed around an "Offline-First" privacy philosophy: your data is stored on your device first and only synced to the cloud when you choose to log in.'
        ]
      },
      {
        id: 'priv-data-collected',
        title: '2. Information We Collect & Why',
        content: [
          'We collect only the minimum data necessary to provide reliable workspace functionality:'
        ],
        table: {
          headers: ['Data Category', 'Specific Items', 'Collection Purpose', 'Storage Location'],
          rows: [
            ['Account Identifiers', 'Email address, Display Name, User UID', 'User authentication & workspace membership', 'Firebase Authentication & Firestore'],
            ['User Workspace Data', 'Tasks, notes, checklists, calendar events', 'Productivity tools & cloud sync', 'Local Room SQLite (encrypted) + Firestore'],
            ['Team Chat Messages', 'Channel messages, timestamps, reactions', 'Real-time team collaboration', 'Cloud Firestore (TLS 1.3 encrypted)'],
            ['AI Interaction Logs', 'Prompt text & AI responses', 'Response generation & quality refinement', 'Ephemeral Gemini API transit (not saved for ad training)'],
            ['Device Diagnostics', 'App crashes, OS version, device model', 'Crash resolution & stability optimization', 'Firebase Crashlytics (anonymized)']
          ]
        }
      },
      {
        id: 'priv-storage',
        title: '3. Data Storage, Encryption & Security',
        content: [
          'Local Storage: All personal notes, tasks, and settings are saved locally in an on-device SQLite database via Android Room.',
          'Cloud Storage: When authenticated, synced data is transferred over TLS 1.3 encrypted connections to Google Cloud Firebase Firestore located in compliant Google Cloud regions.',
          'Security Safeguards: We implement Firebase Security Rules with strict user-level and workspace-level permission boundaries.'
        ]
      },
      {
        id: 'priv-thirdparty',
        title: '4. Third-Party Service Providers',
        content: [
          'We partner exclusively with reputable enterprise cloud infrastructure providers:'
        ],
        bullets: [
          'Google Firebase (Auth, Firestore, Crashlytics): Authentication, cloud sync, and stability telemetry.',
          'Google Gemini API: Generative AI workflow features under strict enterprise privacy terms.',
          'Google Play Billing: Secure in-app payment processing.',
          'GitHub REST API: Direct user-initiated repository inspection.'
        ]
      },
      {
        id: 'priv-rights',
        title: '5. Your Rights: GDPR & CCPA Compliance',
        content: [
          'Regardless of your geographic location, we respect fundamental digital privacy rights:',
          'Right to Access & Portability: Request an export of your stored personal data at any time.',
          'Right to Rectification: Correct inaccurate or outdated profile information.',
          'Right to Erasure (The Right to be Forgotten): Permanently delete your account and all associated cloud records with 1 tap.',
          'We do not sell, rent, or trade your personal data to third parties or data brokers.'
        ]
      },
      {
        id: 'priv-contact',
        title: '6. Privacy Inquiries & Data Protection Officer',
        content: [
          'If you have questions regarding this Privacy Policy or wish to submit a data subject request, please contact our Data Protection team at KalyntFlow@protonmail.com.'
        ]
      }
    ],
    faqTitle: 'Frequently Asked Questions (Privacy & Data)',
    faqs: [
      {
        q: 'Are my notes or tasks used to train AI models?',
        a: 'No. API calls to Google Gemini are processed under enterprise developer privacy terms and are not retained or utilized to train general foundation models.'
      },
      {
        q: 'Can I export my data before deleting my account?',
        a: 'Yes. You can export all your workspaces, notes, and tasks directly to Markdown/JSON files within the app settings.'
      },
      {
        q: 'Does Kalynt Flow track my location or access my contacts?',
        a: 'No. Kalynt Flow does not request or require location, contacts, microphone, or background location permissions.'
      }
    ]
  },

  deletion: {
    sections: [
      {
        id: 'del-commitment',
        title: '1. Account & Data Deletion Commitment',
        takeaway: 'You have full autonomy over your data. You can delete your entire account and all cloud records at any time.',
        content: [
          'In full compliance with Google Play User Data Policy and international data privacy regulations (GDPR, CCPA), Kalynt Flow guarantees users the immediate, unconditional right to delete their account, cloud documents, and stored personal information.'
        ]
      },
      {
        id: 'del-how-to',
        title: '2. How to Delete Your Account (In-App Step-by-Step)',
        content: [
          'You can permanently delete your account directly from your Android device in seconds without contacting customer support:'
        ],
        bullets: [
          'Step 1: Open Kalynt Flow on your Android device.',
          'Step 2: Tap the Settings tab (gear icon) in the bottom navigation bar.',
          'Step 3: Scroll down to the "Account & Security" section.',
          'Step 4: Tap the red "Delete Account & Data" button.',
          'Step 5: Review the confirmation warning and confirm deletion.',
          'Result: Your local database is wiped, your Firebase Auth record is destroyed, and your Firestore cloud documents are immediately purged.'
        ]
      },
      {
        id: 'del-table',
        title: '3. Data Retention & Deletion Matrix',
        content: [
          'The following table details exactly what happens to your data upon deletion:'
        ],
        table: {
          headers: ['Data Type', 'Action Upon Deletion', 'Timeframe'],
          rows: [
            ['Firebase Auth User Record', 'Permanently Deleted', 'Instant (0 seconds)'],
            ['Cloud Firestore Tasks & Notes', 'Permanently Purged from Cloud', 'Instant (0 seconds)'],
            ['Team Workspace Memberships', 'Removed from All Channels', 'Instant (0 seconds)'],
            ['Local On-Device SQLite DB', 'Cleared from Device Storage', 'Instant upon confirmation'],
            ['GitHub Personal Access Token', 'Deleted from Android Keystore', 'Instant upon confirmation']
          ]
        }
      }
    ],
    generator: {
      title: 'Formal Deletion Request Generator',
      desc: 'If you no longer have access to the Android app, use this tool to generate and send an official account deletion notice:',
      emailLabel: 'Your Registered Account Email:',
      emailPlaceholder: 'e.g. user@example.com',
      scopeLabel: 'Deletion Scope Requested:',
      scopeAuth: 'Firebase Authentication Credentials & Profile',
      scopeCloud: 'Cloud Firestore Tasks, Notes & Calendars',
      scopeWorkspaces: 'Shared Workspace Memberships & Messages',
      reasonLabel: 'Optional Reason for Deletion:',
      reasonPlaceholder: 'e.g. No longer needed / Account closure',
      previewTitle: 'Generated Deletion Notice Preview:',
      copyBtn: 'Copy Notice Text',
      sendEmailBtn: 'Open Pre-Filled Email Client',
      emailSubject: 'REQUEST FOR ACCOUNT AND DATA DELETION — Kalynt Flow'
    },
    faqTitle: 'Frequently Asked Questions (Account Deletion)',
    faqs: [
      {
        q: 'Can a deleted account be recovered?',
        a: 'No. For security and privacy reasons, account deletion is immediate and irreversible. All cloud and local database records are permanently purged.'
      },
      {
        q: 'Will deleting my account cancel my Google Play subscription?',
        a: 'Google Play subscriptions are managed directly by Google. Please cancel active subscriptions in the Google Play Store app under Subscriptions before deleting your account.'
      }
    ]
  },

  footer: {
    brandSubtitle: 'Official Legal, Terms of Service & Privacy Compliance Portal',
    rights: 'All rights reserved. Android and Google Play are trademarks of Google LLC.',
    termsLink: 'Terms of Service',
    privacyLink: 'Privacy Policy',
    deletionLink: 'Account Deletion',
    contactSupport: 'Contact: KalyntFlow@protonmail.com'
  }
};
