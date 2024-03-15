import { noop } from "lodash";
import React, { createContext, useContext, useMemo, useState } from "react";

interface SidebarContextProps {
  isFeedbackSidebarOpen: boolean;
  handleToggleFeedbackSidebar: () => void;
  isRootSidebarOpen: boolean;
  handleToggleRootSidebar: () => void;
  isSettingsSidebarOpen: boolean; // New setting for settings sidebar
  handleToggleSettingsSidebar: () => void; // New handler for settings sidebar
}

const defaultContextValue: SidebarContextProps = {
  isFeedbackSidebarOpen: false,
  isRootSidebarOpen: false,
  isSettingsSidebarOpen: false, // Initialize settings sidebar as closed
  handleToggleRootSidebar: noop,
  handleToggleFeedbackSidebar: noop,
  handleToggleSettingsSidebar: noop, // Initialize handler for settings sidebar
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

  const handleToggleSettingsSidebar = () => {
    setState({ ...state, isSettingsSidebarOpen: !state.isSettingsSidebarOpen });
  };

  const contextValue = useMemo(
    () => ({
      ...state,
      handleToggleFeedbackSidebar,
      handleToggleRootSidebar,
      handleToggleSettingsSidebar,
    }),
    [state]
  );

  return <SidebarContext.Provider value={contextValue}>{children}</SidebarContext.Provider>;
}

export function useSidebarContext() {
  return useContext(SidebarContext);
}
