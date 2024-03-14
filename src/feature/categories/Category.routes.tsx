import { Route, Routes } from "react-router-dom";
import { ProductsScreen, CategoryScreen } from "./screens";
import { Sidebar, CategoryHeader } from "./components";

export type CategoriesRoutesParams = {
  "/categories": undefined;
  "/categories/products": undefined;
};

const CategoriesRoutes = () => {
  return (
    <Routes>
      <Route element={[<Sidebar key={1} />, <CategoryHeader />]}>
        <Route path='/' Component={CategoryScreen} />
        <Route path='/products' Component={ProductsScreen} />
      </Route>
    </Routes>
  );
};

export default CategoriesRoutes;
