import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  public addCategorySidebarSubject: BehaviorSubject<any> = new BehaviorSubject(null);
  public addProductSidebarSubject: BehaviorSubject<any> = new BehaviorSubject(null);
  public storeSidebarSubject: BehaviorSubject<any> = new BehaviorSubject(null);

  onAddCategorySidebarToggle() {
    this.addCategorySidebarSubject.next(null);
  }

  onAddProductSidebarToggle() {
    this.addProductSidebarSubject.next(null);
  }

  onStoreSidebarToggle() {
    this.storeSidebarSubject.next(null);
  }
}
