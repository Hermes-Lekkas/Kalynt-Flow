import { Translation } from './types';

export const it: Translation = {
  langCode: 'it',
  langName: 'Italian',
  nativeName: 'Italiano',
  flag: 'IT',

  meta: {
    title: 'Kalynt Flow — Termini di servizio e Informativa sulla privacy',
    description: 'Termini di servizio ufficiali, informativa sulla privacy e procedure di cancellazione dei dati per l\'applicazione Android Kalynt Flow.',
    badge: 'Conforme alle norme di Google Play Store',
    packageIdLabel: 'ID pacchetto:',
    archLabel: 'Architettura:',
    archValue: 'Offline-First (Room SQLite + Firestore)',
    effectiveDateLabel: 'Data di validità:',
    effectiveDateValue: '16 agosto 2026',
    readingTimePrefix: 'Tempo di lettura stimato:',
    readingTimeSuffix: 'min',
    wordsSuffix: 'parole',
  },

  nav: {
    terms: 'Termini di servizio',
    privacy: 'Privacy',
    deletion: 'Cancellazione account',
    fontSize: 'Dimensione testo',
    toggleTheme: 'Modalità scura/chiara',
    print: 'Stampa',
    contact: 'Assistenza',
    language: 'Lingua (Language)',
    searchLangPlaceholder: 'Cerca lingua...',
  },

  hero: {
    termsTitle: 'Termini di servizio',
    termsSubtitle: 'Consulta le condizioni legali, le norme d\'uso accettabile, le misure di sicurezza per l\'IA e la protezione dei dati su Kalynt Flow.',
    privacyTitle: 'Informativa sulla privacy',
    privacySubtitle: 'Informazioni trasparenti su come Kalynt Flow memorizza i dati localmente in SQLite su Android, sincronizza con Google Cloud e protegge la privacy.',
    deletionTitle: 'Cancellazione di account e dati',
    deletionSubtitle: 'Istruzioni passo dopo passo, strumenti integrati nell\'app e generatore di richieste formali per eliminare definitivamente tutti i tuoi dati.',
    searchPlaceholder: 'Cerca nei termini (es. "segnalazione IA", "elimina dati", "token GitHub")...',
    filterAll: 'Tutte le clausole',
    filterAI: 'Sicurezza IA & Filtri',
    filterPrivacy: 'Privacy & Crittografia',
    filterModeration: 'UGC & Moderazione',
    filterDeletion: 'Cancellazione dati',
  },

  pillars: {
    privacyTitle: 'Privacy Offline-First',
    privacyDesc: 'Attività, note e calendari risiedono nella memoria locale SQLite del dispositivo. La sincronizzazione cloud avviene solo dopo il login.',
    aiTitle: 'Sicurezza & Filtri IA',
    aiDesc: 'Etichetta obbligatoria "Generato da IA" su tutte le risposte dei modelli, segnalazione integrata e filtri di sicurezza dinamici.',
    ugcTitle: 'Tolleranza zero per abusi',
    ugcDesc: 'Segnalazione con 1 tocco, blocco istantaneo degli utenti molesti e moderazione tempestiva conforme alle norme Google Play.',
    deletionTitle: 'Cancellazione account in 1 tocco',
    deletionDesc: 'Diritto incondizionato di eliminare immediatamente il database locale, i documenti Firestore e le credenziali.',
  },

  sidebar: {
    tocTitle: 'Indice dei contenuti',
  },

  actions: {
    copyLink: 'Copia link',
    copyAgreement: 'Copia accordo completo',
    copiedNotice: 'Copiato negli appunti!',
    backToTop: 'Torna su',
  },

  terms: {
    sections: [
      {
        id: 'terms-acceptance',
        title: '1. Accettazione dei termini',
        takeaway: 'Installando o utilizzando Kalynt Flow accetti formalmente i presenti termini vincolanti.',
        content: [
          'Benvenuto su Kalynt Flow. I presenti Termini di servizio ("Termini") costituiscono un contratto legalmente vincolante tra l\'utente ("Utente", "tu") e gli sviluppatori di Kalynt Flow ("noi").',
          'Scaricando, installando o utilizzando Kalynt Flow, dichiari di aver letto, compreso e accettato tali Termini.'
        ]
      },
      {
        id: 'terms-services',
        title: '2. Descrizione dei servizi e architettura',
        takeaway: 'Kalynt Flow offre produttività locale, gestione di spazi di lavoro e sincronizzazione cloud opzionale.',
        content: [
          'Kalynt Flow è un\'applicazione basata sull\'architettura "Offline-First" per la gestione di attività, basi di conoscenza tecnica e spazi di lavoro per team:'
        ],
        bullets: [
          'Spazi di lavoro gerarchici: Ambienti isolati per flussi di lavoro personali o di team con autorizzazioni personalizzate.',
          'Gestione attività e sotto-attività: Priorità (Bassa, Media, Alta, Urgente) e liste di controllo.',
          'Documentazione Markdown avanzata: Evidenziazione della sintassi e ricerca locale immediata.',
          'Calendario visivo: Time-blocking e pianificazione cronologica.',
          'Integrazione GitHub: Esplorazione diretta di repository e ticket tramite API REST ufficiale GitHub.',
          'Canali per team: Collaborazione e messaggistica di gruppo in tempo reale.',
          'Assistente IA contestuale: Automazione delle attività e riepiloghi intelligenti.'
        ]
      },
      {
        id: 'terms-accounts',
        title: '3. Account utente e sicurezza',
        content: [
          'Gli strumenti locali essenziali non richiedono un account online. La sincronizzazione e gli spazi condivisi richiedono l\'autenticazione tramite:',
          'Sei responsabile della riservatezza delle tue credenziali di accesso.'
        ],
        bullets: [
          'Accesso con Google: Autenticazione sicura tramite Android Jetpack Credential Manager.',
          'Email e Password: Autenticazione protetta gestita da Google Firebase Auth.'
        ]
      },
      {
        id: 'terms-ugc',
        title: '4. Contenuti degli utenti e politica di tolleranza zero (UGC)',
        content: [
          'Kalynt Flow consente di creare note e scambiare messaggi nei canali di team. Mantieni la piena proprietà intellettuale dei tuoi contenuti.'
        ],
        callout: {
          type: 'danger',
          title: 'Politica di tolleranza zero per contenuti offensivi e molestie',
          text: 'In piena conformità con le norme Google Play relative ai contenuti generati dagli utenti (UGC), Kalynt Flow vieta categoricamente incitamento all\'odio, molestie, contenuti violenti o violazioni del copyright.'
        },
        subsections: [
          {
            subtitle: 'Strumenti di moderazione e segnalazione integrati',
            bullets: [
              'Segnalazione con 1 tocco: Segnala messaggi o contenuti inappropriati direttamente nell\'interfaccia.',
              'Blocco immediato: Blocca i membri scorretti con 1 tocco per nascondere i loro messaggi.',
              'Verifica entro 24 ore: Il nostro team esamina le segnalazioni entro 24 ore ed espelle gli utenti responsabili.'
            ]
          }
        ]
      },
      {
        id: 'terms-ai',
        title: '5. Servizi di IA generativa e misure di protezione',
        content: [
          'Kalynt Flow integra funzionalità di IA generativa basate su Google Gemini API per supportare la gestione di attività e note.'
        ],
        callout: {
          type: 'purple',
          title: 'Trasparenza ed etichettatura obbligatoria dei contenuti IA',
          text: 'Tutte le risposte generate dall\'IA sono contrassegnate chiaramente con l\'etichetta "Risposta generata da IA".'
        },
        subsections: [
          {
            subtitle: 'Segnalazione risposte IA e miglioramento dei filtri',
            text: 'Gli utenti possono segnalare risposte inesatte o non pertinenti per perfezionare le regole di sicurezza del sistema.'
          }
        ]
      },
      {
        id: 'terms-github',
        title: '6. Integrazioni di terze parti (API REST di GitHub)',
        content: [
          'I token di accesso personale GitHub (PAT) sono conservati esclusivamente negli EncryptedSharedPreferences di Android sul tuo dispositivo e non vengono MAI trasmessi ai server di Kalynt Flow.'
        ]
      },
      {
        id: 'terms-billing',
        title: '7. Fatturazione e abbonamenti Google Play',
        content: [
          'Tutti gli acquisti in-app e gli abbonamenti Pro sono gestiti tramite Google Play In-App Billing nel rispetto delle norme per gli sviluppatori.'
        ]
      },
      {
        id: 'terms-disclaimers',
        title: '8. Esclusione di garanzie e limitazione di responsabilità',
        content: [
          'Kalynt Flow è fornito "COSÌ COM\'È" e "IN BASE ALLA DISPONIBILITÀ". Decliniamo ogni responsabilità per danni indiretti o perdite di dati nei limiti di legge.'
        ]
      },
      {
        id: 'terms-contact',
        title: '9. Contatti e assistenza',
        content: [
          'Per questioni legali o supporto tecnico, contatta il nostro team all\'indirizzo KalyntFlow@protonmail.com.'
        ]
      }
    ],
    faqTitle: 'Domande frequenti (Termini legali)',
    faqs: [
      {
        q: 'È necessario un account per usare Kalynt Flow?',
        a: 'No. Puoi utilizzare tutte le funzioni principali (attività, note Markdown, calendario) interamente offline senza registrare un account.'
      },
      {
        q: 'Dove vengono memorizzati i miei token GitHub?',
        a: 'I token rimangono crittografati nel modulo hardware protetto Android Keystore del tuo smartphone.'
      },
      {
        q: 'Come vengono moderati i messaggi nei canali di team?',
        a: 'Ogni messaggio include un\'opzione di segnalazione e blocco immediato in 1 tocco con gestione entro 24 ore.'
      }
    ]
  },

  privacy: {
    sections: [
      {
        id: 'priv-intro',
        title: '1. Introduzione e principi di privacy',
        takeaway: 'I tuoi dati ti appartengono. Non vendiamo le tue informazioni personali né le usiamo a scopo pubblicitario.',
        content: [
          'Questa informativa sulla privacy descrive le modalità di trattamento dei dati personali sull\'applicazione Android Kalynt Flow (ID pacchetto: com.aistudio.kalyntflow.app).',
          'La nostra architettura "Offline-First" garantisce che i dati siano salvati primariamente sul tuo dispositivo.'
        ]
      },
      {
        id: 'priv-data-collected',
        title: '2. Dati raccolti e finalità',
        content: [
          'Raccogliamo solo i dati strettamente necessari per il funzionamento dell\'applicazione:'
        ],
        table: {
          headers: ['Categoria dati', 'Elementi raccolti', 'Scopo della raccolta', 'Posizione di archiviazione'],
          rows: [
            ['Identificativi account', 'Indirizzo email, nome visualizzato, UID', 'Autenticazione e gestione permessi', 'Firebase Auth e Firestore'],
            ['Dati spazio di lavoro', 'Attività, note, checklist, eventi', 'Strumenti di produttività e sincronizzazione', 'SQLite locale (Room) + Firestore'],
            ['Messaggi di chat', 'Messaggi dei canali, timestamp, reazioni', 'Collaborazione in tempo reale', 'Cloud Firestore (crittografia TLS 1.3)'],
            ['Interazioni con l\'IA', 'Prompt inseriti e risposte generate', 'Elaborazione risposte e qualità', 'Transito API Gemini (nessun uso pubblicitario)'],
            ['Diagnostica dispositivo', 'Segnalazioni di arresto anomalo, versione OS', 'Risoluzione bug e stabilità', 'Firebase Crashlytics (anonimizzato)']
          ]
        }
      },
      {
        id: 'priv-storage',
        title: '3. Archiviazione, crittografia e sicurezza',
        content: [
          'Archiviazione locale: Note e attività personali sono salvate nel database SQLite del dispositivo tramite Android Room.',
          'Archiviazione cloud: I dati sincronizzati viaggiano tramite connessioni crittografate TLS 1.3 verso Google Cloud Firebase Firestore.',
          'Misure di sicurezza: Applichiamo regole di sicurezza Firebase rigide per isolare gli accessi per singolo utente e spazio di lavoro.'
        ]
      },
      {
        id: 'priv-thirdparty',
        title: '4. Fornitori di servizi terzi',
        content: [
          'Collaboriamo esclusivamente con provider di infrastrutture enterprise certificati:'
        ],
        bullets: [
          'Google Firebase (Auth, Firestore, Crashlytics): Autenticazione, sincronizzazione e telemetria di stabilità.',
          'Google Gemini API: Funzionalità di IA generativa nel rispetto delle norme di riservatezza enterprise.',
          'Google Play Billing: Gestione sicura dei pagamenti in-app.',
          'GitHub REST API: Interrogazione diretta dei repository su comando dell\'utente.'
        ]
      },
      {
        id: 'priv-rights',
        title: '5. I tuoi diritti (conformità GDPR e CCPA)',
        content: [
          'Garantiamo il pieno rispetto dei tuoi diritti di protezione dei dati:',
          'Diritto di accesso e portabilità: Richiedi un export dei tuoi dati in qualsiasi momento.',
          'Diritto di rettifica: Modifica i dati di profilo inesatti.',
          'Diritto alla cancellazione (Diritto all\'oblio): Cancella il tuo account e i record cloud con 1 tocco.',
          'Non vendiamo né cediamo le tue informazioni a intermediari di dati o terze parti.'
        ]
      },
      {
        id: 'priv-contact',
        title: '6. Contatti e Responsabile della protezione dei dati',
        content: [
          'Per qualsiasi domanda relativa alla protezione dei dati, scrivi a KalyntFlow@protonmail.com.'
        ]
      }
    ],
    faqTitle: 'Domande frequenti (Privacy e sicurezza dati)',
    faqs: [
      {
        q: 'Le mie note vengono utilizzate per addestrare modelli IA?',
        a: 'No. Le chiamate all\'API Google Gemini rispettano le condizioni di riservatezza enterprise e non vengono usate per l\'addestramento pubblico.'
      },
      {
        q: 'Posso esportare i miei dati prima di cancellare l\'account?',
        a: 'Sì. Nelle impostazioni dell\'app puoi esportare tutti i tuoi spazi e note in formato Markdown/JSON.'
      },
      {
        q: 'Kalynt Flow ha accesso alla mia posizione o ai contatti?',
        a: 'No. L\'app non richiede autorizzazioni per la geolocalizzazione, la rubrica o il microfono.'
      }
    ]
  },

  deletion: {
    sections: [
      {
        id: 'del-commitment',
        title: '1. Impegno per la cancellazione dei dati',
        takeaway: 'Hai il pieno controllo sui tuoi dati e puoi cancellare il tuo account in qualsiasi momento.',
        content: [
          'In conformità con le norme Google Play e le normative internazionali (GDPR, CCPA), Kalynt Flow garantisce a ogni utente il diritto immediato e incondizionato di eliminare il proprio account e i dati archiviati.'
        ]
      },
      {
        id: 'del-how-to',
        title: '2. Come cancellare l\'account nell\'app (Passo dopo passo)',
        content: [
          'Puoi cancellare il tuo account direttamente dal tuo dispositivo Android in pochi secondi:'
        ],
        bullets: [
          'Passo 1: Apri Kalynt Flow sul tuo dispositivo Android.',
          'Passo 2: Tocca la scheda "Impostazioni" (icona ingranaggio) nella barra inferiore.',
          'Passo 3: Scorri fino alla sezione "Account & Sicurezza".',
          'Passo 4: Tocca il pulsante rosso "Elimina account e tutti i dati".',
          'Passo 5: Conferma l\'operazione nella finestra di dialogo.',
          'Risultato: Il database locale viene azzerato, l\'account Firebase Auth rimosso e tutti i documenti Firestore eliminati immediatamente.'
        ]
      },
      {
        id: 'del-table',
        title: '3. Tabella di cancellazione e conservazione dati',
        content: [
          'La tabella seguente riassume le azioni di cancellazione applicate a ciascun dato:'
        ],
        table: {
          headers: ['Tipo di dato', 'Azione alla cancellazione', 'Tempistica'],
          rows: [
            ['Account utente Firebase Auth', 'Eliminato definitivamente', 'Immediato (0 secondi)'],
            ['Attività e note su Cloud Firestore', 'Rimosse dal cloud', 'Immediato (0 secondi)'],
            ['Membri e canali di team', 'Rimosso da tutti i canali', 'Immediato (0 secondi)'],
            ['Database locale SQLite sul dispositivo', 'Cancellato dalla memoria', 'Subito dopo la conferma'],
            ['Token di accesso GitHub (PAT)', 'Rimosso da Android Keystore', 'Subito dopo la conferma']
          ]
        }
      }
    ],
    generator: {
      title: 'Generatore di richiesta formale di cancellazione',
      desc: 'Se non hai più accesso al tuo dispositivo Android, puoi inviare una richiesta formale di cancellazione via email:',
      emailLabel: 'Email associata all\'account:',
      emailPlaceholder: 'es: utente@esempio.it',
      scopeLabel: 'Ambito di cancellazione richiesto:',
      scopeAuth: 'Credenziali di autenticazione e profilo Firebase',
      scopeCloud: 'Attività, note e calendari su Cloud Firestore',
      scopeWorkspaces: 'Membri e messaggi degli spazi condivisi',
      reasonLabel: 'Motivo della cancellazione (facoltativo):',
      reasonPlaceholder: 'es: Chiusura account / Non più utilizzato',
      previewTitle: 'Anteprima della richiesta formale:',
      copyBtn: 'Copia testo della richiesta',
      sendEmailBtn: 'Apri nell\'app di posta elettronica',
      emailSubject: 'RICHIESTA DI CANCELLAZIONE ACCOUNT E DATI — Kalynt Flow'
    },
    faqTitle: 'Domande frequenti (Cancellazione account)',
    faqs: [
      {
        q: 'È possibile ripristinare un account cancellato?',
        a: 'No. Per motivi di privacy e sicurezza, la cancellazione è immediata, definitiva e irreversibile.'
      },
      {
        q: 'La cancellazione dell\'account annulla il mio abbonamento Google Play?',
        a: 'Gli abbonamenti sono gestiti direttamente da Google. Ti invitiamo ad annullare gli abbonamenti attivi nell\'app Google Play Store prima di cancellare il tuo account.'
      }
    ]
  },

  footer: {
    brandSubtitle: 'Portale ufficiale di conformità legale, termini di servizio e privacy',
    rights: 'Tutti i diritti riservati. Android e Google Play sono marchi di Google LLC.',
    termsLink: 'Termini di servizio',
    privacyLink: 'Informativa sulla privacy',
    deletionLink: 'Cancellazione account',
    contactSupport: 'Contatto: KalyntFlow@protonmail.com'
  }
};
