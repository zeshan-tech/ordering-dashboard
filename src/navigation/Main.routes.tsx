import { useAuth } from "@clerk/clerk-react";
import AuthenticatedRoutes from "./Authenticated.routes";
import UnAuthenticatedRoutes from "./UnAuthenticated.routes";

export default function MainStack() {
  const { userId } = useAuth()
  
  return userId ? <AuthenticatedRoutes /> : <UnAuthenticatedRoutes />;
}
