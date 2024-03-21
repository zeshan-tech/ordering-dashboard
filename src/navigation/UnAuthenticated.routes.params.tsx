import { FourOFourRoutesParams } from "@/feature/FourOFourScreen/FourOFourScreen.routes";
import { AuthenticationRoutesParams } from "@/feature/authentication/Authentication.routes";
import { UnAuthRoutesParams } from "../feature/UnAuth/UnAuth.routes";

type UnAuthenticatedRouteParams = AuthenticationRoutesParams & FourOFourRoutesParams & UnAuthRoutesParams

export default UnAuthenticatedRouteParams;
