import { Route, Routes } from "react-router-dom";
import { SigninScreen, SignupScreen } from "./screens";

export type AuthenticationRoutesParams = {
  "/authentication": undefined;
  "/authentication/signup": undefined;
};

const AuthenticationRoutes = () => {
  return (
    <Routes>
      <Route path="" Component={SigninScreen} />
      <Route path="/signup" Component={SignupScreen} />
    </Routes>
  );
};

export default AuthenticationRoutes;
