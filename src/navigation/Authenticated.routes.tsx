import { Route, Routes } from "react-router-dom";
import HomeRoutes from "@/feature/Home/Home.routes";
import FourOFourRoutes from "@/feature/FourOFourScreen/FourOFourScreen.routes";
import { LayoutAppHeader } from "@/Layout/Root/LayoutAppHeader";
import { LayoutAppbar } from "@/Layout/Root/LayoutAppbar";
import { LayoutSidebar } from "@/Layout/Root/LayoutSidebar";
import SettingsRoutes from "@/feature/Settings/Settings.routes";
import AnalyticsRoutes from "@/feature/Analytics/Analytics.routes";
import DeliveriesRoutes from "@/feature/Deliveries/Deliveries.routes";
import InboxRoutes from "@/feature/Inbox/Inbox.routes";
import OrdersRoutes from "@/feature/orders/Orders.routes";
import CategoriesRoutes from "@/feature/Category/Category.routes";
import SupportRoutes from "@/feature/support/Support.routes";
import { Header as SettingsHeader, Sidebar as SettingsSidebar } from "@/Layout/Settings";

const AuthenticatedRoutes = () => {
  return (
    <Routes>
      <Route element={[<LayoutSidebar />, <LayoutAppbar />, <LayoutAppHeader />]}>
        <Route path='home/*' Component={HomeRoutes} />
        <Route path='analytics/*' Component={AnalyticsRoutes} />
        <Route path='deliveries/*' Component={DeliveriesRoutes} />
        <Route path='inbox/*' Component={InboxRoutes} />
        <Route path='orders/*' Component={OrdersRoutes} />
        <Route path='categories/*' Component={CategoriesRoutes} />
        <Route path='support/*' Component={SupportRoutes} />
      </Route>
      <Route element={[<SettingsHeader />, <SettingsSidebar />]}>
        <Route path='settings/*' Component={SettingsRoutes} />
      </Route>
      <Route path='*' Component={FourOFourRoutes} />
    </Routes>
  );
};

export default AuthenticatedRoutes;
