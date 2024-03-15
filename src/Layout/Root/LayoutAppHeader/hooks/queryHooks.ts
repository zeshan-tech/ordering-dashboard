import { useMutation, useQuery } from "@tanstack/react-query";
import { IAddNewStoreInput, IStore } from "../types";
import { apiRequest } from "@/api/queryClient";
import { useSnackbar } from "notistack";

export function useAddNewStore() {
  const { enqueueSnackbar } = useSnackbar();
  return useMutation({
    mutationFn: (input: IAddNewStoreInput) => {
      return apiRequest("POST", "store", input);
    },
    onError: (err) => {
      console.log(err);
      
      enqueueSnackbar(err.message);
    },
  });
}

export function useGetAllUserStores() {
  return useQuery({
    queryKey: ["user"],
    queryFn: () => {
      return apiRequest<IStore[]>("GET", "store");
    },
  });
}
