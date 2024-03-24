import { ProductImageList } from ".";
import { useUpdateProduct, useGetCategories, useGetProductById } from "../hooks";
import { IUpdateProductInput } from "../types";
import { Controller, useForm } from "react-hook-form";
import useNavigation from "@/navigation/useNavigation";
import { Form, PriceField, SelectInput, TextField } from "@/components/Form";
import { Backdrop, CircularProgress, FormControlLabel, LinearProgress, ListItemText, MenuItem, Stack, Switch, styled } from "@mui/material";
import UploadWidget from "@/components/UploadWidget";
import Button from "@/components/Button";
import { SaveIcon } from "@/components/icons";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface IUpdateProductForm {
  productId: string;
}

export default function UpdateProductForm({ productId }: IUpdateProductForm) {
  const { t } = useTranslation();
  const navigation = useNavigation();

  const [imageUrls, setImageUrls] = useState<string[]>([]); // State for imageUrls

  const { data: product, isLoading: isProductLoading } = useGetProductById(productId);
  const { data: categories, isLoading: isCategoriesLoading } = useGetCategories();
  const { mutateAsync, isPending } = useUpdateProduct();

  const { control: formControl, handleSubmit, reset: resetForm, setValue: setFormValue, watch: watchForm } = useForm<IUpdateProductInput>();

  useEffect(() => {
    if (product) {
      setFormValue("category", product.category.$id);
      setFormValue("active", product.active);
      setFormValue("description", product.description);
      setImageUrls(product.imageUrls);
      setFormValue("price", product.price);
      setFormValue("title", product.title);
    }
  }, [product]);

  const handleUpdateProduct = async (input: IUpdateProductInput) => {
    await mutateAsync({ $id: productId, input: { title: input.title, category: input.category!, description: input.description, imageUrls: imageUrls, price: input.price, active: input.active } });
    handleBackNavigate();
  };

  const handleReset = () => {
    handleBackNavigate();
    resetForm();
  };

  const handleBackNavigate = () => {
    navigation.goBack();
  };

  if (isProductLoading || isCategoriesLoading) {
    return (
      <Backdrop open>
        <CircularProgress />
      </Backdrop>
    );
  }

  return (
    <Form onSubmit={handleSubmit(handleUpdateProduct)} gap={1} p={2}>
      <TextField control={formControl} name='title' label='Title' />
      <TextField multiline rows={4} control={formControl} name='description' label='Description' />
      <PriceField control={formControl} name='price' label='Product price' />
      <SelectInput name='category' control={formControl} defaultValue={watchForm("category")} label='Category'>
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

      <Controller name='active' control={formControl} render={({ field: { onChange, value } }) => <FormControlLabel control={<Switch checked={value} onChange={onChange} />} label={t("active")} />} />

      <UploadWidget
        children={"Upload images"}
        onUpload={(url) => {
          setImageUrls((pre) => [...pre, url]);
        }}
      />
      <ProductImageList list={imageUrls} />

      <Stack flexDirection={"row"} gap={1} justifyContent={"end"}>
        <Button onClick={handleReset} variant='text'>
          {t("cancel")}
        </Button>
        <Button loading={isPending} autoFocus startIcon={<SaveIcon />} variant='contained' onClick={handleSubmit(handleUpdateProduct)}>
          {t("save")}
        </Button>
      </Stack>
    </Form>
  );
}
