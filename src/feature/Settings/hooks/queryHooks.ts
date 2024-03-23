import { useMutation, useQuery } from "@tanstack/react-query";
import { IAddNewStoreInput, IStore, IUpdateStoreInput } from "../types";
import { apiRequest } from "@/api/queryClient";
import { useStore } from "@/context/StoreContext";
import { useSnackbar } from "notistack";
import api, { productDbId, storeCollectionId } from "@/api/Appwrite";
import { useAuth } from "@clerk/clerk-react";
import { Permission, Role } from "appwrite";
import { useAppwriteUser } from "@/hooks/useAppwriteUser";

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

export function useAddNewStore() {
  const { enqueueSnackbar } = useSnackbar();
  const { user } = useAppwriteUser();
  const { orgId } = useAuth();

  return useMutation({
    mutationFn: (input: IAddNewStoreInput) => {
      return api.createDocument(productDbId, storeCollectionId, { ...input, id: orgId }, [Permission.update(Role.user(user!.$id)), Permission.read(Role.users()), Permission.read(Role.guests())]);
    },
    onError: (err) => {
      enqueueSnackbar(err.message);
    },
  });
}
