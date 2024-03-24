import { ProductModel } from "./Product";

export class CategoryModel {
  $id!: string;
  name!: string;
  actactiveive!: boolean;
  parentCategoryId!: string;
  organizationId!: string;
  product!: ProductModel[];
}
