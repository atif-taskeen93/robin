import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insurance-information',
  templateUrl: './insurance-information.component.html',
  styleUrl: './insurance-information.component.scss',
})
export class InsuranceInformationComponent {
  constructor(private router: Router) {}

  onButtonClick() {
    this.router.navigate(['/public/medical-history']);
  }
}
