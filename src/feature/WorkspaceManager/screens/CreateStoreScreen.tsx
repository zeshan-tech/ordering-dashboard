import { Dialog, DialogActions, DialogTitle } from "@/components/Dialog";
import Button from "@/components/Button";
import { CardActions, DialogContent, Divider, Typography, styled } from "@mui/material";
import { AddIcon } from "@/components/icons";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Form, TextField } from "@/components/Form";
import { yupResolver } from "@hookform/resolvers/yup";
import UploadWidget from "@/components/UploadWidget";
import { useAddNewStore } from "../hooks/queryHooks";
import { IAddNewStoreInput } from "../types";
import useNavigation from "@/navigation/useNavigation";

export default function CreateStoreScreen() {
  const navigation = useNavigation();
  const { mutateAsync, isPending } = useAddNewStore();

  const {
    formState: { errors },
    handleSubmit: submitForm,
    register,
    watch: watchForm,
    setValue: setFormValue,
  } = useForm<IAddNewStoreInput>({
    resolver: yupResolver(validationSchema) as any,
  });

  const handleCreateStore = async (input: IAddNewStoreInput) => {
    await mutateAsync(input);
    navigation.navigate("/home");
  };

  return (
    <Dialog open maxWidth='sm' fullWidth>
      <DialogTitle variant='h5'>Create store</DialogTitle>

      <DialogContent dividers>
        <Form onSubmit={submitForm(handleCreateStore)} rowGap={1}>
          <StyledImg src={watchForm("logoUrl")} />

          <CardActions>
            <UploadWidget onUpload={(e) => setFormValue("logoUrl", e)}>Change Logo</UploadWidget>
          </CardActions>

          <Typography>{errors.logoUrl?.message}</Typography>

          <Divider />

          <TextField register={register} name='name' label='Store name' error={!!errors.name} helperText={errors.name?.message} autoFocus />
        </Form>
      </DialogContent>

      <DialogActions>
        <Button loading={isPending} onClick={submitForm(handleCreateStore)} variant='contained' startIcon={<AddIcon />}>
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
}

const validationSchema = yup.object().shape({
  name: yup.string().required("name is required"),
  logoUrl: yup.string().required("logoUrl is required"),
});

const StyledImg = styled("img")(({ theme }) => ({
  height: theme.spacing(18),
  width: theme.spacing(18),
  mb: theme.spacing(1),
}));
