import { AppBar, Toolbar, Typography } from "@mui/material";
import { ClearIcon } from "@/components/icons";
import { Dialog } from "@/components/Dialog";
import useNavigation from "@/navigation/useNavigation";
import { useParams } from "react-router-dom";
import { AddProductForm } from "../components";

export default function AddProductScreen() {
  const navigation = useNavigation();
  const { categoryId } = useParams();

  const handleBackNavigate = () => {
    navigation.goBack();
  };

  return (
    <Dialog fullScreen open onClose={handleBackNavigate}>
      <AppBar sx={{ position: "relative" }}>
        <Toolbar>
          <ClearIcon iconButton onClick={handleBackNavigate} />
          <Typography variant='h5'>Add product</Typography>
        </Toolbar>
      </AppBar>
      <AddProductForm categoryId={categoryId!} />
    </Dialog>
  );
}
