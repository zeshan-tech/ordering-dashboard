import { createContext, useContext, useState, ReactNode } from "react";

interface StoreContextType {
  activeStoreId: string;
  setActiveStoreId: (storeId: string) => void; // Function to set active store ID
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
  const [activeStoreId, setActiveStoreId] = useState<string>(""); // State for active store ID

  const storeContextValue: StoreContextType = {
    activeStoreId,
    setActiveStoreId,
  };

  return <StoreContext.Provider value={storeContextValue}>{children}</StoreContext.Provider>;
};
