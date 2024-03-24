import { useState } from "react"; // Import useState
import { useForm, SubmitHandler, useFieldArray, Controller } from "react-hook-form";
import { TextField, Typography, Stack, Toolbar, Card, CardContent, MenuItem, CardActions } from "@mui/material";
import { Form } from "@/components/Form";
import Button from "@/components/Button";
import { AddImageIcon, DeleteIcon } from "@/components/icons";
import { IAddNewVariantInput, VariantTypeEnum } from "../types";
import { useAddVariant } from "../hooks";
import UploadWidget from "@/components/UploadWidget";
import { ProductImageList } from ".";
import useNavigation from "@/navigation/useNavigation";
import { useTranslation } from "react-i18next";

interface IFormValues {
  variants: IAddNewVariantInput[];
}

interface AddVariantFormProps {
  productId: string;
}

export default function AddVariantForm({ productId }: AddVariantFormProps) {
  const { t } = useTranslation();
  const navigation = useNavigation();

  const [imageUrls, setImageUrls] = useState<string[][]>([[]]);

  const { mutateAsync } = useAddVariant();

  const { control, handleSubmit } = useForm<IFormValues>({});

  const { fields, append, remove } = useFieldArray({
    control,
    name: "variants",
  });

  // State for storing image URLs

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    const formData = data.variants.map((v, i) => {
      v["imageUrls"] = imageUrls[i];
      return v;
    });

    console.log(formData);
  };

  console.log(imageUrls);
  

  return (
    <Form component={Card} onSubmit={handleSubmit(onSubmit)}>
      <Toolbar>
        <Typography variant='h5' sx={{ flexGrow: 1 }}>
          Add variant
        </Typography>
        <Button onClick={() => append({ type: VariantTypeEnum.MATERIAL, value: "", price: 0, imageUrls: [], product: productId })}>Add Variant</Button>
      </Toolbar>
      <CardContent component={Stack} spacing={2}>
        {fields.map((field, index) => (
          <Stack key={field.id} gap={1}>
            <Stack key={field.id} flexDirection={"row"} gap={1}>
              <Controller
                name={`variants.${index}.type`}
                control={control}
                render={({ field }) => (
                  <TextField label='Type' select {...field} fullWidth>
                    <MenuItem value={VariantTypeEnum.MATERIAL}>Material</MenuItem>
                    <MenuItem value={VariantTypeEnum.SIZE}>Size</MenuItem>
                    <MenuItem value={VariantTypeEnum.COLOR}>Color</MenuItem>
                  </TextField>
                )}
              />

              <Controller name={`variants.${index}.value`} control={control} defaultValue='' render={({ field }) => <TextField {...field} label='Value' fullWidth />} />

              <Controller name={`variants.${index}.price`} control={control} defaultValue={0} render={({ field }) => <TextField {...field} type='number' label='Price Adjustment' fullWidth />} />

              <UploadWidget component={<AddImageIcon solid />} onUpload={(url) => setImageUrls((prev) => [...prev, [...prev[index], url]])} />

              <DeleteIcon solid onClick={() => remove(index)} />
            </Stack>

            <ProductImageList list={imageUrls[index]} />
          </Stack>
        ))}
      </CardContent>
      <CardActions>
        <Button onClick={navigation.goBack}>{t("skip")}</Button>
        <Button type='submit' variant='contained' onClick={handleSubmit(onSubmit)}>
          {t("save")}
        </Button>
      </CardActions>
    </Form>
  );
}
