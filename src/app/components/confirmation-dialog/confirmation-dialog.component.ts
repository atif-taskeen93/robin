import { Component, Output, EventEmitter, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrl: './confirmation-dialog.component.scss',
})
export class ConfirmationDialogComponent {
  isLoading = false;
  inputValue = '';
  // Declare okClicked as an EventEmitter
  @Output() okClicked = new EventEmitter<string | void>();
  @Output() cancelClicked = new EventEmitter<void>();

  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      title: string;
      description: string;
      cancelBtnText: string;
      okBtnText: string;
      showInputField?: boolean;
      label?: string;
      placeholder?: string;
    }
  ) {}
  onOkClick(): void {
    if (this.data.showInputField) {
      this.okClicked.emit(this.inputValue);
    } else {
      this.okClicked.emit();
    }
  }

  onCloseClick(): void {
    this.cancelClicked.emit();
  }
}
