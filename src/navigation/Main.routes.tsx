import { useAuth } from "@clerk/clerk-react";
import AuthenticatedRoutes from "./Authenticated.routes";
import UnAuthenticatedRoutes from "./UnAuthenticated.routes";
import { Backdrop, CircularProgress } from "@mui/material";

export default function MainStack() {
  const { userId, isLoaded } = useAuth();

  if (!isLoaded) {
    return (
      <Backdrop open>
        <CircularProgress color='inherit' />
      </Backdrop>
    );
  }

  return userId ? <AuthenticatedRoutes /> : <UnAuthenticatedRoutes />;
}
