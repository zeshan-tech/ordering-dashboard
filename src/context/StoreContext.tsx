import { handleGetItemFromStorage, handleSetItemInStorage } from "@/utils/localStorage";
import { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface StoreContextType {
  activeStoreId: string;
  handleSetActiveStoreId: (storeId: string) => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const useStore = (): StoreContextType => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
};

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  const [activeStoreId, setActiveStoreId] = useState<string>(() => {
    return handleGetItemFromStorage("activeStoreId")!;
  });

  const handleSetActiveStoreId = (storeId: string) => {
    setActiveStoreId(storeId);
    handleSetItemInStorage("activeStoreId", storeId);
    location.reload();
  };

  const storeContextValue: StoreContextType = {
    activeStoreId,
    handleSetActiveStoreId,
  };

  useEffect(() => {
    const handleStorageChange = () => {
      const storedId = handleGetItemFromStorage("activeStoreId");
      handleSetActiveStoreId(storedId!); // Update activeStoreId
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return <StoreContext.Provider value={storeContextValue}>{children}</StoreContext.Provider>;
};
