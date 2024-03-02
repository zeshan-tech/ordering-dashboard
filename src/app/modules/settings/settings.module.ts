import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [LayoutComponent, SidebarComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
  ],
})
export class SettingsModule {}
