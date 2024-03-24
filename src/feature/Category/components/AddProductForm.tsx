import { ProductImageList } from ".";
import { useAddNewProduct, useGetCategories } from "../hooks";
import { IAddNewProductInput } from "../types";
import { useForm } from "react-hook-form";
import useNavigation from "@/navigation/useNavigation";
import { Form, PriceField, SelectInput, TextField } from "@/components/Form";
import { Divider, LinearProgress, ListItemText, MenuItem, Stack } from "@mui/material";
import UploadWidget from "@/components/UploadWidget";
import Button from "@/components/Button";
import { SaveIcon } from "@/components/icons";
import { useEffect, useState } from "react";

interface IAddProductForm {
  categoryId: string;
  onProductCreate: (pId: string) => void;
}

export default function AddProductForm({ categoryId, onProductCreate }: IAddProductForm) {
  const navigation = useNavigation();

  const [imageUrls, setImageUrls] = useState<string[]>([]); // State for imageUrls

  const { data: categories, isLoading: isCategoriesLoading } = useGetCategories();
  const { mutateAsync, isPending } = useAddNewProduct();

  const { control: formControl, handleSubmit, reset: resetForm, setValue: setFormValue } = useForm<IAddNewProductInput>();

  useEffect(() => {
    if (categoryId) {
      setFormValue("category", categoryId);
    }
  }, [categoryId]);

  const handleAddProduct = async (input: IAddNewProductInput) => {
    const result = await mutateAsync({ title: input.title, category: categoryId, description: input.description, imageUrls: imageUrls, price: input.price });
    onProductCreate(result.$id);
  };

  const handleReset = () => {
    handleBackNavigate();
    resetForm();
  };

  const handleBackNavigate = () => {
    navigation.goBack();
  };

  return (
    <Form onSubmit={handleSubmit(handleAddProduct)} gap={1} p={2}>
      <TextField control={formControl} name='title' label='Title' />
      <TextField multiline rows={4} control={formControl} name='description' label='Description' />

      <PriceField control={formControl} inputProps={{ maxLength: 15, pattern: "[0-9.]*" }} name='price' label='Product price' />

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

      <Divider />

      <UploadWidget
        children={"Upload images"}
        onUpload={(url) => {
          setImageUrls((pre) => [...pre, url]);
        }}
      />
      <ProductImageList list={imageUrls} />

      <Stack flexDirection={"row"} gap={1} justifyContent={"end"}>
        <Button onClick={handleReset} variant='text'>
          Cancel
        </Button>
        <Button loading={isPending} autoFocus startIcon={<SaveIcon />} variant='contained' onClick={handleSubmit(handleAddProduct)}>
          save
        </Button>
      </Stack>
    </Form>
  );
}
