import { Route, Routes } from "react-router-dom";
import { SelectOrganizationScreen } from "./screens";

export type OrganizationRoutesParams = {
  "/organization/select": undefined;
};

const OrganizationRoutes = () => {
  return (
    <Routes>
      <Route path='/select' Component={SelectOrganizationScreen} />
      <Route path='*' Component={SelectOrganizationScreen} />
    </Routes>
  );
};

export default OrganizationRoutes;
