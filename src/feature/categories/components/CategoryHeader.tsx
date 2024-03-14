import { Outlet } from "react-router-dom";
import { Box, Toolbar, Typography } from "@mui/material";
import Page from "@/components/Page";
import { useTranslation } from "react-i18next";
import Button from "@/components/Button";

export default function StoreHeader() {
  const { t } = useTranslation();

  return (
    <Page>
      <Toolbar>
        <Typography variant='h5' sx={{ flexGrow: 1 }}>
          {t("totalCategories")}
        </Typography>
        <Box display='flex' gap={1}>
          <Button>Create category</Button>
          <Button>Add product</Button>
          <Button>Create category</Button>
          <Button>Visit category</Button>
        </Box>
      </Toolbar>
      <Outlet />
    </Page>
  );
}
