import api, { productDbId, storeCollectionId } from "@/api/Appwrite";
import { useOrganization } from "@clerk/clerk-react";
import { LinearProgress } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface WorkspaceManagerContextType {
  storeId: string;
  isLoading: boolean;
  handleUpdateStore: () => Promise<void>;
}

const WorkspaceManagerContext = createContext<WorkspaceManagerContextType | undefined>(undefined);

export const useWorkspaceManager = (): WorkspaceManagerContextType => {
  const context = useContext(WorkspaceManagerContext);
  if (!context) {
    throw new Error("useWorkspaceManager must be used within a WorkspaceManagerProvider");
  }
  return context;
};

export const WorkspaceManagerProvider = ({ children }: { children: ReactNode }) => {
  const [storeId, setStoreId] = useState<string>("");
  const { organization } = useOrganization();

  const { mutateAsync, isPending } = useMutation({ mutationFn: () => api.getDocument(productDbId, storeCollectionId, organization!.id) });

  const handleUpdateStore = async () => {
    const result = await mutateAsync();
    console.log(result.$id);
    setStoreId(result.$id);
  };

  useEffect(() => {
    handleUpdateStore();
  }, []);

  const workspaceManagerContextValue: WorkspaceManagerContextType = {
    storeId,
    handleUpdateStore,
    isLoading: isPending,
  };

  if (isPending) {
    return <LinearProgress />;
  }

  return <WorkspaceManagerContext.Provider value={workspaceManagerContextValue}>{children}</WorkspaceManagerContext.Provider>;
};
