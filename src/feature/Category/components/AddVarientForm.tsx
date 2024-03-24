import { useForm, SubmitHandler, useFieldArray, Controller } from "react-hook-form";
import { TextField, Typography, Stack, Toolbar, Card, CardContent, MenuItem, CardActions, styled } from "@mui/material";
import { Form } from "@/components/Form";
import Button from "@/components/Button";
import { DeleteIcon } from "@/components/icons";
import { IAddNewVariantInput, VariantTypeEnum, PriceAdjustmentTypeEnum } from "../types";
import { useAddVariant } from "../hooks";
import UploadWidget from "@/components/UploadWidget";
import { ProductImageList } from ".";

interface IFormValues {
  variants: IAddNewVariantInput[];
}

interface AddVariantFormProps {
  productId: string;
}

export default function AddVariantForm({ productId }: AddVariantFormProps) {
  const { mutateAsync } = useAddVariant();

  const { control, handleSubmit, setValue: setFormValue } = useForm<IFormValues>({});

  const { fields, append, remove } = useFieldArray({
    control,
    name: "variants",
  });

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    console.log(data, productId);
  };

  return (
    <Form component={Card} onSubmit={handleSubmit(onSubmit)}>
      <Toolbar>
        <Typography variant='h5' sx={{ flexGrow: 1 }}>
          Add variant
        </Typography>
        <Button onClick={() => append({ type: VariantTypeEnum.MATERIAL, value: "", priceAdjustment: 0, priceAdjustmentType: PriceAdjustmentTypeEnum.PLUS, imageUrls: [], product: productId })}>Add Variant</Button>
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

              <Controller
                name={`variants.${index}.priceAdjustmentType`}
                control={control}
                render={({ field }) => (
                  <TextField label='Price Adjustment Type' select {...field} fullWidth>
                    <MenuItem value={PriceAdjustmentTypeEnum.PLUS}>Plus</MenuItem>
                    <MenuItem value={PriceAdjustmentTypeEnum.MINUS}>Minus</MenuItem>
                  </TextField>
                )}
              />

              <Controller name={`variants.${index}.priceAdjustment`} control={control} defaultValue={0} render={({ field }) => <TextField {...field} type='number' label='Price Adjustment' fullWidth />} />

              <UploadWidget
                fullWidth
                children={"Upload images"}
                onUpload={(url) => {
                  setFormValue(`variants.${index}.imageUrls`, (prev) => [...prev, url]);
                }}
              />

              <DeleteIcon solid onClick={() => remove(index)} />
            </Stack>

            <ProductImageList list={field.imageUrls} />
          </Stack>
        ))}
      </CardContent>
      <CardActions>
        <Button>Skip</Button>
        <Button type='submit' variant='contained'>
          Save
        </Button>
      </CardActions>
    </Form>
  );
}

const StyledUploadWidget = styled(UploadWidget)(({ theme }) => ({}));
