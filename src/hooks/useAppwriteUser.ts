import { useState, useEffect } from "react";
import api from "@/api/Appwrite";
import { useMutation } from "@tanstack/react-query";

export function useAppwriteUser() {
  const [user, setUser] = useState<IUser | null>(null);

  const { isPending, isError, mutateAsync } = useMutation({
    mutationFn: async () => {
      const userData = await api.getAccount();
      setUser(userData);
      return userData;
    },
  });

  useEffect(() => {
    if (!user) {
      mutateAsync();
    }
  }, [user, mutateAsync]);

  return { user, isLoading: isPending, isError };
}

interface IUser {
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  name: string;
  registration: string;
  status: boolean;
  labels: string[];
  passwordUpdate: string;
  email: string;
  phone: string;
  emailVerification: boolean;
  phoneVerification: boolean;
  accessedAt: string;
}
