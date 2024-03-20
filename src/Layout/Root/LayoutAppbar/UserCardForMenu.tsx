import { LinearProgress, ListItem, ListItemAvatar, ListItemText, SxProps } from "@mui/material";
import { LogoutIcon } from "@/components/icons";
import Avatar from "@/components/Avatar";
import useThemeStyles from "@/theme/hooks/useThemeStyles";
import { ListSubheader } from "@/components/Tags";
import { useAuthContext } from "@/context/AuthContext";
import { useUser } from "@clerk/clerk-react";

export default function UserCardForMenu() {
  const { handleLogout } = useAuthContext();
  const { user, isLoaded } = useUser();

  const avatarStyle = useThemeStyles<SxProps>((theme) => ({
    width: 56,
    height: 56,
    marginRight: theme.spacing(1),
  }));

  if (!isLoaded) {
    return <LinearProgress />;
  }

  return (
    <ListSubheader disableGutters>
      <ListItem secondaryAction={<LogoutIcon onClick={handleLogout} />}>
        <ListItemAvatar>
          <Avatar sizes='small' src={user?.imageUrl} sx={avatarStyle} />
        </ListItemAvatar>
        <ListItemText
          primary={user?.fullName}
          primaryTypographyProps={{
            variant: "subtitle1",
          }}
          secondary={user?.primaryEmailAddress?.emailAddress}
          secondaryTypographyProps={{
            variant: "subtitle2",
          }}
        />
      </ListItem>
    </ListSubheader>
  );
}
