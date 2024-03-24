import { CategoryModel } from "./category";

export class ProductModel {
  $id!: string;
  title!: string;
  description!: string;
  price!: number;
  active!: boolean;
  imageUrls!: string[];
  category!: CategoryModel;
}
