import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  isSidebarOpened = new BehaviorSubject<boolean>(false);

  toggle() {
    this.isSidebarOpened.next(!this.isSidebarOpened.value);
  }
}
