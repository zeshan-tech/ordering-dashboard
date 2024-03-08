export type AllCategoriesResponse = {
  name: string;
  imageUrl: string;
  ID: string;
};

export type AddCategoryInput = {
  name: string;
  imageUrl: string;
  parentCategory?: string;
};

export type AddProductInput = {
  name: string;
  description: string;
  price: number;
  sku: string;
  status: string;
  categoryId: string;
};
