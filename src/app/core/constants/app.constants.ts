export const PUBLIC_ROUTES = [
  {
    name: 'basic-information',
    title: 'Basic Information',
    path: '/public/basic-information',
  },
  {
    name: 'insurance-information',
    title: 'Insurance Information',
    path: '/public/insurance-information',
  },
  {
    name: 'medical-history',
    title: 'Medical History',
    path: '/public/medical-history',
  },
  {
    name: 'sexual-health',
    title: 'Sexual Health',
    path: '/public/sexual-health',
  },
];

export const PRIVATE_ROUTES = [
  {
    name: 'patients',
    title: 'Patients',
    icon: '/images/persons.png',
    path: '/patients/patients-summary/basic-information',
    submenu: [
      {
        name: 'patients-summary',
        title: 'Patients Summary',
        children: [
          {
            name: 'basic-information',
            title: 'Basic Information',
            path: '/patients/patients-summary/basic-information',
          },
          {
            name: 'treatment-provider',
            title: 'Treatment and Providers',
            path: '',
          },
          {
            name: 'encounter-summary',
            title: 'Encounter Summaries',
            path: '',
          },
          {
            name: 'testing-rubab-chart',
            title: 'Testing Rubab Chart',
            path: '',
          },
        ],
      },
      {
        name: 'patient-information',
        title: 'Patient Information',
        path: '/patients/patient-information',
        children: [],
      },
      {
        name: 'appointments',
        title: 'Appointments',
        path: '',
        children: [],
      },
      {
        name: 'consent-form',
        title: 'Consent Form',
        path: '',
        children: [],
      },
      {
        name: 'encounter',
        title: 'Encounter',
        path: '',
        children: [],
      },
    ],
  },
  {
    name: 'calendar',
    title: 'Calendar',
    icon: '/images/calendar.png',
    path: '/calendar',
    submenu: [],
  },
  {
    name: 'inbox',
    title: 'Inbox',
    icon: '/images/mail.png',
    path: '',
    submenu: [],
  },
  {
    name: 'settings',
    title: 'Settings',
    icon: '/images/settings.png',
    path: '',
    submenu: [],
  },
];

export const BLANK_PUBLIC_ROUTE = [
  'public/patient-identity',
  'public/patient-forms',
];

export const PATIENT_LIST_FORM = [
  {
    path: '/public/basic-information',
    title: 'Patient Registration',
    steps: 4,
    isCompleted: false,
  },
  {
    path: '',
    title: 'Medicare Copayment',
    steps: 4,
    isCompleted: false,
  },
  {
    path: '',
    title: 'Patient Admission and Consent',
    steps: 4,
    isCompleted: false,
  }
]