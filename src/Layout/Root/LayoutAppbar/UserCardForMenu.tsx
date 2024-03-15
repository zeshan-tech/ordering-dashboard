import { ListItem, ListItemAvatar, ListItemText, SxProps } from "@mui/material";
import { LogoutIcon } from "@/components/icons";
import useUserDetails from "@/context/UserDetails.context";
import Avatar from "@/components/Avatar";
import useThemeStyles from "@/theme/hooks/useThemeStyles";
import { ListSubheader } from "@/components/Tags";
import { useAuthContext } from "@/context/AuthContext";

interface UserCardForMenuProps {
  onClick: () => void;
}

export default function UserCardForMenu({ onClick }: UserCardForMenuProps) {
  const { handleLogout } = useAuthContext();
  const { fullName, imageUrl, userName } = useUserDetails();

  const avatarStyle = useThemeStyles<SxProps>((theme) => ({
    width: 56,
    height: 56,
    marginRight: theme.spacing(1),
  }));

  return (
    <ListSubheader onClick={onClick} disableGutters>
      <ListItem secondaryAction={<LogoutIcon onClick={handleLogout} />}>
        <ListItemAvatar>
          <Avatar sizes='small' src={imageUrl} sx={avatarStyle} />
        </ListItemAvatar>
        <ListItemText
          primary={fullName}
          primaryTypographyProps={{
            variant: "subtitle1",
          }}
          secondary={userName}
          secondaryTypographyProps={{
            variant: "subtitle2",
          }}
        />
      </ListItem>
    </ListSubheader>
  );
}
