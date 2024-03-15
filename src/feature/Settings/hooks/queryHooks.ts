import { useMutation, useQuery } from "@tanstack/react-query";
import { IStore, IUpdateStoreInput } from "../types";
import { apiRequest } from "@/api/queryClient";
import { useStore } from "@/context/StoreContext";

export function useGetStoreById() {
  const { activeStoreId } = useStore();

  return useQuery({
    queryKey: ["user"],
    queryFn: () => {
      return apiRequest<IStore>("GET", `store/${activeStoreId}`);
    },
  });
}

export function useUpdateStore() {
  const { activeStoreId } = useStore();

  return useMutation({
    mutationFn: (input: IUpdateStoreInput) => {
      return apiRequest("PUT", `store/${activeStoreId}`, input);
    },
  });
}

export function useDeleteStore() {
  const { activeStoreId } = useStore();

  return useMutation({
    mutationFn: () => {
      return apiRequest("DELETE", `store/${activeStoreId}`);
    },
  });
}
