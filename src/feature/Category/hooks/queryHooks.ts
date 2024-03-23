import { useMutation, useQuery } from "@tanstack/react-query";
import { apiRequest } from "@/api/queryClient";
import { useWorkspaceManager } from "@/context/WorkspaceManagerContext";
import { IAddNewCategoryInput, IAddNewProductInput, ICategory, IUpdateCategoryInput } from "../types";

export function useGetCategoriesByStoreId() {
  const { storeId } = useWorkspaceManager();

  return useQuery({
    queryKey: [storeId],
    queryFn: () => {
      return apiRequest<ICategory[]>("GET", `category/byStoreId/${storeId}`);
    },
  });
}

export function useGetProductsByCategoryId(categoryId: string) {
  return useQuery({
    queryKey: [categoryId],
    queryFn: () => {
      return apiRequest<ICategory[]>("GET", `product/byCategoryId/${categoryId}`);
    },
  });
}

export function useGetCategoryById(ID: string) {
  return useQuery({
    queryKey: [ID],
    queryFn: () => {
      return apiRequest<ICategory>("GET", `category/withParentId/${ID}`);
    },
  });
}

export function useAddNewCategory() {
  return useMutation({
    mutationFn: (input: IAddNewCategoryInput) => {
      return apiRequest<ICategory[]>("POST", `category`, input);
    },
  });
}

export function useAddNewProduct() {
  return useMutation({
    mutationFn: (input: IAddNewProductInput) => {
      return apiRequest<SuccessResponse>("POST", `product`, input);
    },
  });
}

export function useDeleteCategory() {
  return useMutation({
    mutationFn: (ID: string) => {
      return apiRequest<ICategory[]>("DELETE", `category/${ID}`);
    },
  });
}

export function useUpdateCategory() {
  return useMutation({
    mutationFn: (input: { ID: string; input: IUpdateCategoryInput }) => {
      return apiRequest<ICategory[]>("PUT", `category/${input.ID}`, input.input);
    },
  });
}
