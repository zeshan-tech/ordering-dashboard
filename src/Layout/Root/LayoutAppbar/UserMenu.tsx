import React from "react";
import { ListItemText, Divider, MenuItem, Menu, styled } from "@mui/material";
import { useTranslation } from "react-i18next";
import { ChevronRightIcon, FeedbackIcon, LogoutIcon, MoonIcon, SettingIcon, SignalBarIcon, SwitchAccountIcon, TranslateIcon } from "@/components/icons";
import UserCardForMenu from "./UserCardForMenu";
import useNavigation from "@/navigation/useNavigation";
import { useAuth } from "@clerk/clerk-react";

interface UserMenuProps {
  anchorEl: null | HTMLElement;
  isVisible: boolean;
  onClose: () => void;
  onAppearance: () => void;
  onTranslation: () => void;
}

export default function UserMenu({ anchorEl, isVisible, onClose, onAppearance, onTranslation }: Readonly<UserMenuProps>) {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const { signOut } = useAuth();

  const handleSwitchApp = () => {
    alert("handleSwitchApp");
  };

  const handleSettings = () => {
    navigation.navigate("/settings");
  };

  const handleShareFeedback = () => {
    alert("handleShareFeedback");
  };

  const createMenuItem = (icon: React.ReactNode, label: string, onClick: () => void, hasChevron: boolean = false) => (
    <StyledMenuItem onClick={onClick}>
      {icon}
      <ListItemText>{label}</ListItemText>
      {hasChevron && <ChevronRightIcon iconButton />}
      {!hasChevron && <SignalBarIcon iconButton />}
    </StyledMenuItem>
  );

  // navigation

  return (
    <Menu anchorEl={anchorEl} open={isVisible} onClose={onClose} onClick={onClose}>
      <UserCardForMenu />
      <Divider />
      {createMenuItem(<SwitchAccountIcon isListIcon />, t("switchApp"), handleSwitchApp)}
      {createMenuItem(<SettingIcon isListIcon />, t("settings"), handleSettings)}
      {createMenuItem(<LogoutIcon isListIcon />, t("logout"), signOut)}
      <Divider />
      {createMenuItem(<MoonIcon isListIcon />, t("appearance"), onAppearance, true)}
      {createMenuItem(<TranslateIcon isListIcon />, t("translation"), onTranslation, true)}
      {createMenuItem(<FeedbackIcon isListIcon />, t("shareFeedback"), handleShareFeedback)}
    </Menu>
  );
}

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  width: theme.spacing(48),
}));
