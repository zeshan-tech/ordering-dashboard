import { SxProps } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";
import { MenuOpenIcon, SearchIcon } from "@/components/icons";
import UserAvatar from "./UserAvatar";
import { AppBar } from "@mui/material";
import { useSidebarContext } from "@/context/SidebarContext";

export default function LayoutAppbar() {
  const { handleToggleRootSidebar } = useSidebarContext();

  const appbarStyle: SxProps = {
    bottom: 0,
    top: "auto",
  };

  return (
    <AppBar sx={appbarStyle}>
      <CssBaseline />
      <Toolbar>
        <MenuOpenIcon onClick={handleToggleRootSidebar} />
        <SearchIcon iconButton />
        <Stack sx={{ flexGrow: 1 }} />
        <UserAvatar />
      </Toolbar>
    </AppBar>
  );
}
