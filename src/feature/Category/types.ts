export interface ICategory {
  name: string;
  active: string;
  ID: string;
  parentCategoryId: string;
}
export interface IProduct {
  name: string;
  description: string;
  price: number;
  active: boolean;
  imageUrls: string[];
}

export interface IAddNewCategoryInput {
  name: string;
  storeId: string;
  parentCategoryId?: string;
}

export interface IAddNewProductInput {
  name: string;
  description: string;
  price: number;
  imageUrls: string[];
  categoryId: string;
}

export interface IUpdateCategoryInput {
  name: string;
  storeId: string;
  parentCategoryId?: string;
}
