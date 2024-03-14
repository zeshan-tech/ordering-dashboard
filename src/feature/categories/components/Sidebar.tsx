import Drawer from "@mui/material/Drawer";
import { useEffect, useState } from "react";
import { List, ListItemButton, ListItemText, Toolbar } from "@mui/material";
import { ShoppingBagIcon, StoreIcon } from "@/components/icons";
import { AuthenticatedRouteParams, useLocation } from "@/navigation";
import useNavigation from "@/navigation/useNavigation";

export default function Sidebar() {
  const location = useLocation();
  const navigation = useNavigation();

  const [activeItem, setActiveItem] = useState<keyof AuthenticatedRouteParams>("/categories");

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location]);

  return (
    <Drawer anchor='left' open={false}>
      <List>
        <ListItemButton selected={activeItem.startsWith("/categories")} onClick={() => navigation.navigate("/categories")}>
          <StoreIcon isListIcon solid={activeItem.startsWith("/categories")} />
          <ListItemText primary={"Categories"} />
        </ListItemButton>
        <ListItemButton selected={activeItem.startsWith("/search")} onClick={() => navigation.navigate("/categories/products")}>
          <ShoppingBagIcon isListIcon solid={activeItem.startsWith("/search")} />
          <ListItemText primary={"Categories"} />
        </ListItemButton>
      </List>
    </Drawer>
  );
}

{
  /* <Drawer variant='temporary' open >
      <Toolbar />
      <List>
        <ListItemButton selected={activeItem.startsWith("/categories")} onClick={() => navigation.navigate("/categories")}>
          <StoreIcon isListIcon solid={activeItem.startsWith("/categories")} />
          <ListItemText primary={"Categories"} />
        </ListItemButton>
        <ListItemButton selected={activeItem.startsWith("/search")} onClick={() => navigation.navigate("/categories/products")}>
          <ShoppingBagIcon isListIcon solid={activeItem.startsWith("/search")} />
          <ListItemText primary={"Categories"} />
        </ListItemButton>
      </List>
    </Drawer> */
}
