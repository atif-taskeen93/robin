import { Component } from '@angular/core';

import { HandlePublicNavigationService } from '../../services/handle-public-navigation.service';

@Component({
  selector: 'app-public-header',
  templateUrl: './public-header.component.html',
  styleUrl: './public-header.component.scss',
})
export class PublicHeaderComponent {
  constructor(
    private handlePublicNavigationService: HandlePublicNavigationService
  ) {}

  toggleMenu() {
    this.handlePublicNavigationService.toggle();
  }
}
