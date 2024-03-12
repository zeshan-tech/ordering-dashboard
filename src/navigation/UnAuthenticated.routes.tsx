import { Route, Routes } from "react-router-dom";
import FourOFourRoutes from "@/feature/FourOFourScreen/FourOFourScreen.routes";

import AuthenticationRoutes from "@/feature/authentication/Authentication.routes";

const UnAuthenticatedRoutes = () => {
  return (
    <Routes>
      <Route path='authentication/*' Component={AuthenticationRoutes} />
      <Route path='*' Component={FourOFourRoutes} />
    </Routes>
  );
};

export default UnAuthenticatedRoutes;
