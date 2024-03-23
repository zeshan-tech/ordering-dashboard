import { DialogActions as MuiDialogActions, DialogActionsProps, styled } from "@mui/material";

export default function DialogAction({ sx, ...restProps }: Readonly<DialogActionsProps>) {
  return <StyledMuiDialogActions {...restProps} />;
}

const StyledMuiDialogActions = styled(MuiDialogActions)(({ theme }) => ({
  background: theme.palette.background.default,
}));
