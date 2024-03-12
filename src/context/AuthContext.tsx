import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { setAuthenticationHeaders } from "@/api/queryClient";
import { handleGetItemFromStorage, handleRemoveItemFromStorage, handleSetItemInStorage } from "@/utils/localStorage";

interface AuthContextProps {
  handleAuthenticate: (authToken: string) => void;
  isAuthenticated: boolean;
  authToken: string | undefined;
  setAuthToken: (authToken: string) => void;
  handleLogout: () => void;
}

const defaultContextValue: AuthContextProps = {
  handleAuthenticate: () => {},
  isAuthenticated: false,
  authToken: undefined,
  handleLogout: () => {},
  setAuthToken: () => {},
};

const AuthContext = createContext<AuthContextProps>(defaultContextValue);

interface AuthContextProviderProps {
  children: React.ReactNode;
}

export function AuthContextProvider({ children }: Readonly<AuthContextProviderProps>) {
  const [state, setState] = useState<AuthContextProps>(defaultContextValue);

  useEffect(() => {
    async function getAuthenticationToken() {
      const authToken = await handleGetItemFromStorage("authToken");
      if (authToken) {
        setState({ ...state, authToken, isAuthenticated: true });
      }
    }

    getAuthenticationToken();
  }, []);

  useEffect(() => {
    setAuthenticationHeaders({
      Authorization: state.authToken ? `Bearer ${state.authToken}` : "",
    });
  }, [state.authToken]);

  const handleLogout = () => {
    setState(defaultContextValue);
    setAuthenticationHeaders({});
    handleRemoveItemFromStorage("authToken");
  };

  const handleAuthenticate = (authToken: string = "") => {
    setState({ ...defaultContextValue, authToken, isAuthenticated: true });
    handleSetItemInStorage("authToken", authToken);
  };

  const setAuthToken = (authToken: string = "") => {
    setState((prev) => ({ ...prev, authToken, isAuthenticated: true }));
    handleSetItemInStorage("authToken", authToken);
  };

  const contextValue = useMemo(
    () => ({
      ...state,
      handleAuthenticate: handleAuthenticate,
      handleLogout,
      setAuthToken,
    }),
    [state]
  );

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}
