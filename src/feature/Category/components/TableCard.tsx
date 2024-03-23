import { CardContent, Typography, styled } from "@mui/material";
import Card from "@mui/material/Card";

interface TableCardProps {
  logoUrl: string;
  name: string;
  type: string;
}

export default function TableCard({ logoUrl, name, type }: Readonly<TableCardProps>) {
  return (
    <StyledCard elevation={0}>
      <StyledCardMedia src={logoUrl} />
      <CardContentNoPadding>
        <Typography variant='subtitle1'>{name}</Typography>
        <Typography variant='caption' color={"InactiveCaptionText"}>
          {`(${type})`}
        </Typography>
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
