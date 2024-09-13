import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medical-history',
  templateUrl: './medical-history.component.html',
  styleUrl: './medical-history.component.scss',
})
export class MedicalHistoryComponent {
  constructor(private router: Router) {}

  onButtonClick() {
    this.router.navigate(['/public/sexual-health']);
  }
}
