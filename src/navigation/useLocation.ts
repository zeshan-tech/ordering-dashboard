import { useLocation as rnUseLocation, Location } from "react-router-dom";
import { AuthenticatedRouteParams, UnAuthenticatedRouteParams } from ".";

type RoutesParams = UnAuthenticatedRouteParams & AuthenticatedRouteParams;

export default function useLocation<K extends keyof RoutesParams>(_key?: K) {
  const location = rnUseLocation();
  const state = location.state as Location['state'] & RoutesParams[K];

  // Check if state is an object type before spreading
  const mergedLocationState = typeof state === 'object' ? { ...location, ...state } : location;

  return mergedLocationState;
}
