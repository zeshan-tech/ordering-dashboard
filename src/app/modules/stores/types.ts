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
  