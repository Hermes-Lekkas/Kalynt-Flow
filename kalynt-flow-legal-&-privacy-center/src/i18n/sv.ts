import { Translation } from './types';

export const sv: Translation = {
  langCode: 'sv',
  langName: 'Swedish',
  nativeName: 'Svenska',
  flag: 'SE',

  meta: {
    title: 'Kalynt Flow — Användarvillkor & Integritetspolicy',
    description: 'Officiella användarvillkor, integritetspolicy och riktlinjer för radering av användardata för Android-appen Kalynt Flow.',
    badge: 'Följer Google Play Stores policyer',
    packageIdLabel: 'Paket-ID:',
    archLabel: 'Arkitektur:',
    archValue: 'Offline-First (Room SQLite + Firestore)',
    effectiveDateLabel: 'Gäller från:',
    effectiveDateValue: '16 augusti 2026',
    readingTimePrefix: 'Beräknad lästid:',
    readingTimeSuffix: 'min',
    wordsSuffix: 'ord',
  },

  nav: {
    terms: 'Användarvillkor',
    privacy: 'Integritet',
    deletion: 'Radera konto',
    fontSize: 'Textstorlek',
    toggleTheme: 'Mörkt/ljust läge',
    print: 'Skriv ut',
    contact: 'Support',
    language: 'Språk (Language)',
    searchLangPlaceholder: 'Sök språk...',
  },

  hero: {
    termsTitle: 'Användarvillkor (Terms of Service)',
    termsSubtitle: 'Läs de juridiska villkoren, reglerna för godtagbar användning, AI-säkerhetsåtgärder och dataskydd som gäller för Kalynt Flow.',
    privacyTitle: 'Integritetspolicy (Privacy Policy)',
    privacySubtitle: 'Tydlig information om hur Kalynt Flow lagrar dina data lokalt på Android med SQLite, synkroniserar med Google Cloud och skyddar din integritet.',
    deletionTitle: 'Radering av konto och data',
    deletionSubtitle: 'Steg-för-steg-instruktioner, raderingsverktyg i appen och officiell begäransgenerator för att permanent ta bort ditt konto.',
    searchPlaceholder: 'Sök i villkoren (t.ex. "AI-anmälan", "radera data", "GitHub-token")...',
    filterAll: 'Alla villkor',
    filterAI: 'AI-säkerhet & Filter',
    filterPrivacy: 'Integritet & Kryptering',
    filterModeration: 'UGC & Moderering',
    filterDeletion: 'Radering av konto',
  },

  pillars: {
    privacyTitle: 'Offline-First-integritet',
    privacyDesc: 'Alla uppgifter, anteckningar och kalendrar sparas som standard lokalt i enhetens SQLite-databas. Molnsynk sker endast vid inloggning.',
    aiTitle: 'AI-säkerhet & Skyddsräcken',
    aiDesc: 'Obligatorisk märkning "Genererad av AI" på alla modellsvar, inbyggd anmälningsfunktion och dynamiska säkerhetsfilter.',
    ugcTitle: 'Nolltolerans mot trakasserier',
    ugcDesc: 'Anmäl med 1 tryck, omedelbar blockering av olämpliga användare och snabb moderering enligt Google Plays krav.',
    deletionTitle: 'Radera konto med 1 tryck',
    deletionDesc: 'Ovillkorlig rätt att när som helst rensa din lokala databas, Firestore-dokument och inloggningsuppgifter.',
  },

  sidebar: {
    tocTitle: 'Innehållsförteckning',
  },

  actions: {
    copyLink: 'Kopiera länk',
    copyAgreement: 'Kopiera hela avtalet',
    copiedNotice: 'Kopierat till urklipp!',
    backToTop: 'Tillbaka till toppen',
  },

  terms: {
    sections: [
      {
        id: 'terms-acceptance',
        title: '1. Godkännande av villkoren',
        takeaway: 'Genom att installera eller använda Kalynt Flow godkänner du dessa juridiskt bindande villkor.',
        content: [
          'Välkommen till Kalynt Flow. Dessa användarvillkor ("Villkor") utgör ett juridiskt bindande avtal mellan dig ("Användare") och utvecklarna av Kalynt Flow ("vi").',
          'Genom att ladda ner, installera eller använda Kalynt Flow bekräftar du att du har läst, förstått och godkänner att vara bunden av dessa Villkor.'
        ]
      },
      {
        id: 'terms-services',
        title: '2. Tjänstebeskrivning och arkitektur',
        takeaway: 'Kalynt Flow erbjuder lokal produktivitet, arbetsytehantering och valfri molnsynkronisering.',
        content: [
          'Kalynt Flow är en applikation för uppgiftshantering, teknisk kunskapsbas och teamarbetsytor baserad på "Offline-First"-arkitektur:'
        ],
        bullets: [
          'Hierarkiska arbetsytor: Isolerade miljöer för personliga eller teamprojekt med behörighetsstyrning.',
          'Hantering av uppgifter och deluppgifter: Prioritetsnivåer (Låg, Medel, Hög, Brådskande) och checklistor.',
          'Markdown-dokumentation: Syntaxmarkering och omedelbar lokal sökning.',
          'Visuell kalender: Tidsblockering och tidslinjer för uppgifter.',
          'GitHub-integration: Direkt granskning av arkiv och ärenden via officiella GitHub REST API.',
          'Teamkanaler: Gruppsamarbete och chatt i realtid.',
          'AI-assistent: Uppgiftsautomatisering och smarta sammanfattningar.'
        ]
      },
      {
        id: 'terms-accounts',
        title: '3. Användarkonton och säkerhet',
        content: [
          'Viktiga lokala verktyg fungerar utan onlinekonto. Molnsynkronisering och teamarbetsytor kräver autentisering via:',
          'Du ansvarar för att hålla dina inloggningsuppgifter konfidentiella.'
        ],
        bullets: [
          'Google-inloggning: Säker autentisering via Android Jetpack Credential Manager.',
          'E-post/lösenord: Krypterad autentisering via Google Firebase Auth.'
        ]
      },
      {
        id: 'terms-ugc',
        title: '4. Användargenererat innehåll och nolltolerans (UGC)',
        content: [
          'Kalynt Flow låter dig skapa anteckningar och skicka meddelanden i delade kanaler. Du behåller full immateriell äganderätt till ditt innehåll.'
        ],
        callout: {
          type: 'danger',
          title: 'Nolltolerans mot stötande innehåll och trakasserier',
          text: 'I full överensstämmelse med Google Plays policy för användargenererat innehåll (UGC) är hatpropaganda, trakasserier, våldsamt innehåll och upphovsrättsintrång strängt förbjudet.'
        },
        subsections: [
          {
            subtitle: 'Inbyggda modererings- och anmälningsverktyg',
            bullets: [
              'Anmälan med 1 tryck: Anmäl olämpligt innehåll direkt i gränssnittet.',
              'Omedelbar blockering: Blockera störande användare med ett tryck för att dölja deras meddelanden.',
              'Granskning inom 24 timmar: Vårt team granskar anmälningar inom 24 timmar och stänger av överträdande konton.'
            ]
          }
        ]
      },
      {
        id: 'terms-ai',
        title: '5. Generativa AI-tjänster och säkerhet',
        content: [
          'Kalynt Flow innehåller AI-funktioner via Google Gemini API som hjälp vid uppgiftsplanering och textformatering.'
        ],
        callout: {
          type: 'purple',
          title: 'AI-transparens och tydlig märkning',
          text: 'Alla svar som genereras av AI är tydligt märkta med etiketten "Genererad av AI".'
        },
        subsections: [
          {
            subtitle: 'Anmälan av AI-svar och förbättring av skyddsfilter',
            text: 'Användare kan anmäla felaktiga eller olämpliga AI-svar för att hjälpa till att optimera säkerhetsreglerna.'
          }
        ]
      },
      {
        id: 'terms-github',
        title: '6. Tredjepartsintegrationer (GitHub REST API)',
        content: [
          'Personliga åtkomsttoken för GitHub (PAT) lagras uteslutande i din lokala enhets Android EncryptedSharedPreferences och skickas ALDRIG till Kalynt Flows servrar.'
        ]
      },
      {
        id: 'terms-billing',
        title: '7. Prenumerationer och Google Play-debitering',
        content: [
          'Alla köp i appen och Pro-prenumerationer hanteras uteslutande via Google Play In-App Billing i enlighet med utvecklarpolicyerna.'
        ]
      },
      {
        id: 'terms-disclaimers',
        title: '8. Friskrivning och ansvarsbegränsning',
        content: [
          'Kalynt Flow tillhandahålls "I BEFINTLIGT SKICK". Vi ansvarar i den utsträckning lagen tillåter inte för indirekta skador eller dataförlust.'
        ]
      },
      {
        id: 'terms-contact',
        title: '9. Kontakt och support',
        content: [
          'För juridiska frågor eller teknisk support, kontakta KalyntFlow@protonmail.com.'
        ]
      }
    ],
    faqTitle: 'Vanliga frågor (Villkor och juridik)',
    faqs: [
      {
        q: 'Måste jag skapa ett konto för att använda Kalynt Flow?',
        a: 'Nej. Du kan använda alla kärnfunktioner (uppgifter, Markdown-anteckningar, kalender) helt offline utan konto.'
      },
      {
        q: 'Var lagras mina GitHub-tokens?',
        a: 'Dina tokens lagras krypterade i telefonens hårdvarubaserade Android Keystore-minne.'
      },
      {
        q: 'Hur modereras meddelanden i teamkanaler?',
        a: 'Varje meddelande har alternativ för anmälan och blockering med 1 tryck, och ärenden behandlas inom 24 timmar.'
      }
    ]
  },

  privacy: {
    sections: [
      {
        id: 'priv-intro',
        title: '1. Introduktion och integritetsprinciper',
        takeaway: 'Dina data tillhör bara dig. Vi säljer inte dina data och använder dem inte för reklam.',
        content: [
          'Denna integritetspolicy beskriver hur personuppgifter hanteras i Android-appen Kalynt Flow (Paket-ID: com.aistudio.kalyntflow.app).',
          'Vår "Offline-First"-arkitektur säkerställer att dina data i första hand lagras lokalt på din egen enhet.'
        ]
      },
      {
        id: 'priv-data-collected',
        title: '2. Insamlade uppgifter och syften',
        content: [
          'Vi samlar endast in den minsta mängd data som krävs för att tjänsten ska fungera korrekt:'
        ],
        table: {
          headers: ['Datakategori', 'Insamlade uppgifter', 'Syfte med insamlingen', 'Lagringsplats'],
          rows: [
            ['Kontouppgifter', 'E-postadress, visningsnamn, UID', 'Autentisering och behörigheter', 'Firebase Auth och Firestore'],
            ['Arbetsytedata', 'Uppgifter, anteckningar, listor, händelser', 'Produktivitetsverktyg och synk', 'Lokalt SQLite (Room) + Firestore'],
            ['Chattmeddelanden', 'Kanalmeddelanden, tidsstämplar', 'Realtidssamarbete i team', 'Cloud Firestore (TLS 1.3-kryptering)'],
            ['AI-interaktioner', 'Inmatade frågor och AI-svar', 'Generering av svar och kvalitetsförbättring', 'Gemini API (används ej för reklam)'],
            ['Enhetsdiagnostik', 'Kraschrapporter, OS-version, modell', 'Felsökning och stabilitet', 'Firebase Crashlytics (anonymiserat)']
          ]
        }
      },
      {
        id: 'priv-storage',
        title: '3. Lagring, kryptering och säkerhet',
        content: [
          'Lokal lagring: Anteckningar och uppgifter sparas i enhetens SQLite-databas via Android Room.',
          'Molnlagring: Synkroniserade data överförs via säkra TLS 1.3-krypterade anslutningar till Google Cloud Firebase Firestore.',
          'Säkerhetsåtgärder: Vi tillämpar strikta Firebase Security Rules för att isolera åtkomst på användar- och arbetsytenivå.'
        ]
      },
      {
        id: 'priv-thirdparty',
        title: '4. Tredjepartsleverantörer',
        content: [
          'Vi samarbetar endast med certifierade molninfrastrukturleverantörer i företagsklass:'
        ],
        bullets: [
          'Google Firebase (Auth, Firestore, Crashlytics): Autentisering, synkronisering och stabilitetstelemetri.',
          'Google Gemini API: AI-funktioner under strikta villkor för företagsintegritet.',
          'Google Play Billing: Säker betalningshantering i appen.',
          'GitHub REST API: Direkt granskning av arkiv på användarens begäran.'
        ]
      },
      {
        id: 'priv-rights',
        title: '5. Dina rättigheter (GDPR och CCPA)',
        content: [
          'Vi garanterar att dina digitala dataskyddsrättigheter respekteras fullt ut:',
          'Rätt till tillgång och dataportabilitet: Begär en kopia av dina lagrade data när som helst.',
          'Rätt till rättelse: Uppdatera felaktiga profiluppgifter.',
          'Rätt till radering (Rätten att bli bortglömd): Radera ditt konto och dina molndata med 1 tryck.',
          'Vi säljer eller överlåter aldrig dina personuppgifter till tredje part.'
        ]
      },
      {
        id: 'priv-contact',
        title: '6. Integritetsfrågor och kontakt',
        content: [
          'För frågor om dataskydd, kontakta vårt team på KalyntFlow@protonmail.com.'
        ]
      }
    ],
    faqTitle: 'Vanliga frågor (Integritet och datasäkerhet)',
    faqs: [
      {
        q: 'Används mina anteckningar för att träna AI-modeller?',
        a: 'Nej. Anrop till Google Gemini omfattas av företagsavtal för utvecklare och används inte för publik modellträning.'
      },
      {
        q: 'Kan jag exportera mina data innan jag raderar kontot?',
        a: 'Ja. I appens inställningar kan du exportera alla dina arbetsytor och anteckningar till Markdown/JSON-filer.'
      },
      {
        q: 'Har Kalynt Flow åtkomst till min plats eller mina kontakter?',
        a: 'Nej. Appen begär och använder inga behörigheter för plats, kontakter eller mikrofon.'
      }
    ]
  },

  deletion: {
    sections: [
      {
        id: 'del-commitment',
        title: '1. Åtagande för radering av data',
        takeaway: 'Du har full kontroll över dina data och kan radera ditt konto när som helst.',
        content: [
          'I full överensstämmelse med Google Plays policyer och internationella dataskyddsförordningar (GDPR, CCPA) garanterar Kalynt Flow rätten till omedelbar och ovillkorlig radering av konto och data.'
        ]
      },
      {
        id: 'del-how-to',
        title: '2. Så raderar du ditt konto i appen (Steg för steg)',
        content: [
          'Du kan radera ditt konto direkt på din Android-enhet på några sekunder:'
        ],
        bullets: [
          'Steg 1: Öppna Kalynt Flow på din Android-enhet.',
          'Steg 2: Tryck på fliken "Inställningar" (kugghjulsikonen) i det nedre fältet.',
          'Steg 3: Rulla ned till avsnittet "Konto & Säkerhet".',
          'Steg 4: Tryck på den röda knappen "Radera konto och alla data".',
          'Steg 5: Bekräfta i dialogrutan.',
          'Resultat: Din lokala databas rensas, Firebase Auth-kontot tas bort och alla Firestore-dokument raderas omedelbart.'
        ]
      },
      {
        id: 'del-table',
        title: '3. Tabell över dataradering',
        content: [
          'Följande tabell visar åtgärder och tidsramar för varje datatyp:'
        ],
        table: {
          headers: ['Datatyp', 'Åtgärd vid radering', 'Tidsram'],
          rows: [
            ['Firebase Auth-användarkonto', 'Raderas permanent', 'Omedelbart (0 sekunder)'],
            ['Uppgifter och anteckningar i Cloud Firestore', 'Rensas från molnet', 'Omedelbart (0 sekunder)'],
            ['Medlemskap i teamkanaler', 'Tas bort från alla kanaler', 'Omedelbart (0 sekunder)'],
            ['Lokal SQLite-databas på enheten', 'Rensas från minnet', 'Direkt efter bekräftelse'],
            ['GitHub-åtkomsttoken (PAT)', 'Raderas från Android Keystore', 'Direkt efter bekräftelse']
          ]
        }
      }
    ],
    generator: {
      title: 'Generator för formell raderingsbegäran',
      desc: 'Om du inte längre har tillgång till din Android-enhet kan du generera en formell begäran och skicka via e-post:',
      emailLabel: 'E-postadress kopplad till kontot:',
      emailPlaceholder: 't.ex. anvandare@exempel.se',
      scopeLabel: 'Omfattning av begärd radering:',
      scopeAuth: 'Firebase-inloggningsuppgifter och profil',
      scopeCloud: 'Uppgifter, anteckningar och kalendrar i Cloud Firestore',
      scopeWorkspaces: 'Medlemskap och meddelanden i delade arbetsytor',
      reasonLabel: 'Anledning till radering (valfritt):',
      reasonPlaceholder: 't.ex. Avsluta konto / Behöver inte längre tjänsten',
      previewTitle: 'Förhandsvisning av formell begäran:',
      copyBtn: 'Kopiera begäranstext',
      sendEmailBtn: 'Öppna i e-postprogram',
      emailSubject: 'BEGÄRAN OM RADERING AV KONTO OCH DATA — Kalynt Flow'
    },
    faqTitle: 'Vanliga frågor (Radera konto)',
    faqs: [
      {
        q: 'Kan ett raderat konto återställas?',
        a: 'Nej. Av säkerhets- och integritetsskäl är raderingen definitiv och oåterkallelig.'
      },
      {
        q: 'Avbryter kontoraderingen min Google Play-prenumeration?',
        a: 'Prenumerationer hanteras direkt av Google. Vänligen avsluta aktiva prenumerationer i Google Play Butik-appen innan du raderar ditt konto.'
      }
    ]
  },

  footer: {
    brandSubtitle: 'Officiell portal för juridisk information, användarvillkor och integritet',
    rights: 'Med ensamrätt. Android och Google Play är varumärken som tillhör Google LLC.',
    termsLink: 'Användarvillkor',
    privacyLink: 'Integritetspolicy',
    deletionLink: 'Radera konto',
    contactSupport: 'Kontakt: KalyntFlow@protonmail.com'
  }
};
