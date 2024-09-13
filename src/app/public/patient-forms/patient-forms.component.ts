import { Component } from '@angular/core';
import { PATIENT_LIST_FORM } from '../../core/constants/app.constants';

interface list {
  path: string;
  title: string;
  steps: number;
  isCompleted: boolean;
}

@Component({
  selector: 'app-patient-forms',
  templateUrl: './patient-forms.component.html',
  styleUrl: './patient-forms.component.scss',
})
export class PatientFormsComponent {
  todoList: list[] = PATIENT_LIST_FORM.filter((item) => !item.isCompleted);
  completeList: list[] = PATIENT_LIST_FORM.filter((item) => item.isCompleted);
}
