import { FourOFourRoutesParams } from "@/feature/FourOFourScreen/FourOFourScreen.routes";
import { HomeRoutesParams } from "feature/Home/Home.routes";

type AuthenticatedRouteParams = HomeRoutesParams & FourOFourRoutesParams;

export default AuthenticatedRouteParams;
