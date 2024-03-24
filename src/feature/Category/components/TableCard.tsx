import { CardContent, Typography, styled } from "@mui/material";
import Card from "@mui/material/Card";

interface TableCardProps {
  imageSrc: string;
  title: string;
  price: string;
}

export default function TableCard({ imageSrc, title, price }: Readonly<TableCardProps>) {
  return (
    <StyledCard elevation={0}>
      <StyledCardMedia src={imageSrc} />
      <CardContentNoPadding>
        <Typography variant='subtitle1'>{title}</Typography>
        <Typography variant='subtitle2'>$: {price}</Typography>
      </CardContentNoPadding>
    </StyledCard>
  );
}

const CardContentNoPadding = styled(CardContent)(`
  padding: 0;
  &:last-child {
    padding-bottom: 0;
  }
`);

const StyledCardMedia = styled("img")(({ theme }) => ({
  width: theme.spacing(8),
  height: theme.spacing(8),
  objectFit: "contain",
}));

const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  background: "transparent",
  p: theme.spacing(1),
  gap: theme.spacing(2),
}));
