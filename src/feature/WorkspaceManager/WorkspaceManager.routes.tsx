import { Route, Routes } from "react-router-dom";
import { CreateStoreScreen, SelectOrganizationScreen, SessionCreateScreen } from "./screens";

export type WorkspaceManagerRoutesParams = {
  "/workspace/org": undefined;
  "/workspace/session": undefined;
  "/workspace/store": undefined;
};

const WorkspaceManagerRoutes = () => {
  return (
    <Routes>
      <Route path='/org' Component={SelectOrganizationScreen} />
      <Route path='/session' Component={SessionCreateScreen} />
      <Route path='/store' Component={CreateStoreScreen} />
    </Routes>
  );
};

export default WorkspaceManagerRoutes;
