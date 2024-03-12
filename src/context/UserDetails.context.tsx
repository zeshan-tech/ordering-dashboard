import { createContext, useContext, ReactNode, useState } from "react";
import { defaultUserDetails } from "./constant";

interface UserDetailsContextProps {
  userName: string;
  fullName: string;
  imageUrl: string;
}

const UserDetailsContext = createContext<UserDetailsContextProps | undefined>(undefined);

interface UserDetailsProviderProps {
  children: ReactNode;
}

export function UserDetailsProvider({ children }: Readonly<UserDetailsProviderProps>) {
  const [userDetails] = useState<UserDetailsContextProps>(defaultUserDetails);

  return <UserDetailsContext.Provider value={{ ...userDetails }}>{children}</UserDetailsContext.Provider>;
}

export default function useUserDetails() {
  const context = useContext(UserDetailsContext);
  if (!context) {
    throw new Error("useUserDetails must be used within a UserDetailsProvider");
  }
  return context;
}
