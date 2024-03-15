export interface ICategory {
  name: string;
  active: string;
  ID: string;
  parentCategoryId: string;
}

export interface IAddNewCategoryInput {
  name: string;
  storeId: string;
  parentCategoryId?: string;
}
