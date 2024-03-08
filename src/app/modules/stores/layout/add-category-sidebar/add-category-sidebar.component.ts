import { Component, OnInit, inject } from '@angular/core';
import { LayoutService } from '../layout.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from '../../api.service';
import { AllCategoriesResponse } from '../../types';

@Component({
  selector: 'app-add-category-sidebar',
  templateUrl: './add-category-sidebar.component.html',
  styleUrl: './add-category-sidebar.component.scss',
})
export class AddCategorySidebarComponent implements OnInit {
  public _snackBar: MatSnackBar = inject(MatSnackBar);
  private _formBuilder: FormBuilder = inject(FormBuilder);
  public _layoutService: LayoutService = inject(LayoutService);
  public _apiService: ApiService = inject(ApiService);

  public allCategories: AllCategoriesResponse[] = [];
  categoryFormGroup!: FormGroup;
  public isSubCategory: boolean = false;
  public newCategoryImageUrl: string = '';

  ngOnInit(): void {
    this.categoryFormGroup = this._formBuilder.nonNullable.group({
      name: ['', [Validators.required]],
      description: [''],
      isSubCategory: [false],
      parentCategoryId: [''],
    });

    this._apiService.onGetAllCategories().valueChanges.subscribe((res) => {
      this.allCategories = res.data.getAllCategories;
    });
  }

  addCategory(event: Event) {
    event.preventDefault();
    const values = this.categoryFormGroup.getRawValue();

    this._apiService
      .onAddCategory({
        name: values.name,
        imageUrl: this.newCategoryImageUrl,
        parentCategory: values.parentCategoryId,
      })
      .subscribe((res) => {
        console.log(res.errors);
        if (res.errors) {
          this._snackBar.open(res.errors?.join(', '));
        }
        if (res.data) this._layoutService.onAddCategorySidebarToggle();
      });
  }

  onImageUrlChange(imageUrl: string) {
    this.newCategoryImageUrl = imageUrl;
  }
}
