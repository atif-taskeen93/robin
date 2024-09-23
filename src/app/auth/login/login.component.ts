import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { LoadingService } from '../../services/loading/loading.service';
import { handleRedirection } from '../../core/utils/app.helpers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  loading = false;

  private subscriptions: Subscription = new Subscription();

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private loadingService: LoadingService
  ) {
    // Initialize form group with form controls and validators
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.loadingService.show();
    if (this.loginForm.valid) {
      const credentials = this.loginForm.value;
      this.subscriptions.add(
        this.authService.login(credentials).subscribe({
          next: (response) => {
            if (response) {
              localStorage.setItem('authData', JSON.stringify(response));
              const path = handleRedirection();
              this.router.navigate([`/${path}`]);
            }
          },
          error: (error) => {
            console.error('Login failed:', error);
          },
          complete: () => {
            this.loadingService.hide();
          },
        })
      );
    }
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
