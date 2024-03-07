import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  isAddCategorySidebarOpen = new BehaviorSubject<boolean>(false);

  onAddCategorySidebarToggle() {
    this.isAddCategorySidebarOpen.next(!this.isAddCategorySidebarOpen.value);
  }
}
