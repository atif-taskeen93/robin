import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface MenuChild {
  name: string;
  title: string;
  path: string;
}

interface MenuSubItem {
  name: string;
  title: string;
  path?: string;
  children?: MenuChild[]; // Optional, since it can be empty
}

interface MenuItem {
  active: boolean;
  name: string;
  title: string;
  icon: string;
  path?: string;
  submenu?: MenuSubItem[]; // Optional, since it can be empty
}

@Component({
  selector: 'app-private-layout',
  templateUrl: './private-layout.component.html',
  styleUrl: './private-layout.component.scss',
})
export class PrivateLayoutComponent {
  subMenuItems: MenuSubItem[] = [];
  isShowDrawer: boolean = false;
  isSubmenuExist: boolean = false;
  currentPath: string[] = [];
  panelOpenState: boolean = false;

  constructor(private router: Router) {}

  menuItems: MenuItem[] = [
    {
      active: false,
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
      active: false,
      name: 'calendar',
      title: 'Calendar',
      icon: '/images/calendar.png',
      path: '/calendar',
      submenu: [],
    },
    {
      active: false,
      name: 'inbox',
      title: 'Inbox',
      icon: '/images/mail.png',
      path: '',
      submenu: [],
    },
    {
      active: false,
      name: 'settings',
      title: 'Settings',
      icon: '/images/settings.png',
      path: '',
      submenu: [],
    },
  ];

  onMouseEnter(selectedMenu: string) {
    const checkSubMenuExist =
      this.menuItems.find((item) => item.name === selectedMenu)?.submenu
        ?.length === 0
        ? false
        : true;
    if (checkSubMenuExist) {
      this.subMenuItems =
        this.menuItems.find((item) => item.name === selectedMenu)?.submenu ??
        [];
    }
    this.isShowDrawer = true;
  }

  onMouseLeave() {
    this.isShowDrawer = false;
  }

  onClickMenu(menu: string) {
    this.menuItems = this.menuItems.map((item) => {
      return {
        ...item,
        active: item.name === menu ? true : false,
      };
    });
    const checkSubMenuExist =
      this.menuItems.find((item) => item.name === menu)?.submenu?.length === 0
        ? false
        : true;
    if (checkSubMenuExist) {
      this.isSubmenuExist = true;
    } else {
      this.isShowDrawer = false;
      this.subMenuItems = [];
      this.isSubmenuExist = false;
      this.panelOpenState = false;
    }
  }
  ngOnInit() {
    this.router.events.subscribe(() => {
      this.currentPath = this.router.url.slice(1)?.split('/');
      if (this.currentPath.length > 1) {
        this.isShowDrawer = true;
        this.isSubmenuExist = true;
        this.subMenuItems =
          this.menuItems.find((item) => item.name === this.currentPath[0])
            ?.submenu ?? [];
      } else {
        this.isShowDrawer = false;
        this.subMenuItems = [];
        this.isSubmenuExist = false;
        this.panelOpenState = false;
      }
    });
  }
  togglePanel(panel: any) {
    if (panel) {
      this.panelOpenState = true;
    }
  }
}
