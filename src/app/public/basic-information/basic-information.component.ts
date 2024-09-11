import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrl: './basic-information.component.scss',
})
export class BasicInformationComponent {
  constructor(private router: Router) {}

  onButtonClick() {
    this.router.navigate(['/public/insurance-information']);
  }
}
