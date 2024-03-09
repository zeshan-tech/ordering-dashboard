import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { LayoutService } from '../layout.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from '../../api.service';
import { AllCategoriesResponse } from '../../types';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-add-product-sidebar',
  templateUrl: './add-product-sidebar.component.html',
  styleUrl: './add-product-sidebar.component.scss',
})
export class AddProductSidebarComponent implements OnInit {
  public _apiService: ApiService = inject(ApiService);
  public _matSnackBar: MatSnackBar = inject(MatSnackBar);
  private _formBuilder: FormBuilder = inject(FormBuilder);
  public _layoutService: LayoutService = inject(LayoutService);

  @ViewChild('addProductSidebar') public storeSidebar!: MatDrawer;
  public allCategories: AllCategoriesResponse[] = [];
  public productFormGroup!: FormGroup;
  public newProductImageUrl: string = '';

  ngOnInit(): void {
    this.productFormGroup = this._formBuilder.nonNullable.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required]],
      categoryId: ['', [Validators.required]],
    });

    this._apiService.onGetAllCategories().valueChanges.subscribe((res) => {
      this.allCategories = res.data.getAllCategories;
    });

    this._layoutService.addProductSidebarSubject.subscribe(() => {
      this.storeSidebar.toggle();
    });
  }

  addProduct(event: Event) {
    event.preventDefault();
    const values = this.productFormGroup.getRawValue();

    this._apiService
      .onAddProduct({
        name: values.name,
        description: values.description,
        price: values.price,
        categoryId: values.categoryId,
      })
      .subscribe((res) => {
        console.log(res.errors);
        if (res.errors) {
          this._matSnackBar.open(res.errors?.join(', '));
        }
        if (res.data) this.clearForm();
      });
  }

  clearForm() {
    this.productFormGroup.reset();
    this.productFormGroup.clearValidators();
    this._layoutService.onAddProductSidebarToggle();
  }

  onImageUrlChange(imageUrl: string) {
    this.newProductImageUrl = imageUrl;
  }
}
