import { AnalyticsRoutesParams } from "@/feature/Analytics/Analytics.routes";
import { DeliveriesRoutesParams } from "@/feature/Deliveries/Deliveries.routes";
import { FourOFourRoutesParams } from "@/feature/FourOFourScreen/FourOFourScreen.routes";
import { SettingsRoutesParams } from "@/feature/Settings/Settings.routes";
import { OrdersRoutesParams } from "@/feature/orders/Orders.routes";
import { CategoriesRoutesParams } from "@/feature/Category/Category.routes";
import { SupportRoutesParams } from "@/feature/support/Support.routes";
import { HomeRoutesParams } from "feature/Home/Home.routes";
import { InboxRoutesParams } from "feature/Inbox/Inbox.routes";
import { WorkspaceManagerRoutesParams } from "../feature/WorkspaceManager/WorkspaceManager.routes";

type AuthenticatedRouteParams = HomeRoutesParams & FourOFourRoutesParams & SettingsRoutesParams & AnalyticsRoutesParams & DeliveriesRoutesParams & InboxRoutesParams & OrdersRoutesParams & CategoriesRoutesParams & SupportRoutesParams & WorkspaceManagerRoutesParams;
export default AuthenticatedRouteParams;
