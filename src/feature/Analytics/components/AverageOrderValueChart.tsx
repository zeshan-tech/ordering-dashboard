import { Card, CardHeader, Divider, styled } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";

export default function AverageOrderValueChart() {
  return (
    <StyledCard>
      <CardHeader title='Average order value' titleTypographyProps={{ textAlign: "center" }}></CardHeader>
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

const StyledCard = styled(Card)`
  width: fit-content;
`;
