import Page from "@/components/Page";
import { ProductsTable } from "../components";
import { useParams } from "react-router-dom";
import { Toolbar, Typography } from "@mui/material";
import Button from "@/components/Button";
import { useTranslation } from "react-i18next";
import useNavigation, { Routes } from "@/navigation/useNavigation";

export default function ProductsScreen() {
  const { t } = useTranslation();
  const { categoryId } = useParams();
  const navigation = useNavigation();

  return (
    <Page >
      <Toolbar>
        <Typography variant='h5' sx={{ flexGrow: 1 }}>
          {t("selectedCategoryName")}
        </Typography>
        <Button onClick={() => navigation.navigate(`/categories/products/add/${categoryId}` as Routes)}>{t("addProduct")}</Button>
      </Toolbar>
      <ProductsTable categoryId={categoryId!} />
    </Page>
  );
}
