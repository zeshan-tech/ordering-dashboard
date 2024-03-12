import { FourOFourRoutesParams } from "@/feature/FourOFourScreen/FourOFourScreen.routes";
import { AuthenticationRoutesParams } from "@/feature/authentication/Authentication.routes";

type UnAuthenticatedRouteParams = AuthenticationRoutesParams & FourOFourRoutesParams;

export default UnAuthenticatedRouteParams;
