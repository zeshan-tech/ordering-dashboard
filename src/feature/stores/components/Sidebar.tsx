import Drawer from "@mui/material/Drawer";
import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { InboxIcon } from "@/components/icons";

export default function Sidebar() {
  return (
    <Fragment>
      <Drawer open variant='permanent' sx={{ zIndex: 0 }}>
        {["All mail", "Trash", "Spam"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </Drawer>
      <Outlet />
    </Fragment>
  );
}
