import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { ScreenSizeService } from '../../services/screen-size/screen-size.service';
import { LoadingService } from '../../services/loading/loading.service';

@Component({
  selector: 'app-basic-information',
  templateUrl: './basic-information.component.html',
  styleUrl: './basic-information.component.scss',
})
export class BasicInformationComponent {
  col: number = 3;
  loading: boolean = false;

  private subscriptions: Subscription = new Subscription();

  constructor(
    private router: Router,
    private screenSizeService: ScreenSizeService,
    private loadingService: LoadingService,
  ) {}

  onButtonClick() {
    this.loadingService.show()
    setTimeout(() => {
      this.router.navigate(['/public/insurance-information']);
      this.loadingService.hide()
    }, 2000)
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

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
