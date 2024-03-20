import { Outlet } from "react-router-dom";
import { Stack, Toolbar, Typography } from "@mui/material";
import Page from "@/components/Page";
import { useTranslation } from "react-i18next";
import Button from "@/components/Button";
import { EventIcon } from "@/components/icons";

export default function AnalyticsHeader() {
  const { t } = useTranslation();

  return (
    <Page>
      <Toolbar>
        <Typography variant='h5' sx={{ flexGrow: 1 }}>
          {t("reviewAnalytics")}
        </Typography>
        <Stack gap={1} flexDirection={"row"}>
          <Button startIcon={<EventIcon />}>Today</Button>
          <Button>Compare to: Yesterday</Button>
        </Stack>

        {/* <Button onClick={() => navigation.navigate("/categories/add")}>{t("createAnalytics")}</Button> */}
      </Toolbar>
      <Outlet />
    </Page>
  );
}
