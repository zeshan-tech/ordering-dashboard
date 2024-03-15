import { Route, Routes } from "react-router-dom";
import { ProductsScreen, CategoryScreen, AddCategoryScreen, UpdateCategoryScreen } from "./screens";
import { Sidebar, CategoryHeader } from "./components";

export type CategoriesRoutesParams = {
  "/categories": undefined;
  "/categories/products": undefined;
  "/categories/add": undefined;
  "/categories/update/:categoryId": undefined;
};

const CategoriesRoutes = () => {
  return (
    <Routes>
      <Route element={[<Sidebar key={1} />, <CategoryHeader />]}>
        <Route path='/' Component={CategoryScreen} />
        <Route path='/products' Component={ProductsScreen} />
        <Route path='/add' Component={AddCategoryScreen} />
        <Route path='/update/:categoryId' Component={UpdateCategoryScreen} />
      </Route>
    </Routes>
  );
};

export default CategoriesRoutes;
