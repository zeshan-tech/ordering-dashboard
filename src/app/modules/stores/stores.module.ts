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
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { UploadBoxModule } from '../../shared/upload-box/upload-box.module';

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
    FormsModule,
    UploadBoxModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatSelectModule,
  ],
})
export class StoresModule {}
