import { Route, Routes } from "react-router-dom";
import { SupportScreen } from "./screens";

export type SupportRoutesParams = {
  "/support": undefined;
};

const SupportRoutes = () => {
  return (
    <Routes>
      <Route path='/' Component={SupportScreen} />
    </Routes>
  );
};

export default SupportRoutes;
