import React, { useCallback, useMemo, useState } from "react";
import { Divider, ListItemText, Menu, MenuItem, SxProps, styled } from "@mui/material";
import { useTranslation } from "react-i18next";
import { SearchIcon, SignalBarIcon, TranslateIcon } from "@/components/icons";
import { SearchInput } from "@/components/Form";
import { ListSubheader } from "@/components/Tags";
import { nanoid } from "nanoid";

interface TranslationMenuProps {
  anchorEl: null | HTMLElement;
  isVisible: boolean;
  onClose: () => void;
}

interface Language {
  code: string;
  languageName: string;
  countryName: string;
  flag: string;
}

const supportedLanguages: Language[] = [
  { code: "en", languageName: "English", countryName: "America", flag: "🇺🇸" },
  { code: "ar", languageName: "Arabic", countryName: "Palestine", flag: "🇵🇸" },
  { code: "hi", languageName: "Hindi", countryName: "India", flag: "🇮🇳" },
  { code: "ur", languageName: "Urdu", countryName: "Pakistan", flag: "🇵🇰" },
];

export default function TranslationMenu({ anchorEl, isVisible, onClose }: Readonly<TranslationMenuProps>) {
  const { t, i18n } = useTranslation();
  const [isSearchInputVisible, setIsSearchInputVisible] = useState(false);
  const [searchText, setSearchText] = useState("");

  const filteredLanguages = useMemo(() => {
    return supportedLanguages.filter((language) => language.languageName.toLowerCase().includes(searchText.toLowerCase()) || language.countryName.toLowerCase().includes(searchText.toLowerCase()));
  }, [searchText]);

  const handleSearchChange = useCallback((text: string) => {
    setSearchText(text);
  }, []);

  const handleToggleSearchInput = () => {
    setIsSearchInputVisible(!isSearchInputVisible);
    setSearchText("");
  };

  const renderHeader = (
    <StyledListSubheader>
      <>{t("title")}</>
      <SearchIcon onClick={handleToggleSearchInput} />
    </StyledListSubheader>
  );

  const createMenuItem = (icon: React.ReactNode, label: string, onClick: () => void) => (
    <StyledMenuItem onClick={onClick}>
      {icon}
      <ListItemText>{label}</ListItemText>
      <SignalBarIcon iconButton />
    </StyledMenuItem>
  );

  return (
    <Menu anchorEl={anchorEl} open={isVisible} onClose={onClose} key={nanoid()}>
      {renderHeader}
      <Divider />
      {isSearchInputVisible ? <SearchInput autoFocus onChange={handleSearchChange} placeholder={t("search")} /> : null}
      {filteredLanguages.map((language) => createMenuItem(<TranslateIcon isListIcon />, `${language.languageName} - ${language.countryName}`, () => i18n.changeLanguage(language.code)))}
    </Menu>
  );
}

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  width: theme.spacing(48),
}));

const StyledListSubheader = styled(ListSubheader)(`
  display: flex;
  justify-content: space-between;
  width: 100%;
`);
