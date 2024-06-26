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
import { useAuth } from "@clerk/clerk-react";
import WorkspaceManagerRoutes from "../feature/WorkspaceManager/WorkspaceManager.routes";
import { useAppwriteUser } from "@/hooks/useAppwriteUser";
import { Backdrop, CircularProgress } from "@mui/material";
import useNavigation from "./useNavigation";
import { useEffect } from "react";

const AuthenticatedRoutes = () => {
  const navigation = useNavigation();
  const { orgId } = useAuth();
  const { isLoading } = useAppwriteUser();

  useEffect(() => {
    conditionalbaseNavigation();
  }, [orgId]);

  if (isLoading) {
    return (
      <Backdrop open>
        <CircularProgress color='inherit' />
      </Backdrop>
    );
  }

  const conditionalbaseNavigation = () => {
    if (!orgId) {
      navigation.navigate("/workspace/org");
    }
  };

  return (
    <Routes>
      {!orgId ? (
        <Route path='workspace/*' Component={WorkspaceManagerRoutes} />
      ) : (
        <Route element={[<LayoutSidebar />, <LayoutAppbar />, <LayoutAppHeader />]}>
          <Route path='home/*' Component={HomeRoutes} />
          <Route path='analytics/*' Component={AnalyticsRoutes} />
          <Route path='analytics/*' Component={AnalyticsRoutes} />
          <Route path='deliveries/*' Component={DeliveriesRoutes} />
          <Route path='inbox/*' Component={InboxRoutes} />
          <Route path='orders/*' Component={OrdersRoutes} />
          <Route path='categories/*' Component={CategoriesRoutes} />
          <Route path='support/*' Component={SupportRoutes} />
        </Route>
      )}

      <Route element={[<SettingsHeader />, <SettingsSidebar />]}>
        <Route path='settings/*' Component={SettingsRoutes} />
      </Route>
      <Route path='*' Component={FourOFourRoutes} />
    </Routes>
  );
};

export default AuthenticatedRoutes;
