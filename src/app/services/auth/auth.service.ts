import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserRole } from '../../core/utils/app.enum';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  // Method to handle login
  login(credentials: { email: string; password: string }): Observable<object> {
    return this.http.post(`${this.apiUrl}/api/Token`, credentials);
  }

  // Method to check if the user is authenticated
  isAuthenticated(): boolean {
    const storedAuthData = localStorage.getItem('authData');
    const parsedAuthData = storedAuthData && JSON.parse(storedAuthData);
    return !!parsedAuthData?.user?.Role;
  }

  // Method to get user roles
  getUserRoles(): string {
    return UserRole.ADMIN;
  }
}
