import { Component, inject } from '@angular/core';
import { AllCategoriesResponse } from '../../types';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent {
  public _apiService: ApiService = inject(ApiService);
  public allCategories: AllCategoriesResponse[] = [];

  ngOnInit(): void {
    this.fetchCategories();
  }

  fetchCategories(): void {
    this._apiService.onGetAllCategories().valueChanges.subscribe((res) => {
      console.log(res.data.getAllCategories);
      this.allCategories = res.data.getAllCategories;
    });
  }
}
