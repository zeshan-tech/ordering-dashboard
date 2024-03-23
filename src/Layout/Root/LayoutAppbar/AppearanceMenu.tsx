import React from "react";
import { ListItemText, Divider, Menu, MenuItem, styled } from "@mui/material";
import { useTranslation } from "react-i18next";
import { LaptopIcon, LightModeIcon, MoonIcon, SignalBarIcon } from "@/components/icons";
import { ListSubheader } from "@/components/Tags";
import { useColorMode } from "@/context/ColorModeContext";

interface AppearanceMenuProps {
  anchorEl: null | HTMLElement;
  isVisible: boolean;
  onClose: () => void;
}

export default function AppearanceMenu({ anchorEl, isVisible, onClose }: Readonly<AppearanceMenuProps>) {
  const { t } = useTranslation();
  const { handleToDark, handleToLight } = useColorMode();

  const createMenuItem = (icon: React.ReactNode, label: string, onClick: () => void) => (
    <StyledMenuItem onClick={onClick}>
      {icon}
      <ListItemText>{label}</ListItemText>
      <SignalBarIcon iconButton />
    </StyledMenuItem>
  );

  return (
    <Menu anchorEl={anchorEl} open={isVisible} onClose={onClose} onClick={onClose}>
      <ListSubheader>{t("appearance")}</ListSubheader>
      <Divider />
      {createMenuItem(<LaptopIcon isListIcon />, t("systemDefault"), handleToDark)}
      {createMenuItem(<MoonIcon isListIcon />, t("darkTheme"), handleToDark)}
      {createMenuItem(<LightModeIcon isListIcon />, t("lightTheme"), handleToLight)}
    </Menu>
  );
}

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  width: theme.spacing(48),
}));
