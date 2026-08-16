import { Translation } from './types';

export const de: Translation = {
  langCode: 'de',
  langName: 'German',
  nativeName: 'Deutsch',
  flag: 'DE',

  meta: {
    title: 'Kalynt Flow — Rechtliches, Nutzungsbedingungen & Datenschutzerklärung',
    description: 'Offizielle Nutzungsbedingungen, Datenschutzerklärung und Richtlinien zur Datenlöschung für die Kalynt Flow Android-App.',
    badge: 'Konform mit den Google Play Store-Richtlinien',
    packageIdLabel: 'Paket-ID:',
    archLabel: 'Architektur:',
    archValue: 'Offline-First (Room SQLite + Firestore)',
    effectiveDateLabel: 'Gültig ab:',
    effectiveDateValue: '16. August 2026',
    readingTimePrefix: 'Geschätzte Lesezeit:',
    readingTimeSuffix: 'Min.',
    wordsSuffix: 'Wörter',
  },

  nav: {
    terms: 'Nutzungsbedingungen',
    privacy: 'Datenschutzerklärung',
    deletion: 'Konto & Daten löschen',
    fontSize: 'Schriftgröße anpassen',
    toggleTheme: 'Dunkel-/Hellmodus umschalten',
    print: 'Dokument drucken',
    contact: 'Support kontaktieren',
    language: 'Sprache (Language)',
    searchLangPlaceholder: 'Sprache suchen...',
  },

  hero: {
    termsTitle: 'Nutzungsbedingungen',
    termsSubtitle: 'Überprüfen Sie die rechtlichen Vereinbarungen, Richtlinien zur akzeptablen Nutzung, KI-Sicherheitsmaßnahmen und den Datenschutz von Kalynt Flow.',
    privacyTitle: 'Datenschutzerklärung',
    privacySubtitle: 'Transparente Informationen darüber, wie Kalynt Flow Ihre Daten lokal auf Android per SQLite speichert, mit Google Cloud synchronisiert und Ihre Privatsphäre schützt.',
    deletionTitle: 'Konto- & Datenlöschung',
    deletionSubtitle: 'Schritt-für-Schritt-Anleitung, automatische Löschwerkzeuge und Vorlagengenerator zur dauerhaften Löschung Ihres Kontos und Ihrer Cloud-Daten.',
    searchPlaceholder: 'Richtlinien durchsuchen (z. B. "KI-Meldung", "Daten löschen", "GitHub-Token", "Moderation")...',
    filterAll: 'Alle Klauseln',
    filterAI: 'KI-Sicherheit & Filter',
    filterPrivacy: 'Datenschutz & Verschlüsselung',
    filterModeration: 'UGC & Moderation',
    filterDeletion: 'Kontolöschung',
  },

  pillars: {
    privacyTitle: 'Offline-First-Datenschutz',
    privacyDesc: 'Alle Aufgaben, Notizen und Kalender verbleiben standardmäßig im lokalen SQLite-Speicher. Cloud-Synchronisierung erfolgt nur bei aktiver Anmeldung.',
    aiTitle: 'KI-Sicherheit & Richtlinien',
    aiDesc: 'Verbindliche Kennzeichnung "KI-generiert" für alle Modellantworten, integrierte Meldefunktionen und dynamische Sicherheitsfilter.',
    ugcTitle: 'Null-Toleranz-UGC',
    ugcDesc: '1-Klick-Meldefunktion, sofortige Blockierung missbräuchlicher Nutzer und Moderation gemäß Google Play-Sicherheitsstandards.',
    deletionTitle: '1-Klick-Kontolöschung',
    deletionDesc: 'Bedingungsloses Recht, die lokale Datenbank, Firestore-Dokumente und Anmeldedaten jederzeit in der App oder per E-Mail vollständig zu löschen.',
  },

  sidebar: {
    tocTitle: 'Inhaltsverzeichnis',
  },

  actions: {
    copyLink: 'Link kopieren',
    copyAgreement: 'Gesamte Vereinbarung kopieren',
    copiedNotice: 'In die Zwischenablage kopiert!',
    backToTop: 'Nach oben',
  },

  terms: {
    sections: [
      {
        id: 'terms-acceptance',
        title: '1. Annahme der Bedingungen',
        takeaway: 'Durch die Installation oder Nutzung von Kalynt Flow schließen Sie eine rechtsverbindliche Vereinbarung ab.',
        content: [
          'Willkommen bei Kalynt Flow. Diese Nutzungsbedingungen ("Bedingungen") stellen eine rechtsverbindliche Vereinbarung zwischen Ihnen ("Nutzer", "Sie") und den Entwicklern von Kalynt Flow ("wir", "uns") dar.',
          'Durch das Herunterladen, Installieren oder Verwenden von Kalynt Flow bestätigen Sie, dass Sie diese Bedingungen gelesen, verstanden haben und an sie gebunden sind.'
        ]
      },
      {
        id: 'terms-services',
        title: '2. Leistungsbeschreibung & Architektur',
        takeaway: 'Kalynt Flow bietet Offline-First-Produktivität, Arbeitsbereichsorganisation und optionale Cloud-Synchronisierung.',
        content: [
          'Kalynt Flow ist eine Offline-First-Anwendung für Aufgabenorchestrierung, technische Wissensdatenbanken und Team-Arbeitsbereiche:'
        ],
        bullets: [
          'Hierarchische Arbeitsbereiche: Isolierte Umgebungen für persönliche, Team- oder Projekt-Workflows.',
          'Aufgaben- & Teilaufgabenverwaltung: Prioritätsstufen (Niedrig, Mittel, Hoch, Dringend) und interaktive Checklisten.',
          'Markdown-Dokumentation: Notizen mit Syntax-Highlighting und lokaler Volltextsuche.',
          'Visueller Kalender: Time-Blocking und Aufgaben-Zeitleisten.',
          'GitHub-Client-Integration: Direkte Inspektion von Repositories und Issues über die offizielle GitHub-REST-API.',
          'Team-Arbeitsbereichskanäle: Echtzeit-Zusammenarbeit und Gruppenchat.',
          'Kontextbezogener KI-Assistent: Aufgabenautomatisierung und Zusammenfassungen.'
        ]
      },
      {
        id: 'terms-accounts',
        title: '3. Benutzerkonten & Sicherheit',
        content: [
          'Lokale Kernfunktionen funktionieren ohne Online-Konto. Für Cloud-Synchronisierung und Team-Arbeitsbereiche ist eine Authentifizierung erforderlich:',
          'Sie verpflichten sich zur vertraulichen Behandlung Ihrer Anmeldedaten.'
        ],
        bullets: [
          'Google Sign-In: Sichere Authentifizierung über den Android Jetpack Credential Manager.',
          'E-Mail/Passwort: Sichere Verarbeitung über Google Firebase Auth.'
        ]
      },
      {
        id: 'terms-ugc',
        title: '4. Nutzerinhalte & Null-Toleranz-Politik für UGC',
        content: [
          'Kalynt Flow ermöglicht das Erstellen von Notizen und Nachrichten in geteilten Kanälen. Sie behalten das volle Eigentum an Ihren Inhalten.'
        ],
        callout: {
          type: 'danger',
          title: 'Null-Toleranz-Politik für anstößige Inhalte und Belästigung',
          text: 'In strikter Übereinstimmung mit den Richtlinien von Google Play für nutzergenerierte Inhalte (UGC) gilt bei Kalynt Flow eine strikte Null-Toleranz-Politik gegenüber Hassrede, Belästigung, Gewaltverherrlichung oder Urheberrechtsverletzungen.'
        },
        subsections: [
          {
            subtitle: 'Integrierte Moderations- und Meldesysteme',
            bullets: [
              '1-Klick-In-App-Meldung: Melden Sie anstößige Nachrichten oder Notizen direkt in der Benutzeroberfläche.',
              'Sofortige Nutzersperre: Blockieren Sie störende Mitglieder sofort mit 1 Klick.',
              '24-Stunden-Bearbeitung: Unser Moderationsteam prüft gemeldete Fälle innerhalb von 24 Stunden.'
            ]
          }
        ]
      },
      {
        id: 'terms-ai',
        title: '5. Generative KI-Dienste & Sicherheitsleitplanken',
        content: [
          'Kalynt Flow integriert generative KI-Funktionen über die Google Gemini API zur Unterstützung bei Aufgaben, Markdown-Formatierung und Zusammenfassungen.'
        ],
        callout: {
          type: 'purple',
          title: 'Eindeutige KI-Transparenz & Kennzeichnung',
          text: 'Alle durch KI erzeugten Antworten sind in der Benutzeroberfläche eindeutig mit dem Label "KI-generierte Antwort" und Hinweisen gekennzeichnet.'
        },
        subsections: [
          {
            subtitle: 'KI-Ausgabemeldung & Sicherheitsoptimierung',
            text: 'Nutzer können ungenaue oder unpassende KI-Ausgaben direkt über die Schaltfläche melden, um die Filterregeln weiter zu verbessern.'
          }
        ]
      },
      {
        id: 'terms-github',
        title: '6. Drittanbieter-Integrationen (GitHub-REST-API)',
        content: [
          'GitHub Personal Access Tokens (PAT) werden ausschließlich in den Android EncryptedSharedPreferences Ihres lokalen Geräts gespeichert und NIEMALS an Server von Kalynt Flow übertragen.'
        ]
      },
      {
        id: 'terms-billing',
        title: '7. Abonnements & Google Play Billing',
        content: [
          'Alle Käufe und Pro-Abonnements werden ausschließlich über das Google Play In-App Billing abgewickelt. Kündigungen und Verlängerungen verwalten Sie direkt in Ihrem Google Play-Konto.'
        ]
      },
      {
        id: 'terms-disclaimers',
        title: '8. Haftungsausschluss & Haftungsbeschränkung',
        content: [
          'Kalynt Flow wird "WIE BESEHEN" bereitgestellt. Im gesetzlich zulässigen Umfang haften wir nicht für indirekte Schäden, Folgeschäden oder Datenverluste.'
        ]
      },
      {
        id: 'terms-contact',
        title: '9. Kontakt & Support',
        content: [
          'Bei rechtlichen Fragen oder Supportanfragen wenden Sie sich bitte an unser Compliance-Team unter KalyntFlow@protonmail.com.'
        ]
      }
    ],
    faqTitle: 'Häufig gestellte Fragen (Recht & Bedingungen)',
    faqs: [
      {
        q: 'Benötige ich ein Konto zur Nutzung von Kalynt Flow?',
        a: 'Nein. Sie können alle wesentlichen Produktivitätsfunktionen (Aufgaben, Notizen, Kalender) vollständig offline ohne Konto nutzen.'
      },
      {
        q: 'Wo werden meine GitHub-Zugriffstoken gespeichert?',
        a: 'GitHub-Token werden ausschließlich in den hardwaregestützten EncryptedSharedPreferences Ihres Android-Geräts gespeichert.'
      },
      {
        q: 'Wie geht Kalynt Flow mit störenden Teammitgliedern um?',
        a: 'Jede Nachricht bietet eine 1-Klick-Melde- und Blockieroption. Blockierte Mitglieder werden sofort ausgeblendet.'
      }
    ]
  },

  privacy: {
    sections: [
      {
        id: 'priv-intro',
        title: '1. Einführung & Datenschutzphilosophie',
        takeaway: 'Ihre Aufgaben und Notizen gehören Ihnen. Wir verkaufen keine Daten und verwenden Ihre Inhalte nicht für Werbung.',
        content: [
          'Diese Datenschutzerklärung beschreibt, wie Kalynt Flow ("wir", "uns") personenbezogene Daten bei Nutzung der Android-App (Paket-ID: com.aistudio.kalyntflow.app) verarbeitet.',
          'Unsere Architektur basiert auf dem "Offline-First"-Prinzip: Ihre Daten verbleiben vorrangig lokal auf Ihrem Gerät.'
        ]
      },
      {
        id: 'priv-data-collected',
        title: '2. Welche Daten wir erheben und warum',
        content: [
          'Wir erheben ausschließlich die Daten, die für den sicheren Betrieb der Anwendung notwendig sind:'
        ],
        table: {
          headers: ['Datenkategorie', 'Spezifische Elemente', 'Zweck der Erhebung', 'Speicherort'],
          rows: [
            ['Konto-Identifikatoren', 'E-Mail-Adresse, Anzeigename, User-UID', 'Authentifizierung & Arbeitsbereichszugriff', 'Firebase Auth & Firestore'],
            ['Arbeitsbereichsdaten', 'Aufgaben, Notizen, Checklisten, Kalender', 'Produktivitätstools & Cloud-Sync', 'Lokales SQLite (Room) + Firestore'],
            ['Team-Nachrichten', 'Kanalnachrichten, Zeitstempel, Reaktionen', 'Echtzeit-Team-Zusammenarbeit', 'Cloud Firestore (TLS 1.3 verschlüsselt)'],
            ['KI-Interaktionen', 'Eingabeprompts & KI-Antworten', 'Antwortgenerierung & Qualitätsverbesserung', 'Gemini API Transit (nicht für Werbetraining)'],
            ['Gerätediagnose', 'Absturzberichte, OS-Version, Gerätemodell', 'Fehlerbehebung & Stabilitätsoptimierung', 'Firebase Crashlytics (anonymisiert)']
          ]
        }
      },
      {
        id: 'priv-storage',
        title: '3. Speicherung, Verschlüsselung & Sicherheit',
        content: [
          'Lokale Speicherung: Alle Notizen und Aufgaben werden lokal in einer SQLite-Datenbank über Android Room gespeichert.',
          'Cloud-Speicherung: Synchronisierte Daten werden über TLS 1.3-verschlüsselte Verbindungen an Google Cloud Firebase Firestore übertragen.',
          'Sicherheitsregeln: Strenge Firebase Security Rules sichern Zugriffsrechte auf Nutzer- und Arbeitsbereichsebene.'
        ]
      },
      {
        id: 'priv-thirdparty',
        title: '4. Drittanbieter & Dienstleister',
        content: [
          'Wir arbeiten ausschließlich mit zertifizierten Cloud-Infrastrukturanbietern zusammen:'
        ],
        bullets: [
          'Google Firebase (Auth, Firestore, Crashlytics): Authentifizierung, Cloud-Sync und Stabilitätsüberwachung.',
          'Google Gemini API: Generative KI-Funktionen unter strengen Unternehmensdatenschutzbedingungen.',
          'Google Play Billing: Sichere Zahlungsabwicklung in der App.',
          'GitHub-REST-API: Direkte nutzerinitiierte Repository-Abfragen.'
        ]
      },
      {
        id: 'priv-rights',
        title: '5. Ihre Rechte: DSGVO & CCPA',
        content: [
          'Wir respektieren Ihre gesetzlichen Datenschutzrechte:',
          'Recht auf Auskunft & Datenübertragbarkeit: Fordern Sie jederzeit einen Export Ihrer gespeicherten Daten an.',
          'Recht auf Berichtigung: Korrigieren Sie unrichtige Profildaten.',
          'Recht auf Löschung (Recht auf Vergessenwerden): Löschen Sie Ihr Konto und alle Cloud-Daten mit 1 Klick.',
          'Wir verkaufen oder vermieten Ihre personenbezogenen Daten niemals an Dritte oder Datenhändler.'
        ]
      },
      {
        id: 'priv-contact',
        title: '6. Datenschutzbeauftragter & Kontakt',
        content: [
          'Bei Fragen zu dieser Datenschutzerklärung oder zur Geltendmachung Ihrer Rechte kontaktieren Sie uns unter KalyntFlow@protonmail.com.'
        ]
      }
    ],
    faqTitle: 'Häufig gestellte Fragen (Datenschutz & Datensicherheit)',
    faqs: [
      {
        q: 'Werden meine Notizen zum Trainieren von KI-Modellen verwendet?',
        a: 'Nein. API-Aufrufe an Google Gemini unterliegen Unternehmens-Datenschutzrichtlinien und werden nicht zum allgemeinen Modelltraining verwendet.'
      },
      {
        q: 'Kann ich meine Daten vor der Kontolöschung exportieren?',
        a: 'Ja. In den App-Einstellungen können Sie alle Arbeitsbereiche und Notizen als Markdown/JSON exportieren.'
      },
      {
        q: 'Greift Kalynt Flow auf Standort oder Kontakte zu?',
        a: 'Nein. Kalynt Flow benötigt und verlangt keine Berechtigungen für Standort, Kontakte oder Mikrofon.'
      }
    ]
  },

  deletion: {
    sections: [
      {
        id: 'del-commitment',
        title: '1. Verpflichtung zur Konto- & Datenlöschung',
        takeaway: 'Sie haben die volle Kontrolle. Sie können Ihr Konto und alle Cloud-Daten jederzeit löschen.',
        content: [
          'Gemäß den Richtlinien von Google Play und internationalen Datenschutzgesetzen (DSGVO) garantiert Kalynt Flow das Recht auf sofortige, unwiderrufliche Kontolöschung.'
        ]
      },
      {
        id: 'del-how-to',
        title: '2. Konto in der App löschen (Schritt-für-Schritt)',
        content: [
          'Sie können Ihr Konto direkt auf Ihrem Android-Gerät ohne Kontaktaufnahme zum Support löschen:'
        ],
        bullets: [
          'Schritt 1: Öffnen Sie Kalynt Flow auf Ihrem Android-Gerät.',
          'Schritt 2: Tippen Sie in der unteren Leiste auf "Einstellungen" (Zahnrad-Symbol).',
          'Schritt 3: Scrollen Sie zum Bereich "Konto & Sicherheit".',
          'Schritt 4: Tippen Sie auf die rote Schaltfläche "Konto & alle Daten löschen".',
          'Schritt 5: Bestätigen Sie den Sicherheitsdialog.',
          'Ergebnis: Ihre lokale Datenbank wird bereinigt, das Firebase Auth-Konto wird gelöscht und alle Firestore-Dokumente werden entfernt.'
        ]
      },
      {
        id: 'del-table',
        title: '3. Datenbereinigungs- und Löschübersicht',
        content: [
          'Die folgende Übersicht zeigt die genauen Löschvorgänge im Detail:'
        ],
        table: {
          headers: ['Datentyp', 'Aktion bei Löschung', 'Zeitrahmen'],
          rows: [
            ['Firebase Auth-Benutzerkonto', 'Dauerhaft gelöscht', 'Sofort (0 Sekunden)'],
            ['Firestore-Aufgaben & Notizen', 'Vollständig aus der Cloud entfernt', 'Sofort (0 Sekunden)'],
            ['Arbeitsbereichsmitgliedschaften', 'Aus allen Kanälen entfernt', 'Sofort (0 Sekunden)'],
            ['Lokale SQLite-Datenbank', 'Vom Gerät gelöscht', 'Sofort nach Bestätigung'],
            ['GitHub Personal Access Token', 'Aus dem Android Keystore entfernt', 'Sofort nach Bestätigung']
          ]
        }
      }
    ],
    generator: {
      title: 'Generator für formelle Löschanfragen',
      desc: 'Falls Sie keinen Zugriff mehr auf Ihr Android-Gerät haben, können Sie hier einen offiziellen Löschantrag per E-Mail generieren:',
      emailLabel: 'Ihre registrierte E-Mail-Adresse:',
      emailPlaceholder: 'z. B. nutzer@beispiel.de',
      scopeLabel: 'Umfang der gewünschten Löschung:',
      scopeAuth: 'Firebase Authentifizierungs- & Profildaten',
      scopeCloud: 'Cloud-Firestore-Aufgaben, Notizen & Kalender',
      scopeWorkspaces: 'Geteilte Arbeitsbereiche & Nachrichten',
      reasonLabel: 'Optionaler Grund für die Löschung:',
      reasonPlaceholder: 'z. B. Nicht mehr benötigt / Kontoschließung',
      previewTitle: 'Vorschau des formellen Löschantrags:',
      copyBtn: 'Antragstext kopieren',
      sendEmailBtn: 'In E-Mail-Programm öffnen',
      emailSubject: 'ANTRAG AUF KONTO- UND DATENLÖSCHUNG — Kalynt Flow'
    },
    faqTitle: 'Häufig gestellte Fragen (Kontolöschung)',
    faqs: [
      {
        q: 'Kann ein gelöschtes Konto wiederhergestellt werden?',
        a: 'Nein. Aus Sicherheits- und Datenschutzgründen ist die Löschung endgültig und unwiderruflich.'
      },
      {
        q: 'Beendet die Kontolöschung mein Google Play-Abonnement?',
        a: 'Google Play-Abonnements werden direkt von Google verwaltet. Bitte kündigen Sie aktive Abonnements in der Google Play Store-App vor der Kontolöschung.'
      }
    ]
  },

  footer: {
    brandSubtitle: 'Offizielles Portal für Rechtliches, Nutzungsbedingungen & Datenschutz',
    rights: 'Alle Rechte vorbehalten. Android und Google Play sind Marken von Google LLC.',
    termsLink: 'Nutzungsbedingungen',
    privacyLink: 'Datenschutzerklärung',
    deletionLink: 'Kontolöschung',
    contactSupport: 'Kontakt: KalyntFlow@protonmail.com'
  }
};
