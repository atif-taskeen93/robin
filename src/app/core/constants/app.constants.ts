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
    icon: '/images/persons.svg',
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
            toAccess: ['admin', 'patient'],
          },
          {
            name: 'treatment-provider',
            title: 'Treatment and Providers',
            path: '',
            toAccess: ['admin', 'patient'],
          },
          {
            name: 'encounter-summary',
            title: 'Encounter Summaries',
            path: '',
            toAccess: ['admin', 'patient'],
          },
          {
            name: 'testing-rubab-chart',
            title: 'Testing Rubab Chart',
            path: '',
            toAccess: ['admin', 'patient'],
          },
        ],
        toAccess: ['admin', 'patient'],
      },
      {
        name: 'patient-information',
        title: 'Patient Information',
        path: '/patients/patient-information',
        children: [],
        toAccess: ['admin', 'patient'],
      },
      {
        name: 'appointments',
        title: 'Appointments',
        path: '',
        children: [],
        toAccess: ['admin', 'patient'],
      },
      {
        name: 'consent-form',
        title: 'Consent Form',
        path: '',
        children: [],
        toAccess: ['admin', 'patient'],
      },
      {
        name: 'encounter',
        title: 'Encounter',
        path: '',
        children: [],
        toAccess: ['admin', 'patient'],
      },
    ],
    toAccess: ['admin', 'patient'],
  },
  {
    name: 'calendar',
    title: 'Calendar',
    icon: '/images/calendar.svg',
    path: '/calendar',
    submenu: [],
    toAccess: ['admin', 'patient'],
  },
  {
    name: 'inbox',
    title: 'Inbox',
    icon: '/images/mail.svg',
    path: '',
    submenu: [],
    toAccess: ['admin', 'patient'],
  },
  {
    name: 'settings',
    title: 'Settings',
    icon: '/images/settings.svg',
    path: '',
    submenu: [],
    toAccess: ['admin', 'patient'],
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
  },
];
