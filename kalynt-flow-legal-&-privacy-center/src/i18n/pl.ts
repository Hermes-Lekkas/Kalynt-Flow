import { Translation } from './types';

export const pl: Translation = {
  langCode: 'pl',
  langName: 'Polish',
  nativeName: 'Polski',
  flag: 'PL',

  meta: {
    title: 'Kalynt Flow — Warunki korzystania i Polityka prywatności',
    description: 'Oficjalne warunki korzystania, polityka prywatności oraz procedury usuwania danych dla aplikacji Android Kalynt Flow.',
    badge: 'Zgodność z zasadami Google Play Store',
    packageIdLabel: 'Identyfikator pakietu:',
    archLabel: 'Architektura:',
    archValue: 'Offline-First (Room SQLite + Firestore)',
    effectiveDateLabel: 'Data wejścia w życie:',
    effectiveDateValue: '16 sierpnia 2026',
    readingTimePrefix: 'Szacowany czas czytania:',
    readingTimeSuffix: 'min',
    wordsSuffix: 'słów',
  },

  nav: {
    terms: 'Warunki korzystania',
    privacy: 'Prywatność',
    deletion: 'Usuwanie konta',
    fontSize: 'Rozmiar czcionki',
    toggleTheme: 'Tryb ciemny/jasny',
    print: 'Drukuj',
    contact: 'Pomoc techniczna',
    language: 'Język (Language)',
    searchLangPlaceholder: 'Szukaj języka...',
  },

  hero: {
    termsTitle: 'Warunki korzystania (Terms of Service)',
    termsSubtitle: 'Zapoznaj się z zasadami prawnymi, polityką dopuszczalnego użytkowania, bezpieczeństwem sztucznej inteligencji i ochroną danych w Kalynt Flow.',
    privacyTitle: 'Polityka prywatności (Privacy Policy)',
    privacySubtitle: 'Przejrzyste informacje o lokalnym przechowywaniu danych w SQLite na Androidzie, synchronizacji z Google Cloud i ochronie Twojej prywatności.',
    deletionTitle: 'Usuwanie konta i danych',
    deletionSubtitle: 'Instrukcje krok po kroku, narzędzia w aplikacji oraz generator formalnych wniosków o trwałe usunięcie danych.',
    searchPlaceholder: 'Szukaj w klauzulach (np. "zgłoszenie AI", "usuń dane", "token GitHub")...',
    filterAll: 'Wszystkie klauzule',
    filterAI: 'Bezpieczeństwo AI',
    filterPrivacy: 'Prywatność i szyfrowanie',
    filterModeration: 'UGC i moderacja',
    filterDeletion: 'Usuwanie konta',
  },

  pillars: {
    privacyTitle: 'Prywatność Offline-First',
    privacyDesc: 'Zadania, notatki i kalendarze domyślnie pozostają w lokalnej bazie SQLite na urządzeniu. Synchronizacja w chmurze następuje tylko po zalogowaniu.',
    aiTitle: 'Bezpieczeństwo i filtry AI',
    aiDesc: 'Obowiązkowe oznaczenie "Wygenerowane przez AI" przy wszystkich odpowiedziach modelu, wbudowane zgłaszanie i dynamiczne filtry bezpieczeństwa.',
    ugcTitle: 'Zero tolerancji dla naruszeń',
    ugcDesc: 'Zgłaszanie 1 dotknięciem, natychmiastowe blokowanie uciążliwych użytkowników i szybka moderacja zgodnie ze standardami Google Play.',
    deletionTitle: 'Usuwanie konta 1 dotknięciem',
    deletionDesc: 'Bezwarunkowe prawo do natychmiastowego wyczyszczenia lokalnej bazy danych, dokumentów w Firestore i danych logowania.',
  },

  sidebar: {
    tocTitle: 'Spis treści',
  },

  actions: {
    copyLink: 'Kopiuj link',
    copyAgreement: 'Kopiuj całą umowę',
    copiedNotice: 'Skopiowano do schowka!',
    backToTop: 'Na górę',
  },

  terms: {
    sections: [
      {
        id: 'terms-acceptance',
        title: '1. Akceptacja warunków',
        takeaway: 'Instalując lub korzystając z Kalynt Flow, zawierasz prawnie wiążącą umowę.',
        content: [
          'Witamy w Kalynt Flow. Niniejsze Warunki korzystania ("Warunki") stanowią wiążącą umowę prawną między Tobą ("Użytkownik", "Ty") a twórcami Kalynt Flow ("my").',
          'Pobierając, instalując lub korzystając z Kalynt Flow, potwierdzasz, że przeczytałeś, zrozumiałeś i zgadzasz się na przestrzeganie niniejszych Warunków.'
        ]
      },
      {
        id: 'terms-services',
        title: '2. Opis usług i architektura',
        takeaway: 'Kalynt Flow oferuje lokalną produktywność, organizację przestrzeni roboczych i opcjonalną synchronizację w chmurze.',
        content: [
          'Kalynt Flow to aplikacja do zarządzania zadaniami, bazą wiedzy i przestrzeniami zespołowymi oparta na architekturze "Offline-First":'
        ],
        bullets: [
          'Hierarchiczne przestrzenie robocze: Izolowane środowiska dla projektów osobistych lub zespołowych z kontrolą uprawnień.',
          'Zarządzanie zadaniami i podzadaniami: Poziomy priorytetów (Niski, Średni, Wysoki, Pilny) oraz listy kontrolne.',
          'Formatowanie Markdown: Wyróżnianie składni i natychmiastowe wyszukiwanie lokalne.',
          'Kalendarz wizualny: Blokowanie czasu i harmonogramy zadań.',
          'Integracja z GitHub: Bezpośredni podgląd repozytoriów i zgłoszeń przez oficjalne GitHub REST API.',
          'Kanały zespołowe: Współpraca grupowa i czat w czasie rzeczywistym.',
          'Asystent AI: Automatyzacja zadań i inteligentne podsumowania.'
        ]
      },
      {
        id: 'terms-accounts',
        title: '3. Konta użytkowników i bezpieczeństwo',
        content: [
          'Podstawowe narzędzia lokalne działają bez konta online. Synchronizacja w chmurze i przestrzenie zespołowe wymagają uwierzytelnienia przez:',
          'Odpowiadasz za zachowanie poufności swoich danych logowania.'
        ],
        bullets: [
          'Logowanie przez Google: Bezpieczne logowanie z użyciem Android Jetpack Credential Manager.',
          'Email i Hasło: Szyfrowane uwierzytelnianie przez Google Firebase Auth.'
        ]
      },
      {
        id: 'terms-ugc',
        title: '4. Treści użytkowników i zasada zero tolerancji (UGC)',
        content: [
          'Kalynt Flow umożliwia tworzenie notatek i wysyłanie wiadomości w kanałach zespołowych. Zachowujesz pełne prawa autorskie do swoich treści.'
        ],
        callout: {
          type: 'danger',
          title: 'Zasada zero tolerancji dla niedozwolonych treści i nękania',
          text: 'Zgodnie z zasadami Google Play dotyczącymi treści tworzonych przez użytkowników (UGC), kategorycznie zabrania się mowy nienawiści, nękania, treści pornograficznych, przemocy i naruszania praw autorskich.'
        },
        subsections: [
          {
            subtitle: 'Narzędzia moderacji i zgłaszania',
            bullets: [
              'Zgłaszanie 1 dotknięciem: Zgłaszaj nieodpowiednie wiadomości bezpośrednio w aplikacji.',
              'Natychmiastowe blokowanie: Blokuj uciążliwych użytkowników jednym kliknięciem.',
              'Weryfikacja w 24h: Nasz zespół sprawdza zgłoszenia w ciągu 24 godzin i blokuje konta sprawców.'
            ]
          }
        ]
      },
      {
        id: 'terms-ai',
        title: '5. Usługi generatywnej sztucznej inteligencji',
        content: [
          'Kalynt Flow zawiera funkcje AI oparte na Google Gemini API wspomagające planowanie zadań i formatowanie notatek.'
        ],
        callout: {
          type: 'purple',
          title: 'Przejrzystość i wyraźne oznaczanie treści AI',
          text: 'Wszystkie odpowiedzi generowane przez AI są wyraźnie oznaczone etykietą "Wygenerowane przez AI".'
        },
        subsections: [
          {
            subtitle: 'Zgłaszanie odpowiedzi AI i ulepszanie filtrów',
            text: 'Użytkownicy mogą zgłaszać niepoprawne lub niewłaściwe odpowiedzi AI w celu ulepszania zabezpieczeń systemowych.'
          }
        ]
      },
      {
        id: 'terms-github',
        title: '6. Integracje z podmiotami trzecimi (GitHub REST API)',
        content: [
          'Osobiste tokeny dostępu GitHub (PAT) są przechowywane wyłącznie w zaszyfrowanym module Android EncryptedSharedPreferences Twojego telefonu i NIGDY nie trafiają na serwery Kalynt Flow.'
        ]
      },
      {
        id: 'terms-billing',
        title: '7. Subskrypcje i płatności Google Play',
        content: [
          'Wszystkie zakupy w aplikacji i subskrypcje Pro są obsługiwane wyłącznie przez system Google Play Billing zgodnie z zasadami platformy.'
        ]
      },
      {
        id: 'terms-disclaimers',
        title: '8. Wyłączenie gwarancji i ograniczenie odpowiedzialności',
        content: [
          'Kalynt Flow jest dostarczane w stanie "TAK JAK JEST". W granicach prawa nie ponosimy odpowiedzialności za szkody pośrednie lub utratę danych.'
        ]
      },
      {
        id: 'terms-contact',
        title: '9. Kontakt i wsparcie',
        content: [
          'W sprawach prawnych lub pomocy technicznej prosimy o kontakt pod adresem KalyntFlow@protonmail.com.'
        ]
      }
    ],
    faqTitle: 'Często zadawane pytania (Warunki i prawo)',
    faqs: [
      {
        q: 'Czy muszę zakładać konto, aby korzystać z Kalynt Flow?',
        a: 'Nie. Wszystkie podstawowe narzędzia (zadania, notatki Markdown, kalendarz) działają w pełni offline bez konta.'
      },
      {
        q: 'Gdzie przechowywane są moje tokeny GitHub?',
        a: 'Tokeny są bezpiecznie zaszyfrowane w sprzętowym magazynie Android Keystore Twojego telefonu.'
      },
      {
        q: 'Jak moderowane są wiadomości na kanałach zespołowych?',
        a: 'Każda wiadomość posiada opcję zgłoszenia i zablokowania 1 dotknięciem. Zgłoszenia rozpatrujemy w ciągu 24h.'
      }
    ]
  },

  privacy: {
    sections: [
      {
        id: 'priv-intro',
        title: '1. Wprowadzenie i zasady prywatności',
        takeaway: 'Twoje notatki i zadania należą wyłącznie do Ciebie. Nie sprzedajemy Twoich danych ani nie używamy ich do reklam.',
        content: [
          'Niniejsza Polityka prywatności określa zasady przetwarzania danych osobowych w aplikacji Android Kalynt Flow (ID pakietu: com.aistudio.kalyntflow.app).',
          'Architektura "Offline-First" gwarantuje, że dane pozostają przede wszystkim na Twoim urządzeniu.'
        ]
      },
      {
        id: 'priv-data-collected',
        title: '2. Zbierane dane i cele przetwarzania',
        content: [
          'Zbieramy wyłącznie niezbędne minimum danych wymagane do prawidłowego działania usługi:'
        ],
        table: {
          headers: ['Kategoria danych', 'Zbierane elementy', 'Cel zbierania', 'Lokalizacja przechowywania'],
          rows: [
            ['Dane identyfikacyjne', 'Adres email, nazwa użytkownika, UID', 'Uwierzytelnianie i uprawnienia', 'Firebase Auth i Firestore'],
            ['Dane przestrzeni roboczej', 'Zadania, notatki, listy, wydarzenia', 'Narzędzia produktywności i synchronizacja', 'Lokalne SQLite (Room) + Firestore'],
            ['Wiadomości na czacie', 'Wiadomości kanałów, znaczniki czasu', 'Komunikacja zespołowa na żywo', 'Cloud Firestore (szyfrowanie TLS 1.3)'],
            ['Interakcje z AI', 'Wprowadzane zapytania i odpowiedzi AI', 'Generowanie odpowiedzi i ulepszanie jakości', 'Tranzyt API Gemini (brak reklam)'],
            ['Diagnostyka urządzenia', 'Raporty o awariach, wersja systemu', 'Usuwanie błędów i stabilność', 'Firebase Crashlytics (anonimizowane)']
          ]
        }
      },
      {
        id: 'priv-storage',
        title: '3. Przechowywanie, szyfrowanie i bezpieczeństwo',
        content: [
          'Przechowywanie lokalne: Twoje notatki i zadania są zapisywane w lokalnej bazie SQLite na urządzeniu za pośrednictwem Android Room.',
          'Przechowywanie w chmurze: Synchronizowane dane są przesyłane bezpiecznymi połączeniami TLS 1.3 do Google Cloud Firebase Firestore.',
          'Zabezpieczenia: Stosujemy ścisłe reguły bezpieczeństwa Firebase Security Rules izolujące dostęp poszczególnych użytkowników.'
        ]
      },
      {
        id: 'priv-thirdparty',
        title: '4. Dostawcy zewnętrzni',
        content: [
          'Współpracujemy wyłącznie ze sprawdzonymi dostawcami infrastruktury chmurowej:'
        ],
        bullets: [
          'Google Firebase (Auth, Firestore, Crashlytics): Uwierzytelnianie, synchronizacja i telemetria stabilności.',
          'Google Gemini API: Funkcje sztucznej inteligencji na warunkach prywatności dla przedsiębiorstw.',
          'Google Play Billing: Bezpieczna obsługa płatności w aplikacji.',
          'GitHub REST API: Bezpośredni wgląd do repozytoriów na żądanie użytkownika.'
        ]
      },
      {
        id: 'priv-rights',
        title: '5. Twoje prawa (RODO i CCPA)',
        content: [
          'Zapewniamy pełną realizację Twoich praw w zakresie ochrony danych osobowych:',
          'Prawo do dostępu i przenoszenia: Możliwość pobrania kopii danych w dowolnym momencie.',
          'Prawo do sprostowania: Korekta nieaktualnych danych profilu.',
          'Prawo do usunięcia (Prawo do bycia zapomnianym): Usunięcie konta i danych w chmurze 1 dotknięciem.',
          'Nigdy nie sprzedajemy ani nie udostępniamy Twoich danych podmiotom trzecim.'
        ]
      },
      {
        id: 'priv-contact',
        title: '6. Kontakt w sprawach prywatności',
        content: [
          'W przypadku pytań dotyczących polityki prywatności prosimy o kontakt pod adresem KalyntFlow@protonmail.com.'
        ]
      }
    ],
    faqTitle: 'Często zadawane pytania (Prywatność i bezpieczeństwo)',
    faqs: [
      {
        q: 'Czy moje notatki są używane do trenowania modeli AI?',
        a: 'Nie. Zapytania do Google Gemini podlegają umowie prywatności dla deweloperów i nie są wykorzystywane do publicznego trenowania modeli.'
      },
      {
        q: 'Czy mogę wyeksportować dane przed usunięciem konta?',
        a: 'Tak. W ustawieniach aplikacji możesz wyeksportować wszystkie przestrzenie i notatki do plików Markdown/JSON.'
      },
      {
        q: 'Czy Kalynt Flow ma dostęp do mojej lokalizacji lub kontaktów?',
        a: 'Nie. Aplikacja nie wymaga i nie żąda uprawnień do lokalizacji, kontaktów ani mikrofonu.'
      }
    ]
  },

  deletion: {
    sections: [
      {
        id: 'del-commitment',
        title: '1. Zobowiązanie do usuwania danych',
        takeaway: 'Masz pełną kontrolę nad swoimi danymi i możesz usunąć konto w dowolnym momencie.',
        content: [
          'W pełnej zgodności z zasadami Google Play i przepisami o ochronie danych (RODO, CCPA), Kalynt Flow gwarantuje prawo do natychmiastowego i bezwarunkowego usunięcia konta oraz danych.'
        ]
      },
      {
        id: 'del-how-to',
        title: '2. Jak usunąć konto w aplikacji (Krok po kroku)',
        content: [
          'Możesz usunąć swoje konto bezpośrednio na urządzeniu Android w kilka sekund:'
        ],
        bullets: [
          'Krok 1: Otwórz aplikację Kalynt Flow na urządzeniu z systemem Android.',
          'Krok 2: Kliknij zakładkę "Ustawienia" (ikona koła zębatego) w dolnym pasku.',
          'Krok 3: Przewiń do sekcji "Konto i bezpieczeństwo".',
          'Krok 4: Dotknij czerwonego przycisku "Usuń konto i wszystkie dane".',
          'Krok 5: Potwierdź chęć usunięcia w oknie dialogowym.',
          'Rezultat: Lokalna baza danych zostaje wyczyszczona, konto Firebase Auth usunięte, a dokumenty w Firestore natychmiast skasowane.'
        ]
      },
      {
        id: 'del-table',
        title: '3. Tabela usuwania danych',
        content: [
          'Poniższa tabela przedstawia szczegółowe procedury usuwania dla każdego rodzaju danych:'
        ],
        table: {
          headers: ['Rodzaj danych', 'Działanie przy usunięciu', 'Czas realizacji'],
          rows: [
            ['Konto użytkownika Firebase Auth', 'Trwałe usunięcie', 'Natychmiast (0 sekund)'],
            ['Zadania i notatki w Cloud Firestore', 'Usunięcie z chmury', 'Natychmiast (0 sekund)'],
            ['Członkostwo w kanałach zespołowych', 'Usunięcie ze wszystkich kanałów', 'Natychmiast (0 sekund)'],
            ['Lokalna baza SQLite na urządzeniu', 'Wyczyszczenie z pamięci', 'Zaraz po potwierdzeniu'],
            ['Osobisty token GitHub (PAT)', 'Usunięcie z Android Keystore', 'Zaraz po potwierdzeniu']
          ]
        }
      }
    ],
    generator: {
      title: 'Generator formalnego wniosku o usunięcie konta',
      desc: 'Jeśli nie masz już dostępu do swojego urządzenia z Androidem, możesz wygenerować wniosek i przesłać go drogą mailową:',
      emailLabel: 'Adres email przypisany do konta:',
      emailPlaceholder: 'np. uzytkownik@przyklad.pl',
      scopeLabel: 'Zakres wnioskowanego usunięcia:',
      scopeAuth: 'Dane uwierzytelniające i profil Firebase',
      scopeCloud: 'Zadania, notatki i kalendarze w Cloud Firestore',
      scopeWorkspaces: 'Członkostwo w przestrzeniach i wiadomości',
      reasonLabel: 'Powód usunięcia (opcjonalnie):',
      reasonPlaceholder: 'np. Zamknięcie konta / Brak dalszej potrzeby korzystania',
      previewTitle: 'Podgląd formalnego wniosku:',
      copyBtn: 'Kopiuj treść wniosku',
      sendEmailBtn: 'Otwórz w programie pocztowym',
      emailSubject: 'WNIOSEK O USUNIĘCIE KONTA I DANYCH — Kalynt Flow'
    },
    faqTitle: 'Często zadawane pytania (Usuwanie konta)',
    faqs: [
      {
        q: 'Czy usunięte konto można odzyskać?',
        a: 'Nie. Ze względów bezpieczeństwa i ochrony prywatności operacja ta jest ostateczna i nieodwracalna.'
      },
      {
        q: 'Czy usunięcie konta anuluje subskrypcję w Google Play?',
        a: 'Subskrypcjami zarządza bezpośrednio Google. Prosimy o wcześniejsze anulowanie subskrypcji w aplikacji Google Play Store przed usunięciem konta.'
      }
    ]
  },

  footer: {
    brandSubtitle: 'Oficjalny portal informacji prawnej, warunków korzystania i prywatności',
    rights: 'Wszelkie prawa zastrzeżone. Android i Google Play są znakami towarowymi firmy Google LLC.',
    termsLink: 'Warunki korzystania',
    privacyLink: 'Polityka prywatności',
    deletionLink: 'Usuwanie konta',
    contactSupport: 'Kontakt: KalyntFlow@protonmail.com'
  }
};
