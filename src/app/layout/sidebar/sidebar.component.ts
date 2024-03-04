import { Component } from '@angular/core';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  isOpened: boolean = false;

  constructor(private _layoutService: LayoutService) {}

  ngOnInit() {
    this._layoutService.isSidebarOpened.subscribe(
      (isSidebarOpened) => (this.isOpened = isSidebarOpened)
    );
  }

  toggleSidebar() {
    this._layoutService.toggle()
  }
}
