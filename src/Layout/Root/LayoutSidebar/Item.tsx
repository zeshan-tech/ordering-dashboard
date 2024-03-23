import { cloneElement, ReactElement } from "react";
import { ListItemButton, ListItemText, Stack, styled } from "@mui/material";
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

export default function Item({ icon, label, onClick, isActive, hasSubmenu }: Readonly<SidebarItemProps>) {
  return (
    <ListItemButton selected={isActive} onClick={onClick}>
      {cloneElement(icon, {
        solid: isActive,
        isListIcon: true,
        color: isActive ? "primary" : "inherit",
      })}
      <ListItemText primary={label} />
      {hasSubmenu ? <ExpandLess /> : null}
      <StyledStack />
    </ListItemButton>
  );
}

const StyledStack = styled(Stack)(({ theme }) => ({
  background: theme.palette.primary.main,
  position: "absolute",
  top: 0,
  height: "100%",
  borderRadius: theme.shape.borderRadius,
}));
