import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HandlePublicNavigationService {
  private isOpenSubject = new BehaviorSubject<boolean>(false);
  isOpen$ = this.isOpenSubject.asObservable();

  toggle() {
    this.isOpenSubject.next(!this.isOpenSubject.value);
  }

  setOpenState(state: boolean) {
    this.isOpenSubject.next(state);
  }

  getOpenState() {
    return this.isOpenSubject.asObservable();
  }
}
