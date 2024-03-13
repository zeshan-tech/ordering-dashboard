import Drawer from "@mui/material/Drawer";
import { useEffect, useState } from "react";
import { List, ListItemButton, ListItemText, Toolbar } from "@mui/material";
import { ShoppingBagIcon, StoreIcon } from "@/components/icons";
import { AuthenticatedRouteParams, useLocation } from "@/navigation";
import useNavigation from "@/navigation/useNavigation";

export default function Sidebar() {
  const location = useLocation();
  const navigation = useNavigation();

  const [activeItem, setActiveItem] = useState<keyof AuthenticatedRouteParams>("/stores");

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location]);

  return (
    <Drawer anchor='left' open={false}>
      <List>
        <ListItemButton selected={activeItem.startsWith("/stores")} onClick={() => navigation.navigate("/stores")}>
          <StoreIcon isListIcon solid={activeItem.startsWith("/stores")} />
          <ListItemText primary={"Stores"} />
        </ListItemButton>
        <ListItemButton selected={activeItem.startsWith("/search")} onClick={() => navigation.navigate("/stores/products")}>
          <ShoppingBagIcon isListIcon solid={activeItem.startsWith("/search")} />
          <ListItemText primary={"Stores"} />
        </ListItemButton>
      </List>
    </Drawer>
  );
}

{
  /* <Drawer variant='temporary' open >
      <Toolbar />
      <List>
        <ListItemButton selected={activeItem.startsWith("/stores")} onClick={() => navigation.navigate("/stores")}>
          <StoreIcon isListIcon solid={activeItem.startsWith("/stores")} />
          <ListItemText primary={"Stores"} />
        </ListItemButton>
        <ListItemButton selected={activeItem.startsWith("/search")} onClick={() => navigation.navigate("/stores/products")}>
          <ShoppingBagIcon isListIcon solid={activeItem.startsWith("/search")} />
          <ListItemText primary={"Stores"} />
        </ListItemButton>
      </List>
    </Drawer> */
}
