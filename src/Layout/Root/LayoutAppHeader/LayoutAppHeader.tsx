import { SxProps } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { AppBar, Stack } from "@mui/material";
import SelectStore from "./SelectStore";

export default function LayoutHeader() {
  const appbarStyle: SxProps = {
    zIndex: 1,
  };

  const toolbarStyle: SxProps = {
    justifyContent: "space-between",
  };

  return (
    <Fragment>
      <AppBar sx={appbarStyle}>
        <Toolbar sx={toolbarStyle}>
          <Stack>
            <SelectStore />
          </Stack>
        </Toolbar>
      </AppBar>
      <Outlet />
    </Fragment>
  );
}
