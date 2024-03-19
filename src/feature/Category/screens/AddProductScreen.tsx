import { useAddNewProduct, useGetProductsByCategoryId } from "../hooks";
import { useForm } from "react-hook-form";
import { IAddNewProductInput } from "../types";
import { Form, SelectInput, TextField } from "@/components/Form";
import { AppBar, LinearProgress, ListItemText, MenuItem, Stack, Toolbar, Typography, styled } from "@mui/material";
import Button from "@/components/Button";
import { ClearIcon, SaveIcon } from "@/components/icons";
import { Dialog } from "@/components/Dialog";
import useNavigation from "@/navigation/useNavigation";

interface IAddProductScreen {
  categoryId: string;
}

export default function AddProductScreen({ categoryId }: IAddProductScreen) {
  const navigation = useNavigation();

  const { data: categories, isLoading: isCategoriesLoading } = useGetProductsByCategoryId(categoryId);
  const { mutateAsync, isPending } = useAddNewProduct();

  const { register: formRegister, handleSubmit, reset: resetForm } = useForm<IAddNewProductInput>();

  const handleAddProduct = async (input: IAddNewProductInput) => {
    await mutateAsync({ name: input.name, categoryId: categoryId, description: input.description, imageUrls: input.imageUrls, price: input.price });
    handleBackNavigate();
  };

  const handleReset = () => {
    handleBackNavigate();
    resetForm();
  };

  const handleBackNavigate = () => {
    navigation.goBack();
  };

  return (
    <Dialog fullScreen open onClose={handleBackNavigate}>
      <AppBar sx={{ position: "relative" }}>
        <Toolbar>
          <ClearIcon iconButton onClick={handleBackNavigate} />
          <Typography variant='h5'>Create category</Typography>
        </Toolbar>
      </AppBar>
      <StyledForm onSubmit={handleSubmit(handleAddProduct)} gap={1}>
        <TextField register={formRegister} name='name' label='Product name' />

        <SelectInput name='categoryId' register={formRegister} defaultValue={categoryId} label='Category'>
          {isCategoriesLoading ? (
            <LinearProgress />
          ) : (
            (categories ?? []).map((category) => {
              return (
                <MenuItem value={category.ID}>
                  <ListItemText>{category.name}</ListItemText>
                </MenuItem>
              );
            })
          )}
        </SelectInput>

        <Stack flexDirection={"row"} gap={1} justifyContent={"end"}>
          <Button onClick={handleReset} variant='text'>
            Cancel
          </Button>
          <Button loading={isPending} autoFocus startIcon={<SaveIcon />} variant='contained' onClick={handleSubmit(handleAddProduct)}>
            save
          </Button>
        </Stack>
      </StyledForm>
    </Dialog>
  );
}

const StyledForm = styled(Form)(({ theme }) => ({
  width: "50%",
  padding: theme.spacing(2),
  margin: "auto",
  [theme.breakpoints.down("md")]: {
    width: "80%",
  },
}));
