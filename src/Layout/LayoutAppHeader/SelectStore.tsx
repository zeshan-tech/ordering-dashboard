import { Divider, ListItemText, MenuItem, Stack, SxProps, TextField } from "@mui/material";
import { useTranslation } from "react-i18next";
import { SearchInput } from "@/components/Form";
import useThemeStyles from "@/theme/hooks/useThemeStyles";
import Button from "@/components/Button";
import { AddIcon } from "@/components/icons";
import { useStore } from "@/context/StoreContext";
import StoreCreateModal from "./StoreCreateModal";
import { useState } from "react";

export default function SelectStore() {
  const { t } = useTranslation();
  const { activeStoreId, setActiveStoreId } = useStore();

  const [createStoreModalVisible, setSreateStoreModalVisible] = useState(false);

  const handleToggleCreateStoreModal = () => {
    setSreateStoreModalVisible(!createStoreModalVisible);
  };

  const selectInputStyle = useThemeStyles<SxProps>((theme) => ({
    width: theme.spacing(32),
  }));

  return (
    <TextField sx={selectInputStyle} select size='small' value={activeStoreId} onChange={(e) => setActiveStoreId(e.target.value)}>
      <SearchInput autoFocus placeholder={t("search")} />
      {storeList.map((store) => {
        return (
          <MenuItem value={store}>
            <ListItemText>{store}</ListItemText>
          </MenuItem>
        );
      })}
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

const storeList = ["Store 1", "Store 2", "Store 3", "Store 4", "Store 5", "Store 6", "Store 7", "Store 8", "Store 9"];
