import React from "react";
import { ListItemText, Divider, MenuItem, Menu, SxProps } from "@mui/material";
import { useTranslation } from "react-i18next";
import { ChevronRightIcon, FeedbackIcon, LogoutIcon, MoonIcon, SettingIcon, SignalBarIcon, SwitchAccountIcon, TranslateIcon } from "@/components/icons";
import UserCardForMenu from "./UserCardForMenu";
import useThemeStyles from "@/theme/hooks/useThemeStyles";

interface UserMenuProps {
  anchorEl: null | HTMLElement;
  isVisible: boolean;
  onClose: () => void;
  onSwitchAccount: () => void;
  onSetting: () => void;
  onLogout: () => void;
  onClickProfile: () => void;
  onAppearance: () => void;
  onTranslation: () => void;
  onShareFeedback: () => void;
}

export default function UserMenu({ anchorEl, isVisible, onClose, onSwitchAccount, onSetting, onClickProfile, onLogout, onAppearance, onTranslation, onShareFeedback }: Readonly<UserMenuProps>) {
  const { t } = useTranslation();

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

  return (
    <Menu anchorEl={anchorEl} open={isVisible} onClose={onClose} onClick={onClose}>
      <UserCardForMenu onClick={onClickProfile} onLogout={onLogout} />
      <Divider />
      {createMenuItem(<SwitchAccountIcon isListIcon />, t("switchApp"), onSwitchAccount)}
      {createMenuItem(<SettingIcon isListIcon />, t("settings"), onSetting)}
      {createMenuItem(<LogoutIcon isListIcon />, t("logout"), onLogout)}
      <Divider />
      {createMenuItem(<MoonIcon isListIcon />, t("appearance"), onAppearance, true)}
      {createMenuItem(<TranslateIcon isListIcon />, t("translation"), onTranslation, true)}
      {createMenuItem(<FeedbackIcon isListIcon />, t("shareFeedback"), onShareFeedback)}
    </Menu>
  );
}
