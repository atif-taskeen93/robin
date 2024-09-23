import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class ToastMessageService {
  constructor(private toastBar: MatSnackBar) {}

  // Success message
  showSuccess(message: string) {
    this.toastBar.open(message, '✖', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
      panelClass: ['toastBar-success'],
    });
  }

  // Error message
  showError(message: string) {
    this.toastBar.open(message, '✖', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
      panelClass: ['toastBar-error'],
    });
  }

  // Warning message
  showWarning(message: string) {
    this.toastBar.open(message, '✖', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
      panelClass: ['toastBar-warning'],
    });
  }
}
