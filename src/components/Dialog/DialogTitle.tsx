import { DialogTitle as MuiDialogTitle, DialogTitleProps as MuiDialogTitleProps, styled } from "@mui/material";

export default function DialogTitle({ children, sx, variant = "h5", ...restProps }: Readonly<MuiDialogTitleProps>) {
  return (
    <StyledMuiDialogTitle variant={variant} {...restProps}>
      {children}
    </StyledMuiDialogTitle>
  );
}

const StyledMuiDialogTitle = styled(MuiDialogTitle)(({ theme }) => ({
  background: theme.palette.background.default,
}));
