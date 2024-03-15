import { Divider, LinearProgress, ListItemText, MenuItem, Stack, SxProps, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";
import { SearchInput } from "@/components/Form";
import useThemeStyles from "@/theme/hooks/useThemeStyles";
import Button from "@/components/Button";
import { AddIcon } from "@/components/icons";
import { useStore } from "@/context/StoreContext";
import StoreCreateModal from "./StoreCreateModal";
import { useState } from "react";
import { useGetAllUserStores } from "./hooks/queryHooks";

export default function SelectStore() {
  const { t } = useTranslation();
  const { activeStoreId, handleSetActiveStoreId } = useStore();

  const [createStoreModalVisible, setCreateStoreModalVisible] = useState(false);

  const { data, isLoading } = useGetAllUserStores();

  const handleToggleCreateStoreModal = () => {
    setCreateStoreModalVisible(!createStoreModalVisible);
  };

  const selectInputStyle = useThemeStyles<SxProps>((theme) => ({
    width: theme.spacing(32),
  }));

  return (
    <TextField sx={selectInputStyle} select size='small' value={activeStoreId} onChange={(e) => handleSetActiveStoreId(e.target.value)}>
      <SearchInput autoFocus placeholder={t("search")} />
      {isLoading ? (
        <LinearProgress />
      ) : (
        (data ?? []).map((store) => {
          return (
            <MenuItem value={store.ID}>
              <ListItemText>{store.name}</ListItemText>
            </MenuItem>
          );
        })
      )}

      <Divider />

      <Stack p={1}>
        <Button startIcon={<AddIcon />} fullWidth onClick={handleToggleCreateStoreModal}>
          Create store
        </Button>
      </Stack>
      <StoreCreateModal isVisible={createStoreModalVisible} onClose={handleToggleCreateStoreModal} />
    </TextField>
  );
}
