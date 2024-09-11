import { Injectable } from '@angular/core';
import {
  BreakpointObserver,
  BreakpointState,
} from '@angular/cdk/layout';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScreenSizeService {
  constructor(private breakpointObserver: BreakpointObserver) {}

  // Method to check if the screen size is Small or XSmall
  isSmallScreen(): Observable<BreakpointState> {
    return this.breakpointObserver.observe(['(max-width: 768px)']);
  }

  // Method to check for specific custom breakpoints (e.g. 768px max width)
  isMediumScreen(): Observable<BreakpointState> {
    return this.breakpointObserver.observe(['(max-width: 992px)']);
  }

  // Add other methods to check for medium, large, or specific breakpoints as needed
  isLargeScreen(): Observable<BreakpointState> {
    return this.breakpointObserver.observe(['(max-width: 1268px)']);
  }
}
