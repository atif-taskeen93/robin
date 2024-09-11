import { Component } from '@angular/core';

@Component({
  selector: 'app-sexual-health',
  templateUrl: './sexual-health.component.html',
  styleUrl: './sexual-health.component.scss'
})
export class SexualHealthComponent {
  onButtonClick() {
    console.log('Button Clicked');
  }
}
