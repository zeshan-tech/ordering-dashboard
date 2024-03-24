import { ProductImageList } from ".";
import { useAddNewProduct, useGetCategories } from "../hooks";
import { IAddNewProductInput } from "../types";
import { useForm } from "react-hook-form";
import useNavigation from "@/navigation/useNavigation";
import { Form, PriceField, SelectInput, TextField } from "@/components/Form";
import { LinearProgress, ListItemText, MenuItem, Stack, styled } from "@mui/material";
import UploadWidget from "@/components/UploadWidget";
import Button from "@/components/Button";
import { SaveIcon } from "@/components/icons";
import { useEffect } from "react";

interface IAddProductForm {
  categoryId: string;
}

export default function AddProductForm({ categoryId }: IAddProductForm) {
  const navigation = useNavigation();

  const { data: categories, isLoading: isCategoriesLoading } = useGetCategories();
  const { mutateAsync, isPending } = useAddNewProduct();

  const { control: formControl, handleSubmit, reset: resetForm, setValue: setFormValue, watch: watchForm } = useForm<IAddNewProductInput>();

  useEffect(() => {
    if (categoryId) {
      setFormValue("category", categoryId);
    }
  }, [categoryId]);

  const handleAddProduct = async (input: IAddNewProductInput) => {
    await mutateAsync({ title: input.title, category: categoryId!, description: input.description, imageUrls: input.imageUrls, price: input.price });
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
    <StyledForm onSubmit={handleSubmit(handleAddProduct)} gap={1}>
      <TextField control={formControl} name='title' label='Title' />
      <TextField multiline rows={4} control={formControl} name='description' label='Description' />
      <PriceField control={formControl} name='price' label='Product price' />

      <SelectInput name='category' control={formControl} defaultValue={categoryId} label='Category'>
        {isCategoriesLoading ? (
          <LinearProgress />
        ) : (
          (categories?.documents ?? []).map((category) => {
            return (
              <MenuItem value={category.$id}>
                <ListItemText>{category.name}</ListItemText>
              </MenuItem>
            );
          })
        )}
      </SelectInput>


      <UploadWidget children={"Upload images"} onUpload={(url) => setFormValue("imageUrls", [...watchForm("imageUrls"), url])} />
      <ProductImageList list={watchForm("imageUrls") ?? []} />

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
