import { Component, Output, EventEmitter, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrl: './confirmation-dialog.component.scss',
})
export class ConfirmationDialogComponent {
  isLoading: boolean = false;
  // Declare okClicked as an EventEmitter
  @Output() okClicked = new EventEmitter<void>();

  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string; description: string }
  ) {}
  onOkClick(): void {
    this.okClicked.emit();
  }

  onCloseClick(): void {
    this.dialogRef.close(false);
  }
}
