import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PRIVATE_ROUTES } from '../../core/constants/app.constants';

import { Subscription } from 'rxjs';

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

  private subscriptions: Subscription = new Subscription();

  constructor(private router: Router) {}

  menuItems: MenuItem[] = PRIVATE_ROUTES

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

  togglePanel(panel: any) {
    if (panel) {
      this.panelOpenState = true;
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
      }
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
