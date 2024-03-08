import { Component, ViewChild } from '@angular/core';
import { LayoutService } from '../layout.service';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  @ViewChild('rootSidebar') public sidebav!: MatDrawer;

  constructor(private _layoutService: LayoutService) {}

  ngOnInit() {
    this._layoutService.sidebarToggleSubject.subscribe(() => {
      this.sidebav.toggle();
    });
  }
}
