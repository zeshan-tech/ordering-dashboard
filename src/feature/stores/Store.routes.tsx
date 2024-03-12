import { Route, Routes } from "react-router-dom";
import { StoreScreen } from "./screens";
import { Sidebar } from "./components";

export type StoresRoutesParams = {
  "/stores": undefined;
};

const StoresRoutes = () => {
  return (
    <Routes>
      <Route element={[<Sidebar key={1} />]}>
        <Route path='/' Component={StoreScreen} />
      </Route>
    </Routes>
  );
};

export default StoresRoutes;
