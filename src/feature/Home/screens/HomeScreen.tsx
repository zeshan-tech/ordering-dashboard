import Page from "@/components/Page";
import { Card } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";

export default function HomeScreen() {
  return (
    <Page>
      <Card sx={{ width: "fit-content", margin: "auto" }}>
        <LineChart
          xAxis={[{ data: [1, 2, 3, 5, 8, 10, 12, 15, 16] }]}
          series={[
            {
              data: [2, 5.5, 2, 8.5, 1.5, 5],
              valueFormatter: (value) => (value == null ? "NaN" : value.toString()),
            },
            {
              data: [null, null, null, null, 5.5, 2, 8.5, 1.5, 5],
            },
            {
              data: [null, null, null, null, 5.5, 2, 8.5, 1.5, 5],
            },
            {
              data: [7, 8, 5, 4, null, 1, 2, 5.5, 1],
              valueFormatter: (value) => (value == null ? "?" : value.toString()),
            },
          ]}
          height={400}
          width={1200}
        />
      </Card>
    </Page>
  );
}
