import { Translation } from './types';

export const no: Translation = {
  langCode: 'no',
  langName: 'Norwegian',
  nativeName: 'Norsk',
  flag: 'NO',

  meta: {
    title: 'Kalynt Flow — Brukervilkår & Personvernerklæring',
    description: 'Offisielle brukervilkår, personvernerklæring og retningslinjer for sletting av brukerdata for Android-appen Kalynt Flow.',
    badge: 'I samsvar med Google Play Butikks retningslinjer',
    packageIdLabel: 'Pakke-ID:',
    archLabel: 'Arkitektur:',
    archValue: 'Offline-First (Room SQLite + Firestore)',
    effectiveDateLabel: 'Ikrafttredelsesdato:',
    effectiveDateValue: '16. august 2026',
    readingTimePrefix: 'Beregnet lesetid:',
    readingTimeSuffix: 'min',
    wordsSuffix: 'ord',
  },

  nav: {
    terms: 'Brukervilkår',
    privacy: 'Personvern',
    deletion: 'Slett konto',
    fontSize: 'Tekststørrelse',
    toggleTheme: 'Mørk/lys modus',
    print: 'Skriv ut',
    contact: 'Brukerstøtte',
    language: 'Språk (Language)',
    searchLangPlaceholder: 'Søk etter språk...',
  },

  hero: {
    termsTitle: 'Brukervilkår (Terms of Service)',
    termsSubtitle: 'Les de juridiske vilkårene, reglene for akseptabel bruk, AI-sikkerhet og personvern som gjelder for Kalynt Flow.',
    privacyTitle: 'Personvernerklæring (Privacy Policy)',
    privacySubtitle: 'Tydelig informasjon om hvordan Kalynt Flow lagrer dataene dine lokalt på Android med SQLite, synkroniserer med Google Cloud og beskytter personvernet ditt.',
    deletionTitle: 'Sletting av konto og data',
    deletionSubtitle: 'Trinnvise instruksjoner, verktøy i appen og offisiell forespørselsgenerator for å slette kontoen og nettskydataene dine permanent.',
    searchPlaceholder: 'Søk i vilkårene (f.eks. "AI-rapportering", "slett data", "GitHub-token")...',
    filterAll: 'Alle klausuler',
    filterAI: 'AI-sikkerhet & Filtre',
    filterPrivacy: 'Personvern & Kryptering',
    filterModeration: 'UGC & Moderering',
    filterDeletion: 'Kontosletting',
  },

  pillars: {
    privacyTitle: 'Offline-First-personvern',
    privacyDesc: 'Alle oppgaver, notater og kalendere lagres som standard lokalt i enhetens SQLite-database. Skysynkronisering skjer kun ved innlogging.',
    aiTitle: 'AI-sikkerhet & Skjold',
    aiDesc: 'Obligatorisk merking "Generert av AI" på alle modellsvar, innebygd rapportering og dynamiske sikkerhetsfiltre.',
    ugcTitle: 'Nulltoleranse mot trakassering',
    ugcDesc: 'Rapporter med 1 trykk, umiddelbar blokkering av uønskede brukere og rask moderering i henhold til Google Plays standarder.',
    deletionTitle: 'Slett konto med 1 trykk',
    deletionDesc: 'Ubetinget rett til når som helst å slette din lokale database, Firestore-dokumenter og innloggingsdetaljer.',
  },

  sidebar: {
    tocTitle: 'Innholdsfortegnelse',
  },

  actions: {
    copyLink: 'Kopier lenke',
    copyAgreement: 'Kopier hele avtalen',
    copiedNotice: 'Kopiert til utklippstavlen!',
    backToTop: 'Tilbake til toppen',
  },

  terms: {
    sections: [
      {
        id: 'terms-acceptance',
        title: '1. Godkjenning av vilkårene',
        takeaway: 'Ved å installere eller bruke Kalynt Flow godtar du disse juridisk bindende vilkårene.',
        content: [
          'Velkommen til Kalynt Flow. Disse brukervilkårene ("Vilkår") utgjør en juridisk bindende avtale mellom deg ("Bruker") og utviklerne av Kalynt Flow ("vi").',
          'Ved å laste ned, installere eller bruke Kalynt Flow bekrefter du at du har lest, forstått og godtar å være bundet av disse Vilkårene.'
        ]
      },
      {
        id: 'terms-services',
        title: '2. Tjenestebeskrivelse og arkitektur',
        takeaway: 'Kalynt Flow tilbyr lokal produktivitet, arbeidsområdeorganisering og valgfri nettskysynkronisering.',
        content: [
          'Kalynt Flow er en applikasjon for oppgavehåndtering, teknisk kunnskapsbase og teamarbeidsområder basert på "Offline-First"-arkitektur:'
        ],
        bullets: [
          'Hierarkiske arbeidsområder: Isolerte miljøer for personlige eller teamprosjekter med tilgangsstyring.',
          'Håndtering av oppgaver og deloppgaver: Prioritetsnivåer (Lav, Middels, Høy, Kritisk) og sjekklister.',
          'Markdown-dokumentasjon: Syntaksutheving og umiddelbart lokalt søk.',
          'Visuell kalender: Tidsblokkering og tidslinjer for oppgaver.',
          'GitHub-integrasjon: Direkte inspeksjon av depoter og saker via offisielt GitHub REST API.',
          'Teamkanaler: Gruppesamarbeid og chat i sanntid.',
          'AI-assistent: Oppgaveautomatisering og smarte sammendrag.'
        ]
      },
      {
        id: 'terms-accounts',
        title: '3. Brukerkontoer og sikkerhet',
        content: [
          'Viktige lokale verktøy fungerer uten nettkonto. Skysynkronisering og teamarbeidsområder krever autentisering via:',
          'Du er ansvarlig for å holde innloggingsdetaljene dine konfidensielle.'
        ],
        bullets: [
          'Google-innlogging: Sikker autentisering via Android Jetpack Credential Manager.',
          'E-post/passord: Kryptert autentisering via Google Firebase Auth.'
        ]
      },
      {
        id: 'terms-ugc',
        title: '4. Brukergenerert innhold og nulltoleranse (UGC)',
        content: [
          'Kalynt Flow lar deg opprette notater og sende meldinger i delte kanaler. Du beholder alle immaterielle rettigheter til innholdet ditt.'
        ],
        callout: {
          type: 'danger',
          title: 'Nulltoleranse mot støtende innhold og trakassering',
          text: 'I full overensstemmelse med Google Plays retningslinjer for brukergenerert innhold (UGC) er hatefulle ytringer, trakassering, voldelig innhold og brudd på opphavsretten strengt forbudt.'
        },
        subsections: [
          {
            subtitle: 'Innebygde modererings- og rapporteringsverktøy',
            bullets: [
              'Rapportering med 1 trykk: Varsle om upassende innhold direkte i grensesnittet.',
              'Umiddelbar blokkering: Blokker uønskede brukere for å skjule meldingene deres.',
              'Gjennomgang innen 24 timer: Vårt team behandler varsler innen 24 timer og stenger overtrædende kontoer.'
            ]
          }
        ]
      },
      {
        id: 'terms-ai',
        title: '5. Generative AI-tjenester og sikkerhetsgrenser',
        content: [
          'Kalynt Flow inneholder AI-funksjoner levert av Google Gemini API som hjelp til oppgaveplanlegging og tekstformatering.'
        ],
        callout: {
          type: 'purple',
          title: 'AI-åpenhet og obligatorisk merking',
          text: 'Alle svar generert av AI er tydelig merket med etiketten "Generert av AI".'
        },
        subsections: [
          {
            subtitle: 'Rapportering av AI-svar og forbedring av sikkerhetsfiltre',
            text: 'Brukere kan rapportere feilaktige eller upassende AI-svar for å forbedre sikkerhetsreglene.'
          }
        ]
      },
      {
        id: 'terms-github',
        title: '6. Tredjepartsintegrasjoner (GitHub REST API)',
        content: [
          'Personlige adgangstokener for GitHub (PAT) lagres utelukkende i din lokale enhets Android EncryptedSharedPreferences og sendes ALDRI til Kalynt Flows servere.'
        ]
      },
      {
        id: 'terms-billing',
        title: '7. Abonnementer og Google Play-fakturering',
        content: [
          'Alle kjøp i appen og Pro-abonnementer behandles utelukkende gjennom Google Play In-App Billing i henhold til utviklerretningslinjene.'
        ]
      },
      {
        id: 'terms-disclaimers',
        title: '8. Ansvarsfraskrivelse og ansvarsbegrensning',
        content: [
          'Kalynt Flow leveres "SOM DEN ER". I den grad loven tillater det, er vi ikke ansvarlige for indirekte skader eller tap av data.'
        ]
      },
      {
        id: 'terms-contact',
        title: '9. Kontakt og brukerstøtte',
        content: [
          'For juridiske spørsmål eller brukerstøtte, kontakt oss på KalyntFlow@protonmail.com.'
        ]
      }
    ],
    faqTitle: 'Ofte stilte spørsmål (Vilkår og juridisk)',
    faqs: [
      {
        q: 'Må jeg opprette en konto for å bruke Kalynt Flow?',
        a: 'Nei. Du kan bruke alle kjernefunksjoner (oppgaver, Markdown-notater, kalender) helt offline uten konto.'
      },
      {
        q: 'Hvor lagres mine GitHub-tokener?',
        a: 'Dine tokener lagres kryptert i telefonens maskinvaresikrede Android Keystore-minne.'
      },
      {
        q: 'Hvordan modereres meldinger i teamkanaler?',
        a: 'Hver melding har mulighet for rapportering og blokkering med 1 trykk, og saker behandles innen 24 timer.'
      }
    ]
  },

  privacy: {
    sections: [
      {
        id: 'priv-intro',
        title: '1. Innledning og personvernprinsipper',
        takeaway: 'Dataene dine tilhører bare deg. Vi selger ikke dataene dine og bruker dem ikke til reklame.',
        content: [
          'Denne personvernerklæringen beskriver hvordan personopplysninger behandles i Android-appen Kalynt Flow (Pakke-ID: com.aistudio.kalyntflow.app).',
          'Vår "Offline-First"-arkitektur sikrer at dataene dine primært forblir lokalt på din egen enhet.'
        ]
      },
      {
        id: 'priv-data-collected',
        title: '2. Innsamlede opplysninger og formål',
        content: [
          'Vi samler kun inn det absolutte minimum av data som er nødvendig for at tjenesten skal fungere:'
        ],
        table: {
          headers: ['Datakategori', 'Innsamlede opplysninger', 'Formål med innsamlingen', 'Lagringssted'],
          rows: [
            ['Kontoopplysninger', 'E-postadresse, visningsnavn, UID', 'Autentisering og tilgangsrettigheter', 'Firebase Auth og Firestore'],
            ['Arbeidsområdedata', 'Oppgaver, notater, lister, hendelser', 'Produktivitetsverktøy og synkronisering', 'Lokalt SQLite (Room) + Firestore'],
            ['Chatmeldinger', 'Kanalmeldinger, tidsstempler', 'Sanntidssamarbeid i team', 'Cloud Firestore (TLS 1.3-kryptering)'],
            ['AI-interaksjoner', 'Innskrevne forespørsler og AI-svar', 'Generering av svar og kvalitetsforbedring', 'Gemini API (ikke brukt til reklame)'],
            ['Enhetsdiagnostikk', 'Krasjrapporter, OS-versjon, modell', 'Feilretting og stabilitet', 'Firebase Crashlytics (anonymisert)']
          ]
        }
      },
      {
        id: 'priv-storage',
        title: '3. Lagring, kryptering og sikkerhet',
        content: [
          'Lokal lagring: Notater og oppgaver lagres i enhetens SQLite-database via Android Room.',
          'Skylagring: Synkroniserte data overføres via sikre TLS 1.3-krypterte tilkoblinger til Google Cloud Firebase Firestore.',
          'Sikkerhetstiltak: Vi håndhever strenge Firebase Security Rules for å isolere tilgang på bruker- og arbeidsområdenivå.'
        ]
      },
      {
        id: 'priv-thirdparty',
        title: '4. Tredjepartsleverandører',
        content: [
          'Vi samarbeider kun med sertifiserte skyleverandører på bedriftsnivå:'
        ],
        bullets: [
          'Google Firebase (Auth, Firestore, Crashlytics): Autentisering, synkronisering og stabilitetstelemetri.',
          'Google Gemini API: AI-funksjoner under strenge personvernavtaler for bedrifter.',
          'Google Play Billing: Sikker betalingsbehandling i appen.',
          'GitHub REST API: Direkte oppslag i depoter på brukerens forespørsel.'
        ]
      },
      {
        id: 'priv-rights',
        title: '5. Dine rettigheter (GDPR og CCPA)',
        content: [
          'Vi garanterer full respekt for dine digitale personvernrettigheter:',
          'Rett til innsyn og dataportabilitet: Be om en eksport av dataene dine når som helst.',
          'Rett til retting: Oppdater unøyaktige profildetaljer.',
          'Rett til sletting (Retten til å bli glemt): Slett kontoen og skydatalagringen med 1 trykk.',
          'Vi selger eller overdrar aldri dine personopplysninger til tredjeparter.'
        ]
      },
      {
        id: 'priv-contact',
        title: '6. Personvernvurderinger og kontakt',
        content: [
          'For spørsmål om personvern, kontakt oss på KalyntFlow@protonmail.com.'
        ]
      }
    ],
    faqTitle: 'Ofte stilte spørsmål (Personvern og datasikkerhet)',
    faqs: [
      {
        q: 'Brukes notatene mine til å trene AI-modeller?',
        a: 'Nei. Forespørsler til Google Gemini er underlagt utvikleravtaler for bedrifter og brukes ikke til offentlig modelltrening.'
      },
      {
        q: 'Kan jeg eksportere dataene mine før jeg sletter kontoen?',
        a: 'Ja. I appens innstillinger kan du eksportere alle arbeidsområder og notater til Markdown/JSON-filer.'
      },
      {
        q: 'Har Kalynt Flow tilgang til posisjonen min eller kontaktene mine?',
        a: 'Nei. Appen ber ikke om og bruker ingen tillatelser til posisjon, kontakter eller mikrofon.'
      }
    ]
  },

  deletion: {
    sections: [
      {
        id: 'del-commitment',
        title: '1. Forpliktelse til sletting av data',
        takeaway: 'Du har full kontroll over dataene dine og kan slette kontoen din når som helst.',
        content: [
          'I full overensstemmelse med Google Plays retningslinjer og internasjonale personvernlover (GDPR, CCPA) garanterer Kalynt Flow retten til umiddelbar og ubetinget sletting av konto og data.'
        ]
      },
      {
        id: 'del-how-to',
        title: '2. Slik sletter du kontoen i appen (Trinn for trinn)',
        content: [
          'Du kan slette kontoen din direkte på din Android-enhet på få sekunder:'
        ],
        bullets: [
          'Trinn 1: Åpne Kalynt Flow på din Android-enhet.',
          'Trinn 2: Trykk på "Innstillinger"-fanen (tannhjulikonet) i det nederste feltet.',
          'Trinn 3: Rull ned til delen "Konto og sikkerhet".',
          'Trinn 4: Trykk på den røde knappen "Slett konto og alle data".',
          'Trinn 5: Bekreft i dialogboksen.',
          'Resultat: Den lokale databasen slettes, Firebase Auth-kontoen fjernes og alle Firestore-dokumenter slettes umiddelbart.'
        ]
      },
      {
        id: 'del-table',
        title: '3. Tabell for sletting av data',
        content: [
          'Tabellen nedenfor viser tiltak og tidsrammer for hver datatype:'
        ],
        table: {
          headers: ['Datatype', 'Handling ved sletting', 'Tidsramme'],
          rows: [
            ['Firebase Auth-brukerkonto', 'Slettes permanent', 'Umiddelbart (0 sekunder)'],
            ['Oppgaver og notater i Cloud Firestore', 'Fjernes fra nettskyen', 'Umiddelbart (0 sekunder)'],
            ['Medlemskap i teamkanaler', 'Fjernes fra alle kanaler', 'Umiddelbart (0 sekunder)'],
            ['Lokal SQLite-database på enheten', 'Fjernes fra minnet', 'Rett etter bekreftelse'],
            ['GitHub-adgangstoken (PAT)', 'Slettes fra Android Keystore', 'Rett etter bekreftelse']
          ]
        }
      }
    ],
    generator: {
      title: 'Generator for formell sletteforespørsel',
      desc: 'Hvis du ikke lenger har tilgang til Android-enheten din, kan du generere en formell forespørsel og sende den på e-post:',
      emailLabel: 'E-postadresse knyttet til kontoen:',
      emailPlaceholder: 'f.eks. bruker@eksempel.no',
      scopeLabel: 'Omfang av ønsket sletting:',
      scopeAuth: 'Firebase-innloggingsdetaljer og profil',
      scopeCloud: 'Oppgaver, notater og kalendere i Cloud Firestore',
      scopeWorkspaces: 'Medlemskap og meldinger i delte arbeidsområder',
      reasonLabel: 'Årsak til sletting (valgfritt):',
      reasonPlaceholder: 'f.eks. Avslutte konto / Trenger ikke tjenesten lenger',
      previewTitle: 'Forhåndsvisning av formell forespørsel:',
      copyBtn: 'Kopier forespørselstekst',
      sendEmailBtn: 'Åpne i e-postprogram',
      emailSubject: 'FORESPØRSEL OM SLETTING AV KONTO OG DATA — Kalynt Flow'
    },
    faqTitle: 'Ofte stilte spørsmål (Slett konto)',
    faqs: [
      {
        q: 'Kan en slettet konto gjenopprettes?',
        a: 'Nei. Av sikkerhets- og personvernhensyn er slettingen endelig og ugjenkallelig.'
      },
      {
        q: 'Avbryter kontoslettingen mitt Google Play-abonnement?',
        a: 'Abonnementer administreres direkte av Google. Husk å avslutte aktive abonnementer i Google Play Butikk-appen før du sletter kontoen din.'
      }
    ]
  },

  footer: {
    brandSubtitle: 'Offisiell portal for juridisk informasjon, brukervilkår og personvern',
    rights: 'Enerett. Android og Google Play er varemerker for Google LLC.',
    termsLink: 'Brukervilkår',
    privacyLink: 'Personvernerklæring',
    deletionLink: 'Slett konto',
    contactSupport: 'Kontakt: KalyntFlow@protonmail.com'
  }
};
