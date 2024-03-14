import { useMutation, useQuery } from "@tanstack/react-query";
import { IAddNewStoreInput, IGetAllStoresOutput } from "./types";
import { apiRequest } from "@/api/queryClient";

export function useAddNewStore() {
  return useMutation({
    mutationFn: (input: IAddNewStoreInput) => {
      return apiRequest("POST", "store", input);
    },
  });
}

export function useGetAllUserStores() {
  return useQuery({
    queryKey: ["user"],
    queryFn: () => {
      return apiRequest<IGetAllStoresOutput[]>("GET", "store");
    },
  });
}
