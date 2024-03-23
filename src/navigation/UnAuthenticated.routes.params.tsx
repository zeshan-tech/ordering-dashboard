import { FourOFourRoutesParams } from "@/feature/FourOFourScreen/FourOFourScreen.routes";
import { UnAuthRoutesParams } from "../feature/UnAuth/UnAuth.routes";

type UnAuthenticatedRouteParams = FourOFourRoutesParams & UnAuthRoutesParams;

export default UnAuthenticatedRouteParams;
