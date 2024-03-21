import { cloneElement, ReactElement } from "react";
import useThemeStyles from "@/theme/hooks/useThemeStyles";
import { ListItemButton, ListItemText, Stack } from "@mui/material";
import { IconWrapperProps } from "@/components/icons";
import ExpandLess from "@mui/icons-material/ExpandLess";

export interface SidebarItemProps {
  icon: ReactElement<IconWrapperProps>;
  label: string;
  onClick: () => void;
  isActive: boolean;
  childrens?: SidebarItemProps[];
  hasSubmenu?: boolean;
}

export default function SidebarItem({ icon, label, onClick, isActive, hasSubmenu }: Readonly<SidebarItemProps>) {
  const activeLineStyle = useThemeStyles((theme) => ({
    background: theme.palette.primary.main,
    position: "absolute",
    top: 0,
    height: "100%",
    borderRadius: theme.shape.borderRadius,
  }));

  return (
    <ListItemButton selected={isActive} onClick={onClick}>
      {cloneElement(icon, {
        solid: isActive,
        isListIcon: true,
        color: isActive ? "primary" : "inherit",
      })}
      <ListItemText primary={label} />
      {hasSubmenu ? <ExpandLess /> : null}
      <Stack sx={activeLineStyle} />
    </ListItemButton>
  );
}
