import Page from "@/components/Page";
import { AverageOrderValueChart, OnlineStoreSessionChart, ReturningCustomerRate, TotalOrdersChart, TotalSalesChart, TotalSellingProducts } from "../components";
import { Grid, Stack } from "@mui/material";

export default function AnalyticsScreen() {
  return (
    <Page>
      <Stack gap={4}>
        <Grid container spacing={2} justifyContent={"space-around"}>
          <Grid item xs={5}>
            <TotalSalesChart />
          </Grid>
          <Grid item xs={5}>
            <OnlineStoreSessionChart />
          </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent={"space-around"}>
          <Grid item xs={5}>
            <TotalOrdersChart />
          </Grid>
          <Grid item xs={5}>
            <AverageOrderValueChart />
          </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent={"space-around"}>
          <Grid item xs={5}>
            <TotalSellingProducts />
          </Grid>
          <Grid item xs={5}>
            <ReturningCustomerRate />
          </Grid>
        </Grid>
      </Stack>
    </Page>
  );
}
