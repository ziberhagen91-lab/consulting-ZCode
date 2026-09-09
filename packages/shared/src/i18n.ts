export type Locale = 'uk' | 'en';

export const defaultLocale: Locale = 'uk';

export const translations = {
  uk: {
    common: {
      language: 'Мова',
      ukrainian: 'Українська',
      english: 'English',
    },

    nav: {
      dashboard: 'Головна',
      leads: 'Ліди',
      companies: 'Компанії',
      contacts: 'Контакти',
      activities: 'Активності',
      reports: 'Звіти',
      settings: 'Налаштування',
    },

    crm: {
      newLead: 'Новий лід',
      searchLeads: 'Пошук лідів...',
      totalLeads: 'Всього лідів',
      new: 'Нові',
      synced: 'Синхронізовані',
      failed: 'Помилки',
      name: 'Імʼя',
      company: 'Компанія',
      email: 'Email',
      message: 'Повідомлення',
      noCompany: 'Без компанії',
      edit: 'Редагувати',
      save: 'Зберегти',
      cancel: 'Скасувати',
      archive: 'Архівувати',
      back: 'Назад',
      status: 'Статус',
      flectraLeadId: 'Flectra Lead ID',
      checkApi: 'Перевірити API',
      checkFlectra: 'Перевірити Flectra',
      connected: 'Підключено',
      offline: 'Недоступно',
      checking: 'Перевірка...',
      noSyncedLeads: 'Немає синхронізованих лідів',
      apiError: 'Помилка API',
      created: 'Створено',
      updated: 'Оновлено',
      archiveConfirm: 'Ви впевнені, що хочете архівувати цей лід?',
      archived: 'Архівовано',
      all: 'Всі',
      noLeads: 'Лідів поки немає',
      loading: 'Завантаження...',
      error: 'Помилка',
      retry: 'Повторити',
      create: 'Створити',
      creating: 'Створення...',
      saving: 'Збереження...',
      editLead: 'Редагувати лід',
      newLeadTitle: 'Новий лід',
      leadDetails: 'Деталі ліда',
      createdAt: 'Створено',
      updatedAt: 'Оновлено',
      search: 'Пошук',
      clear: 'Очистити',
      dashboardTitle: 'Головна',
      dashboardDescription: 'Огляд вашої CRM-воронки',
      totalLeadsCard: 'Всього лідів',
      newLeadsCard: 'Нові ліди',
      contactsTitle: 'Контакти',
      contactsDescription: 'Контакти з ваших лідів',
      searchContacts: 'Пошук контактів...',
      lastLead: 'Останній лід',
      reportsTitle: 'Звіти',
      reportsDescription: 'Огляд ефективності CRM',
      topCompanies: 'Топ компаній',
      leadsCount: 'лідів',
      settingsTitle: 'Налаштування',
      settingsDescription: 'Конфігурація CRM та системна інформація',
      system: 'Система',
      leadSynchronization: 'Синхронізація лідів',
      flectraViaWorker: 'Flectra через Outbox Worker',
      pipeline: 'Воронка',
      leadsCountShort: 'лідів',
      createLead: 'Створити лід',
      createNewLead: 'Створити новий лід',
      updateLead: 'Оновити інформацію про лід',
      saveChanges: 'Зберегти зміни',
      messageMin: 'Повідомлення (мін. 10 символів)',
      notSynced: 'Не синхронізовано',
      unexpectedResponse: 'Неочікувана відповідь API',
      failedLoad: 'Не вдалося завантажити ліди',
      failedCreate: 'Не вдалося створити лід',
      failedUpdate: 'Не вдалося оновити лід',
      failedArchive: 'Не вдалося архівувати лід',
      leadUpdated: 'Лід оновлено',
      leadCreated: 'Лід створено',
      newStatus: 'Нові',
      syncedStatus: 'Синхронізовані',
      failedStatus: 'Помилки',
      nameUpper: 'ІМʼЯ',
      emailUpper: 'EMAIL',
      companyUpper: 'КОМПАНІЯ',
      lastLeadUpper: 'ОСТАННІЙ ЛІД',
      statusUpper: 'СТАТУС',
      flectraIdUpper: 'FLECTRA LEAD ID',
      messageUpper: 'ПОВІДОМЛЕННЯ',
      adminUser: 'Admin User',
    },

    website: {
      consultingPlatform: 'Консалтингова платформа',
      features: 'Можливості',
      pricing: 'Рішення',
      contact: 'Контакти',
      language: 'Мова',
      signIn: 'Увійти',
      signUp: 'Зареєструватися',

      heroTitle: 'Платформа для сучасного консалтингу',
      heroDescription:
        'Сучасна платформа для консультантів і бізнесу, яка допомагає керувати клієнтами, проєктами, завданнями та аналітикою в одному місці.',

      startConversation: 'Почати розмову',
      explorePlatform: 'Переглянути платформу',

      secureReliable: 'Безпечно та надійно',
      builtForTeams: 'Створено для команд',
      dataDriven: 'На основі даних',

      dashboard: 'Панель керування',
      overview: 'Огляд',

      revenueAnalytics: 'Аналітика доходів',
      projectProgress: 'Прогрес проєктів',
      recentActivity: 'Остання активність',
      viewAll: 'Переглянути все',

      newClientAdded: 'Додано нового клієнта',
      projectMilestoneCompleted: 'Завершено етап проєкту',
      taskAssigned: 'Завдання призначено команді',

      everythingInOnePlace: 'Усе в одному місці',
      featuresTitle:
        'Створено відповідно до потреб сучасних консалтингових команд.',

      clientManagement: 'Керування клієнтами',
      clientManagementText:
        'Зберігайте інформацію про клієнтів, комунікацію та активність організовано в одному місці.',

      projectVisibility: 'Прозорість проєктів',
      projectVisibilityText:
        'Відстежуйте проєкти, дедлайни та прогрес, не втрачаючи загальної картини.',

      dataDrivenDecisions: 'Рішення на основі даних',
      dataDrivenDecisionsText:
        'Перетворюйте операційні дані на зрозумілі інсайти для кращих консалтингових рішень.',

      readyToGetStarted: 'Готові розпочати?',
      pricingTitle:
        'Перетворіть консалтинговий процес на єдину платформу.',
      pricingDescription:
        'Об’єднайте клієнтів, проєкти, операції та CRM у практичній консалтинговій платформі.',

      contactUs: 'Зв’яжіться з нами',
      contactDescription:
        'Коротко розкажіть, з чим вам потрібна допомога. Ми зрозуміємо завдання та запропонуємо практичні наступні кроки.',

      practicalApproach: 'Практичний підхід',
      practicalApproachText:
        'Зрозумілі рішення, побудовані навколо реальних потреб вашого бізнесу.',

      connectedPlatform: 'Єдина платформа',
      connectedPlatformText:
        'Консалтинговий процес, підключений до CRM-операцій.',

      startConversationTitle: 'Почнемо розмову',
      startConversationDescription:
        'Надішліть свої контакти та коротко опишіть завдання.',

      backToHome: 'На головну',
    },
  },

  en: {
    common: {
      language: 'Language',
      ukrainian: 'Українська',
      english: 'English',
    },

    nav: {
      dashboard: 'Dashboard',
      leads: 'Leads',
      companies: 'Companies',
      contacts: 'Contacts',
      activities: 'Activities',
      reports: 'Reports',
      settings: 'Settings',
    },

    crm: {
      newLead: 'New Lead',
      searchLeads: 'Search leads...',
      totalLeads: 'Total Leads',
      new: 'New',
      synced: 'Synced',
      failed: 'Failed',
      name: 'Name',
      company: 'Company',
      email: 'Email',
      message: 'Message',
      noCompany: 'No company',
      edit: 'Edit',
      save: 'Save',
      cancel: 'Cancel',
      archive: 'Archive',
      back: 'Back',
      status: 'Status',
      flectraLeadId: 'Flectra Lead ID',
      checkApi: 'Check API',
      checkFlectra: 'Check Flectra',
      connected: 'Connected',
      offline: 'Offline',
      checking: 'Checking...',
      noSyncedLeads: 'No synced leads',
      apiError: 'API error',
      created: 'Created',
      updated: 'Updated',
      archiveConfirm: 'Are you sure you want to archive this lead?',
      archived: 'Archived',
      all: 'All',
      noLeads: 'No leads yet',
      loading: 'Loading...',
      error: 'Error',
      retry: 'Retry',
      create: 'Create',
      creating: 'Creating...',
      saving: 'Saving...',
      editLead: 'Edit lead',
      newLeadTitle: 'New lead',
      leadDetails: 'Lead details',
      createdAt: 'Created',
      updatedAt: 'Updated',
      search: 'Search',
      clear: 'Clear',
      dashboardTitle: 'Dashboard',
      dashboardDescription: 'Overview of your CRM pipeline',
      totalLeadsCard: 'Total Leads',
      newLeadsCard: 'New Leads',
      contactsTitle: 'Contacts',
      contactsDescription: 'Contacts from your leads',
      searchContacts: 'Search contacts...',
      lastLead: 'Last Lead',
      reportsTitle: 'Reports',
      reportsDescription: 'CRM performance overview',
      topCompanies: 'Top Companies',
      leadsCount: 'leads',
      settingsTitle: 'Settings',
      settingsDescription: 'CRM configuration and system information',
      system: 'System',
      leadSynchronization: 'Lead synchronization',
      flectraViaWorker: 'Flectra via Outbox Worker',
      pipeline: 'Pipeline',
      leadsCountShort: 'leads',
      createLead: 'Create Lead',
      createNewLead: 'Create a new lead',
      updateLead: 'Update lead information',
      saveChanges: 'Save Changes',
      messageMin: 'Message (min. 10 characters)',
      notSynced: 'Not synced',
      unexpectedResponse: 'Unexpected API response',
      failedLoad: 'Failed to load leads',
      failedCreate: 'Failed to create lead',
      failedUpdate: 'Failed to update lead',
      failedArchive: 'Failed to archive lead',
      leadUpdated: 'Lead updated',
      leadCreated: 'Lead created',
      newStatus: 'New',
      syncedStatus: 'Synced',
      failedStatus: 'Failed',
      nameUpper: 'NAME',
      emailUpper: 'EMAIL',
      companyUpper: 'COMPANY',
      lastLeadUpper: 'LAST LEAD',
      statusUpper: 'STATUS',
      flectraIdUpper: 'FLECTRA LEAD ID',
      messageUpper: 'MESSAGE',
      adminUser: 'Admin User',
    },

    website: {
      consultingPlatform: 'Consulting platform',
      features: 'Features',
      pricing: 'Solutions',
      contact: 'Contact',
      language: 'Language',
      signIn: 'Sign In',
      signUp: 'Sign Up',

      heroTitle: 'Platform for modern consulting',
      heroDescription:
        'A modern platform for consultants and businesses to manage clients, projects, tasks and insights in one place.',

      startConversation: 'Start a conversation',
      explorePlatform: 'Explore platform',

      secureReliable: 'Secure & reliable',
      builtForTeams: 'Built for teams',
      dataDriven: 'Data driven',

      dashboard: 'Dashboard',
      overview: 'Overview',

      revenueAnalytics: 'Revenue Analytics',
      projectProgress: 'Project Progress',
      recentActivity: 'Recent activity',
      viewAll: 'View all',

      newClientAdded: 'New client added',
      projectMilestoneCompleted: 'Project milestone completed',
      taskAssigned: 'Task assigned to team',

      everythingInOnePlace: 'Everything in one place',
      featuresTitle:
        'Built around the way modern consulting teams work.',

      clientManagement: 'Client management',
      clientManagementText:
        'Keep client information, communication and activity organized in one place.',

      projectVisibility: 'Project visibility',
      projectVisibilityText:
        'Track projects, deadlines and progress without losing sight of the bigger picture.',

      dataDrivenDecisions: 'Data-driven decisions',
      dataDrivenDecisionsText:
        'Turn operational data into clear insights for better consulting decisions.',

      readyToGetStarted: 'Ready to get started?',
      pricingTitle:
        'Turn your consulting workflow into a connected platform.',
      pricingDescription:
        'Bring clients, projects, operations and CRM together with a practical consulting platform.',

      contactUs: 'Contact us',
      contactDescription:
        'Tell us briefly what you need help with. We’ll understand the challenge and get back to you with practical next steps.',

      practicalApproach: 'Practical approach',
      practicalApproachText:
        'Clear solutions built around your actual business needs.',

      connectedPlatform: 'Connected platform',
      connectedPlatformText:
        'Consulting workflow connected with CRM operations.',

      startConversationTitle: 'Start a conversation',
      startConversationDescription:
        'Send us your details and a short description of your challenge.',

      backToHome: 'Back to home',
    },
  },
} as const;

export type Translations = (typeof translations)[Locale];

export function getTranslations(locale: Locale): Translations {
  return translations[locale];
}