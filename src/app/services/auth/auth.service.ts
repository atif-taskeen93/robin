import { Injectable } from '@angular/core';
import { UserRole } from '../../core/utils/app.enum';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Method to check if the user is authenticated
  isAuthenticated(): boolean {
    //return !!localStorage.getItem('token');
    return true;
  }

  // Example method to get user roles
  getUserRoles(): string {
    return UserRole.ADMIN;
  }
}
