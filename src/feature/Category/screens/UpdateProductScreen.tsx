import { AppBar, Toolbar, Typography } from "@mui/material";
import { ClearIcon } from "@/components/icons";
import { Dialog } from "@/components/Dialog";
import useNavigation from "@/navigation/useNavigation";
import { useParams } from "react-router-dom";
import { UpdateProductForm } from "../components";

export default function UpdateProductScreen() {
  const navigation = useNavigation();
  const { productId } = useParams();

  const handleBackNavigate = () => {
    navigation.goBack();
  };

  return (
    <Dialog fullScreen open onClose={handleBackNavigate}>
      <AppBar sx={{ position: "relative" }}>
        <Toolbar>
          <ClearIcon iconButton onClick={handleBackNavigate} />
          <Typography variant='h5'>Update product</Typography>
        </Toolbar>
      </AppBar>
      <UpdateProductForm productId={productId!} />
    </Dialog>
  );
}
