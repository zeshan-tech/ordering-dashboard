import React, { Fragment, useState } from "react";

import Avatar from "@/components/Avatar";
import { useAuthContext } from "@/context/AuthContext";
import useUserDetail from "@/context/UserDetail.context";
import UserMenu from "./UserMenu";
import AppearanceMenu from "./AppearanceMenu";
import TranslationMenu from "./TranslationMenu";

export default function UserAvatar() {
  const { imageUrl } = useUserDetail();
  const { handleLogout } = useAuthContext();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [appearanceMenuAnchorEl, setAppearanceMenuAnchorEl] = useState<null | HTMLElement>(null);
  const [translationMenuAnchorEl, setTranslationMenuAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleAppearanceMenuClose = () => {
    setAnchorEl(appearanceMenuAnchorEl);
    setAppearanceMenuAnchorEl(null);
  };

  const handleAppearance = () => {
    setAppearanceMenuAnchorEl(anchorEl);
  };

  const handleTranslationMenuClose = () => {
    setAnchorEl(translationMenuAnchorEl);
    setTranslationMenuAnchorEl(null);
  };

  const handleTranslation = () => {
    setTranslationMenuAnchorEl(anchorEl);
  };

  const handleSwitchAccount = () => {
    alert("handleSwitchAccount");
  };

  const handleSetting = () => {
    alert("handleSetting");
  };

  const handleShareFeedback = () => {
    alert("handleShareFeedback");
  };

  return (
    <Fragment>
      <Avatar src={imageUrl} onClick={handleMenuOpen} />
      <UserMenu
        anchorEl={anchorEl}
        isVisible={Boolean(anchorEl)}
        onClose={handleMenuClose}
        onSwitchAccount={handleSwitchAccount}
        onSetting={handleSetting}
        onLogout={handleLogout}
        onAppearance={handleAppearance}
        onTranslation={handleTranslation}
        onShareFeedback={handleShareFeedback}
        onClickProfile={function (): void {
          throw new Error("Function not implemented.");
        }}
      />

      <AppearanceMenu anchorEl={appearanceMenuAnchorEl} isVisible={Boolean(appearanceMenuAnchorEl)} onClose={handleAppearanceMenuClose} />
      <TranslationMenu anchorEl={translationMenuAnchorEl} isVisible={Boolean(translationMenuAnchorEl)} onClose={handleTranslationMenuClose} />
    </Fragment>
  );
}
