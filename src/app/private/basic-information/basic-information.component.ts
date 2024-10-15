import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrl: './basic-information.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicInformationComponent {
  readonly panelOpenState = signal(false);
}
