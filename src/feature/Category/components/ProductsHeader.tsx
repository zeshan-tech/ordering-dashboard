import { Outlet } from "react-router-dom";
import { Toolbar, Typography } from "@mui/material";
import Page from "@/components/Page";
import { useTranslation } from "react-i18next";
import Button from "@/components/Button";
import useNavigation from "@/navigation/useNavigation";

export default function ProductsHeader() {
  const { t } = useTranslation();
  const navigation = useNavigation();

  return (
    <Page>
      <Toolbar>
        <Typography variant='h5' sx={{ flexGrow: 1 }}>
          {t("selectedCategoryName")}
        </Typography>
        <Button onClick={() => navigation.navigate("/categories/add")}>{t("addProduct")}</Button>
      </Toolbar>
      <Outlet />
    </Page>
  );
}
