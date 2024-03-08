import { Injectable } from '@angular/core';
import { Apollo, QueryRef, gql } from 'apollo-angular';
import { BehaviorSubject } from 'rxjs';
import { AddCategoryInput, AllCategoriesResponse } from './types';
import { OperationVariables } from '@apollo/client';
import { SuccessOutput } from '../../../common/OutputTypes';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  isAddCategorySidebarOpen = new BehaviorSubject<boolean>(false);
  isSidebarOpen = new BehaviorSubject<boolean>(false);

  constructor(private apollo: Apollo) {}

  onAddCategorySidebarToggle() {
    this.isAddCategorySidebarOpen.next(!this.isAddCategorySidebarOpen.value);
  }

  onSidebarToggle() {
    this.isSidebarOpen.next(!this.isSidebarOpen.value);
  }

  onGetAllCategories(): QueryRef<
    { getAllCategories: AllCategoriesResponse[] },
    OperationVariables
  > {
    return this.apollo.watchQuery({
      query: gql`
        query {
          getAllCategories {
            ID
            name
            imageUrl
          }
        }
      `,
    });
  }

  onAddCategory(input: AddCategoryInput) {
    return this.apollo.mutate({
      mutation: gql`
        mutation ($input: AddImageInput!) {
          addCategory(AddImageInput: $input) {
            isSuccess
          }
        }
      `,
      variables: { input },
    });
  }
}
