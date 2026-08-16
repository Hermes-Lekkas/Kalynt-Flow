import { Translation } from './types';

export const es: Translation = {
  langCode: 'es',
  langName: 'Spanish',
  nativeName: 'Español',
  flag: 'ES',

  meta: {
    title: 'Kalynt Flow — Términos de servicio y Política de privacidad',
    description: 'Documentación legal oficial, términos de servicio, política de privacidad y eliminación de datos para la app Android Kalynt Flow.',
    badge: 'Cumple con las políticas de Google Play Store',
    packageIdLabel: 'ID del paquete:',
    archLabel: 'Arquitectura:',
    archValue: 'Offline-First (Room SQLite + Firestore)',
    effectiveDateLabel: 'Fecha de vigencia:',
    effectiveDateValue: '16 de agosto de 2026',
    readingTimePrefix: 'Tiempo estimado de lectura:',
    readingTimeSuffix: 'min',
    wordsSuffix: 'palabras',
  },

  nav: {
    terms: 'Términos de servicio',
    privacy: 'Política de privacidad',
    deletion: 'Eliminar cuenta',
    fontSize: 'Cambiar tamaño de fuente',
    toggleTheme: 'Alternar modo oscuro/claro',
    print: 'Imprimir documento',
    contact: 'Contactar soporte',
    language: 'Idioma (Language)',
    searchLangPlaceholder: 'Buscar idioma...',
  },

  hero: {
    termsTitle: 'Términos de servicio',
    termsSubtitle: 'Conozca los acuerdos legales, reglas de uso aceptable, medidas de seguridad de IA y protección de datos que rigen en Kalynt Flow.',
    privacyTitle: 'Política de privacidad',
    privacySubtitle: 'Información transparente sobre cómo Kalynt Flow almacena sus datos localmente en Android mediante SQLite, sincroniza con Google Cloud y protege su privacidad.',
    deletionTitle: 'Eliminación de cuenta y datos',
    deletionSubtitle: 'Instrucciones paso a paso, herramientas integradas en la app y generador de solicitudes formales para purgar permanentemente sus datos.',
    searchPlaceholder: 'Buscar en las cláusulas (ej: "reportar IA", "eliminar datos", "token GitHub")...',
    filterAll: 'Todas las cláusulas',
    filterAI: 'Seguridad y filtros de IA',
    filterPrivacy: 'Privacidad y cifrado',
    filterModeration: 'UGC y moderación',
    filterDeletion: 'Eliminación de cuenta',
  },

  pillars: {
    privacyTitle: 'Privacidad Offline-First',
    privacyDesc: 'Todas las tareas, notas y calendarios se guardan en el almacenamiento local SQLite por defecto. La sincronización solo ocurre al iniciar sesión.',
    aiTitle: 'Seguridad y filtros de IA',
    aiDesc: 'Etiquetado obligatorio "Generado por IA" en todas las respuestas del modelo, reportes integrados y filtros dinámicos de seguridad.',
    ugcTitle: 'Tolerancia cero con el abuso',
    ugcDesc: 'Reporte en 1 toque, bloqueo inmediato de miembros abusivos y moderación continua conforme a las políticas de Google Play.',
    deletionTitle: 'Eliminación de cuenta en 1 toque',
    deletionDesc: 'Derecho incondicional a purgar su base de datos local, documentos de Firestore y credenciales en cualquier momento.',
  },

  sidebar: {
    tocTitle: 'Tabla de contenido',
  },

  actions: {
    copyLink: 'Copiar enlace',
    copyAgreement: 'Copiar acuerdo completo',
    copiedNotice: '¡Copiado al portapapeles!',
    backToTop: 'Volver arriba',
  },

  terms: {
    sections: [
      {
        id: 'terms-acceptance',
        title: '1. Aceptación de los términos',
        takeaway: 'Al instalar o usar Kalynt Flow, usted acepta y se compromete legalmente bajo estos términos.',
        content: [
          'Bienvenido a Kalynt Flow. Estos Términos de servicio ("Términos") constituyen un acuerdo legal vinculante entre usted ("Usuario", "usted") y los desarrolladores de Kalynt Flow ("nosotros").',
          'Al descargar, instalar o utilizar Kalynt Flow, confirma que ha leído, comprendido y aceptado quedar sujeto a estos Términos.'
        ]
      },
      {
        id: 'terms-services',
        title: '2. Descripción de servicios y arquitectura',
        takeaway: 'Kalynt Flow ofrece productividad local de vanguardia, organización de proyectos y sincronización en la nube opcional.',
        content: [
          'Kalynt Flow es una aplicación de orquestación de tareas, base de conocimiento técnico y espacios de trabajo para equipos basada en arquitectura "Offline-First":'
        ],
        bullets: [
          'Espacios de trabajo jerárquicos: Entornos aislados para flujos de trabajo personales o de equipo con permisos detallados.',
          'Gestión de tareas y subtareas: Niveles de prioridad (Baja, Media, Alta, Urgente) y listas de verificación.',
          'Documentación Markdown enriquecida: Resaltado de sintaxis y búsqueda local instantánea.',
          'Calendario visual: Planificación por bloques de tiempo y cronogramas de tareas.',
          'Integración con GitHub: Inspección directa de repositorios e incidencias a través de la API REST oficial de GitHub.',
          'Canales de equipo: Colaboración en grupo y mensajería en tiempo real.',
          'Asistente de IA contextual: Automatización de tareas y resúmenes inteligentes.'
        ]
      },
      {
        id: 'terms-accounts',
        title: '3. Cuentas de usuario y seguridad',
        content: [
          'Las herramientas locales principales no requieren cuenta online. La sincronización en la nube y los espacios de equipo requieren autenticación mediante:',
          'Usted es responsable de mantener la confidencialidad de sus credenciales de acceso.'
        ],
        bullets: [
          'Inicio de sesión con Google: Autenticación segura mediante Android Jetpack Credential Manager.',
          'Correo/Contraseña: Autenticación cifrada gestionada por Google Firebase Auth.'
        ]
      },
      {
        id: 'terms-ugc',
        title: '4. Contenido de usuario y política de tolerancia cero (UGC)',
        content: [
          'Kalynt Flow permite crear notas y enviar mensajes en canales compartidos. Usted conserva la propiedad intelectual de todo su contenido.'
        ],
        callout: {
          type: 'danger',
          title: 'Política de tolerancia cero ante contenido inapropiado o acoso',
          text: 'En cumplimiento estricto con las políticas de Google Play sobre contenido generado por usuarios (UGC), Kalynt Flow prohíbe de forma absoluta discursos de odio, acoso, contenido violento o infracciones de derechos de autor.'
        },
        subsections: [
          {
            subtitle: 'Mecanismos de moderación y reporte integrados',
            bullets: [
              'Reporte en 1 toque en la app: Notifique mensajes o contenidos inadecuados directamente desde la interfaz.',
              'Bloqueo instantáneo: Bloquee miembros abusivos para ocultar automáticamente su contenido.',
              'Revisión en 24 horas: Nuestro equipo revisa los reportes dentro de las 24 horas y cancela las cuentas infractoras.'
            ]
          }
        ]
      },
      {
        id: 'terms-ai',
        title: '5. Servicios de IA generativa y salvaguardas',
        content: [
          'Kalynt Flow integra funciones de IA generativa impulsadas por la API de Google Gemini para asistencia en tareas y formateo de texto.'
        ],
        callout: {
          type: 'purple',
          title: 'Transparencia y etiquetado explícito de IA',
          text: 'Todas las respuestas generadas por IA se identifican claramente en la interfaz con la etiqueta "Respuesta generada por IA".'
        },
        subsections: [
          {
            subtitle: 'Reporte de respuestas de IA y mejora continua',
            text: 'Los usuarios pueden reportar respuestas incorrectas o inadecuadas para optimizar las reglas y filtros de seguridad del sistema.'
          }
        ]
      },
      {
        id: 'terms-github',
        title: '6. Integraciones de terceros (API REST de GitHub)',
        content: [
          'Los tokens de acceso personal de GitHub (PAT) se almacenan exclusivamente en EncryptedSharedPreferences de Android en su dispositivo local y NUNCA se envían a servidores de Kalynt Flow.'
        ]
      },
      {
        id: 'terms-billing',
        title: '7. Facturación y suscripciones de Google Play',
        content: [
          'Todas las compras integradas y suscripciones Pro se procesan a través de Google Play Billing de conformidad con las políticas de desarrolladores.'
        ]
      },
      {
        id: 'terms-disclaimers',
        title: '8. Descargo de responsabilidad y limitación de responsabilidad',
        content: [
          'Kalynt Flow se proporciona "TAL CUAL" y "SEGÚN DISPONIBILIDAD". No nos hacemos responsables por daños indirectos o pérdidas de datos.'
        ]
      },
      {
        id: 'terms-contact',
        title: '9. Contacto y soporte',
        content: [
          'Para consultas legales o soporte técnico, escriba a KalyntFlow@protonmail.com.'
        ]
      }
    ],
    faqTitle: 'Preguntas frecuentes (Términos y legislación)',
    faqs: [
      {
        q: '¿Necesito una cuenta para usar Kalynt Flow?',
        a: 'No. Puede utilizar todas las funciones principales (tareas, notas Markdown, calendario) completamente sin conexión y sin registrar una cuenta.'
      },
      {
        q: '¿Dónde se guardan mis tokens de GitHub?',
        a: 'Sus tokens se almacenan cifrados dentro del almacén seguro Android Keystore de su teléfono.'
      },
      {
        q: '¿Cómo se moderan los mensajes en los canales de equipo?',
        a: 'Cada mensaje cuenta con opciones de reporte y bloqueo en 1 toque. Los reportes se procesan en menos de 24 horas.'
      }
    ]
  },

  privacy: {
    sections: [
      {
        id: 'priv-intro',
        title: '1. Introducción y principios de privacidad',
        takeaway: 'Sus tareas y notas le pertenecen. No vendemos sus datos ni los utilizamos con fines publicitarios.',
        content: [
          'Esta política de privacidad describe cómo Kalynt Flow ("nosotros") maneja la información personal en la app Android (ID de paquete: com.aistudio.kalyntflow.app).',
          'Nuestra arquitectura "Offline-First" prioriza el almacenamiento local de sus datos en su dispositivo.'
        ]
      },
      {
        id: 'priv-data-collected',
        title: '2. Información recopilada y propósitos',
        content: [
          'Recopilamos únicamente los datos mínimos indispensables para el funcionamiento del servicio:'
        ],
        table: {
          headers: ['Categoría de datos', 'Elementos recopilados', 'Propósito', 'Ubicación de almacenamiento'],
          rows: [
            ['Identificadores de cuenta', 'Correo electrónico, nombre, UID', 'Autenticación y membresía', 'Firebase Auth y Firestore'],
            ['Datos del espacio de trabajo', 'Tareas, notas, listas, eventos', 'Herramientas de productividad y sincronización', 'SQLite local (Room) + Firestore'],
            ['Mensajes de chat', 'Mensajes de canal, marcas de tiempo', 'Colaboración en equipo en tiempo real', 'Cloud Firestore (cifrado TLS 1.3)'],
            ['Interacciones con IA', 'Prompts ingresados y respuestas de IA', 'Generación de respuestas y mejora de calidad', 'Tránsito API Gemini (sin uso publicitario)'],
            ['Diagnósticos del dispositivo', 'Informes de fallos, versión de SO', 'Resolución de errores y estabilidad', 'Firebase Crashlytics (anonimizado)']
          ]
        }
      },
      {
        id: 'priv-storage',
        title: '3. Almacenamiento, cifrado y seguridad',
        content: [
          'Almacenamiento local: Sus notas y tareas se guardan en una base de datos SQLite mediante Android Room en su dispositivo.',
          'Almacenamiento en la nube: Los datos sincronizados viajan por conexiones cifradas TLS 1.3 hacia Google Cloud Firebase Firestore.',
          'Seguridad: Implementamos reglas de seguridad estrictas en Firebase para aislar los accesos por usuario y espacio de trabajo.'
        ]
      },
      {
        id: 'priv-thirdparty',
        title: '4. Proveedores de servicios externos',
        content: [
          'Colaboramos únicamente con plataformas e infraestructuras empresariales de confianza:'
        ],
        bullets: [
          'Google Firebase (Auth, Firestore, Crashlytics): Autenticación, sincronización y métricas de estabilidad.',
          'Google Gemini API: Funciones de IA generativa bajo estrictos términos de privacidad corporativa.',
          'Google Play Billing: Facturación y pagos seguros dentro de la app.',
          'GitHub REST API: Consulta directa de repositorios por iniciativa del usuario.'
        ]
      },
      {
        id: 'priv-rights',
        title: '5. Sus derechos (cumplimiento RGPD y CCPA)',
        content: [
          'Garantizamos el pleno ejercicio de sus derechos de privacidad digital:',
          'Derecho de acceso y portabilidad: Solicite la exportación de sus datos en cualquier momento.',
          'Derecho de rectificación: Modifique datos desactualizados de su perfil.',
          'Derecho de supresión (Derecho al olvido): Elimine su cuenta y registros en la nube en 1 toque.',
          'Nunca vendemos ni comercializamos su información personal con intermediarios de datos.'
        ]
      },
      {
        id: 'priv-contact',
        title: '6. Consultas de privacidad y contacto',
        content: [
          'Si tiene preguntas sobre nuestra política de privacidad, contáctenos en KalyntFlow@protonmail.com.'
        ]
      }
    ],
    faqTitle: 'Preguntas frecuentes (Privacidad y datos)',
    faqs: [
      {
        q: '¿Se usan mis notas para entrenar modelos de IA?',
        a: 'No. Las solicitudes a Google Gemini se gestionan bajo acuerdos de privacidad para desarrolladores y no se usan para entrenamiento público.'
      },
      {
        q: '¿Puedo exportar mis datos antes de eliminar mi cuenta?',
        a: 'Sí. En la configuración de la app puede exportar todos sus espacios de trabajo y notas en formato Markdown/JSON.'
      },
      {
        q: '¿Kalynt Flow accede a mi ubicación o contactos?',
        a: 'No. La app no requiere ni solicita permisos de ubicación, contactos o micrófono.'
      }
    ]
  },

  deletion: {
    sections: [
      {
        id: 'del-commitment',
        title: '1. Compromiso de eliminación de datos',
        takeaway: 'Usted tiene control absoluto sobre sus datos y puede eliminar su cuenta en cualquier momento.',
        content: [
          'En estricto cumplimiento de las políticas de Google Play y leyes internacionales de privacidad (RGPD, CCPA), Kalynt Flow garantiza el derecho inmediato e incondicional a eliminar su cuenta y registros.'
        ]
      },
      {
        id: 'del-how-to',
        title: '2. Cómo eliminar su cuenta en la app (Paso a paso)',
        content: [
          'Puede eliminar su cuenta directamente desde su dispositivo Android en cuestión de segundos:'
        ],
        bullets: [
          'Paso 1: Abra Kalynt Flow en su dispositivo Android.',
          'Paso 2: Toque la pestaña "Ajustes" (icono de engranaje) en la barra inferior.',
          'Paso 3: Desplácese hasta la sección "Cuenta y seguridad".',
          'Paso 4: Toque el botón rojo "Eliminar cuenta y datos".',
          'Paso 5: Confirme la acción en el cuadro de diálogo.',
          'Resultado: Se borrará su base de datos local, su registro de Firebase Auth y todos sus documentos en Firestore.'
        ]
      },
      {
        id: 'del-table',
        title: '3. Matriz de eliminación de datos',
        content: [
          'A continuación se detalla el procedimiento de eliminación por tipo de dato:'
        ],
        table: {
          headers: ['Tipo de dato', 'Acción realizada', 'Tiempo de ejecución'],
          rows: [
            ['Registro de usuario en Firebase Auth', 'Eliminado permanentemente', 'Instantáneo (0 segundos)'],
            ['Tareas y notas en Cloud Firestore', 'Purgadas de la nube', 'Instantáneo (0 segundos)'],
            ['Membresías de espacios de trabajo', 'Removido de todos los canales', 'Instantáneo (0 segundos)'],
            ['Base de datos SQLite local', 'Borrada del dispositivo', 'Inmediato tras confirmación'],
            ['Token de acceso personal de GitHub', 'Borrado de Android Keystore', 'Inmediato tras confirmación']
          ]
        }
      }
    ],
    generator: {
      title: 'Generador de solicitud formal de eliminación',
      desc: 'Si ya no dispone de acceso a su dispositivo Android, puede generar y enviar su solicitud formal por correo:',
      emailLabel: 'Correo electrónico registrado en la cuenta:',
      emailPlaceholder: 'ej: usuario@ejemplo.es',
      scopeLabel: 'Alcance de la eliminación solicitada:',
      scopeAuth: 'Credenciales de autenticación y perfil de Firebase',
      scopeCloud: 'Tareas, notas y calendarios en Cloud Firestore',
      scopeWorkspaces: 'Membresías y mensajes en espacios compartidos',
      reasonLabel: 'Motivo de la eliminación (opcional):',
      reasonPlaceholder: 'ej: Cierre de cuenta / Ya no utilizo el servicio',
      previewTitle: 'Vista previa de la solicitud formal:',
      copyBtn: 'Copiar texto de la solicitud',
      sendEmailBtn: 'Abrir en aplicación de correo',
      emailSubject: 'SOLICITUD DE ELIMINACIÓN DE CUENTA Y DATOS — Kalynt Flow'
    },
    faqTitle: 'Preguntas frecuentes (Eliminación de cuenta)',
    faqs: [
      {
        q: '¿Se puede recuperar una cuenta eliminada?',
        a: 'No. Por motivos de privacidad y seguridad, la eliminación es inmediata, definitiva e irreversible.'
      },
      {
        q: '¿Eliminar mi cuenta cancela mi suscripción de Google Play?',
        a: 'Las suscripciones de Google Play son gestionadas directamente por Google. Por favor, cancele su suscripción activa en la tienda Google Play antes de eliminar su cuenta.'
      }
    ]
  },

  footer: {
    brandSubtitle: 'Portal oficial de términos legales, condiciones de servicio y privacidad',
    rights: 'Todos los derechos reservados. Android y Google Play son marcas comerciales de Google LLC.',
    termsLink: 'Términos de servicio',
    privacyLink: 'Política de privacidad',
    deletionLink: 'Eliminar cuenta',
    contactSupport: 'Contacto: KalyntFlow@protonmail.com'
  }
};
