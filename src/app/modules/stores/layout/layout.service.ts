import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  isAddCategorySidebarOpen = new BehaviorSubject<boolean>(false);
  isSidebarOpen = new BehaviorSubject<boolean>(false);

  onAddCategorySidebarToggle() {
    this.isAddCategorySidebarOpen.next(!this.isAddCategorySidebarOpen.value);
  }

  onSidebarToggle() {
    this.isSidebarOpen.next(!this.isSidebarOpen.value);
  }
}
