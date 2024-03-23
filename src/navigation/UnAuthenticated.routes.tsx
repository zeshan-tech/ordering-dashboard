import { Route, Routes } from "react-router-dom";
import FourOFourRoutes from "@/feature/FourOFourScreen/FourOFourScreen.routes";

import UnAuthRoutes from "../feature/UnAuth/UnAuth.routes";

const UnAuthenticatedRoutes = () => {
  return (
    <Routes>
      <Route path='/' Component={UnAuthRoutes} />
      <Route path='*' Component={FourOFourRoutes} />
    </Routes>
  );
};

export default UnAuthenticatedRoutes;
