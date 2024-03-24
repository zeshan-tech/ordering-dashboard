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

export interface IUpdateProductInput {
  title: string;
  description: string;
  price: number;
  imageUrls: string[];
  active: boolean;
  category: string;
}

export interface IUpdateCategoryInput {
  name: string;
  organizationId: string;
  parentCategoryId?: string;
}
