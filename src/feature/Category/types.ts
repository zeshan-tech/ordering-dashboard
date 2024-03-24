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
export interface IAddNewVariantInput {
  type: VariantTypeEnum;
  value: string;
  priceAdjustment: number;
  priceAdjustmentType: PriceAdjustmentTypeEnum;
  imageUrls: string[];
  product: string;
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

export enum PriceAdjustmentTypeEnum {
  PLUS = "plus",
  MINUS = "minus",
}

export enum VariantTypeEnum {
  MATERIAL = "material",
  COLOR = "color",
  SIZE = "size",
}
