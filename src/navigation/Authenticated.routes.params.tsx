import { AnalyticsRoutesParams } from "@/feature/Analytics/Analytics.routes";
import { DeliveriesRoutesParams } from "@/feature/Deliveries/Deliveries.routes";
import { FourOFourRoutesParams } from "@/feature/FourOFourScreen/FourOFourScreen.routes";
import { SettingsRoutesParams } from "@/feature/Settings/Settings.routes";
import { OrdersRoutesParams } from "@/feature/orders/Orders.routes";
import { StoresRoutesParams } from "@/feature/stores/Store.routes";
import { SupportRoutesParams } from "@/feature/support/Support.routes";
import { HomeRoutesParams } from "feature/Home/Home.routes";
import { InboxRoutesParams } from "feature/Inbox/Inbox.routes";

type AuthenticatedRouteParams = 
HomeRoutesParams 
& FourOFourRoutesParams 
& SettingsRoutesParams
& AnalyticsRoutesParams
& DeliveriesRoutesParams
& InboxRoutesParams
& OrdersRoutesParams
& StoresRoutesParams
& SupportRoutesParams
export default AuthenticatedRouteParams;
