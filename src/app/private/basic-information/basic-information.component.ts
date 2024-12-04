import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FilterModalComponent } from '../../components/filter-modal/filter-modal.component';
import { FILTER_CONFIG } from '../../core/constants/app.constants';

@Component({
  selector: 'app-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrl: './basic-information.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicInformationComponent {
  readonly panelOpenState = signal(false);
  dialogRef: MatDialogRef<FilterModalComponent> | undefined;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    // Open the dialog and keep a reference to it
    this.dialogRef = this.dialog.open(FilterModalComponent, {
      width: '688px',
      data: {
        title: 'Filter',
        description: 'Customize filters to adjust the table’s data.',
        cancelBtnText: 'Cancel',
        okBtnText: 'Apply Filter',
        filterOptions: FILTER_CONFIG,
      },
    });
  }
}
