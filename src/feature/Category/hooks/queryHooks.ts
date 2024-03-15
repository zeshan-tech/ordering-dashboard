import { useMutation, useQuery } from "@tanstack/react-query";
import { apiRequest } from "@/api/queryClient";
import { useStore } from "@/context/StoreContext";
import { IAddNewCategoryInput, ICategory } from "../types";

export function useGetCategoriesByStoreId() {
  const { activeStoreId } = useStore();

  return useQuery({
    queryKey: [activeStoreId],
    queryFn: () => {
      return apiRequest<ICategory[]>("GET", `category/byStoreId/${activeStoreId}`);
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
