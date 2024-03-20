import { Route, Routes } from "react-router-dom";
import { AnalyticsScreen } from "./screens";
import { AnalyticsHeader } from "./components";

export type AnalyticsRoutesParams = {
  "/analytics": undefined;
};

const AnalyticsRoutes = () => {
  return (
    <Routes>
      <Route element={<AnalyticsHeader />}>
        <Route path='/' Component={AnalyticsScreen} />
      </Route>
    </Routes>
  );
};

export default AnalyticsRoutes;
