import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-identity',
  templateUrl: './patient-identity.component.html',
  styleUrl: './patient-identity.component.scss'
})
export class PatientIdentityComponent {
  constructor(private router: Router) {}

  submitPatientInfo() {
    this.router.navigate(['/public/patient-forms']);
  }
}
