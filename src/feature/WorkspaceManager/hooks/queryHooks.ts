import api, { productDbId, storeCollectionId } from "@/api/Appwrite";
import { useMutation } from "@tanstack/react-query";
import { useSnackbar } from "notistack";
import { IAddNewStoreInput, ICreateSessionForm } from "../types";
import { useAppwriteUser } from "@/hooks/useAppwriteUser";
import { useAuth, useUser } from "@clerk/clerk-react";
import { Permission, Role } from "appwrite";

export function useCreateAppwriteSession() {
  const { user } = useUser();

  return useMutation({
    mutationFn: async () => {
      return await api.createSession(user?.primaryEmailAddress?.emailAddress!, user!.id);
    },
    onError: async (err: any) => {
      if (err.code === 401) {
        await api.createAccount(user?.primaryEmailAddress?.emailAddress!, user!.id, "user.firstName");
        return await api.createSession(user?.primaryEmailAddress?.emailAddress!, user!.id);
      }
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
