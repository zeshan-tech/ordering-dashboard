import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { CategoryListComponent } from './category-list/category-list.component';
import { ProductsComponent } from './products.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { ProductsTableComponent } from './products-table/products-table.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    CategoryListComponent,
    ProductsComponent,
    ProductsTableComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatCardModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatDividerModule,
    MatRippleModule,
    MatIconModule,
    MatDialogModule,
    MatSidenavModule,
    MatMenuModule,
    MatTableModule,
  ],
})
export class ProductsModule {}
