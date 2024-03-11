import { noop } from "lodash";
import React, { createContext, useContext, useMemo, useState } from "react";

interface SidebarContextProps {
  isFeedbackSidebarOpen: boolean;
  handleToggleFeedbackSidebar: () => void;
  isRootSidebarOpen: boolean;
  handleToggleRootSidebar: () => void;
}

const defaultContextValue: SidebarContextProps = {
  isFeedbackSidebarOpen: false,
  isRootSidebarOpen: false,
  handleToggleRootSidebar: noop,
  handleToggleFeedbackSidebar: noop,
};

const SidebarContext = createContext<SidebarContextProps>(defaultContextValue);

interface SidebarContextProviderProps {
  children: React.ReactNode;
}

export function SidebarContextProvider({ children }: Readonly<SidebarContextProviderProps>) {
  const [state, setState] = useState<SidebarContextProps>(defaultContextValue);

  const handleToggleFeedbackSidebar = () => {
    setState({ ...state, isFeedbackSidebarOpen: !state.isFeedbackSidebarOpen });
  };

  const handleToggleRootSidebar = () => {
    setState({ ...state, isRootSidebarOpen: !state.isRootSidebarOpen });
  };

  const contextValue = useMemo(
    () => ({
      ...state,
      handleToggleFeedbackSidebar,
      handleToggleRootSidebar,
    }),
    [state]
  );

  return <SidebarContext.Provider value={contextValue}>{children}</SidebarContext.Provider>;
}

export function useSidebarContext() {
  return useContext(SidebarContext);
}
