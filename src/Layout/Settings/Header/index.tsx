import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { AppBar } from "@mui/material";
import { MenuOpenIcon } from "@/components/icons";
import { useSidebarContext } from "@/context/SidebarContext";
import { SearchInput } from "@/components/Form";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();
  const { handleToggleSettingsSidebar } = useSidebarContext();

  return (
    <Fragment>
      <AppBar>
        <StyledToolbar>
          <MenuOpenIcon iconButton onClick={handleToggleSettingsSidebar} />
          <StyledSearchInput placeholder={t("search")} />
        </StyledToolbar>
      </AppBar>
      <Outlet />
    </Fragment>
  );
}

const StyledSearchInput = styled(SearchInput)(`
  width: 50%
`);

const StyledToolbar = styled(Toolbar)`
  gap: ${({ theme }) => theme.spacing(2)};
`;
