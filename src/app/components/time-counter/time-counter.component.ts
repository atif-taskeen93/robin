import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-time-counter',
  templateUrl: './time-counter.component.html',
  styleUrl: './time-counter.component.scss',
})
export class TimeCounterComponent {
  @Input() buttonText: string = '';
  @Input() buttonAction: () => void = () => {};
  @Input() disabledSaveProgress: boolean = false;
  @Input() loadingState: boolean = false;
}
