import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { StoresRoutingModule } from './stores-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { HeaderComponent } from './layout/header/header.component';
import { AddCategorySidebarComponent } from './layout/add-category-sidebar/add-category-sidebar.component';
import { UploadBoxComponent } from '../../shared/upload-box/upload-box.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent,
    HeaderComponent,
    AddCategorySidebarComponent,
  ],
  imports: [
    CommonModule,
    StoresRoutingModule,
    UploadBoxComponent,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatMenuModule,
  ],
})
export class StoresModule {}
