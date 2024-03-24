import { useMutation, useQuery } from "@tanstack/react-query";
import { IAddNewCategoryInput, IAddNewProductInput, IUpdateCategoryInput } from "../types";
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

export function useGetCategoryById(ID: string) {
  return useQuery({
    queryKey: [ID],
    queryFn: () => {
      return api.getDocument<CategoryModel>(productDbId, categoryCollectionId, ID);
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

export function useDeleteCategory() {
  return useMutation({
    mutationFn: (ID: string) => {
      return api.deleteDocument<CategoryModel[]>(productDbId, categoryCollectionId, ID);
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
