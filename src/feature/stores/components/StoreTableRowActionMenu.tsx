import { CheckBoxIcon, DeleteIcon, DetailsIcon, EditIcon, OpenTabIcon, RefreshIcon } from "@/components/icons";
import useThemeStyles from "@/theme/hooks/useThemeStyles";
import { ListItemText, PopoverPosition, SxProps } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useTranslation } from "react-i18next";

interface StoreTableRowActionMenuProps {
  onRefresh: () => void;
  onSelect: () => void;
  onClose: () => void;
  isOpen: boolean;
  anchorPosition: PopoverPosition;
}

export default function StoreTableRowActionMenu({ isOpen, onClose, onRefresh, onSelect, anchorPosition }: StoreTableRowActionMenuProps) {
  const { t } = useTranslation();

  const handleOnDelete = async () => {
    // TODO: should show confirmaion modal
    onRefresh();
  };

  const handleOnEdit = () => {};

  const handleOnDetails = () => {};

  const menuItemStyle = useThemeStyles<SxProps>((theme) => ({
    width: theme.spacing(32),
  }));

  return (
    <Menu anchorReference='anchorPosition' anchorPosition={anchorPosition} onClose={onClose} open={isOpen} onClick={onClose}>
      <MenuItem sx={menuItemStyle}>
        <OpenTabIcon isListIcon />
        <ListItemText>{t("playOnZgayaHub")}</ListItemText>
      </MenuItem>
      <MenuItem onClick={onRefresh} sx={menuItemStyle}>
        <RefreshIcon isListIcon />
        <ListItemText>{t("refresh")}</ListItemText>
      </MenuItem>
      <MenuItem onClick={onSelect} sx={menuItemStyle}>
        <CheckBoxIcon isListIcon />
        <ListItemText>{t("select")}</ListItemText>
      </MenuItem>
      <MenuItem onClick={handleOnEdit} sx={menuItemStyle}>
        <EditIcon isListIcon color='primary' />
        <ListItemText>{t("edit")}</ListItemText>
      </MenuItem>
      <MenuItem onClick={handleOnDelete} sx={menuItemStyle}>
        <DeleteIcon isListIcon color='error' />
        <ListItemText>{t("delete")}</ListItemText>
      </MenuItem>
      <MenuItem onClick={handleOnDetails} sx={menuItemStyle}>
        <DetailsIcon isListIcon />
        <ListItemText>{t("details")}</ListItemText>
      </MenuItem>
    </Menu>
  );
}
