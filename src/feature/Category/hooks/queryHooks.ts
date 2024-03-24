import { useMutation, useQuery } from "@tanstack/react-query";
import { IAddNewCategoryInput, IAddNewProductInput, IUpdateCategoryInput, IUpdateProductInput } from "../types";
import api, { categoryCollectionId, productCollectionId, productDbId } from "@/api/Appwrite";
import { useOrganization } from "@clerk/clerk-react";
import { CategoryModel } from "@/models/category";
import { ProductModel } from "@/models/Product";

export function useGetCategories() {
  const { organization } = useOrganization();

  //TODO: fix query issue
  // const query = [Query.equal("organizationId", organization!.id)];

  return useQuery({
    queryKey: [organization],
    queryFn: () => {
      return api.listDocuments<{ total: number; documents: CategoryModel[] }>(productDbId, categoryCollectionId);
    },
  });
}

export function useGetProductsByCategoryId(categoryId: string) {
  //TODO: fix query issue
  // const query = [Query.equal("categoryId", [categoryId])];

  return useQuery({
    queryKey: [categoryId],
    queryFn: () => {
      return api.listDocuments<{ total: number; documents: ProductModel[] }>(productDbId, productCollectionId);
    },
  });
}

export function useGetCategoryById($id: string) {
  return useQuery({
    queryKey: [$id],
    queryFn: () => {
      return api.getDocument<CategoryModel>(productDbId, categoryCollectionId, $id);
    },
  });
}

export function useGetProductById($id: string) {
  return useQuery({
    queryKey: [$id],
    queryFn: () => {
      return api.getDocument<ProductModel>(productDbId, productCollectionId, $id);
    },
  });
}

export function useAddNewCategory() {
  return useMutation({
    mutationFn: (input: IAddNewCategoryInput) => {
      return api.createDocument<CategoryModel[]>(productDbId, categoryCollectionId, input);
    },
  });
}

export function useAddNewProduct() {
  return useMutation({
    mutationFn: (input: IAddNewProductInput) => {
      return api.createDocument<SuccessResponse>(productDbId, productCollectionId, input);
    },
  });
}

export function useUpdateProduct() {
  return useMutation({
    mutationFn: (input: { $id: string; input: IUpdateProductInput }) => {
      return api.updateDocument<SuccessResponse>(productDbId, productCollectionId, input.$id, input.input);
    },
  });
}

export function useDeleteCategory() {
  return useMutation({
    mutationFn: ($id: string) => {
      return api.deleteDocument<CategoryModel[]>(productDbId, categoryCollectionId, $id);
    },
  });
}

export function useDeleteProduct() {
  return useMutation({
    mutationFn: ($id: string) => {
      return api.deleteDocument<CategoryModel[]>(productDbId, productCollectionId, $id);
    },
  });
}

export function useUpdateCategory() {
  return useMutation({
    mutationFn: (input: { $id: string; input: IUpdateCategoryInput }) => {
      return api.updateDocument<CategoryModel[]>(productDbId, categoryCollectionId, input.$id, input.input);
    },
  });
}
