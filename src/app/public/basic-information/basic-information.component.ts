import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ScreenSizeService } from '../../services/screen-size/screen-size.service';

@Component({
  selector: 'app-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrl: './basic-information.component.scss',
})
export class BasicInformationComponent {
  col: number = 3;

  constructor(
    private router: Router,
    private screenSizeService: ScreenSizeService
  ) {}

  onButtonClick() {
    this.router.navigate(['/public/insurance-information']);
  }

  ngOnInit() {
    this.screenSizeService.isSmallScreen().subscribe((result) => {
      if (result.matches) {
        this.col = 1;
      } else {
        this.col = 3;
      }
    });
  }
}
