import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { LoadingService } from '../../services/loading/loading.service';

@Component({
  selector: 'app-patient-identity',
  templateUrl: './patient-identity.component.html',
  styleUrl: './patient-identity.component.scss',
})
export class PatientIdentityComponent {
  loading: boolean = false;
  accessDenied: boolean = false;
  limitExceed: boolean = false;
  descriptionContent: string = '';
  descriptionContentAccessDenied: string = `
    Please try again, you have entered invalid or incomplete information. You have
    <b>two attempts remaining</b> before access through this link will be locked.
  `;
  descriptionContentLimitExceed: string = `
    You have reached the maximum number of attempts allowed for accessing the requested patient forms. Please contact <a href="mailto:suppport@clientdomain.com" class="mail"
">suppport@clientdomain.com</a> for assistance.`;
  private subscriptions: Subscription = new Subscription();
  constructor(private router: Router, private loadingService: LoadingService) {}

  submitPatientInfo() {
    this.loadingService.show();
    setTimeout(() => {
      this.router.navigate(['/public/patient-forms']);
      this.loadingService.hide();
    }, 2000);
  }

  ngOnInit() {
    this.subscriptions.add(
      this.loadingService.getLoadingState().subscribe((state) => {
        this.loading = state;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
