import React, { Fragment, useState } from "react";

import Avatar from "@/components/Avatar";
import useUserDetails from "@/context/UserDetails.context";
import UserMenu from "./UserMenu";
import AppearanceMenu from "./AppearanceMenu";
import TranslationMenu from "./TranslationMenu";

export default function UserAvatar() {
  const { imageUrl } = useUserDetails();
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

  return (
    <Fragment>
      <Avatar src={imageUrl} onClick={handleMenuOpen} />
      <UserMenu
        anchorEl={anchorEl}
        isVisible={Boolean(anchorEl)}
        onClose={handleMenuClose}
        onAppearance={handleAppearance}
        onTranslation={handleTranslation}
        onClickProfile={function (): void {
          throw new Error("Function not implemented.");
        }}
      />

      <AppearanceMenu anchorEl={appearanceMenuAnchorEl} isVisible={Boolean(appearanceMenuAnchorEl)} onClose={handleAppearanceMenuClose} />
      <TranslationMenu anchorEl={translationMenuAnchorEl} isVisible={Boolean(translationMenuAnchorEl)} onClose={handleTranslationMenuClose} />
    </Fragment>
  );
}
