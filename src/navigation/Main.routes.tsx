import AuthenticatedRoutes from "./Authenticated.routes";
import UnAuthenticatedRoutes from "./UnAuthenticated.routes";

export default function MainStack() {
  // const { isAuthenticated } = useAuthContext();
  const isAuthenticated = true
  return isAuthenticated ? <AuthenticatedRoutes /> : <UnAuthenticatedRoutes />;
}
