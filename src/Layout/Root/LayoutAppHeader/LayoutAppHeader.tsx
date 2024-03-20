import { SxProps } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { AppBar, Stack, Typography } from "@mui/material";
import SelectStore from "./SelectStore";
import { useUser } from "@clerk/clerk-react";
import useNavigation from "@/navigation/useNavigation";

export default function LayoutHeader() {
  const { user } = useUser();
  const navigation = useNavigation();

  const appbarStyle: SxProps = {
    zIndex: 1,
  };

  return (
    <Fragment>
      <AppBar sx={appbarStyle}>
        <Toolbar>
          <Stack justifyContent={"space-between"} flexDirection={"row"} alignItems={"center"} width={"100%"}>
            <Typography variant='h5' onClick={() => navigation.navigate("*")}>
              {user?.firstName} Dashboard
            </Typography>
            <SelectStore />
          </Stack>
        </Toolbar>
      </AppBar>
      <Outlet />
    </Fragment>
  );
}
