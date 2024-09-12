import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { ScreenSizeService } from '../../services/screen-size/screen-size.service';
import { HandlePublicNavigationService } from '../../services/handle-public-navigation/handle-public-navigation.service';
import { LoadingService } from '../../services/loading/loading.service';

import {
  PUBLIC_ROUTES,
  BLANK_PUBLIC_ROUTE,
} from '../../core/constants/app.constants';
import { ConfirmationDialogComponent } from '../../components/confirmation-dialog/confirmation-dialog.component';

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
  isLargeScreen: boolean = false;
  isNavOpen: boolean = false;
  dialogRef: MatDialogRef<ConfirmationDialogComponent> | undefined;
  loading: boolean = false;

  constructor(
    private router: Router,
    private screenSizeService: ScreenSizeService,
    private handlePublicNavigationService: HandlePublicNavigationService,
    private loadingService: LoadingService,
    public dialog: MatDialog
  ) {}

  menuClosed() {
    this.handlePublicNavigationService.toggle();
  }

  openDialog(): void {
    // Open the dialog and keep a reference to it
    this.dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '480px',
      data: {
        title: 'Unsaved changes',
        description: 'You have changes to your form that have not been saved or submitted.',
      }
    });

    // Listen for the `okClicked` event from the dialog component
    this.dialogRef.componentInstance.okClicked.subscribe((result) => {
      console.log('OK button was clicked');
      if (this.dialogRef) {
        this.dialogRef.componentInstance.isLoading = true
      }
      this.performAction();
    });
  }

  performAction(): void {
    setTimeout(() => {
      console.log('Action completed');
      if (this.dialogRef) {
        this.dialogRef.componentInstance.isLoading = false
        this.dialogRef.close();
      }
    }, 2000);
  }

  ngOnInit() {
    this.router.events.subscribe(() => {
      this.currentPath = this.router.url.slice(1)?.split('/');
      if (BLANK_PUBLIC_ROUTE.includes(this.currentPath.join('/'))) {
        this.showNavigation = false;
      } else {
        this.showNavigation = true;
      }
    });
    this.screenSizeService.isLargeScreen().subscribe((result) => {
      this.isLargeScreen = result.matches;
    });
    this.handlePublicNavigationService.getOpenState().subscribe((state) => {
      this.isNavOpen = state;
    });
    this.loadingService.getLoadingState().subscribe((state) => {
      this.loading = state;
    });
  }
}
