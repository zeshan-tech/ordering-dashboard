import { Route, Routes } from "react-router-dom";
import { SelectOrganizationScreen, SessionCreateScreen } from "./screens";

export type WorkspaceManagerRoutesParams = {
  "/workspace/org": undefined;
  "/workspace/session": undefined;
};

const WorkspaceManagerRoutes = () => {
  return (
    <Routes>
      <Route path='/org' Component={SelectOrganizationScreen} />
      <Route path='/session' Component={SessionCreateScreen} />
    </Routes>
  );
};

export default WorkspaceManagerRoutes;
