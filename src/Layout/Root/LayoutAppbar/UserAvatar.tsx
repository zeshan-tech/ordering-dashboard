import React, { Fragment, useState } from "react";

import UserMenu from "./UserMenu";
import AppearanceMenu from "./AppearanceMenu";
import TranslationMenu from "./TranslationMenu";
import { SettingIcon } from "@/components/icons";
import Button from "@/components/Button";
import { SignInButton, SignedIn, SignedOut, UserButton, useUser } from "@clerk/clerk-react";

export default function UserAvatar() {
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
      <Button variant="text">
        <SignedIn>
          <UserButton afterSignOutUrl={window.location.href} />
        </SignedIn>
        <SettingIcon onClick={handleMenuOpen} />
      </Button>
      <UserMenu anchorEl={anchorEl} isVisible={Boolean(anchorEl)} onClose={handleMenuClose} onAppearance={handleAppearance} onTranslation={handleTranslation} />

      <AppearanceMenu anchorEl={appearanceMenuAnchorEl} isVisible={Boolean(appearanceMenuAnchorEl)} onClose={handleAppearanceMenuClose} />
      <TranslationMenu anchorEl={translationMenuAnchorEl} isVisible={Boolean(translationMenuAnchorEl)} onClose={handleTranslationMenuClose} />
    </Fragment>
  );
}
