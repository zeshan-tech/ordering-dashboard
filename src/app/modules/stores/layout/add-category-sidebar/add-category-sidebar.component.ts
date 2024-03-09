import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { LayoutService } from '../layout.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from '../../api.service';
import { AllCategoriesResponse } from '../../types';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-add-category-sidebar',
  templateUrl: './add-category-sidebar.component.html',
  styleUrl: './add-category-sidebar.component.scss',
})
export class AddCategorySidebarComponent implements OnInit {
  public _apiService: ApiService = inject(ApiService);
  public _matSnackBar: MatSnackBar = inject(MatSnackBar);
  private _formBuilder: FormBuilder = inject(FormBuilder);
  public _layoutService: LayoutService = inject(LayoutService);

  @ViewChild('addCategorySidebar') public storeSidebar!: MatDrawer;
  public allCategories: AllCategoriesResponse[] = [];
  public categoryFormGroup!: FormGroup;
  public isSubCategory = new FormControl(false);
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

    this._layoutService.addCategorySidebarSubject.subscribe(() => {
      this.storeSidebar.toggle();
    });
  }

  addCategory(event: Event) {
    event.preventDefault();
    const values = this.categoryFormGroup.getRawValue();

    this._apiService
      .onAddCategory({
        name: values.name,
        imageUrl: this.newCategoryImageUrl,
        parentCategory: this.isSubCategory.value ? values.parentCategoryId : '',
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
    this.categoryFormGroup.reset();
    this.categoryFormGroup.clearValidators();
    this._layoutService.onAddCategorySidebarToggle();
  }

  onImageUrlChange(imageUrl: string) {
    this.newCategoryImageUrl = imageUrl;
  }
}
