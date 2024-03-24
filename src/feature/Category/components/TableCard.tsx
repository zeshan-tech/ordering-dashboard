import { CardContent, Typography, styled } from "@mui/material";
import Card from "@mui/material/Card";
import { truncate } from "lodash";

interface TableCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

export default function TableCard({ imageSrc, title, description }: Readonly<TableCardProps>) {
  return (
    <StyledCard>
      <StyledCardMedia src={imageSrc} />
      <CardContent>
        <Typography variant='subtitle1'>{truncate(title, { length: 60 })}</Typography>
        <Typography variant='subtitle2'>{truncate(description, { length: 60 })}</Typography>
      </CardContent>
    </StyledCard>
  );
}

const StyledCardMedia = styled("img")`
  objectfit: "contain";
`;

const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  background: "transparent",
  p: theme.spacing(1),
  gap: theme.spacing(2),
  height: theme.spacing(16),
  width: "100%",
}));
