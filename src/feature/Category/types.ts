export interface ICategory {
  name: string;
  active: string;
  $id: string;
  parentCategoryId: string;
  organizationId: string;
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
  organizationId: string;
  parentCategoryId?: string;
}

export interface IAddNewProductInput {
  title: string;
  description: string;
  price: number;
  imageUrls: string[];
  category: string;
}

export interface IUpdateCategoryInput {
  name: string;
  organizationId: string;
  parentCategoryId?: string;
}
