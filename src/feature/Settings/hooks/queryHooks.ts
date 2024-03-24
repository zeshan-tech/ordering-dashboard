import { useMutation, useQuery } from "@tanstack/react-query";
import { IAddNewStoreInput, IStore, IUpdateStoreInput } from "../types";
import { apiRequest } from "@/api/queryClient";
import { useWorkspaceManager } from "@/context/WorkspaceManagerContext";
import { useSnackbar } from "notistack";
import api, { productDbId, storeCollectionId } from "@/api/Appwrite";
import { useAuth, useOrganization } from "@clerk/clerk-react";
import { Permission, Role } from "appwrite";
import { useAppwriteUser } from "@/hooks/useAppwriteUser";

export function useGetStoreById() {
  const { organization } = useOrganization();

  return useQuery({
    queryKey: ["user"],
    queryFn: () => {
      return api.getDocument<IStore>(productDbId, storeCollectionId, organization!.id);
    },
  });
}

export function useUpdateStore() {
  const { organization } = useOrganization();

  return useMutation({
    mutationFn: (input: IUpdateStoreInput) => {
      return api.updateDocument<IStore>(productDbId, storeCollectionId, organization!.id, input);
    },
  });
}

export function useDeleteStore() {
  const { organization } = useOrganization();

  return useMutation({
    mutationFn: () => {
      return api.deleteDocument<IStore>(productDbId, storeCollectionId, organization!.id);
    },
  });
}

export function useAddNewStore() {
  const { enqueueSnackbar } = useSnackbar();
  const { orgId } = useAuth();

  return useMutation({
    mutationFn: (input: IAddNewStoreInput) => {
      return api.createDocument(productDbId, storeCollectionId, input, undefined, orgId!);
    },
    onError: (err) => {
      enqueueSnackbar(err.message);
    },
  });
}
