import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  public sidebarToggleSubject: BehaviorSubject<any> = new BehaviorSubject(null);

  public toggle() {
    return this.sidebarToggleSubject.next(null);
  }
}
