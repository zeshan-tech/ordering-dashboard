import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AddCategorySidebarComponent } from './layout/add-category-sidebar/add-category-sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ProductsComponent } from './products.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { UploadBoxComponent } from '../../../shared/upload-box/upload-box.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    CategoryListComponent,
    AddCategorySidebarComponent,
    ProductsComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatMenuModule,
    UploadBoxComponent,
  ],
})
export class ProductsModule {}
