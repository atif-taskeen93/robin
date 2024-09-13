import { Component, Input } from '@angular/core';

import { Subscription } from 'rxjs';
import { HandlePublicNavigationService } from '../../services/handle-public-navigation/handle-public-navigation.service';
import { ScreenSizeService } from '../../services/screen-size/screen-size.service';

@Component({
  selector: 'app-public-header',
  templateUrl: './public-header.component.html',
  styleUrl: './public-header.component.scss',
})
export class PublicHeaderComponent {
  isLargeScreen: boolean = false;

  private subscriptions: Subscription = new Subscription();

  constructor(
    private handlePublicNavigationService: HandlePublicNavigationService,
    private screenSizeService: ScreenSizeService
  ) {}

  toggleMenu() {
    this.handlePublicNavigationService.toggle();
  }

  ngOnInit() {
    this.subscriptions.add(
      this.screenSizeService.isLargeScreen().subscribe((result) => {
        this.isLargeScreen = result.matches;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  @Input() heading: string = '';
}
