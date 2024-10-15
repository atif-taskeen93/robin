import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-accordion',
  templateUrl: './task-accordion.component.html',
  styleUrl: './task-accordion.component.scss',
})
export class TaskAccordionComponent {
  @Input() title = '';
  @Input() count = 0;
}
