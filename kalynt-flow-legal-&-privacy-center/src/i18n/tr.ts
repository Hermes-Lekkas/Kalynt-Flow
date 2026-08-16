import { Translation } from './types';

export const tr: Translation = {
  langCode: 'tr',
  langName: 'Turkish',
  nativeName: 'Türkçe',
  flag: 'TR',

  meta: {
    title: 'Kalynt Flow — Hizmet Şartları ve Gizlilik Politikası',
    description: 'Kalynt Flow Android uygulaması için resmi Hizmet Şartları, Gizlilik Politikası ve Kullanıcı Verisi Silme yönergeleri.',
    badge: 'Google Play Store Politikalarıyla Uyumlu',
    packageIdLabel: 'Paket Kimliği:',
    archLabel: 'Mimari:',
    archValue: 'Offline-First (Room SQLite + Firestore)',
    effectiveDateLabel: 'Yürürlük Tarihi:',
    effectiveDateValue: '16 Ağustos 2026',
    readingTimePrefix: 'Tahmini okuma süresi:',
    readingTimeSuffix: 'dk',
    wordsSuffix: 'kelime',
  },

  nav: {
    terms: 'Hizmet Şartları',
    privacy: 'Gizlilik Politikası',
    deletion: 'Hesap Silme',
    fontSize: 'Yazı Boyutu',
    toggleTheme: 'Karanlık/Aydınlık Mod',
    print: 'Yazdır',
    contact: 'Destek',
    language: 'Dil (Language)',
    searchLangPlaceholder: 'Dil ara...',
  },

  hero: {
    termsTitle: 'Hizmet Şartları (Terms of Service)',
    termsSubtitle: 'Kalynt Flow kullanımını düzenleyen yasal şartları, kabul edilebilir kullanım kurallarını, yapay zeka güvenlik standartlarını ve veri koruma ilkelerini inceleyin.',
    privacyTitle: 'Gizlilik Politikası (Privacy Policy)',
    privacySubtitle: 'Kalynt Flow\'un verilerinizi Android üzerinde yerel SQLite ile nasıl sakladığı, Google Cloud ile nasıl senkronize ettiği ve gizliliğinizi nasıl koruduğu hakkında şeffaf bilgiler.',
    deletionTitle: 'Hesap ve Veri Silme Rehberi',
    deletionSubtitle: 'Hesabınızı ve bulut verilerinizi kalıcı olarak silmek için adım adım yönergeler, uygulama içi silme araçları ve resmi talep oluşturucu.',
    searchPlaceholder: 'Maddelerde arayın (örn. "yapay zeka şikayet", "veri silme", "GitHub belirteci")...',
    filterAll: 'Tüm Maddeler',
    filterAI: 'Yapay Zeka Güvenliği',
    filterPrivacy: 'Gizlilik ve Şifreleme',
    filterModeration: 'UGC ve Denetim',
    filterDeletion: 'Hesap Silme',
  },

  pillars: {
    privacyTitle: 'Offline-First Gizlilik',
    privacyDesc: 'Tüm görevler, notlar ve takvimler varsayılan olarak cihazdaki yerel SQLite veritabanında saklanır. Bulut senkronizasyonu yalnızca giriş yapıldığında gerçekleşir.',
    aiTitle: 'Yapay Zeka Güvenliği',
    aiDesc: 'Tüm model yanıtlarında zorunlu "Yapay Zeka Tarafından Üretildi" etiketi, yerleşik şikayet mekanizması ve dinamik güvenlik filtreleri.',
    ugcTitle: 'Kötüye Kullanıma Sıfır Tolerans',
    ugcDesc: 'Tek dokunuşla şikayet, anında üye engelleme ve Google Play standartlarına uygun hızlı moderasyon.',
    deletionTitle: 'Tek Dokunuşla Hesap Silme',
    deletionDesc: 'Yerel veritabanınızı, Firestore belgelerinizi ve kimlik bilgilerinizi dilediğiniz an kalıcı olarak temizleme hakkı.',
  },

  sidebar: {
    tocTitle: 'İçindekiler',
  },

  actions: {
    copyLink: 'Bağlantıyı Kopyala',
    copyAgreement: 'Tüm Metni Kopyala',
    copiedNotice: 'Panoya kopyalandı!',
    backToTop: 'Yukarı çık',
  },

  terms: {
    sections: [
      {
        id: 'terms-acceptance',
        title: '1. Şartların Kabulü',
        takeaway: 'Kalynt Flow\'u yükleyerek veya kullanarak bu yasal şartları kabul etmiş sayılırsınız.',
        content: [
          'Kalynt Flow\'a hoş geldiniz. Bu Hizmet Şartları ("Şartlar"), Kalynt Flow geliştiricileri ("biz") ile siz ("Kullanıcı") arasında yasal olarak bağlayıcı bir sözleşmedir.',
          'Kalynt Flow\'u indirerek, yükleyerek veya kullanarak bu Şartları okuduğunuzu, anladığınızı ve bunlara bağlı kalmayı kabul ettiğinizi beyan edersiniz.'
        ]
      },
      {
        id: 'terms-services',
        title: '2. Hizmet Tanımı ve Mimari',
        takeaway: 'Kalynt Flow, yerel öncelikli üretkenlik, çalışma alanı yönetimi ve isteğe bağlı bulut senkronizasyonu sunar.',
        content: [
          'Kalynt Flow, "Offline-First" mimarisiyle geliştirilmiş bir görev yönetimi, teknik bilgi tabanı ve ekip çalışma alanı uygulamasıdır:'
        ],
        bullets: [
          'Hiyerarşik Çalışma Alanları: Kişisel veya ekip projeleri için yalıtılmış ortamlar ve izin yönetimi.',
          'Görev ve Alt Görev Yönetimi: Öncelik seviyeleri (Düşük, Orta, Yüksek, Acil) ve kontrol listeleri.',
          'Zengin Markdown Belgeleri: Sözdizimi vurgulama ve anında yerel arama.',
          'Görsel Takvim: Zaman bloklama ve görev zaman çizelgeleri.',
          'GitHub Entegrasyonu: Resmi GitHub REST API üzerinden depoları ve konuları doğrudan inceleme.',
          'Ekip Kanalları: Gerçek zamanlı grup iş birliği ve sohbet.',
          'Yapay Zeka Asistanı: Görev otomasyonu ve akıllı özetler.'
        ]
      },
      {
        id: 'terms-accounts',
        title: '3. Kullanıcı Hesapları ve Güvenlik',
        content: [
          'Temel yerel araçlar çevrim içi hesap gerektirmeden çalışır. Bulut senkronizasyonu ve ekip alanları şu yöntemlerle kimlik doğrulaması gerektirir:',
          'Hesap bilgilerinizin gizliliğini korumaktan siz sorumlusunuz.'
        ],
        bullets: [
          'Google ile Giriş: Android Jetpack Credential Manager ile güvenli kimlik doğrulama.',
          'E-posta / Şifre: Google Firebase Auth üzerinden şifrelenmiş kimlik doğrulama.'
        ]
      },
      {
        id: 'terms-ugc',
        title: '4. Kullanıcı İçeriği ve Sıfır Tolerans Politikası (UGC)',
        content: [
          'Kalynt Flow, notlar oluşturmanıza ve paylaşılan kanallarda mesajlaşmanıza olanak tanır. İçeriklerinizin tüm fikri mülkiyet hakları size aittir.'
        ],
        callout: {
          type: 'danger',
          title: 'Uygunsuz İçerik ve Tacize Karşı Sıfır Tolerans',
          text: 'Google Play Kullanıcı Tarafından Oluşturulan İçerik (UGC) politikalarına tam uyum kapsamında; nefret söylemi, taciz, şiddet içeren materyaller ve telif hakkı ihlalleri kesinlikle yasaktır.'
        },
        subsections: [
          {
            subtitle: 'Yerleşik Moderasyon ve Şikayet Araçları',
            bullets: [
              'Tek Dokunuşla Şikayet: Uygunsuz mesajları doğrudan arayüzden bildirin.',
              'Anında Engelleme: İstenmeyen üyeleri tek dokunuşla engelleyerek içeriklerini gizleyin.',
              '24 Saatte İnceleme: Moderasyon ekibimiz şikayetleri 24 saat içinde inceler ve ihlal eden hesapları kapatır.'
            ]
          }
        ]
      },
      {
        id: 'terms-ai',
        title: '5. Üretken Yapay Zeka Hizmetleri ve Güvenlik',
        content: [
          'Kalynt Flow, görev planlama ve metin biçimlendirmeye yardımcı olmak için Google Gemini API destekli yapay zeka özellikleri sunar.'
        ],
        callout: {
          type: 'purple',
          title: 'Yapay Zeka Şeffaflığı ve Açık Etiketleme',
          text: 'Yapay zeka tarafından üretilen tüm yanıtlar, arayüzde "Yapay Zeka Tarafından Üretildi" rozeti ve uyarı bildirimi ile açıkça belirtilir.'
        },
        subsections: [
          {
            subtitle: 'Yapay Zeka Yanıtlarını Bildirme ve Filtre Geliştirme',
            text: 'Kullanıcılar, hatalı veya uygunsuz yapay zeka yanıtlarını bildirerek güvenlik kurallarının geliştirilmesine katkıda bulunabilir.'
          }
        ]
      },
      {
        id: 'terms-github',
        title: '6. Üçüncü Taraf Entegrasyonları (GitHub REST API)',
        content: [
          'GitHub Kişisel Erişim Belirteçleri (PAT), yalnızca yerel cihazınızdaki Android EncryptedSharedPreferences içinde saklanır ve ASLA Kalynt Flow sunucularına iletilmez.'
        ]
      },
      {
        id: 'terms-billing',
        title: '7. Abonelikler ve Google Play Ödemeleri',
        content: [
          'Tüm uygulama içi satın almalar ve Pro abonelikler, geliştirici politikalarına uygun olarak yalnızca Google Play Faturalandırma sistemi üzerinden yürütülür.'
        ]
      },
      {
        id: 'terms-disclaimers',
        title: '8. Garanti Reddi ve Sorumluluk Sınırı',
        content: [
          'Kalynt Flow "OLDUĞU GİBİ" sağlanır. Yasaların izin verdiği azami ölçüde, dolaylı zararlar veya veri kayıplarından sorumlu değiliz.'
        ]
      },
      {
        id: 'terms-contact',
        title: '9. İletişim ve Destek',
        content: [
          'Yasal sorularınız veya destek talepleriniz için KalyntFlow@protonmail.com adresinden bize ulaşabilirsiniz.'
        ]
      }
    ],
    faqTitle: 'Sıkça Sorulan Sorular (Şartlar ve Yasal Konular)',
    faqs: [
      {
        q: 'Kalynt Flow kullanmak için hesap açmam gerekir mi?',
        a: 'Hayır. Görevler, Markdown notları ve takvim gibi tüm temel özellikleri hesap açmadan tamamen çevrim dışı kullanabilirsiniz.'
      },
      {
        q: 'GitHub belirteçlerim nerede saklanıyor?',
        a: 'Belirteçleriniz telefonunuzun donanım destekli Android Keystore kasasında şifreli olarak saklanır.'
      },
      {
        q: 'Ekip kanallarındaki mesajlar nasıl denetlenir?',
        a: 'Her mesajda tek dokunuşla şikayet ve engelleme seçeneği bulunur. Şikayetler 24 saat içinde incelenir.'
      }
    ]
  },

  privacy: {
    sections: [
      {
        id: 'priv-intro',
        title: '1. Giriş ve Gizlilik İlkeleri',
        takeaway: 'Verileriniz yalnızca size aittir. Bilgilerinizi satmıyor ve reklam amacıyla kullanmıyoruz.',
        content: [
          'Bu Gizlilik Politikası, Kalynt Flow Android uygulamasında (Paket Kimliği: com.aistudio.kalyntflow.app) kişisel verilerinizin nasıl işlendiğini açıklar.',
          '"Offline-First" mimarimiz, verilerinizin öncelikle yerel cihazınızda kalmasını sağlar.'
        ]
      },
      {
        id: 'priv-data-collected',
        title: '2. Toplanan Veriler ve Kullanım Amaçları',
        content: [
          'Yalnızca uygulamanın düzgün çalışması için zorunlu olan asgari verileri topluyoruz:'
        ],
        table: {
          headers: ['Veri Kategorisi', 'Toplanan Unsurlar', 'Toplanma Amacı', 'Depolama Konumu'],
          rows: [
            ['Hesap Kimlik Bilgileri', 'E-posta adresi, görünen ad, UID', 'Kimlik doğrulama ve yetkilendirme', 'Firebase Auth ve Firestore'],
            ['Çalışma Alanı Verileri', 'Görevler, notlar, listeler, etkinlikler', 'Üretkenlik araçları ve senkronizasyon', 'Yerel SQLite (Room) + Firestore'],
            ['Sohbet Mesajları', 'Kanal mesajları, zaman damgaları', 'Gerçek zamanlı ekip iletişimi', 'Cloud Firestore (TLS 1.3 şifreleme)'],
            ['Yapay Zeka Etkileşimleri', 'Girilen istemler ve üretilen yanıtlar', 'Yanıt üretimi ve kalite optimizasyonu', 'Gemini API (reklam eğitimi için kullanılmaz)'],
            ['Cihaz Tanılama Verileri', 'Kilitlenme raporları, işletim sistemi sürümü', 'Hata giderme ve kararlılık', 'Firebase Crashlytics (anonimleştirilmiş)']
          ]
        }
      },
      {
        id: 'priv-storage',
        title: '3. Depolama, Şifreleme ve Güvenlik',
        content: [
          'Yerel Depolama: Notlarınız ve görevleriniz Android Room aracılığıyla cihazdaki SQLite veritabanında tutulur.',
          'Bulut Depolama: Senkronize edilen veriler TLS 1.3 şifreli bağlantılarla Google Cloud Firebase Firestore\'a aktarılır.',
          'Güvenlik Önlemleri: Kullanıcı ve çalışma alanı düzeyinde erişimi yalıtmak için katı Firebase Security Rules kuralları uygulanır.'
        ]
      },
      {
        id: 'priv-thirdparty',
        title: '4. Üçüncü Taraf Hizmet Sağlayıcıları',
        content: [
          'Yalnızca kurumsal standartlara sahip güvenilir altyapı sağlayıcılarıyla çalışıyoruz:'
        ],
        bullets: [
          'Google Firebase (Auth, Firestore, Crashlytics): Kimlik doğrulama, senkronizasyon ve kararlılık izleme.',
          'Google Gemini API: Kurumsal gizlilik standartları altında yapay zeka özellikleri.',
          'Google Play Billing: Güvenli uygulama içi ödeme işleme.',
          'GitHub REST API: Kullanıcı talebiyle doğrudan depo sorgulama.'
        ]
      },
      {
        id: 'priv-rights',
        title: '5. Haklarınız (KVKK, GDPR ve CCPA Uyumlu)',
        content: [
          'Kişisel verilerinizin korunmasına ilişkin tüm haklarınızı güvence altına alıyoruz:',
          'Erişim ve Taşınabilirlik Hakkı: Saklanan verilerinizin bir kopyasını dilediğiniz an dışa aktarın.',
          'Düzeltme Hakkı: Güncel olmayan profil bilgilerinizi güncelleyin.',
          'Silme Hakkı (Unutulma Hakkı): Hesabınızı ve bulut verilerinizi tek dokunuşla kalıcı olarak silin.',
          'Kişisel verilerinizi asla üçüncü taraflara veya veri simsarlarına satmıyoruz.'
        ]
      },
      {
        id: 'priv-contact',
        title: '6. Gizlilik Talepleri ve İletişim',
        content: [
          'Gizlilik politikamızla ilgili tüm sorularınız için KalyntFlow@protonmail.com adresine yazabilirsiniz.'
        ]
      }
    ],
    faqTitle: 'Sıkça Sorulan Sorular (Gizlilik ve Veri Güvenliği)',
    faqs: [
      {
        q: 'Notlarım yapay zeka modellerini eğitmek için kullanılıyor mu?',
        a: 'Hayır. Google Gemini API çağrıları kurumsal geliştirici gizlilik şartlarına tabidir ve modellerin genel eğitimi için saklanmaz.'
      },
      {
        q: 'Hesabımı silmeden önce verilerimi dışa aktarabilir miyim?',
        a: 'Evet. Uygulama ayarlarından tüm çalışma alanlarınızı ve notlarınızı Markdown/JSON formatında dışa aktarabilirsiniz.'
      },
      {
        q: 'Kalynt Flow konumuma veya rehberime erişiyor mu?',
        a: 'Hayır. Uygulama konum, rehber veya mikrofon gibi izinleri talep etmez.'
      }
    ]
  },

  deletion: {
    sections: [
      {
        id: 'del-commitment',
        title: '1. Hesap ve Veri Silme Taahhüdü',
        takeaway: 'Verileriniz üzerinde tam kontrole sahipsiniz ve hesabınızı dilediğiniz an silebilirsiniz.',
        content: [
          'Google Play politikaları ve uluslararası veri koruma düzenlemeleri uyarınca, Kalynt Flow tüm kullanıcılarına hesaplarını ve kayıtlı verilerini derhal ve koşulsuz olarak silme hakkı tanır.'
        ]
      },
      {
        id: 'del-how-to',
        title: '2. Uygulama İçinden Hesap Nasıl Silinir (Adım Adım)',
        content: [
          'Hesabınızı Android cihazınızdan saniyeler içinde doğrudan silebilirsiniz:'
        ],
        bullets: [
          'Adım 1: Android cihazınızda Kalynt Flow uygulamasını açın.',
          'Adım 2: Alt gezinme çubuğundaki "Ayarlar" sekmesine (dişli simgesi) dokunun.',
          'Adım 3: "Hesap ve Güvenlik" bölümüne kaydırın.',
          'Adım 4: Kırmızı "Hesabı ve Tüm Verileri Sil" düğmesine dokunun.',
          'Adım 5: Onay kutusunda işlemi onaylayın.',
          'Sonuç: Yerel veritabanınız temizlenir, Firebase Auth hesabınız silinir ve Firestore belgeleriniz buluttan kalıcı olarak kaldırılır.'
        ]
      },
      {
        id: 'del-table',
        title: '3. Veri Silme ve Saklama Tablosu',
        content: [
          'Aşağıdaki tabloda her bir veri türü için uygulanan işlem ve süreler belirtilmiştir:'
        ],
        table: {
          headers: ['Veri Türü', 'Silme İşlemi', 'Tamamlanma Süresi'],
          rows: [
            ['Firebase Auth Kullanıcı Kaydı', 'Kalıcı olarak silinir', 'Anında (0 saniye)'],
            ['Cloud Firestore Görev ve Notları', 'Buluttan tamamen temizlenir', 'Anında (0 saniye)'],
            ['Ekip Çalışma Alanı Üyelikleri', 'Tüm kanallardan kaldırılır', 'Anında (0 saniye)'],
            ['Cihazdaki Yerel SQLite Veritabanı', 'Bellekten silinir', 'Onaydan hemen sonra'],
            ['GitHub Erişim Belirteci (PAT)', 'Android Keystore kasasından silinir', 'Onaydan hemen sonra']
          ]
        }
      }
    ],
    generator: {
      title: 'Resmi Hesap Silme Talep Oluşturucu',
      desc: 'Android cihazınıza artık erişemiyorsanız, e-posta yoluyla resmi silme talebinde bulunabilirsiniz:',
      emailLabel: 'Hesabınıza kayıtlı e-posta adresi:',
      emailPlaceholder: 'örn: kullanici@ornek.com',
      scopeLabel: 'Silinmesi istenen veri kapsamı:',
      scopeAuth: 'Firebase Kimlik Bilgileri ve Profil',
      scopeCloud: 'Cloud Firestore Görevleri, Notları ve Takvimleri',
      scopeWorkspaces: 'Paylaşılan Çalışma Alanı Üyelikleri ve Mesajlar',
      reasonLabel: 'Silme nedeni (isteğe bağlı):',
      reasonPlaceholder: 'örn: Hesap kapatma / Artık kullanmıyorum',
      previewTitle: 'Resmi Talep Metni Önizlemesi:',
      copyBtn: 'Talep Metnini Kopyala',
      sendEmailBtn: 'E-posta Uygulamasında Aç',
      emailSubject: 'HESAP VE VERİ SİLME TALEBİ — Kalynt Flow'
    },
    faqTitle: 'Sıkça Sorulan Sorular (Hesap Silme)',
    faqs: [
      {
        q: 'Silinen bir hesap geri yüklenebilir mi?',
        a: 'Hayır. Güvenlik ve gizlilik gerekçesiyle silme işlemi kalıcı ve geri alınamaz niteliktedir.'
      },
      {
        q: 'Hesabı silmek Google Play aboneliğimi iptal eder mi?',
        a: 'Abonelikler doğrudan Google tarafından yönetilir. Hesabınızı silmeden önce Google Play Store uygulamasındaki "Abonelikler" bölümünden aktif aboneliğinizi iptal etmeyi unutmayın.'
      }
    ]
  },

  footer: {
    brandSubtitle: 'Resmi Yasal Bilgilendirme, Hizmet Şartları ve Gizlilik Merkezi',
    rights: 'Tüm hakları saklıdır. Android ve Google Play, Google LLC\'nin ticari markalarıdır.',
    termsLink: 'Hizmet Şartları',
    privacyLink: 'Gizlilik Politikası',
    deletionLink: 'Hesap Silme',
    contactSupport: 'İletişim: KalyntFlow@protonmail.com'
  }
};
