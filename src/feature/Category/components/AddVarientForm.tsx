import { useState } from "react";
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
  const { mutateAsync, isPending } = useAddVariant();
  const { control, handleSubmit } = useForm<IFormValues>({});
  const { fields, append, remove } = useFieldArray({
    control,
    name: "variants",
  });

  const onSubmit: SubmitHandler<IFormValues> = async (data) => {
    const formData = data.variants.map((v, i) => {
      v["imageUrls"] = imageUrls[i];
      return v;
    });
    await mutateAsync(formData);
    navigation.goBack();
  };

  const handleRemove = (indexToRemove: number) => {
    setImageUrls((prev) => {
      const updatedUrls = [...prev];
      updatedUrls[indexToRemove] = [];
      return updatedUrls;
    });
    remove(indexToRemove);
  };

  return (
    <Form component={Card} onSubmit={handleSubmit(onSubmit)}>
      <Toolbar>
        <Typography variant='h5' sx={{ flexGrow: 1 }}>
          {t("addVariant")}
        </Typography>
        <Button onClick={() => append({ type: VariantTypeEnum.MATERIAL, value: "", price: 0, imageUrls: [], product: productId })}>{t("addVariant")}</Button>
      </Toolbar>
      <CardContent component={Stack} spacing={2}>
        {fields.map((field, index) => (
          <Stack key={field.id} gap={1}>
            <Stack key={field.id} flexDirection={"row"} gap={1}>
              <Controller
                name={`variants.${index}.type`}
                control={control}
                render={({ field }) => (
                  <TextField label={t("type")} select {...field} fullWidth>
                    <MenuItem value={VariantTypeEnum.MATERIAL}>{t("material")}</MenuItem>
                    <MenuItem value={VariantTypeEnum.SIZE}>{t("size")}</MenuItem>
                    <MenuItem value={VariantTypeEnum.COLOR}>{t("color")}</MenuItem>
                  </TextField>
                )}
              />

              <Controller name={`variants.${index}.value`} control={control} defaultValue='' render={({ field }) => <TextField {...field} label={t("value")} fullWidth />} />

              <Controller name={`variants.${index}.price`} control={control} defaultValue={0} render={({ field }) => <TextField {...field} type='number' label={t("priceAdjustment")} fullWidth />} />

              <UploadWidget
                component={<AddImageIcon solid />}
                onUpload={(url) => {
                  setImageUrls((prev) => {
                    const updatedUrls = [...prev];
                    updatedUrls[index] = [...(prev[index] ?? []), url];
                    return updatedUrls;
                  });
                }}
              />

              <DeleteIcon solid onClick={() => handleRemove(index)} />
            </Stack>

            <ProductImageList list={imageUrls[index] ?? []} />
          </Stack>
        ))}
      </CardContent>
      <CardActions>
        <Button onClick={navigation.goBack}>{t("skip")}</Button>
        <Button type='submit' variant='contained' onClick={handleSubmit(onSubmit)} loading={isPending}>
          {t("save")}
        </Button>
      </CardActions>
    </Form>
  );
}
