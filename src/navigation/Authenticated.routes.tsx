import { Route, Routes } from "react-router-dom";
import HomeRoutes from "@/feature/Home/Home.routes";
import FourOFourRoutes from "@/feature/FourOFourScreen/FourOFourScreen.routes";
import { LayoutAppHeader } from "@/Layout/LayoutAppHeader";
import { LayoutAppbar } from "@/Layout/LayoutAppbar";
import { LayoutSidebar } from "@/Layout/LayoutSidebar";

const AuthenticatedRoutes = () => {
  return (
    <Routes>
      <Route element={[<LayoutSidebar />, <LayoutAppbar />, <LayoutAppHeader />]}>
        <Route path='home/*' Component={HomeRoutes} />
      </Route>
      <Route path='*' Component={FourOFourRoutes} />
    </Routes>
  );
};

export default AuthenticatedRoutes;
