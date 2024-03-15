import { Route, Routes } from "react-router-dom";
import { ProductsScreen, CategoryScreen, AddCategoryScreen, UpdateCategoryScreen } from "./screens";
import { CategoryHeader, ProductsHeader } from "./components";

export type CategoriesRoutesParams = {
  "/categories": undefined;
  "/categories/products/:categoryId": undefined;
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

        <Route element={[<ProductsHeader />]}>
          <Route path='/products/:categoryId' Component={ProductsScreen} />
        </Route>
      </Route>
    </Routes>
  );
};

export default CategoriesRoutes;
