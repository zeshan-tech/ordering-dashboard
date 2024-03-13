import { Route, Routes } from "react-router-dom";
import { ProductsScreen, StoreScreen } from "./screens";
import { Sidebar, StoreHeader } from "./components";

export type StoresRoutesParams = {
  "/stores": undefined;
  "/stores/products": undefined;
};

const StoresRoutes = () => {
  return (
    <Routes>
      <Route element={[<Sidebar key={1} />, <StoreHeader />]}>
        <Route path='/' Component={StoreScreen} />
        <Route path='/products' Component={ProductsScreen} />
      </Route>
    </Routes>
  );
};

export default StoresRoutes;
