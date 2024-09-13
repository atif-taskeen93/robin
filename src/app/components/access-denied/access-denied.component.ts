import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-access-denied',
  templateUrl: './access-denied.component.html',
  styleUrl: './access-denied.component.scss'
})
export class AccessDeniedComponent {
  @Input() description: string = '';
  @Input() showButton: boolean = false;
}
