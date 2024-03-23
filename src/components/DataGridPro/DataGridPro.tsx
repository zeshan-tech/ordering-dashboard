import { DataGridPro as MuiDataGridPro, DataGridProProps as MuiDataGridProProps } from "@mui/x-data-grid-pro";
import { DataGridEmptyComponent } from ".";
import { styled } from "@mui/material";

export default function DataGridPro({ slots, ...restProps }: Readonly<MuiDataGridProProps>) {
  return <StyledMuiDataGridPro {...restProps} slots={{ noRowsOverlay: DataGridEmptyComponent, ...slots }} />;
}

const StyledMuiDataGridPro = styled(MuiDataGridPro)(({ theme }) => ({
  background: theme.palette.background.default,
  paddingY: theme.spacing(1),
  height: theme.spacing(64),
}));
