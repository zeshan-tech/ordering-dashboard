import { Component, OnInit, inject } from '@angular/core';
import { LayoutService } from '../layout.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AllCategoriesResponse } from '../types';
import { UploadBoxComponent } from '../../../../shared/upload-box/upload-box.component';

@Component({
  selector: 'app-add-category-sidebar',
  templateUrl: './add-category-sidebar.component.html',
  styleUrl: './add-category-sidebar.component.scss',
})
export class AddCategorySidebarComponent implements OnInit {
  private _formBuilder: FormBuilder = inject(FormBuilder);
  public _layoutService: LayoutService = inject(LayoutService);
  public _uploadBoxComponent: UploadBoxComponent = inject(UploadBoxComponent);

  public isSubCategory: boolean = false;
  public allCategories: AllCategoriesResponse[] = [];
  categoryFormGroup!: FormGroup;

  ngOnInit(): void {
    this.categoryFormGroup = this._formBuilder.nonNullable.group({
      name: ['', [Validators.required]],
      description: [''],
      isSubCategory: [false],
      parentCategoryId: [''],
    });

    this._layoutService.onGetAllCategories().valueChanges.subscribe((res) => {
      this.allCategories = res.data.getAllCategories;
    });
  }

  addCategory(event: Event) {
    event.preventDefault();
    const values = this.categoryFormGroup.getRawValue();
    const imageUrl = this._uploadBoxComponent.imageUrl;

    this._layoutService
      .onAddCategory({
        name: values.name,
        imageUrl,
        parentCategory: values.parentCategoryId,
      })
      .subscribe((res) => {
        console.log(res);
      });
  }
}
