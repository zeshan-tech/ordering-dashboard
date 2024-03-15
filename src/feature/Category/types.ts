export interface ICategory {
  name: string;
  parentCategory: string;
  subCategories: string;
  active: string;
}
export interface IAddNewCategoryInput {
  name: string;
  storeId: string;
  parentCategoryId?: string;
}
