import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    return this.checkUserRole(route);
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot): boolean {
    return this.checkUserRole(childRoute);
  }

  private checkUserRole(route: ActivatedRouteSnapshot): boolean {
    const expectedRoles = route.data['expectedRoles'];

    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/login']);
      return false;
    }

    if (expectedRoles && expectedRoles.length > 0) {
      const userRoles = this.authService.getUserRoles();

      const hasAccess = expectedRoles.includes(userRoles);

      if (!hasAccess) {
        this.router.navigate(['/unauthorized']);
        return false;
      }
    }

    return true;
  }
}
