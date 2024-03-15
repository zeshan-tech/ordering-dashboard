import { DeleteIcon, EditIcon, RefreshIcon } from "@/components/icons";
import useThemeStyles from "@/theme/hooks/useThemeStyles";
import { ListItemText, PopoverPosition, SxProps } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useTranslation } from "react-i18next";

interface StoreTableRowActionMenuProps {
  onClose: () => void;
  isOpen: boolean;
  anchorPosition: PopoverPosition;
}

export default function StoreTableRowActionMenu({ isOpen, onClose, anchorPosition }: Readonly<StoreTableRowActionMenuProps>) {
  const { t } = useTranslation();

  const handleOnEdit = () => {};
  const handleCopyId = () => {};
  const handleOnDelete = () => {};

  const menuItemStyle = useThemeStyles<SxProps>((theme) => ({
    width: theme.spacing(32),
  }));

  return (
    <Menu anchorReference='anchorPosition' anchorPosition={anchorPosition} onClose={onClose} open={isOpen} onClick={onClose}>
      <MenuItem onClick={handleCopyId} sx={menuItemStyle}>
        <RefreshIcon isListIcon />
        <ListItemText>{t("copyId")}</ListItemText>
      </MenuItem>
      <MenuItem onClick={handleOnEdit} sx={menuItemStyle}>
        <EditIcon isListIcon color='primary' />
        <ListItemText>{t("edit")}</ListItemText>
      </MenuItem>
      <MenuItem onClick={handleOnDelete} sx={menuItemStyle}>
        <DeleteIcon isListIcon color='error' />
        <ListItemText>{t("delete")}</ListItemText>
      </MenuItem>
    </Menu>
  );
}
