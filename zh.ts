import { Translation } from './types';

export const zh: Translation = {
  langCode: 'zh',
  langName: 'Chinese (Simplified)',
  nativeName: '简体中文',
  flag: 'CN',

  meta: {
    title: 'Kalynt Flow — 法律条款、服务协议与隐私政策',
    description: 'Kalynt Flow Android 应用程序的官方服务条款、隐私政策及用户数据删除合规文档。',
    badge: '符合 Google Play 商店政策规范',
    packageIdLabel: '应用包名：',
    archLabel: '技术架构：',
    archValue: '离线优先（Room SQLite + Firestore）',
    effectiveDateLabel: '生效日期：',
    effectiveDateValue: '2026年8月16日',
    readingTimePrefix: '预计阅读时间：',
    readingTimeSuffix: '分钟',
    wordsSuffix: '字',
  },

  nav: {
    terms: '服务条款',
    privacy: '隐私政策',
    deletion: '账号与数据注销',
    fontSize: '切换字体大小',
    toggleTheme: '切换深色/浅色模式',
    print: '打印文档',
    contact: '联系支持',
    language: '语言 (Language)',
    searchLangPlaceholder: '搜索语言...',
  },

  hero: {
    termsTitle: '服务条款 (Terms of Service)',
    termsSubtitle: '了解规范 Kalynt Flow 的法律条款、合理使用政策、生成式 AI 安全准则及数据保护机制。',
    privacyTitle: '隐私政策 (Privacy Policy)',
    privacySubtitle: '透明说明 Kalynt Flow 如何在 Android 本地 SQLite 存储数据、与 Google Cloud 云端同步以及保护个人隐私。',
    deletionTitle: '账号与数据删除指南',
    deletionSubtitle: '分步操作说明、应用内一键注销工具及正式请求生成器，可永久清除您的账号及云端数据。',
    searchPlaceholder: '搜索条款（例如："AI 举报"、"删除数据"、"GitHub 令牌"、"内容审核"）...',
    filterAll: '全部条款',
    filterAI: 'AI 安全与防护',
    filterPrivacy: '隐私与数据加密',
    filterModeration: 'UGC 与内容审核',
    filterDeletion: '账号与数据注销',
  },

  pillars: {
    privacyTitle: '离线优先隐私保护',
    privacyDesc: '所有任务、笔记和日历默认保存在本地 SQLite 数据库中。仅在主动登录时进行云端加密同步。',
    aiTitle: '生成式 AI 安全保障',
    aiDesc: '对所有模型生成的内容强制添加 "AI 生成" 标识，提供内置输出举报机制与动态系统安全过滤。',
    ugcTitle: '零容忍 UGC 违规政策',
    ugcDesc: '一键消息举报、即时违规成员屏蔽与全天候响应审核，严格遵守 Google Play 安全合规标准。',
    deletionTitle: '一键永久注销账号',
    deletionDesc: '无条件享有随时在应用内或通过邮件立即彻底销毁本地数据库、云端 Firestore 文档及认证凭据的权利。',
  },

  sidebar: {
    tocTitle: '目录导航',
  },

  actions: {
    copyLink: '复制链接',
    copyAgreement: '复制完整协议',
    copiedNotice: '已成功复制到剪贴板！',
    backToTop: '返回顶部',
  },

  terms: {
    sections: [
      {
        id: 'terms-acceptance',
        title: '1. 条款的接受与法律效力',
        takeaway: '安装或使用 Kalynt Flow 即表示您同意并受本服务条款的法律约束。',
        content: [
          '欢迎使用 Kalynt Flow。本服务条款（简称"条款"）是您（"用户"或"您"）与 Kalynt Flow 开发者（"我们"）之间关于使用 Kalynt Flow Android 移动应用程序及相关云同步服务的具有法律约束力的协议。',
          '下载、安装、启动或使用 Kalynt Flow 即表示您确认已阅读、理解并同意接受本条款的约束。如果您不同意这些条款，请立即停止使用并卸载本应用。'
        ]
      },
      {
        id: 'terms-services',
        title: '2. 服务描述与系统架构',
        takeaway: 'Kalynt Flow 提供离线优先的高效生产力工具、工作区编排与可选云端同步。',
        content: [
          'Kalynt Flow 是一款离线优先的生产力编排、技术知识库和团队协同工作区应用。主要功能模块包括：'
        ],
        bullets: [
          '分层工作区：为个人、团队或项目工作流提供隔离的工作环境，具备精细的成员权限管理。',
          '任务与子任务管理：支持优先级跟踪（低、中、高、紧急）、截止日期排程及交互式清单。',
          '富 Markdown 笔记库：提供语法高亮、自定义标签分类和本地全文极速检索。',
          '可视化时间日历：支持时间块排程、日程视图与任务时间线无缝同步。',
          'GitHub 客户端集成：通过官方 GitHub REST API 在本地直接查看代码仓库、提交历史和 Issue 议题。',
          '团队协同频道：支持团队成员间实时群组沟通与频道消息互动。',
          '智能 AI 辅助助手：提供任务自动化拆解、文本摘要与交互式工作流辅助。'
        ]
      },
      {
        id: 'terms-accounts',
        title: '3. 用户账号与安全责任',
        content: [
          '核心本地生产力工具无需联网账号即可完全离线使用。云端同步、团队共享工作区和高级功能需要通过以下方式进行身份验证：',
          '您有责任妥善保管您的账号密码及登录凭据，并对在您账号下发生的所有操作承担全部责任。'
        ],
        bullets: [
          'Google 快捷登录：由 Android Jetpack Credential Manager 提供的原生安全身份认证。',
          '邮箱与密码登录：通过 Google Firebase Auth 进行企业级加密身份验证。'
        ]
      },
      {
        id: 'terms-ugc',
        title: '4. 用户生成内容（UGC）与零容忍政策',
        content: [
          'Kalynt Flow 允许用户在共享工作区频道中创建笔记、管理任务和发送消息。您保留所创建内容的完整知识产权。'
        ],
        callout: {
          type: 'danger',
          title: '对不良违规内容与骚扰行为的零容忍政策',
          text: '严格遵循 Google Play 开发者关于用户生成内容（UGC）的安全政策，Kalynt Flow 对任何仇恨言论、骚扰恐吓、色情淫秽、煽动暴力、侵犯版权等违规内容实行零容忍制度。'
        },
        subsections: [
          {
            subtitle: '内置审核与实时举报屏蔽机制',
            bullets: [
              '应用内一键举报：用户可直接在界面中对任何违规消息、笔记或频道进行标记举报。',
              '即时成员屏蔽：一键屏蔽恶意成员，系统将立即从您的视图中过滤其所有内容。',
              '24小时审核处理：我们的审核团队将在24小时内调查被举报内容，并对违规账号予以封禁终止。'
            ]
          }
        ]
      },
      {
        id: 'terms-ai',
        title: '5. 生成式 AI 服务与安全准则',
        content: [
          'Kalynt Flow 集成了由 Google Gemini API 驱动的生成式 AI 功能，辅助任务规划、Markdown 格式化、文本总结及工作流优化。'
        ],
        callout: {
          type: 'purple',
          title: '明确的 AI 透明度与生成标识',
          text: '应用界面中所有由 AI 生成的回复和建议均带有明确的 "AI 生成回复" 标识与持续的合规提示横幅。'
        },
        subsections: [
          {
            subtitle: 'AI 输出举报与系统安全策略持续优化',
            text: '若 AI 生成任何不准确、冒犯性或不当内容，用户可点击举报按钮进行反馈。被举报的提示词将进入安全审核机制，用于优化动态系统级安全防护规则。'
          }
        ]
      },
      {
        id: 'terms-github',
        title: '6. 第三方服务集成（GitHub REST API）',
        content: [
          'Kalynt Flow 提供可选的客户端 GitHub 仓库浏览功能。GitHub 个人访问令牌（PAT）仅加密保存在您本地设备的 Android EncryptedSharedPreferences 中，绝不会上传至 Kalynt Flow 后端服务器。'
        ]
      },
      {
        id: 'terms-billing',
        title: '7. 订阅、支付与 Google Play 结算规范',
        content: [
          '所有应用内购买、升级与 Pro 自动续费订阅均完全通过 Google Play 应用内结算系统处理，符合 Google Play 开发者政策。订阅管理、续订与退款由您的 Google Play 账户直接管理。'
        ]
      },
      {
        id: 'terms-disclaimers',
        title: '8. 免责声明与责任限制',
        content: [
          'Kalynt Flow 按"现状"和"现有可用"基础提供，不提供任何明示或暗示的保证。在法律允许的最大范围内，我们不对任何间接、附带、特殊、衍生性或惩罚性损害承担责任。'
        ]
      },
      {
        id: 'terms-contact',
        title: '9. 法律咨询与技术支持',
        content: [
          '如有任何法律疑问、争议处理或技术支持需求，请联系我们的法务合规团队：KalyntFlow@protonmail.com。'
        ]
      }
    ],
    faqTitle: '常见法律与条款问题解答 (FAQ)',
    faqs: [
      {
        q: '使用 Kalynt Flow 必须注册账号吗？',
        a: '不需要。您可以完全离线使用所有核心生产力功能（任务、Markdown 笔记、日历）。仅在需要云端同步或团队协作时才需要登录。'
      },
      {
        q: '我的 GitHub 访问令牌存放在哪里？',
        a: 'GitHub 令牌严格存储在您本地设备的 Android Keystore 加密存储中，绝不上传到我们的云端服务器。'
      },
      {
        q: '如何处理团队频道中的违规违禁言论？',
        a: '频道中每条消息均支持一键举报和屏蔽。被屏蔽用户立即对您隐藏，举报内容将在24小时内由专人调查处理。'
      }
    ]
  },

  privacy: {
    sections: [
      {
        id: 'priv-intro',
        title: '1. 引言与隐私准则',
        takeaway: '您的个人任务和笔记属于您自己。我们绝不出售您的数据，也绝不将个人内容用于广告投放。',
        content: [
          '本隐私政策旨在向您说明 Kalynt Flow（"我们"）在您使用 Android 应用程序（包名：com.aistudio.kalyntflow.app）及云端服务时，如何收集、使用、存储及保护您的个人信息。',
          '我们的系统围绕"离线优先"的隐私设计原则构建：数据优先保存在本地设备上，只有在您主动登录时才会同步至云端。'
        ]
      },
      {
        id: 'priv-data-collected',
        title: '2. 我们收集的数据类型及用途',
        content: [
          '我们仅收集维持工作区正常运行所必需的最少数据：'
        ],
        table: {
          headers: ['数据类别', '具体收集项', '收集目的', '存储与传输位置'],
          rows: [
            ['账号身份凭据', '邮箱地址、显示名称、用户 UID', '用户身份验证与工作区权限识别', 'Firebase Authentication 及 Firestore'],
            ['工作区数据', '任务、笔记、待办清单、日历事件', '提供生产力工具及云端多端同步', '本地 Room SQLite（加密）+ Firestore'],
            ['团队聊天消息', '频道文本消息、时间戳、表情回复', '实现团队成员间实时通讯', 'Cloud Firestore（TLS 1.3 加密传输）'],
            ['AI 交互记录', '用户输入的提示词与 AI 生成的回复', '生成智能文本与持续提升输出质量', 'Gemini API 临时处理（不用于广告训练）'],
            ['设备诊断日志', '崩溃报告、操作系统版本、设备型号', '排查应用故障及优化系统稳定性', 'Firebase Crashlytics（匿名化处理）']
          ]
        }
      },
      {
        id: 'priv-storage',
        title: '3. 数据存储、加密与安全保障',
        content: [
          '本地存储：所有个人笔记、任务和本地偏好设置均通过 Android Room 保存在设备本地的 SQLite 数据库中。',
          '云端存储：登录后，同步数据通过 TLS 1.3 高强度加密通道传输至符合安全合规标准的 Google Cloud Firebase Firestore 数据库。',
          '安全防护：实施严格的 Firebase 安全规则（Security Rules），在用户级和工作区级别设置严格的隔离边界。'
        ]
      },
      {
        id: 'priv-thirdparty',
        title: '4. 第三方服务商说明',
        content: [
          '我们仅与具备合规资质的企业级云服务提供商合作：'
        ],
        bullets: [
          'Google Firebase（认证、Firestore、Crashlytics）：提供可靠的身份验证、云同步和稳定性监控。',
          'Google Gemini API：在企业级隐私协议保障下提供生成式 AI 工作流功能。',
          'Google Play Billing：处理安全的 Google Play 应用内结算。',
          'GitHub REST API：支持用户主动发起的代码仓库查询与查看。'
        ]
      },
      {
        id: 'priv-rights',
        title: '5. 您的隐私权利（符合 GDPR 与 CCPA 标准）',
        content: [
          '无论您身处何地，我们均保障您的基本数字隐私权利：',
          '访问与导出权：随时请求导出存储的个人数据副本。',
          '更正权：更正不准确或已过期的个人信息。',
          '删除权（被遗忘权）：支持随时一键永久注销账号并销毁所有关联的云端记录。',
          '我们绝不会将您的个人数据出售、出租或交易给第三方广告商或数据中介机构。'
        ]
      },
      {
        id: 'priv-contact',
        title: '6. 隐私咨询与数据保护官联系方式',
        content: [
          '如果您对本隐私政策有任何疑问，或希望行使您的个人数据权利，请联系数据保护团队：KalyntFlow@protonmail.com。'
        ]
      }
    ],
    faqTitle: '常见隐私与数据安全问题解答 (FAQ)',
    faqs: [
      {
        q: '我的笔记或任务会被用于训练 AI 模型吗？',
        a: '不会。向 Google Gemini 发起的 API 调用受企业开发者隐私协议保护，绝不被保存或用于训练通用基础模型。'
      },
      {
        q: '注销账号前可以导出我的所有数据吗？',
        a: '可以。您可以在应用设置中直接将所有工作区、笔记和任务导出为标准的 Markdown/JSON 文件。'
      },
      {
        q: 'Kalynt Flow 会追踪我的物理位置或读取通讯录吗？',
        a: '不会。Kalynt Flow 不需要也从不申请地理位置、手机通讯录、麦克风或后台定位等权限。'
      }
    ]
  },

  deletion: {
    sections: [
      {
        id: 'del-commitment',
        title: '1. 账号与数据注销承诺',
        takeaway: '您拥有对自己数据的绝对控制权，可随时彻底删除账号及全部云端记录。',
        content: [
          '严格遵守 Google Play 用户数据政策及国际隐私法规（GDPR、CCPA），Kalynt Flow 保障用户享有随时、无条件彻底注销账号、清除云端文档及销毁存储个人信息的权利。'
        ]
      },
      {
        id: 'del-how-to',
        title: '2. 如何注销账号（应用内快速操作指引）',
        content: [
          '您无需联系客服，即可直接在 Android 手机上自主完成账号永久注销：'
        ],
        bullets: [
          '步骤 1：在 Android 手机上打开 Kalynt Flow 应用程序。',
          '步骤 2：点击底部导航栏中的"设置"标签（齿轮图标）。',
          '步骤 3：向下滚动至"账号与安全"设置区域。',
          '步骤 4：点击红色的"注销账号与删除全部数据"按钮。',
          '步骤 5：仔细阅读确认提示弹窗并确认注销。',
          '结果：系统将立即抹除本地数据库、删除 Firebase Auth 身份记录并彻底清除 Firestore 云端所有相关文档。'
        ]
      },
      {
        id: 'del-table',
        title: '3. 数据清除与保留对照表',
        content: [
          '下表详细说明注销操作执行后各项数据的具体处理方式：'
        ],
        table: {
          headers: ['数据类型', '注销时执行的操作', '处理时效'],
          rows: [
            ['Firebase Auth 认证凭据', '永久销毁删除', '即时（0秒）'],
            ['云端 Firestore 任务与笔记', '从云端数据库彻底擦除', '即时（0秒）'],
            ['团队工作区成员资格与频道记录', '从所有协作频道中移除', '即时（0秒）'],
            ['手机本地 SQLite 数据库', '从应用沙盒中完全擦除', '用户确认后立即完成'],
            ['GitHub 个人访问令牌', '从 Android Keystore 彻底抹除', '用户确认后立即完成']
          ]
        }
      }
    ],
    generator: {
      title: '正式账号删除申请生成器',
      desc: '若您无法使用 Android 设备，可使用此表单生成并发送正式的账号注销申请邮件：',
      emailLabel: '注册账号时使用的邮箱地址：',
      emailPlaceholder: '例如：user@example.com',
      scopeLabel: '请求删除的数据范围：',
      scopeAuth: 'Firebase 身份认证凭据与个人资料',
      scopeCloud: '云端 Firestore 中的所有任务、笔记与日历',
      scopeWorkspaces: '共享工作区成员身份与频道消息',
      reasonLabel: '注销原因（选填）：',
      reasonPlaceholder: '例如：不再需要该服务 / 账号关闭',
      previewTitle: '生成的正式申请函预览：',
      copyBtn: '复制申请函内容',
      sendEmailBtn: '调用本地邮件客户端发送',
      emailSubject: '账号与数据永久注销请求 — Kalynt Flow'
    },
    faqTitle: '常见账号注销问题解答 (FAQ)',
    faqs: [
      {
        q: '已注销的账号能够恢复吗？',
        a: '无法恢复。出于安全与数据保护要求，账号注销为不可逆操作，所有云端与本地记录将被永久擦除。'
      },
      {
        q: '注销账号会自动取消 Google Play 订阅吗？',
        a: 'Google Play 订阅由 Google 平台直接管理。请在注销前前往 Google Play 商店应用中的"订阅"页面手动取消有效订阅。'
      }
    ]
  },

  footer: {
    brandSubtitle: '官方法律条款、服务协议与隐私合规中心',
    rights: '保留所有权利。Android 和 Google Play 是 Google LLC 的商标。',
    termsLink: '服务条款',
    privacyLink: '隐私政策',
    deletionLink: '账号注销',
    contactSupport: '支持邮箱：KalyntFlow@protonmail.com'
  }
};
