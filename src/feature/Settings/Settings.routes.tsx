import { Route, Routes } from "react-router-dom";
import { PersonalSettingsScreen, SettingsScreen, SiteSettingsScreen } from "./screens";

export type SettingsRoutesParams = {
  "/settings": undefined;
  "/settings/personal": undefined;
  "/settings/site": undefined;
};

const SettingsRoutes = () => {
  return (
    <Routes>
      <Route path='/' Component={SettingsScreen} />
      <Route path='/personal' Component={PersonalSettingsScreen} />
      <Route path='/site' Component={SiteSettingsScreen} />
    </Routes>
  );
};

export default SettingsRoutes;
