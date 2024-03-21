import { Route, Routes } from "react-router-dom";
import { WelcomeScreen } from "./screens";

export type UnAuthRoutesParams = {
  "/": undefined;
};

const UnAuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" Component={WelcomeScreen} />
    </Routes>
  );
};

export default UnAuthRoutes;
