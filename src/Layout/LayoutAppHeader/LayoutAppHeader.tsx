import { SxProps } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import { Fragment } from "react";
import { UploadIcon } from "@/components/icons";
import Button from "@/components/Button";
import { Outlet } from "react-router-dom";
import { AppBar, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function LayoutHeader() {
  const { t } = useTranslation();

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
          <Typography variant='h5' sx={{ flexGrow: 1 }}>
            {t("J Dashboard")}
          </Typography>
          <Button startIcon={<UploadIcon />}></Button>
        </Toolbar>
      </AppBar>
      <Outlet />
    </Fragment>
  );
}
