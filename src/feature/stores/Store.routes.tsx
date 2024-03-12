import { Route, Routes } from "react-router-dom";
import { StoreScreen } from "./screens";

export type StoresRoutesParams = {
  "/stores": undefined;
};

const StoresRoutes = () => {
  return (
    <Routes>
      <Route path='/' Component={StoreScreen} />
    </Routes>
  );
};

export default StoresRoutes;
