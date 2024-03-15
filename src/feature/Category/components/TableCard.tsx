import { ReactNode } from "react";
import { CardContent, SxProps, Typography, styled } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

import useThemeStyles from "@/theme/hooks/useThemeStyles";

interface TableCardProps {
  logoUrl: string;
  name: string;
  type: string;
  onClickMenuIcon?: () => void;
  children?: ReactNode;
}

export default function TableCard({ logoUrl, name, type }: TableCardProps) {
  const cardImageStyle = useThemeStyles<SxProps>((theme) => ({
    width: theme.spacing(8),
    height: theme.spacing(8),
    objectFit: "contain",
  }));

  const cardStyle = useThemeStyles<SxProps>((theme) => ({
    p: theme.spacing(1),
    gap: theme.spacing(2),
  }));

  return (
    <DisplayFlexCard elevation={0} sx={cardStyle}>
      <CardMedia sx={cardImageStyle} component='img' image={logoUrl} />
      <CardContentNoPadding>
        <Typography variant='subtitle1'>{name}</Typography>
        <Typography variant='caption' color={"InactiveCaptionText"}>
          {`(${type})`}
        </Typography>
      </CardContentNoPadding>
    </DisplayFlexCard>
  );
}

const CardContentNoPadding = styled(CardContent)(`
  padding: 0;
  &:last-child {
    padding-bottom: 0;
  }
`);

const DisplayFlexCard = styled(Card)(`
  display: flex;
  background: transparent;
`);
