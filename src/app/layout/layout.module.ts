import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppbarComponent } from './appbar/appbar.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MenuComponent } from './appbar/menu/menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutComponent } from './layout.component';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [AppbarComponent, MenuComponent, SidebarComponent, LayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatDividerModule,
    MatSidenavModule
  ],
})
export class LayoutModule {}
