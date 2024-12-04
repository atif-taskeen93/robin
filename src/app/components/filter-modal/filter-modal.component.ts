/* eslint-disable */
import { Component, Output, EventEmitter, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  FILTER_CONFIG,
  FilterConfig,
} from '../../core/constants/app.constants';

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrl: './filter-modal.component.scss',
})
export class FilterModalComponent {
  isLoading = false;
  selectedLabel: any;
  checkAllSelected = true;
  result: any;
  selectedValue = '';
  // Declare okClicked as an EventEmitter
  @Output() okClicked = new EventEmitter<string | void>();
  @Output() cancelClicked = new EventEmitter<void>();

  constructor(
    public dialogRef: MatDialogRef<FilterModalComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      title: string;
      description: string;
      cancelBtnText: string;
      okBtnText: string;
      filterOptions: FilterConfig;
    }
  ) {}

  updateMultiSelectResult() {
    const id = this.selectedLabel.id;
    this.result = {
      ...this.result,
      [id]: this.selectedLabel?.options.filter((item: any) => item.selected),
    };
  }

  onSelectionChange(data: any) {
    const id = this.selectedLabel.id;
    this.selectedValue = data.value;
    this.result = {
      ...this.result,
      [id]: data.value,
    };
  }

  toggleCheckAll() {
    this.selectedLabel.options.forEach((item: any) => {
      item.selected = this.checkAllSelected;
    });
    this.updateMultiSelectResult();
  }

  // Update the state of "Check All" checkbox when any item is changed
  itemChanged() {
    const allItemsSelected = this.selectedLabel.options.every(
      (item: any) => item.selected
    );
    const someItemsSelected = this.selectedLabel.options.some(
      (item: any) => item.selected
    );

    if (allItemsSelected) {
      this.checkAllSelected = true;
    } else if (someItemsSelected) {
      this.checkAllSelected = false;
    } else {
      this.checkAllSelected = false;
    }
    this.updateMultiSelectResult();
  }

  // Optional: Handle partial select if needed (indeterminate state logic)
  isIndeterminate(): boolean {
    const selectedCount = this.selectedLabel.options.filter(
      (option: any) => option.selected
    ).length;
    return (
      selectedCount > 0 && selectedCount < this.selectedLabel.options.length
    );
  }

  handleSelectLabel(id: string) {
    const label = FILTER_CONFIG[id].filterType;
    // this.result = {
    //   ...this.result,
    //   ...(label === 'multi-select' && {
    //     [id]: this.selectedLabel?.options.filter((item: any) => item.selected),
    //   }),
    // };
    if (label === 'multi-select') {
      this.checkAllSelected = true;
    }
    this.selectedLabel = FILTER_CONFIG[id];
  }

  onOkClick(): void {
    // this.okClicked.emit();
    console.log(this.result);
  }

  onCloseClick(): void {
    this.cancelClicked.emit();
  }
}
