import { Outlet } from "react-router-dom";
import { Box, Toolbar, Typography } from "@mui/material";
import Page from "@/components/Page";
import { useTranslation } from "react-i18next";
import Button from "@/components/Button";
import useNavigation from "@/navigation/useNavigation";
import AddCategoryModal from "./AddCategoryModal";
import { useState } from "react";

export default function StoreHeader() {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const [isCreateCategoryModalVisible, setIsCreateCategoryModalVisible] = useState(false);

  const handleToggleCreateCategoryModal = () => {
    setIsCreateCategoryModalVisible(!isCreateCategoryModalVisible);
  };

  return (
    <Page>
      <Toolbar>
        <Typography variant='h5' sx={{ flexGrow: 1 }}>
          {t("totalCategories")}
        </Typography>
        <Button onClick={handleToggleCreateCategoryModal}>{t("createCategory")}</Button>
      </Toolbar>
      <AddCategoryModal isVisible={isCreateCategoryModalVisible} onClose={handleToggleCreateCategoryModal} />
      <Outlet />
    </Page>
  );
}
