import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { PUBLIC_ROUTES, BLANK_PUBLIC_ROUTE } from '../../core/constants/app.constants';

interface MenuItem {
  name: string;
  title: string;
  path: string;
}

@Component({
  selector: 'app-public-layout',
  templateUrl: './public-layout.component.html',
  styleUrl: './public-layout.component.scss',
})
export class PublicLayoutComponent {
  routes: MenuItem[] = PUBLIC_ROUTES;
  currentPath: string[] = [];
  showNavigation: boolean = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(() => {
      this.currentPath = this.router.url.slice(1)?.split('/');
      if (BLANK_PUBLIC_ROUTE.includes(this.currentPath.join('/'))) {
        this.showNavigation = false;
      } else {
        this.showNavigation = true;
      }
    });
  }
}
