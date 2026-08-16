import { Translation } from './types';

export const fr: Translation = {
  langCode: 'fr',
  langName: 'French',
  nativeName: 'Français',
  flag: 'FR',

  meta: {
    title: 'Kalynt Flow — Conditions d\'utilisation & Politique de confidentialité',
    description: 'Conditions d\'utilisation officielles, politique de confidentialité et procédure de suppression des données pour l\'application Android Kalynt Flow.',
    badge: 'Conforme aux politiques Google Play Store',
    packageIdLabel: 'Identifiant du package :',
    archLabel: 'Architecture :',
    archValue: 'Offline-First (Room SQLite + Firestore)',
    effectiveDateLabel: 'Date d\'effet :',
    effectiveDateValue: '16 août 2026',
    readingTimePrefix: 'Temps de lecture estimé :',
    readingTimeSuffix: 'min',
    wordsSuffix: 'mots',
  },

  nav: {
    terms: 'Conditions d\'utilisation',
    privacy: 'Confidentialité',
    deletion: 'Suppression de compte',
    fontSize: 'Ajuster la taille du texte',
    toggleTheme: 'Basculer mode Sombre/Clair',
    print: 'Imprimer',
    contact: 'Contacter le support',
    language: 'Langue (Language)',
    searchLangPlaceholder: 'Rechercher une langue...',
  },

  hero: {
    termsTitle: 'Conditions d\'utilisation',
    termsSubtitle: 'Consultez les conditions légales, les règles d\'utilisation acceptable, la sécurité de l\'IA et la protection des données applicables à Kalynt Flow.',
    privacyTitle: 'Politique de confidentialité',
    privacySubtitle: 'Détails clairs sur la manière dont Kalynt Flow stocke vos données localement sur Android avec SQLite, synchronise avec Google Cloud et protège votre vie privée.',
    deletionTitle: 'Suppression du compte et des données',
    deletionSubtitle: 'Instructions détaillées, outils intégrés et générateur de demande formelle pour supprimer définitivement votre compte et vos données cloud.',
    searchPlaceholder: 'Rechercher dans les politiques (ex: "signalement IA", "supprimer données", "token GitHub")...',
    filterAll: 'Toutes les clauses',
    filterAI: 'Sécurité & Garde-fous IA',
    filterPrivacy: 'Confidentialité & Chiffrement',
    filterModeration: 'Modération & UGC',
    filterDeletion: 'Suppression de compte',
  },

  pillars: {
    privacyTitle: 'Confidentialité Offline-First',
    privacyDesc: 'Toutes les tâches, notes et calendriers restent stockés localement dans SQLite par défaut. Synchronisation cloud uniquement lors de la connexion.',
    aiTitle: 'Sécurité & Garde-fous IA',
    aiDesc: 'Mention obligatoire "Généré par IA" sur toutes les réponses du modèle, système de signalement intégré et filtres de sécurité stricts.',
    ugcTitle: 'Tolérance zéro pour le contenu abusif',
    ugcDesc: 'Signalement en 1 clic, blocage instantané des membres indésirables et modération rapide conforme aux exigences de Google Play.',
    deletionTitle: 'Suppression de compte en 1 clic',
    deletionDesc: 'Droit inconditionnel de purger immédiatement votre base de données locale, vos documents Firestore et vos identifiants.',
  },

  sidebar: {
    tocTitle: 'Table des matières',
  },

  actions: {
    copyLink: 'Copier le lien',
    copyAgreement: 'Copier le texte intégral',
    copiedNotice: 'Copié dans le presse-papiers !',
    backToTop: 'Haut de page',
  },

  terms: {
    sections: [
      {
        id: 'terms-acceptance',
        title: '1. Acceptation des conditions',
        takeaway: 'L\'installation ou l\'utilisation de Kalynt Flow vaut acceptation formelle de ces conditions d\'utilisation.',
        content: [
          'Bienvenue sur Kalynt Flow. Les présentes Conditions d\'utilisation ("Conditions") constituent un contrat juridiquement contraignant entre vous ("Utilisateur", "vous") et les développeurs de Kalynt Flow ("nous").',
          'En téléchargeant, installant ou utilisant Kalynt Flow, vous confirmez avoir lu, compris et accepté d\'être lié par ces Conditions.'
        ]
      },
      {
        id: 'terms-services',
        title: '2. Description des services et architecture',
        takeaway: 'Kalynt Flow offre des outils de productivité locale, d\'organisation de projets et de synchronisation cloud optionnelle.',
        content: [
          'Kalynt Flow est une application d\'orchestration de tâches, de base de connaissances techniques et d\'espaces de travail collaboratifs conçue selon une approche "Offline-First" :'
        ],
        bullets: [
          'Espaces de travail hiérarchisés : Environnements isolés pour flux de travail personnels ou d\'équipe.',
          'Gestion des tâches et sous-tâches : Priorités (Basse, Moyenne, Haute, Urgente) et listes de contrôle.',
          'Documentation Markdown riche : Coloration syntaxique et recherche locale instantanée.',
          'Calendrier visuel : Planification par blocs de temps et chronologie des tâches.',
          'Intégration GitHub : Consultation directe des dépôts et tickets via l\'API officielle GitHub.',
          'Canaux d\'équipe : Collaboration de groupe et discussion en temps réel.',
          'Assistant IA contextuel : Automatisation des tâches et résumés intelligents.'
        ]
      },
      {
        id: 'terms-accounts',
        title: '3. Comptes utilisateurs et sécurité',
        content: [
          'Les fonctionnalités locales de base s\'utilisent sans compte en ligne. La synchronisation cloud et les espaces d\'équipe nécessitent une authentification via :',
          'Vous êtes responsable du maintien de la confidentialité de vos identifiants.'
        ],
        bullets: [
          'Connexion Google : Authentification sécurisée via Android Jetpack Credential Manager.',
          'E-mail/Mot de passe : Authentification chiffrée via Google Firebase Auth.'
        ]
      },
      {
        id: 'terms-ugc',
        title: '4. Contenu utilisateur & Politique de tolérance zéro (UGC)',
        content: [
          'Kalynt Flow permet de créer des notes et d\'échanger des messages d\'équipe. Vous conservez l\'entière propriété intellectuelle de vos contenus.'
        ],
        callout: {
          type: 'danger',
          title: 'Politique de tolérance zéro contre les abus et contenus répréhensibles',
          text: 'Conformément aux règles de Google Play pour les contenus générés par les utilisateurs (UGC), Kalynt Flow applique une tolérance zéro stricte contre les discours haineux, le harcèlement, la violence et les infractions aux droits d\'auteur.'
        },
        subsections: [
          {
            subtitle: 'Outils intégrés de modération et de signalement',
            bullets: [
              'Signalement en 1 clic : Signalez tout contenu répréhensible directement dans l\'interface.',
              'Blocage instantané : Bloquez immédiatement les membres abusifs pour masquer leurs messages.',
              'Traitement en 24h : Notre équipe examine les signalements sous 24 heures et clôture les comptes coupables.'
            ]
          }
        ]
      },
      {
        id: 'terms-ai',
        title: '5. Services d\'IA générative & Garde-fous',
        content: [
          'Kalynt Flow intègre des fonctions d\'IA générative via Google Gemini API pour l\'assistance aux tâches et la mise en forme de texte.'
        ],
        callout: {
          type: 'purple',
          title: 'Transparence et étiquetage obligatoire de l\'IA',
          text: 'Toutes les réponses générées par l\'IA sont clairement identifiées par un badge "Réponse générée par IA" et une bannière d\'avertissement.'
        },
        subsections: [
          {
            subtitle: 'Signalement des réponses de l\'IA et amélioration continue',
            text: 'Les utilisateurs peuvent signaler toute sortie inexacte ou inappropriée de l\'IA afin d\'ajuster les règles de filtrage de sécurité.'
          }
        ]
      },
      {
        id: 'terms-github',
        title: '6. Intégrations tierces (API REST GitHub)',
        content: [
          'Les jetons d\'accès personnels GitHub (PAT) sont stockés exclusivement dans les EncryptedSharedPreferences d\'Android sur votre appareil local et ne sont JAMAIS transmis aux serveurs de Kalynt Flow.'
        ]
      },
      {
        id: 'terms-billing',
        title: '7. Facturation et abonnements Google Play',
        content: [
          'Tous les achats intégrés et abonnements Pro sont gérés exclusivement via le système de facturation Google Play conformément aux règles développeurs.'
        ]
      },
      {
        id: 'terms-disclaimers',
        title: '8. Exclusion de garanties & Limitation de responsabilité',
        content: [
          'Kalynt Flow est fourni "EN L\'ÉTAT" et "SELON DISPONIBILITÉ". Dans les limites de la loi applicable, nous déclinons toute responsabilité pour les dommages indirects ou pertes de données.'
        ]
      },
      {
        id: 'terms-contact',
        title: '9. Contact et assistance',
        content: [
          'Pour toute question juridique ou demande de support, écrivez à KalyntFlow@protonmail.com.'
        ]
      }
    ],
    faqTitle: 'Foire aux questions (Conditions et législation)',
    faqs: [
      {
        q: 'Dois-je créer un compte pour utiliser Kalynt Flow ?',
        a: 'Non. Vous pouvez utiliser toutes les fonctionnalités principales (tâches, notes Markdown, calendrier) entièrement hors ligne sans compte.'
      },
      {
        q: 'Où sont stockés mes jetons GitHub ?',
        a: 'Vos jetons GitHub restent chiffrés dans le composant sécurisé Android Keystore de votre téléphone et ne transitent jamais par nos serveurs.'
      },
      {
        q: 'Comment sont modérés les messages des canaux d\'équipe ?',
        a: 'Chaque message comporte une option de signalement et de blocage en 1 clic. Les signalements sont traités sous 24h.'
      }
    ]
  },

  privacy: {
    sections: [
      {
        id: 'priv-intro',
        title: '1. Introduction et philosophie de confidentialité',
        takeaway: 'Vos tâches et notes vous appartiennent. Nous ne vendons pas vos données et ne les utilisons pas pour la publicité.',
        content: [
          'Cette politique de confidentialité détaille le traitement de vos données personnelles sur l\'application Android Kalynt Flow (Package ID : com.aistudio.kalyntflow.app).',
          'Notre conception repose sur le principe "Offline-First" : vos données résident d\'abord sur votre appareil.'
        ]
      },
      {
        id: 'priv-data-collected',
        title: '2. Données collectées et finalités',
        content: [
          'Nous ne collectons que les informations strictement nécessaires au bon fonctionnement du service :'
        ],
        table: {
          headers: ['Catégorie de données', 'Éléments précis', 'Finalité de collecte', 'Emplacement de stockage'],
          rows: [
            ['Identifiants de compte', 'Adresse e-mail, nom d\'affichage, UID', 'Authentification et gestion des droits', 'Firebase Auth et Firestore'],
            ['Données d\'espaces de travail', 'Tâches, notes, listes, événements', 'Outils de productivité et synchronisation', 'SQLite local (Room) + Firestore'],
            ['Messages de discussion', 'Messages de canaux, horodatages', 'Collaboration d\'équipe en direct', 'Cloud Firestore (chiffrement TLS 1.3)'],
            ['Interactions IA', 'Requêtes saisies et réponses de l\'IA', 'Génération des réponses et amélioration', 'API Gemini (non utilisé pour la pub)'],
            ['Diagnostics de l\'appareil', 'Rapports de plantage, version d\'OS', 'Résolution des bugs et stabilité', 'Firebase Crashlytics (anonymisé)']
          ]
        }
      },
      {
        id: 'priv-storage',
        title: '3. Stockage, chiffrement et sécurité',
        content: [
          'Stockage local : Vos notes et données personnelles sont enregistrées dans une base de données SQLite via Android Room.',
          'Stockage cloud : Les données synchronisées transitent par des connexions chiffrées TLS 1.3 vers Google Cloud Firebase Firestore.',
          'Mesures de sécurité : Des règles de sécurité Firebase strictes isolent les accès au niveau individuel et des espaces de travail.'
        ]
      },
      {
        id: 'priv-thirdparty',
        title: '4. Prestataires tiers',
        content: [
          'Nous nous appuyons uniquement sur des infrastructures d\'entreprise de premier plan :'
        ],
        bullets: [
          'Google Firebase (Auth, Firestore, Crashlytics) : Authentification, synchronisation et télémétrie.',
          'Google Gemini API : Fonctionnalités d\'IA générative soumises à des règles de confidentialité strictes.',
          'Google Play Billing : Gestion sécurisée des paiements dans l\'application.',
          'GitHub REST API : Inspection directe des dépôts initiée par l\'utilisateur.'
        ]
      },
      {
        id: 'priv-rights',
        title: '5. Vos droits (RGPD et CCPA)',
        content: [
          'Nous garantissons l\'exercice de vos droits fondamentaux à la vie privée :',
          'Droit d\'accès et de portabilité : Exportez vos données personnelles à tout moment.',
          'Droit de rectification : Corrigez vos informations de profil.',
          'Droit à l\'effacement (Droit à l\'oubli) : Supprimez votre compte et vos données cloud en 1 clic.',
          'Nous ne vendons ni ne louons vos données personnelles à aucun tiers.'
        ]
      },
      {
        id: 'priv-contact',
        title: '6. Délégué à la protection des données',
        content: [
          'Pour toute question sur la protection de vos données, écrivez à notre équipe dédiée : KalyntFlow@protonmail.com.'
        ]
      }
    ],
    faqTitle: 'Foire aux questions (Confidentialité et données)',
    faqs: [
      {
        q: 'Mes notes servent-elles à entraîner des modèles d\'IA ?',
        a: 'Non. Les requêtes adressées à Google Gemini respectent les conditions de confidentialité pour développeurs d\'entreprise et ne sont pas utilisées pour l\'entraînement public.'
      },
      {
        q: 'Puis-je exporter mes données avant de fermer mon compte ?',
        a: 'Oui. Vous pouvez exporter l\'intégralité de vos espaces et notes au format Markdown/JSON dans les paramètres de l\'application.'
      },
      {
        q: 'Kalynt Flow a-t-il accès à ma position géographique ?',
        a: 'Non. L\'application ne demande et n\'utilise aucune autorisation liée à la localisation, aux contacts ou au microphone.'
      }
    ]
  },

  deletion: {
    sections: [
      {
        id: 'del-commitment',
        title: '1. Engagement de suppression des données',
        takeaway: 'Vous disposez d\'un contrôle total sur vos données et pouvez supprimer votre compte instantanément.',
        content: [
          'En conformité avec les règles de Google Play et les règlements internationaux (RGPD, CCPA), Kalynt Flow accorde à chaque utilisateur le droit immédiat et inconditionnel de supprimer son compte et toutes ses données associées.'
        ]
      },
      {
        id: 'del-how-to',
        title: '2. Procédure de suppression dans l\'application',
        content: [
          'Vous pouvez supprimer votre compte directement sur votre appareil Android en quelques secondes :'
        ],
        bullets: [
          'Étape 1 : Ouvrez Kalynt Flow sur votre smartphone Android.',
          'Étape 2 : Appuyez sur l\'onglet Paramètres (icône d\'engrenage).',
          'Étape 3 : Faites défiler jusqu\'à la section "Compte & Sécurité".',
          'Étape 4 : Appuyez sur le bouton rouge "Supprimer mon compte et mes données".',
          'Étape 5 : Confirmez votre choix dans la boîte de dialogue.',
          'Résultat : La base de données locale est effacée, le compte Firebase Auth est détruit et les documents Firestore sont purgés immédiatement.'
        ]
      },
      {
        id: 'del-table',
        title: '3. Tableau récapitulatif de suppression des données',
        content: [
          'Le tableau suivant récapitule le traitement de chaque élément de donnée lors de la suppression :'
        ],
        table: {
          headers: ['Type de données', 'Action appliquée', 'Délai d\'exécution'],
          rows: [
            ['Compte Firebase Auth', 'Supprimé définitivement', 'Immédiat (0 seconde)'],
            ['Tâches & notes Firestore', 'Purgées du cloud', 'Immédiat (0 seconde)'],
            ['Appartenance aux canaux d\'équipe', 'Retiré de tous les canaux', 'Immédiat (0 seconde)'],
            ['Base SQLite locale sur l\'appareil', 'Effacée du stockage local', 'Immédiat dès confirmation'],
            ['Jeton d\'accès GitHub (PAT)', 'Effacé du Keystore Android', 'Immédiat dès confirmation']
          ]
        }
      }
    ],
    generator: {
      title: 'Générateur de demande formelle de suppression',
      desc: 'Si vous n\'avez plus accès à votre appareil Android, utilisez cet outil pour générer et transmettre votre demande de suppression :',
      emailLabel: 'Adresse e-mail associée à votre compte :',
      emailPlaceholder: 'ex: utilisateur@exemple.fr',
      scopeLabel: 'Périmètre de suppression demandé :',
      scopeAuth: 'Identifiants Firebase et profil utilisateur',
      scopeCloud: 'Tâches, notes et calendriers sur Cloud Firestore',
      scopeWorkspaces: 'Membres d\'espaces partagés et messages',
      reasonLabel: 'Motif de suppression (facultatif) :',
      reasonPlaceholder: 'ex: Clôture de compte / Plus nécessaire',
      previewTitle: 'Aperçu du message de demande formelle :',
      copyBtn: 'Copier le texte de la demande',
      sendEmailBtn: 'Ouvrir dans l\'application e-mail',
      emailSubject: 'DEMANDE DE SUPPRESSION DE COMPTE ET DE DONNÉES — Kalynt Flow'
    },
    faqTitle: 'Foire aux questions (Suppression de compte)',
    faqs: [
      {
        q: 'Un compte supprimé peut-il être récupéré ?',
        a: 'Non. Pour garantir votre confidentialité, la suppression est irréversible et immédiate.'
      },
      {
        q: 'La suppression de compte résilie-t-elle mon abonnement Google Play ?',
        a: 'Les abonnements sont gérés directement par Google. Veillez à résilier vos abonnements en cours dans le Google Play Store avant la suppression de votre compte.'
      }
    ]
  },

  footer: {
    brandSubtitle: 'Portail officiel de conformité légale, conditions d\'utilisation et confidentialité',
    rights: 'Tous droits réservés. Android et Google Play sont des marques de Google LLC.',
    termsLink: 'Conditions d\'utilisation',
    privacyLink: 'Politique de confidentialité',
    deletionLink: 'Suppression de compte',
    contactSupport: 'Contact : KalyntFlow@protonmail.com'
  }
};
