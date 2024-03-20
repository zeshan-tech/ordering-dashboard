import { Card, CardHeader, Divider, styled } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";

export default function TotalSallingProducts() {
  return (
    <StyledCard>
      <CardHeader title='Total selling products' titleTypographyProps={{ textAlign: "center" }}></CardHeader>
      <Divider />
      <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5],
          },
        ]}
        width={700}
        height={300}
      />
    </StyledCard>
  );
}

const StyledCard = styled(Card)(({ theme }) => ({
  width: "fit-content",
}));
