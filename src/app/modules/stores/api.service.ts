import { Injectable, inject } from '@angular/core';
import { Apollo, QueryRef, gql } from 'apollo-angular';
import { AddCategoryInput, AddProductInput, AllCategoriesResponse } from './types';
import { OperationVariables } from '@apollo/client';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public _apollo: Apollo = inject(Apollo);

  onGetAllCategories(): QueryRef<
    { getAllCategories: AllCategoriesResponse[] },
    OperationVariables
  > {
    return this._apollo.watchQuery({
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
    return this._apollo.mutate({
      mutation: gql`
        mutation ($input: AddCategoryInput!) {
          addCategory(input: $input) {
            isSuccess
          }
        }
      `,
      variables: { input },
    });
  }

  onAddProduct(input: AddProductInput) {
    return this._apollo.mutate({
      mutation: gql`
        mutation ($input: AddProductInput!) {
          addProduct(input: $input) {
            isSuccess
          }
        }
      `,
      variables: { input },
    });
  }
}
