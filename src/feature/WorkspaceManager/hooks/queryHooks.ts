import api, { productDbId, storeCollectionId } from "@/api/Appwrite";
import { useMutation } from "@tanstack/react-query";
import { useSnackbar } from "notistack";
import { IAddNewStoreInput, ICreateSessionForm } from "../types";
import { useAppwriteUser } from "@/hooks/useAppwriteUser";
import { useAuth } from "@clerk/clerk-react";
import { Permission, Role } from "appwrite";

export function useCreateAppwriteSession() {
  return useMutation({
    mutationFn: (input: ICreateSessionForm) => {
      return api.createSession(input.email, input.id);
    },
  });
}

export function useCreateAppwriteAccount() {
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: async (input: ICreateSessionForm) => {
      return await api.createAccount(input.email, input.id, input.id);
    },
    onError: async (err) => {
      enqueueSnackbar(err.message);
    },
  });
}

export function useAddNewStore() {
  const { enqueueSnackbar } = useSnackbar();
  const { user } = useAppwriteUser();
  const { orgId } = useAuth();

  return useMutation({
    mutationFn: (input: IAddNewStoreInput) => {
      return api.createDocument(productDbId, storeCollectionId, input, [Permission.write(Role.user(user!.$id))], orgId!);
    },
    onError: (err) => {
      enqueueSnackbar(err.message);
    },
  });
}
