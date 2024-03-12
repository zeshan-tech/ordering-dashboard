import { Route, Routes } from "react-router-dom";
import { PersonalSettingsScreen, SettingsScreen, SiteSettingsScreen } from "./screens";
import { Sidebar } from "./components";

export type SettingsRoutesParams = {
  "/settings": undefined;
  "/settings/personal": undefined;
  "/settings/site": undefined;
};

const SettingsRoutes = () => {
  return (
    <Routes>
      <Route element={[<Sidebar key={1} />]}>
        <Route path='/' Component={SettingsScreen} />
        <Route path='/personal' Component={PersonalSettingsScreen} />
        <Route path='/site' Component={SiteSettingsScreen} />
      </Route>
    </Routes>
  );
};

export default SettingsRoutes;
