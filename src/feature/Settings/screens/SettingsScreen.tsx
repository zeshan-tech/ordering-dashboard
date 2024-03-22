import { useState } from "react";
import Page from "@/components/Page";
import { Dialog, DialogContent, DialogContentText, DialogTitle, Divider, Grid, Stack, Typography, styled } from "@mui/material";
import StoreDisplayComponent from "../components/StoreDisplayComponent";
import { useTranslation } from "react-i18next";
import Button from "@/components/Button";
import { DeleteIcon } from "@/components/icons";
import { useDeleteStore } from "../hooks/queryHooks";
import DialogAction from "@/components/Dialog/DialogActions";

export default function SettingsScreen() {
  const { t } = useTranslation();
  const { mutateAsync, isPending: isStoreDeleteLoading } = useDeleteStore();
  const [openDialog, setOpenDialog] = useState(true);

  const handleStoreDelete = async () => {
    await mutateAsync();
    window.location.reload();
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Page>
      <Stack p={2}>
        <StoreDisplayComponent />

        <StyledDivider />
        <Grid container spacing={2}>
          <Grid item xs={8} md={4}>
            <Typography variant='h5' color={"red"}>
              {t("danger")}
            </Typography>
            <Stack flexDirection={"row"} alignItems={"end"} justifyContent={"space-between"}>
              <Typography variant='subtitle1'>{t("delete")}</Typography>
              <Button color='error' startIcon={<DeleteIcon />} onClick={handleOpenDialog} loading={isStoreDeleteLoading}>
                {t("delete")}
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth='sm' fullWidth>
        <DialogTitle>Alert - changes will not effect on organization</DialogTitle>
        <DialogContent>
          <DialogContentText>Alert - changes will not effect on organization because our team is working on it</DialogContentText>
        </DialogContent>
        <DialogAction>
          <Button onClick={handleCloseDialog}>{t("close")}</Button>
        </DialogAction>
      </Dialog>
    </Page>
  );
}

const StyledDivider = styled(Divider)`
  margin-top: ${({ theme }) => theme.spacing(2)};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;
