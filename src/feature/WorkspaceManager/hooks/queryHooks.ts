import api from "@/api/Appwrite";
import { useMutation } from "@tanstack/react-query";
import { useSnackbar } from "notistack";
import { ICreateSessionForm } from "../types";

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
