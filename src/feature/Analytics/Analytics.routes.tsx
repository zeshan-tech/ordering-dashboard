import { Route, Routes } from "react-router-dom";
import { AnalyticsScreen } from "./screens";

export type AnalyticsRoutesParams = {
  "/analytics": undefined;
};

const AnalyticsRoutes = () => {
  return (
    <Routes>
      <Route path="/" Component={AnalyticsScreen} />
    </Routes>
  );
};

export default AnalyticsRoutes;
