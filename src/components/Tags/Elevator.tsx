import { styled } from "@mui/system";
import { CardProps } from "@mui/material/Card";
import Stack, { StackProps } from "@mui/material/Stack";
import { SxProps } from "@mui/material";

export default function Elevator({ children, elevation = 1, sx, ...restProps }: CardProps) {
  return (
    <StyledStack elevation={elevation} sx={sx} {...restProps}>
      {children}
    </StyledStack>
  );
}

const StyledStack = styled(Stack)(({ theme, elevation = 1, sx }: { theme: any; elevation?: number; sx?: SxProps }) => ({
  boxShadow: theme.shadows[elevation],
  borderRadius: theme.shape.borderRadius / 6,
  background: theme.palette.background.default,
  ...sx,
}));
