import { Route, Routes } from "react-router-dom";
import { SettingsScreen, SiteSettingsScreen } from "./screens";

export type SettingsRoutesParams = {
  "/settings": undefined;
  "/settings/site": undefined;
};

const SettingsRoutes = () => {
  return (
    <Routes>
      <Route path='/' Component={SettingsScreen} />
      <Route path='/site' Component={SiteSettingsScreen} />
    </Routes>
  );
};

export default SettingsRoutes;
