import { Translation } from './types';

export const fi: Translation = {
  langCode: 'fi',
  langName: 'Finnish',
  nativeName: 'Suomi',
  flag: 'FI',

  meta: {
    title: 'Kalynt Flow — Käyttöehdot ja tietosuojaseloste',
    description: 'Kalynt Flow Android -sovelluksen viralliset käyttöehdot, tietosuojakäytäntö ja käyttäjätietojen poisto-ohjeet.',
    badge: 'Google Play Kaupan käytäntöjen mukainen',
    packageIdLabel: 'Pakettitunnus:',
    archLabel: 'Arkkitehtuuri:',
    archValue: 'Offline-First (Room SQLite + Firestore)',
    effectiveDateLabel: 'Voimaantulopäivä:',
    effectiveDateValue: '16. elokuuta 2026',
    readingTimePrefix: 'Arvioitu lukuaika:',
    readingTimeSuffix: 'min',
    wordsSuffix: 'sanaa',
  },

  nav: {
    terms: 'Käyttöehdot',
    privacy: 'Tietosuoja',
    deletion: 'Tilin poistaminen',
    fontSize: 'Fonttikoko',
    toggleTheme: 'Tumma/vaalea tila',
    print: 'Tulosta',
    contact: 'Tuki',
    language: 'Kieli (Language)',
    searchLangPlaceholder: 'Etsi kieltä...',
  },

  hero: {
    termsTitle: 'Käyttöehdot (Terms of Service)',
    termsSubtitle: 'Tutustu Kalynt Flow -sovellusta koskeviin oikeudellisiin ehtoihin, sallitun käytön sääntöihin, tekoälyn turvallisuusrajoihin ja tietosuojaan.',
    privacyTitle: 'Tietosuojaseloste (Privacy Policy)',
    privacySubtitle: 'Läpinäkyvät tiedot siitä, miten Kalynt Flow tallentaa tietosi paikallisesti Android-laitteelle SQLite-tietokantaan, synkronoi Google Cloudiin ja suojaa yksityisyyttäsi.',
    deletionTitle: 'Tilin ja tietojen poistaminen',
    deletionSubtitle: 'Vaiheittaiset ohjeet, sovelluksen sisäiset työkalut ja virallinen pyyntögeneraattori tietojesi pysyvään poistamiseen.',
    searchPlaceholder: 'Hae ehdoista (esim. "tekoälyilmoitus", "poista tiedot", "GitHub-avain")...',
    filterAll: 'Kaikki ehdot',
    filterAI: 'Tekoälyturvallisuus',
    filterPrivacy: 'Tietosuoja ja salaus',
    filterModeration: 'UGC ja moderointi',
    filterDeletion: 'Tilin poistaminen',
  },

  pillars: {
    privacyTitle: 'Offline-First-yksityisyys',
    privacyDesc: 'Kaikki tehtävät, muistiinpanot ja kalenterit tallennetaan oletuksena laitteen paikalliseen SQLite-tietokantaan. Pilvisynkronointi tapahtuu vain kirjautuneena.',
    aiTitle: 'Tekoälyturvallisuus ja suodattimet',
    aiDesc: 'Pakollinen "Tekoälyn luoma vastaus" -merkintä kaikissa vastauksissa, sisäänrakennettu ilmoitusmahdollisuus ja dynaamiset turvasuodattimet.',
    ugcTitle: 'Nollatoleranssi häirinnälle',
    ugcDesc: 'Ilmoitus 1 kosketuksella, välitön häiritsevien käyttäjien esto ja nopea moderointi Google Play -standardien mukaisesti.',
    deletionTitle: 'Tilin poisto 1 kosketuksella',
    deletionDesc: 'Ehdottoman vapaa oikeus tyhjentää paikallinen tietokanta, Firestore-asiakirjat ja kirjautumistiedot milloin tahansa.',
  },

  sidebar: {
    tocTitle: 'Sisällysluettelo',
  },

  actions: {
    copyLink: 'Kopioi linkki',
    copyAgreement: 'Kopioi koko sopimus',
    copiedNotice: 'Kopioitu leikepöydälle!',
    backToTop: 'Takaisin alkuun',
  },

  terms: {
    sections: [
      {
        id: 'terms-acceptance',
        title: '1. Ehtojen hyväksyminen',
        takeaway: 'Asentamalla tai käyttämällä Kalynt Flow -sovellusta sitoudut näihin oikeudellisesti sitoviin ehtoihin.',
        content: [
          'Tervetuloa käyttämään Kalynt Flow -sovellusta. Nämä käyttöehdot muodostavat oikeudellisesti sitovan sopimuksen sinun ("Käyttäjä") ja Kalynt Flow -kehittäjien ("me") välillä.',
          'Lataamalla, asentamalla tai käyttämällä Kalynt Flow -sovellusta vahvistat lukeneesi, ymmärtäneesi ja hyväksyneesi nämä ehdot.'
        ]
      },
      {
        id: 'terms-services',
        title: '2. Palvelukuvaus ja arkkitehtuuri',
        takeaway: 'Kalynt Flow tarjoaa paikallista tuottavuutta, työtilojen hallintaa ja valinnaisen pilvisynkronoinnin.',
        content: [
          'Kalynt Flow on "Offline-First"-arkkitehtuuriin perustuva tehtävienhallinta-, tietokanta- ja tiimityötilasovellus:'
        ],
        bullets: [
          'Hierarkkiset työtilat: Eristetyt ympäristöt henkilökohtaisille tai tiimiprojekteille käyttöoikeuksien hallinnalla.',
          'Tehtävien ja alitehtävien hallinta: Prioriteettitasot (Matala, Keskitaso, Korkea, Kiireellinen) ja tarkistuslistat.',
          'Markdown-dokumentaatio: Syntaksikorostus ja välitön paikallinen haku.',
          'Visuaalinen kalenteri: Aikataulutus ja tehtävien aikajanat.',
          'GitHub-integraatio: Koodivarastojen ja tiketöinnin suora tarkastelu virallisen GitHub REST API:n kautta.',
          'Tiimikanavat: Reaaliaikainen yhteistyö ja ryhmäkeskustelut.',
          'Tekoälyavustaja: Tehtävien automatisointi ja älykkäät yhteenvedot.'
        ]
      },
      {
        id: 'terms-accounts',
        title: '3. Käyttäjätilit ja tietoturva',
        content: [
          'Keskeiset paikalliset työkalut toimivat ilman verkkotiliä. Pilvisynkronointi ja jaetut työtilat vaativat tunnistautumisen:',
          'Olet vastuussa kirjautumistietojesi luottamuksellisuudesta.'
        ],
        bullets: [
          'Google-kirjautuminen: Turvallinen tunnistautuminen Android Jetpack Credential Managerin kautta.',
          'Sähköposti/salasana: Salattu tunnistautuminen Google Firebase Auth -palvelun kautta.'
        ]
      },
      {
        id: 'terms-ugc',
        title: '4. Käyttäjien luoma sisältö ja nollatoleranssi (UGC)',
        content: [
          'Kalynt Flow mahdollistaa muistiinpanojen luomisen ja viestinnän jaetuilla kanavilla. Säilytät täyden omistusoikeuden sisältöösi.'
        ],
        callout: {
          type: 'danger',
          title: 'Nollatoleranssi sopimattomalle sisällölle ja häirinnälle',
          text: 'Google Playn käyttäjien luoman sisällön (UGC) käytäntöjen mukaisesti vihapuhe, häirintä, väkivaltainen materiaali ja tekijänoikeusrikkomukset ovat ehdottomasti kiellettyjä.'
        },
        subsections: [
          {
            subtitle: 'Sisäänrakennetut moderointi- ja ilmoitustyökalut',
            bullets: [
              'Ilmoitus 1 kosketuksella: Ilmoita sopimattomasta sisällöstä suoraan käyttöliittymästä.',
              'Välitön esto: Estä häiritsevät käyttäjät piilottaaksesi heidän viestinsä välittömästi.',
              'Käsittely 24 tunnissa: Tiimimme tarkistaa ilmoitukset 24 tunnin kuluessa ja sulkee rikkovat tilit.'
            ]
          }
        ]
      },
      {
        id: 'terms-ai',
        title: '5. Generatiiviset tekoälypalvelut ja turvallisuus',
        content: [
          'Kalynt Flow sisältää Google Gemini API -pohjaisia tekoälyominaisuuksia tehtävien jäsentämisen ja tekstin muotoilun avuksi.'
        ],
        callout: {
          type: 'purple',
          title: 'Tekoälyn läpinäkyvyys ja selkeä merkintä',
          text: 'Kaikki tekoälyn luomat vastaukset on merkitty selkeästi "Tekoälyn luoma vastaus" -tunnisteella.'
        },
        subsections: [
          {
            subtitle: 'Tekoälyvastausten ilmoittaminen ja turvasuodattimien kehitys',
            text: 'Käyttäjät voivat ilmoittaa virheellisistä tai sopimattomista vastauksista turvallisuussääntöjen parantamiseksi.'
          }
        ]
      },
      {
        id: 'terms-github',
        title: '6. Kolmannen osapuolen integraatiot (GitHub REST API)',
        content: [
          'GitHubin henkilökohtaiset pääsyavaimet (PAT) tallennetaan ainoastaan laitteesi Android EncryptedSharedPreferences -muistiin, eikä niitä KOSKAAN lähetetä Kalynt Flow -palvelimille.'
        ]
      },
      {
        id: 'terms-billing',
        title: '7. Tilaukset ja Google Play -laskutus',
        content: [
          'Kaikki sovelluksen sisäiset ostot ja Pro-tilaukset käsitellään yksinomaan Google Play In-App Billing -järjestelmän kautta kehittäjäkäytäntöjen mukaisesti.'
        ]
      },
      {
        id: 'terms-disclaimers',
        title: '8. Vastuuvapauslauseke ja vastuunrajoitus',
        content: [
          'Kalynt Flow toimitetaan "SELLAISENA KUIN SE ON". Emme vastaa lain sallimissa rajoissa epäsuorista vahingoista tai tietojen menetyksestä.'
        ]
      },
      {
        id: 'terms-contact',
        title: '9. Yhteystiedot ja tuki',
        content: [
          'Oikeudellisissa kysymyksissä ja tukiasioissa ota yhteyttä: KalyntFlow@protonmail.com.'
        ]
      }
    ],
    faqTitle: 'Usein kysytyt kysymykset (Ehdot ja lainsäädäntö)',
    faqs: [
      {
        q: 'Tarvitsenko tilin käyttääkseni Kalynt Flow -sovellusta?',
        a: 'Et. Voit käyttää kaikkia keskeisiä ominaisuuksia (tehtävät, Markdown-muistiinpanot, kalenteri) täysin offline-tilassa ilman tiliä.'
      },
      {
        q: 'Missä GitHub-tunnisteeni säilytetään?',
        a: 'Tunnisteet säilytetään salattuina puhelimesi laitteistotason Android Keystore -tallennustilassa.'
      },
      {
        q: 'Miten tiimikanavien viestejä moderoidaan?',
        a: 'Jokaisessa viestissä on 1 kosketuksen ilmoitus- ja estomahdollisuus, ja tapaukset käsitellään 24 tunnissa.'
      }
    ]
  },

  privacy: {
    sections: [
      {
        id: 'priv-intro',
        title: '1. Johdanto ja tietosuojaperiaatteet',
        takeaway: 'Tietosi kuuluvat sinulle. Emme myy tietojasi emmekä käytä niitä mainontaan.',
        content: [
          'Tämä tietosuojaseloste kuvaa henkilötietojen käsittelyä Kalynt Flow Android -sovelluksessa (Pakettitunnus: com.aistudio.kalyntflow.app).',
          '"Offline-First"-arkkitehtuurimme takaa, että tietosi tallentuvat ensisijaisesti omalle laitteellesi.'
        ]
      },
      {
        id: 'priv-data-collected',
        title: '2. Kerättävät tiedot ja käyttötarkoitukset',
        content: [
          'Keräämme vain vähimmäismäärän tietoja, jotka ovat välttämättömiä sovelluksen toiminnalle:'
        ],
        table: {
          headers: ['Tietoluokka', 'Kerättävät tiedot', 'Käyttötarkoitus', 'Tallennuspaikka'],
          rows: [
            ['Tilitiedot', 'Sähköpostiosoite, näyttönimi, UID', 'Tunnistautuminen ja käyttöoikeudet', 'Firebase Auth ja Firestore'],
            ['Työtilojen tiedot', 'Tehtävät, muistiinpanot, listat, tapahtumat', 'Tuottavuustyökalut ja synkronointi', 'Paikallinen SQLite (Room) + Firestore'],
            ['Keskusteluviestit', 'Kanavaviestit, aikaleimat', 'Reaaliaikainen tiimityöskentely', 'Cloud Firestore (TLS 1.3 -salaus)'],
            ['Tekoälyvuorovaikutus', 'Syötetyt kyselyt ja vastaukset', 'Vastausten tuottaminen ja laadunparannus', 'Gemini API (ei käytetä mainontaan)'],
            ['Laitteen diagnostiikka', 'Kaatumisraportit, käyttöjärjestelmäversio', 'Virheenkorjaus ja vakaus', 'Firebase Crashlytics (anonymisoitu)']
          ]
        }
      },
      {
        id: 'priv-storage',
        title: '3. Tallennus, salaus ja tietoturva',
        content: [
          'Paikallinen tallennus: Muistiinpanot ja tehtävät tallennetaan laitteen paikalliseen SQLite-tietokantaan Android Roomin kautta.',
          'Pilvitallennus: Synkronoidut tiedot siirretään suojatuilla TLS 1.3 -yhteyksillä Google Cloud Firebase Firestoreen.',
          'Suojatoimet: Sovellamme tiukkoja Firebase Security Rules -sääntöjä käyttäjä- ja työtilakohtaisten käyttöoikeuksien eristämiseen.'
        ]
      },
      {
        id: 'priv-thirdparty',
        title: '4. Kolmannen osapuolen palveluntarjoajat',
        content: [
          'Teemme yhteistyötä vain luotettavien yritystason pilvipalveluntarjoajien kanssa:'
        ],
        bullets: [
          'Google Firebase (Auth, Firestore, Crashlytics): Tunnistautuminen, synkronointi ja vakauden seuranta.',
          'Google Gemini API: Tekoälytoiminnot tiukkojen yritystietosuojasopimusten alaisina.',
          'Google Play Billing: Turvallinen sovelluksen sisäinen maksaminen.',
          'GitHub REST API: Koodivarastojen suora tarkastelu käyttäjän pyynnöstä.'
        ]
      },
      {
        id: 'priv-rights',
        title: '5. Oikeutesi (GDPR ja CCPA)',
        content: [
          'Takaamme digitaalisten tietosuojaoikeuksiesi täysimääräisen toteutumisen:',
          'Tarkastus- ja siirto-oikeus: Voit pyytää kopion tallennetuista tiedoistasi milloin tahansa.',
          'Oikaisuoikeus: Päivitä vanhentuneet profiilitietosi.',
          'Poisto-oikeus (Oikeus tulla unohdetuksi): Poista tilisi ja pilvitietosi 1 kosketuksella.',
          'Emme koskaan myy tai luovuta henkilötietojasi kolmansille osapuolille.'
        ]
      },
      {
        id: 'priv-contact',
        title: '6. Tietosuojakysymykset ja yhteystiedot',
        content: [
          'Tietosuojaa koskevissa asioissa voit ottaa yhteyttä osoitteeseen KalyntFlow@protonmail.com.'
        ]
      }
    ],
    faqTitle: 'Usein kysytyt kysymykset (Tietosuoja ja turvallisuus)',
    faqs: [
      {
        q: 'Käytetäänkö muistiinpanojani tekoälymallien kouluttamiseen?',
        a: 'Ei. Google Gemini -kutsut noudattavat yritystason kehittäjätietosuojasopimuksia eikä niitä käytetä julkiseen mallikoulutukseen.'
      },
      {
        q: 'Voinko viedä tietoni ennen tilin poistamista?',
        a: 'Kyllä. Sovelluksen asetuksissa voit viedä kaikki työtilasi ja muistiinpanosi Markdown/JSON-muodossa.'
      },
      {
        q: 'Onko Kalynt Flowlla pääsy sijaintiini tai yhteystietoihini?',
        a: 'Ei. Sovellus ei pyydä eikä käytä sijainti-, yhteystieto- tai mikrofonilupia.'
      }
    ]
  },

  deletion: {
    sections: [
      {
        id: 'del-commitment',
        title: '1. Sitoumus tietojen poistamiseen',
        takeaway: 'Hallitset tietojasi täysin ja voit poistaa tilisi milloin tahansa.',
        content: [
          'Google Playn käytäntöjen ja kansainvälisten tietosuojasäädösten (GDPR, CCPA) mukaisesti Kalynt Flow takaa käyttäjilleen välittömän ja ehdottoman oikeuden poistaa tilinsä ja tallennetut tiedot.'
        ]
      },
      {
        id: 'del-how-to',
        title: '2. Tilin poistaminen sovelluksesta (Vaihe vaiheelta)',
        content: [
          'Voit poistaa tilisi suoraan Android-laitteellasi muutamassa sekunnissa:'
        ],
        bullets: [
          'Vaihe 1: Avaa Kalynt Flow Android-laitteellasi.',
          'Vaihe 2: Napauta alareunan "Asetukset"-välilehteä (rataskuvake).',
          'Vaihe 3: Vieritä kohtaan "Tili ja turvallisuus".',
          'Vaihe 4: Napauta punaista painiketta "Poista tili ja kaikki tiedot".',
          'Vaihe 5: Vahvista poisto vahvistusikkunassa.',
          'Tulos: Paikallinen tietokanta nollataan, Firebase Auth -tili poistetaan ja Firestore-dokumentit poistetaan välittömästi.'
        ]
      },
      {
        id: 'del-table',
        title: '3. Tietojen poistotaulukko',
        content: [
          'Alla olevassa taulukossa esitetään toimenpiteet ja aikataulut kullekin tietotyypille:'
        ],
        table: {
          headers: ['Tietotyyppi', 'Toimenpide poistettaessa', 'Aikataulu'],
          rows: [
            ['Firebase Auth -käyttäjätili', 'Poistetaan pysyvästi', 'Välittömästi (0 sekuntia)'],
            ['Cloud Firestore -tehtävät ja muistiinpanot', 'Poistetaan pilvestä', 'Välittömästi (0 sekuntia)'],
            ['Tiimikanavien jäsenyydet', 'Poistetaan kaikilta kanavilta', 'Välittömästi (0 sekuntia)'],
            ['Laitteen paikallinen SQLite-tietokanta', 'Tyhjennetään muistista', 'Heti vahvistuksen jälkeen'],
            ['GitHub-pääsyavain (PAT)', 'Poistetaan Android Keystoresta', 'Heti vahvistuksen jälkeen']
          ]
        }
      }
    ],
    generator: {
      title: 'Virallinen tilinpoistopyyntögeneraattori',
      desc: 'Jos sinulla ei enää ole pääsyä Android-laitteeseesi, voit luoda ja lähettää virallisen poistopyynnön sähköpostitse:',
      emailLabel: 'Tiliin liitetty sähköpostiosoite:',
      emailPlaceholder: 'esim. kayttaja@esimerkki.fi',
      scopeLabel: 'Pyydetyn poiston laajuus:',
      scopeAuth: 'Firebase-tunnistautumistiedot ja profiili',
      scopeCloud: 'Tehtävät, muistiinpanot ja kalenterit Cloud Firestoresta',
      scopeWorkspaces: 'Työtilajäsenyydet ja viestit',
      reasonLabel: 'Poiston syy (valinnainen):',
      reasonPlaceholder: 'esim. Tilin sulkeminen / Ei enää tarvetta',
      previewTitle: 'Virallisen pyynnön esikatselu:',
      copyBtn: 'Kopioi pyynnön teksti',
      sendEmailBtn: 'Avaa sähköpostiohjelmassa',
      emailSubject: 'TILIN JA TIETOJEN POISTOPYYNTÖ — Kalynt Flow'
    },
    faqTitle: 'Usein kysytyt kysymykset (Tilin poistaminen)',
    faqs: [
      {
        q: 'Voiko poistetun tilin palauttaa?',
        a: 'Ei. Turvallisuus- ja tietosuojasyistä poisto on pysyvä ja peruuttamaton.'
      },
      {
        q: 'Peruuttaako tilin poistaminen Google Play -tilaukseni?',
        a: 'Tilauksia hallinnoi suoraan Google. Muista peruuttaa voimassa olevat tilauksesi Google Play Kauppa -sovelluksessa ennen tilisi poistamista.'
      }
    ]
  },

  footer: {
    brandSubtitle: 'Virallinen lakitieto-, käyttöehto- ja tietosuojakeskus',
    rights: 'Kaikki oikeudet pidätetään. Android ja Google Play ovat Google LLC:n tavaramerkkejä.',
    termsLink: 'Käyttöehdot',
    privacyLink: 'Tietosuojaseloste',
    deletionLink: 'Tilin poistaminen',
    contactSupport: 'Yhteydenotto: KalyntFlow@protonmail.com'
  }
};
