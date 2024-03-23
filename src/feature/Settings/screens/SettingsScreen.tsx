import { useState } from "react";
import Page from "@/components/Page";
import { Divider, Grid, Stack, Typography, styled } from "@mui/material";
import StoreDisplayComponent from "../components/StoreDisplayComponent";
import { useTranslation } from "react-i18next";
import Button from "@/components/Button";
import { DeleteIcon } from "@/components/icons";
import { useDeleteStore } from "../hooks/queryHooks";
import { StoreCreateModal } from "../components";

export default function SettingsScreen() {
  const { t } = useTranslation();
  const { mutateAsync, isPending: isStoreDeleteLoading } = useDeleteStore();
  const [isStoreModalVisible, setIsStoreModalVisible] = useState(true);

  const handleStoreDelete = async () => {
    await mutateAsync();
    window.location.reload();
  };

  const handleToggleStoreModal = () => {
    setIsStoreModalVisible(false);
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
              <Button color='error' startIcon={<DeleteIcon />} onClick={handleStoreDelete} loading={isStoreDeleteLoading}>
                {t("delete")}
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
      <StoreCreateModal
        isVisible={isStoreModalVisible}
        onClose={handleToggleStoreModal}
      />
    </Page>
  );
}
const StyledDivider = styled(Divider)`
  margin-top: ${({ theme }) => theme.spacing(2)};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;
