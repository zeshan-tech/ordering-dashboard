import { ProductImageList } from ".";
import { useAddNewProduct, useGetProductsByCategoryId } from "../hooks";
import { IAddNewProductInput } from "../types";
import { useForm } from "react-hook-form";
import useNavigation from "@/navigation/useNavigation";
import { Form, SelectInput, TextField } from "@/components/Form";
import { LinearProgress, ListItemText, MenuItem, Stack, styled } from "@mui/material";
import UploadWidget from "@/components/UploadWidget";
import Button from "@/components/Button";
import { SaveIcon } from "@/components/icons";

interface IAddProductForm {
  categoryId: string;
}

export default function AddProductForm({ categoryId }: IAddProductForm) {
  const navigation = useNavigation();

  const { data: categories, isLoading: isCategoriesLoading } = useGetProductsByCategoryId(categoryId!);
  const { mutateAsync, isPending } = useAddNewProduct();

  const { register: formRegister, handleSubmit, reset: resetForm, setValue: setFormValue, watch: watchForm } = useForm<IAddNewProductInput>();

  const handleAddProduct = async (input: IAddNewProductInput) => {
    await mutateAsync({ name: input.name, categoryId: categoryId!, description: input.description, imageUrls: input.imageUrls, price: input.price });
    handleBackNavigate();
  };


  console.log(watchForm('imageUrls'));
  
  const handleReset = () => {
    handleBackNavigate();
    resetForm();
  };

  const handleBackNavigate = () => {
    navigation.goBack();
  };

  return (
    <StyledForm onSubmit={handleSubmit(handleAddProduct)} gap={1}>
      <TextField register={formRegister} name='name' label='Title' />
      <TextField register={formRegister} name='description' label='Description' />
      <TextField register={formRegister} name='price' label='Product name' />

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

      <ProductImageList list={watchForm("imageUrls") ?? []} />

      <UploadWidget children={"Upload images"} onUpload={(url) => setFormValue("imageUrls", [...watchForm("imageUrls"), url])} />

      <Stack flexDirection={"row"} gap={1} justifyContent={"end"}>
        <Button onClick={handleReset} variant='text'>
          Cancel
        </Button>
        <Button loading={isPending} autoFocus startIcon={<SaveIcon />} variant='contained' onClick={handleSubmit(handleAddProduct)}>
          save
        </Button>
      </Stack>
    </StyledForm>
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
