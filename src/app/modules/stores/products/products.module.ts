import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { CategoryListComponent } from './category-list/category-list.component';
import { ProductsComponent } from './products.component';

@NgModule({
  declarations: [CategoryListComponent, ProductsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
  ],
})
export class ProductsModule {}
