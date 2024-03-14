import { SxProps } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import { Fragment } from "react";
import { UploadIcon } from "@/components/icons";
import Button from "@/components/Button";
import { Outlet } from "react-router-dom";
import { AppBar, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import SelectStore from "./SelectStore";

export default function LayoutHeader() {
  const { t } = useTranslation();

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
            <SelectStore  />
          </Stack>
          <Button startIcon={<UploadIcon />}></Button>
        </Toolbar>
      </AppBar>
      <Outlet />
    </Fragment>
  );
}
