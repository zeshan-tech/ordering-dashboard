import React from "react";
import { ListItemText, Divider, MenuItem, Menu, SxProps } from "@mui/material";
import { useTranslation } from "react-i18next";
import { ChevronRightIcon, FeedbackIcon, LogoutIcon, MoonIcon, SettingIcon, SignalBarIcon, SwitchAccountIcon, TranslateIcon } from "@/components/icons";
import UserCardForMenu from "./UserCardForMenu";
import useThemeStyles from "@/theme/hooks/useThemeStyles";
import { useAuthContext } from "@/context/AuthContext";

interface UserMenuProps {
  anchorEl: null | HTMLElement;
  isVisible: boolean;
  onClose: () => void;
  onClickProfile: () => void;
  onAppearance: () => void;
  onTranslation: () => void;
}

export default function UserMenu({ anchorEl, isVisible, onClose, onClickProfile, onAppearance, onTranslation }: Readonly<UserMenuProps>) {
  const { t } = useTranslation();
  const { handleLogout } = useAuthContext();

  const handleSwitchApp = () => {
    alert("handleSwitchApp");
  };

  const handleSettings = () => {
    alert("handleSetting");
  };

  const handleShareFeedback = () => {
    alert("handleShareFeedback");
  };

  const menuItemStyle = useThemeStyles<SxProps>((theme) => ({
    width: theme.spacing(48),
  }));

  const createMenuItem = (icon: React.ReactNode, label: string, onClick: () => void, hasChevron: boolean = false) => (
    <MenuItem onClick={onClick} sx={menuItemStyle}>
      {icon}
      <ListItemText>{label}</ListItemText>
      {hasChevron && <ChevronRightIcon iconButton />}
      {!hasChevron && <SignalBarIcon iconButton />}
    </MenuItem>
  );

  // navigation

  return (
    <Menu anchorEl={anchorEl} open={isVisible} onClose={onClose} onClick={onClose}>
      <UserCardForMenu onClick={onClickProfile} />
      <Divider />
      {createMenuItem(<SwitchAccountIcon isListIcon />, t("switchApp"), handleSwitchApp)}
      {createMenuItem(<SettingIcon isListIcon />, t("settings"), handleSettings)}
      {createMenuItem(<LogoutIcon isListIcon />, t("logout"), handleLogout)}
      <Divider />
      {createMenuItem(<MoonIcon isListIcon />, t("appearance"), onAppearance, true)}
      {createMenuItem(<TranslateIcon isListIcon />, t("translation"), onTranslation, true)}
      {createMenuItem(<FeedbackIcon isListIcon />, t("shareFeedback"), handleShareFeedback)}
    </Menu>
  );
}
