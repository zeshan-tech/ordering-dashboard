import React from "react";
import { ListItemText, Divider, Menu, MenuItem, SxProps } from "@mui/material";
import { useTranslation } from "react-i18next";
import { LaptopIcon, LightModeIcon, MoonIcon, SignalBarIcon } from "@/components/icons";
import useThemeStyles from "@/theme/hooks/useThemeStyles";
import { ListSubheader } from "@/components/Tags";
import useTheme from "@/theme/Theme.context";

interface AppearanceMenuProps {
  anchorEl: null | HTMLElement;
  isVisible: boolean;
  onClose: () => void;
}

export default function AppearanceMenu({ anchorEl, isVisible, onClose }: Readonly<AppearanceMenuProps>) {
  const { t } = useTranslation();
  const {handleToDarkTheme, handleToLightTheme} = useTheme();

  const menuItemStyle = useThemeStyles<SxProps>((theme) => ({
    width: theme.spacing(48),
  }));

  const createMenuItem = (icon: React.ReactNode, label: string, onClick: () => void) => (
    <MenuItem onClick={onClick} sx={menuItemStyle}>
      {icon}
      <ListItemText>{label}</ListItemText>
      <SignalBarIcon iconButton />
    </MenuItem>
  );

  return (
    <Menu anchorEl={anchorEl} open={isVisible} onClose={onClose} onClick={onClose}>
      <ListSubheader>{t("appearance")}</ListSubheader>
      <Divider />
      {createMenuItem(<LaptopIcon isListIcon />, t("systemDefault"), handleToDarkTheme)}
      {createMenuItem(<MoonIcon isListIcon />, t("darkTheme"), handleToDarkTheme)}
      {createMenuItem(<LightModeIcon isListIcon />, t("lightTheme"), handleToLightTheme)}
    </Menu>
  );
}
