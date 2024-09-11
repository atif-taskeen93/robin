import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { PUBLIC_ROUTES } from '../../core/constants/app.constants';

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

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(() => {
      this.currentPath = this.router.url.slice(1)?.split('/');
    });
  }
}
