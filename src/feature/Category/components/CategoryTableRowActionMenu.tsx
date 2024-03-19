import { ContentCopyIcon, DeleteIcon, EditIcon } from "@/components/icons";
import { useSnackbar } from "notistack";
import { ListItemText, PopoverPosition } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useTranslation } from "react-i18next";
import { useDeleteCategory } from "../hooks";
import useNavigation, { Routes } from "@/navigation/useNavigation";

interface StoreTableRowActionMenuProps {
  onClose: () => void;
  isOpen: boolean;
  anchorPosition: PopoverPosition;
  categoryId: string;
  refresh: () => void;
}

export default function StoreTableRowActionMenu({ isOpen, onClose, anchorPosition, categoryId, refresh }: Readonly<StoreTableRowActionMenuProps>) {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const { enqueueSnackbar } = useSnackbar();
  
  const { mutateAsync: deleteCategoryMutateAsync } = useDeleteCategory();

  const handleCopyId = () => {
    navigator.clipboard.writeText(categoryId);
    enqueueSnackbar("Category ID copied to clipboard.");
  };

  const handleOnDelete = async () => {
    // Prompt the user for confirmation and ask for the ID
    const inputId = prompt(`Please enter the category ID to confirm deletion \n ID: ${categoryId}`);

    if (inputId === categoryId) {
      await deleteCategoryMutateAsync(categoryId);
      refresh();
    }
  };

  return (
    <Menu anchorReference='anchorPosition' anchorPosition={anchorPosition} onClose={onClose} open={isOpen} onClick={onClose}>
      <MenuItem onClick={handleCopyId}>
        <ContentCopyIcon isListIcon />
        <ListItemText>{t("copyId")}</ListItemText>
      </MenuItem>
      <MenuItem onClick={() => navigation.navigate(`/categories/update/${categoryId}` as Routes)}>
        <EditIcon isListIcon color='primary' />
        <ListItemText>{t("edit")}</ListItemText>
      </MenuItem>
      <MenuItem onClick={handleOnDelete}>
        <DeleteIcon isListIcon color='error' />
        <ListItemText>{t("delete")}</ListItemText>
      </MenuItem>
    </Menu>
  );
}
