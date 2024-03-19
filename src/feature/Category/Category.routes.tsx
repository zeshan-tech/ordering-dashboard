import { Route, Routes } from "react-router-dom";
import { ProductsScreen, CategoryScreen, AddCategoryScreen, UpdateCategoryScreen, AddProductScreen } from "./screens";
import { CategoryHeader } from "./components";

export type CategoriesRoutesParams = {
  "/categories": undefined;
  "/categories/products/:categoryId": undefined;
  "/categories/products/add/:categoryId": undefined;
  "/categories/add": undefined;
  "/categories/update/:categoryId": undefined;
};

const CategoriesRoutes = () => {
  return (
    <Routes>
      <Route element={[<CategoryHeader />]}>
        <Route path='/' Component={CategoryScreen} />
        <Route path='/add' Component={AddCategoryScreen} />
        <Route path='/update/:categoryId' Component={UpdateCategoryScreen} />
      </Route>

      <Route path='/products/:categoryId' Component={ProductsScreen} />
      <Route path='/products/add/:categoryId' Component={AddProductScreen} />
    </Routes>
  );
};

export default CategoriesRoutes;
