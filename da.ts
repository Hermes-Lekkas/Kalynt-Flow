import { Translation } from './types';

export const da: Translation = {
  langCode: 'da',
  langName: 'Danish',
  nativeName: 'Dansk',
  flag: 'DK',

  meta: {
    title: 'Kalynt Flow — Betingelser for brug og Privatlivspolitik',
    description: 'Officielle servicevilkår, privatlivspolitik og procedurer for sletning af brugerdata for Android-appen Kalynt Flow.',
    badge: 'I overensstemmelse med Google Play Butik-politikker',
    packageIdLabel: 'Pakke-ID:',
    archLabel: 'Arkitektur:',
    archValue: 'Offline-First (Room SQLite + Firestore)',
    effectiveDateLabel: 'Ikrafttrædelsesdato:',
    effectiveDateValue: '16. august 2026',
    readingTimePrefix: 'Anslået læsetid:',
    readingTimeSuffix: 'min',
    wordsSuffix: 'ord',
  },

  nav: {
    terms: 'Betingelser for brug',
    privacy: 'Privatlivspolitik',
    deletion: 'Slet konto',
    fontSize: 'Tekststørrelse',
    toggleTheme: 'Mørk/lys tilstand',
    print: 'Udskriv',
    contact: 'Support',
    language: 'Sprog (Language)',
    searchLangPlaceholder: 'Søg efter sprog...',
  },

  hero: {
    termsTitle: 'Betingelser for brug (Terms of Service)',
    termsSubtitle: 'Læs de juridiske vilkår, regler for acceptabel brug, AI-sikkerhedsforanstaltninger og databeskyttelse for Kalynt Flow.',
    privacyTitle: 'Privatlivspolitik (Privacy Policy)',
    privacySubtitle: 'Gennemskuelig information om, hvordan Kalynt Flow gemmer dine data lokalt på Android med SQLite, synkroniserer med Google Cloud og beskytter dit privatliv.',
    deletionTitle: 'Sletning af konto og data',
    deletionSubtitle: 'Trinvise instruktioner, indbyggede værktøjer og officiel anmodningsgenerator til permanent sletning af din konto og skydata.',
    searchPlaceholder: 'Søg i vilkårene (f.eks. "AI-anmeldelse", "slet data", "GitHub-token")...',
    filterAll: 'Alle punkter',
    filterAI: 'AI-sikkerhed & Filtre',
    filterPrivacy: 'Privatliv & Kryptering',
    filterModeration: 'UGC & Moderering',
    filterDeletion: 'Sletning af konto',
  },

  pillars: {
    privacyTitle: 'Offline-First-privatliv',
    privacyDesc: 'Alle opgaver, noter og kalendere gemmes som standard lokalt i enhedens SQLite-database. Skysynkronisering sker kun ved login.',
    aiTitle: 'AI-sikkerhed & Beskyttelse',
    aiDesc: 'Obligatorisk mærkning "Genereret af AI" på alle modelsvar, integreret anmeldelse og dynamiske sikkerhedsfiltre.',
    ugcTitle: 'Nultolerance over for chikane',
    ugcDesc: 'Anmeld med 1 tryk, øjeblikkelig blokering af krænkende brugere og hurtig moderering i henhold til Google Plays krav.',
    deletionTitle: 'Slet konto med 1 tryk',
    deletionDesc: 'Ubetinget ret til når som helst at slette din lokale database, Firestore-dokumenter og loginoplysninger.',
  },

  sidebar: {
    tocTitle: 'Indholdsfortegnelse',
  },

  actions: {
    copyLink: 'Kopier link',
    copyAgreement: 'Kopier hele aftalen',
    copiedNotice: 'Kopieret til udklipsholder!',
    backToTop: 'Tilbage til toppen',
  },

  terms: {
    sections: [
      {
        id: 'terms-acceptance',
        title: '1. Accept af vilkårene',
        takeaway: 'Ved at installere eller bruge Kalynt Flow accepterer du disse juridisk bindende vilkår.',
        content: [
          'Velkommen til Kalynt Flow. Disse betingelser for brug ("Vilkår") udgør en juridisk bindende aftale mellem dig ("Bruger") og udviklerne af Kalynt Flow ("vi").',
          'Ved at downloade, installere eller bruge Kalynt Flow bekræfter du, at du har læst, forstået og accepterer at være bundet af disse Vilkår.'
        ]
      },
      {
        id: 'terms-services',
        title: '2. Tjenestebeskrivelse og arkitektur',
        takeaway: 'Kalynt Flow tilbyder lokal produktivitet, arbejdsområdestrukturering og valgfri skysynkronisering.',
        content: [
          'Kalynt Flow er en applikation til opgavestyring, teknisk vidensbase og teamarbejdsområder baseret på "Offline-First"-arkitektur:'
        ],
        bullets: [
          'Hierarkiske arbejdsområder: Isolerede miljøer til personlige eller teamprojekter med adgangsstyring.',
          'Håndtering af opgaver og delopgaver: Prioritetsniveauer (Lav, Mellem, Høj, Haster) og tjeklister.',
          'Markdown-dokumentation: Syntaksfremhævning og øjeblikkelig lokal søgning.',
          'Visuel kalender: Tidsblokering og opgavetidslinjer.',
          'GitHub-integration: Direkte inspektion af arkiver og sager via det officielle GitHub REST API.',
          'Teamkanaler: Gruppesamarbejde og chat i realtid.',
          'AI-assistent: Opgaveautomatisering og intelligente opsummeringer.'
        ]
      },
      {
        id: 'terms-accounts',
        title: '3. Brugerkonti og sikkerhed',
        content: [
          'Væsentlige lokale værktøjer fungerer uden onlinekonto. Skysynkronisering og teamarbejdsområder kræver godkendelse via:',
          'Du er ansvarlig for at holde dine loginoplysninger fortrolige.'
        ],
        bullets: [
          'Google-login: Sikker godkendelse via Android Jetpack Credential Manager.',
          'E-mail/adgangskode: Krypteret godkendelse via Google Firebase Auth.'
        ]
      },
      {
        id: 'terms-ugc',
        title: '4. Brugergenereret indhold og nultolerance (UGC)',
        content: [
          'Kalynt Flow giver mulighed for at oprette noter og sende beskeder i delte kanaler. Du bevarer den fulde ophavsret til dit indhold.'
        ],
        callout: {
          type: 'danger',
          title: 'Nultolerance over for krænkende indhold og chikane',
          text: 'I fuld overensstemmelse med Google Plays retningslinjer for brugergenereret indhold (UGC) er hadefuld tale, chikane, voldeligt indhold og ophavsretskrænkelser strengt forbudt.'
        },
        subsections: [
          {
            subtitle: 'Integrerede modereings- og anmeldelsesværktøjer',
            bullets: [
              'Anmeldelse med 1 tryk: Anmeld upassende indhold direkte i appen.',
              'Øjeblikkelig blokering: Bloker krænkende brugere med ét tryk for at skjule deres beskeder.',
              'Gennemgang inden for 24 timer: Vores team behandler anmeldelser inden for 24 timer og lukker overtrædende konti.'
            ]
          }
        ]
      },
      {
        id: 'terms-ai',
        title: '5. Generative AI-tjenester og sikkerhed',
        content: [
          'Kalynt Flow integrerer AI-funktioner via Google Gemini API til hjælp ved opgaveplanlægning og tekstformatering.'
        ],
        callout: {
          type: 'purple',
          title: 'AI-gennemsigtighed og obligatorisk mærkning',
          text: 'Alle svar genereret af AI er tydeligt markeret med etiketten "Genereret af AI".'
        },
        subsections: [
          {
            subtitle: 'Anmeldelse af AI-svar og forbedring af sikkerhedsfiltre',
            text: 'Brugere kan anmelde unøjagtige eller upassende AI-svar for at bidrage til forbedring af sikkerhedsreglerne.'
          }
        ]
      },
      {
        id: 'terms-github',
        title: '6. Tredjepartsintegrationer (GitHub REST API)',
        content: [
          'Personlige adgangstokens til GitHub (PAT) gemmes udelukkende i din lokale enheds Android EncryptedSharedPreferences og sendes ALDRIG til Kalynt Flows servere.'
        ]
      },
      {
        id: 'terms-billing',
        title: '7. Abonnementer og Google Play-fakturering',
        content: [
          'Alle køb i appen og Pro-abonnementer administreres udelukkende via Google Play In-App Billing i henhold til udviklerretningslinjerne.'
        ]
      },
      {
        id: 'terms-disclaimers',
        title: '8. Ansvarsfraskrivelse og ansvarsbegrænsning',
        content: [
          'Kalynt Flow leveres "SOM DET ER OG FOREFINDES". Vi er i det omfang loven tillader ikke ansvarlige for indirekte tab eller tab af data.'
        ]
      },
      {
        id: 'terms-contact',
        title: '9. Kontakt og support',
        content: [
          'For juridiske spørgsmål eller support henvend dig til KalyntFlow@protonmail.com.'
        ]
      }
    ],
    faqTitle: 'Ofte stillede spørgsmål (Vilkår og jura)',
    faqs: [
      {
        q: 'Skal jeg oprette en konto for at bruge Kalynt Flow?',
        a: 'Nej. Du kan bruge alle kernefunktioner (opgaver, Markdown-noter, kalender) helt offline uden en konto.'
      },
      {
        q: 'Hvor gemmes mine GitHub-tokens?',
        a: 'Dine tokens gemmes krypteret i telefonens hardware-sikrede Android Keystore-lager.'
      },
      {
        q: 'Hvordan modereres beskeder i teamkanaler?',
        a: 'Hver besked har mulighed for anmeldelse og blokering med 1 tryk, og sager behandles inden for 24 timer.'
      }
    ]
  },

  privacy: {
    sections: [
      {
        id: 'priv-intro',
        title: '1. Introduktion og privatlivsprincipper',
        takeaway: 'Dine data tilhører kun dig. Vi sælger ikke dine data og bruger dem ikke til reklamer.',
        content: [
          'Denne privatlivspolitik beskriver behandlingen af personoplysninger i Android-appen Kalynt Flow (Pakke-ID: com.aistudio.kalyntflow.app).',
          'Vores "Offline-First"-arkitektur sikrer, at dine data primært forbliver lokalt på din egen enhed.'
        ]
      },
      {
        id: 'priv-data-collected',
        title: '2. Indsamlede oplysninger og formål',
        content: [
          'Vi indsamler kun det absolutte minimum af data, der er nødvendige for tjenestens funktion:'
        ],
        table: {
          headers: ['Datakategori', 'Indsamlede elementer', 'Formål med indsamling', 'Lagringssted'],
          rows: [
            ['Kontooplysninger', 'E-mailadresse, visningsnavn, UID', 'Godkendelse og adgangsstyring', 'Firebase Auth og Firestore'],
            ['Arbejdsområdedata', 'Opgaver, noter, lister, begivenheder', 'Produktivitetsværktøjer og synk', 'Lokal SQLite (Room) + Firestore'],
            ['Chatbeskeder', 'Kanalbeskeder, tidsstempler', 'Realtidssamarbejde i team', 'Cloud Firestore (TLS 1.3-kryptering)'],
            ['AI-interaktioner', 'Indtastede forespørgsler og AI-svar', 'Generering af svar og optimering', 'Gemini API (ikke brugt til reklame)'],
            ['Enhedsdiagnostik', 'Nedbrudsrapporter, OS-version, model', 'Fejlretning og stabilitet', 'Firebase Crashlytics (anonymiseret)']
          ]
        }
      },
      {
        id: 'priv-storage',
        title: '3. Lagring, kryptering og sikkerhed',
        content: [
          'Lokal lagring: Noter og opgaver gemmes i enhedens SQLite-database via Android Room.',
          'Skylagring: Synkroniserede data overføres via sikre TLS 1.3-krypterede forbindelser til Google Cloud Firebase Firestore.',
          'Sikkerhedsforanstaltninger: Vi håndhæver strenge Firebase Security Rules for at isolere adgang på bruger- og arbejdsområdeniveau.'
        ]
      },
      {
        id: 'priv-thirdparty',
        title: '4. Tredjepartsleverandører',
        content: [
          'Vi samarbejder udelukkende med certificerede cloududbydere på virksomhedsniveau:'
        ],
        bullets: [
          'Google Firebase (Auth, Firestore, Crashlytics): Godkendelse, synkronisering og stabilitetstelemetri.',
          'Google Gemini API: AI-funktioner under strenge virksomhedsaftaler om privatliv.',
          'Google Play Billing: Sikker betalingshåndtering i appen.',
          'GitHub REST API: Direkte opslag i kodelagre på brugerens anmodning.'
        ]
      },
      {
        id: 'priv-rights',
        title: '5. Dine rettigheder (GDPR og CCPA)',
        content: [
          'Vi garanterer fuld overholdelse af dine digitale databeskyttelsesrettigheder:',
          'Ret til indsigt og dataportabilitet: Anmod om en kopi af dine gemte data når som helst.',
          'Ret til berigtigelse: Opdater unøjagtige profiloplysninger.',
          'Ret til sletning (Retten til at blive glemt): Slet din konto og dine skydata med 1 tryk.',
          'Vi sælger eller videregiver aldrig dine personoplysninger til tredjeparter.'
        ]
      },
      {
        id: 'priv-contact',
        title: '6. Privatlivsspørgsmål og kontakt',
        content: [
          'For spørgsmål om databeskyttelse kan du kontakte os på KalyntFlow@protonmail.com.'
        ]
      }
    ],
    faqTitle: 'Ofte stillede spørgsmål (Privatliv og datasikkerhed)',
    faqs: [
      {
        q: 'Bruges mine noter til at træne AI-modeller?',
        a: 'Nej. Forespørgsler til Google Gemini er omfattet af udvikleraftaler for virksomheder og bruges ikke til offentlig modeltræning.'
      },
      {
        q: 'Kan jeg eksportere mine data før sletning af kontoen?',
        a: 'Ja. I appens indstillinger kan du eksportere alle dine arbejdsområder og noter til Markdown/JSON-filer.'
      },
      {
        q: 'Har Kalynt Flow adgang til min placering eller mine kontakter?',
        a: 'Nej. Appen anmoder ikke om og bruger ingen tilladelser til placering, kontakter eller mikrofon.'
      }
    ]
  },

  deletion: {
    sections: [
      {
        id: 'del-commitment',
        title: '1. Forpligtelse til sletning af data',
        takeaway: 'Du har fuld kontrol over dine data og kan slette din konto når som helst.',
        content: [
          'I fuld overensstemmelse med Google Plays retningslinjer og internationale databeskyttelseslove (GDPR, CCPA) garanterer Kalynt Flow retten til øjeblikkelig og ubetinget sletning af konto og data.'
        ]
      },
      {
        id: 'del-how-to',
        title: '2. Sådan sletter du din konto i appen (Trin for trin)',
        content: [
          'Du kan slette din konto direkte på din Android-enhed på få sekunder:'
        ],
        bullets: [
          'Trin 1: Åbn Kalynt Flow på din Android-enhed.',
          'Trin 2: Tryk på fanen "Indstillinger" (tandhjulsikonet) i den nederste bjælke.',
          'Trin 3: Rul ned til afsnittet "Konto & Sikkerhed".',
          'Trin 4: Tryk på den røde knap "Slet konto og alle data".',
          'Trin 5: Bekræft i dialogboksen.',
          'Resultat: Din lokale database nulstilles, Firebase Auth-kontoen slettes, og alle Firestore-dokumenter slettes øjeblikkeligt.'
        ]
      },
      {
        id: 'del-table',
        title: '3. Tabel over datasletning',
        content: [
          'Nedenstående tabel viser handlinger og tidsrammer for hver datatype:'
        ],
        table: {
          headers: ['Datatype', 'Handling ved sletning', 'Tidsramme'],
          rows: [
            ['Firebase Auth-brugerkonto', 'Slettes permanent', 'Øjeblikkeligt (0 sekunder)'],
            ['Opgaver og noter i Cloud Firestore', 'Fjernes fra skyen', 'Øjeblikkeligt (0 sekunder)'],
            ['Medlemskab af teamkanaler', 'Fjernes fra alle kanaler', 'Øjeblikkeligt (0 sekunder)'],
            ['Lokal SQLite-database på enheden', 'Fjernes fra lageret', 'Lige efter bekræftelse'],
            ['GitHub-adgangstoken (PAT)', 'Slettes fra Android Keystore', 'Lige efter bekræftelse']
          ]
        }
      }
    ],
    generator: {
      title: 'Generator til formel sletteanmodning',
      desc: 'Hvis du ikke længere har adgang til din Android-enhed, kan du generere en formel anmodning og sende den via e-mail:',
      emailLabel: 'E-mailadresse tilknyttet kontoen:',
      emailPlaceholder: 'f.eks. bruger@eksempel.dk',
      scopeLabel: 'Omfang af ønsket sletning:',
      scopeAuth: 'Firebase-loginoplysninger og profil',
      scopeCloud: 'Opgaver, noter og kalendere i Cloud Firestore',
      scopeWorkspaces: 'Medlemskaber og beskeder i delte arbejdsområder',
      reasonLabel: 'Årsag til sletning (valgfrit):',
      reasonPlaceholder: 'f.eks. Lukning af konto / Har ikke længere brug for tjenesten',
      previewTitle: 'Forhåndsvisning af formel anmodning:',
      copyBtn: 'Kopier anmodningstekst',
      sendEmailBtn: 'Åbn i e-mailprogram',
      emailSubject: 'ANMODNING OM SLETNING AF KONTO OG DATA — Kalynt Flow'
    },
    faqTitle: 'Ofte stillede spørgsmål (Slet konto)',
    faqs: [
      {
        q: 'Kan en slettet konto gendannes?',
        a: 'Nej. Af sikkerheds- og privatlivsmæssige årsager er sletningen definitiv og kan ikke fortrydes.'
      },
      {
        q: 'Afmelder kontosletningen mit Google Play-abonnement?',
        a: 'Abonnementer administreres direkte af Google. Husk at opsige aktive abonnementer i Google Play Butik-appen, før du sletter din konto.'
      }
    ]
  },

  footer: {
    brandSubtitle: 'Officiel portal for juridisk information, betingelser for brug og privatliv',
    rights: 'Alle rettigheder forbeholdes. Android og Google Play er varemærker tilhørende Google LLC.',
    termsLink: 'Betingelser for brug',
    privacyLink: 'Privatlivspolitik',
    deletionLink: 'Slet konto',
    contactSupport: 'Kontakt: KalyntFlow@protonmail.com'
  }
};
