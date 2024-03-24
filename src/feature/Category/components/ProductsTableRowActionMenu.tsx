import { ContentCopyIcon, DeleteIcon, EditIcon } from "@/components/icons";
import { useSnackbar } from "notistack";
import { ListItemText, PopoverPosition } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useTranslation } from "react-i18next";
import { useDeleteProduct } from "../hooks";
import useNavigation, { Routes } from "@/navigation/useNavigation";

interface ProductsTableRowActionMenuProps {
  onClose: () => void;
  isOpen: boolean;
  anchorPosition: PopoverPosition;
  productId: string;
  refresh: () => void;
}

export default function ProductsTableRowActionMenu({ isOpen, onClose, anchorPosition, productId, refresh }: Readonly<ProductsTableRowActionMenuProps>) {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const { enqueueSnackbar } = useSnackbar();

  const { mutateAsync: deleteProductMutateAsync } = useDeleteProduct();

  const handleCopyId = () => {
    navigator.clipboard.writeText(productId);
    enqueueSnackbar("Product ID copied to clipboard.");
  };

  const handleOnDelete = async () => {
    // Prompt the user for confirmation and ask for the ID
    const inputId = prompt(`Please enter the product ID to confirm deletion \n ID: ${productId}`);
    inputId;
    if (inputId === productId) {
      await deleteProductMutateAsync(productId);
      refresh();
    }
  };

  return (
    <Menu anchorReference='anchorPosition' anchorPosition={anchorPosition} onClose={onClose} open={isOpen} onClick={onClose}>
      <MenuItem onClick={handleCopyId}>
        <ContentCopyIcon isListIcon />
        <ListItemText>{t("copyId")}</ListItemText>
      </MenuItem>
      <MenuItem onClick={() => navigation.navigate(`/categories/products/update/${productId}` as Routes)}>
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
