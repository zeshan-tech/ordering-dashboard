import { cloneElement, ReactElement } from "react";
import useThemeStyles from "@/theme/hooks/useThemeStyles";
import { ListItem, ListItemButton, Stack, SxProps, Tooltip, Typography } from "@mui/material";
import { IconWrapperProps } from "@/components/icons";

export interface SidebarItemProps {
  icon: ReactElement<IconWrapperProps>;
  label: string;
  onClick: () => void;
  isActive: boolean;
  childrens?: SidebarItemProps[];
}

export default function SidebarItem({ icon, label, onClick, isActive }: Readonly<SidebarItemProps>) {
  const listItemButtonStyle = useThemeStyles<SxProps>((theme) => ({
    cursor: "pointer",
    background: isActive ? theme.palette.action.selected : "",
  }));

  const activeLineStyle = useThemeStyles((theme) => ({
    background: theme.palette.primary.main,
    position: "absolute",
    top: 0,
    height: "100%",
    borderRadius: theme.shape.borderRadius,
  }));

  return (
    <Tooltip title={label} placement='left'>
      <ListItem onClick={onClick} disablePadding>
        <ListItemButton sx={listItemButtonStyle}>
          {cloneElement(icon, {
            solid: isActive,
            isListIcon: true,
            color: isActive ? "primary" : "inherit",
          })}
          <Typography variant='caption'>{label}</Typography>
          <Stack sx={activeLineStyle} />
        </ListItemButton>
      </ListItem>
    </Tooltip>
  );
}
