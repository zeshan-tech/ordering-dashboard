import { Route, Routes } from "react-router-dom";
import { OrderScreen } from "./screens";

export type OrdersRoutesParams = {
  "/orders": undefined;
};

const OrdersRoutes = () => {
  return (
    <Routes>
      <Route path="/" Component={OrderScreen} />
    </Routes>
  );
};

export default OrdersRoutes;
