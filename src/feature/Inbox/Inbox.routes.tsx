import { Route, Routes } from "react-router-dom";
import { InboxScreen } from "./screens";

export type InboxRoutesParams = {
  "/inbox": undefined;
};

const InboxRoutes = () => {
  return (
    <Routes>
      <Route path="/" Component={InboxScreen} />
    </Routes>
  );
};

export default InboxRoutes;
