import { SxProps } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import { Fragment } from "react";
import { UploadIcon } from "@/components/icons";
import Button from "@/components/Button";
import { Outlet } from "react-router-dom";
import { AppBar } from "@mui/material";

export default function LayoutHeader() {
  const appbarStyle: SxProps = {
    zIndex: 1,
  };

  const toolbarStyle: SxProps = {
    justifyContent: "flex-end",
  };

  return (
    <Fragment>
      <AppBar sx={appbarStyle}>
        <Toolbar sx={toolbarStyle}>
          <Button startIcon={<UploadIcon />}></Button>
        </Toolbar>
      </AppBar>
      <Outlet />
    </Fragment>
  );
}
