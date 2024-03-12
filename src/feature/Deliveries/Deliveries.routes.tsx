import { Route, Routes } from "react-router-dom";
import { DeliveryScreen } from "./screens";

export type DeliveriesRoutesParams = {
  "/deliveries": undefined;
};

const DeliveriesRoutes = () => {
  return (
    <Routes>
      <Route path="/" Component={DeliveryScreen} />
    </Routes>
  );
};

export default DeliveriesRoutes;
