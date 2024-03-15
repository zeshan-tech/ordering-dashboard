import { Dialog, DialogActions, DialogTitle } from "@/components/Dialog";
import Button from "@/components/Button";
import { DialogContent, Divider, Typography } from "@mui/material";
import { AddIcon } from "@/components/icons";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Form, TextField } from "@/components/Form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAddNewStore } from "./hooks/queryHooks";
import { IAddNewStoreInput } from "./types";
import UploadWidget from "@/components/UploadWidget";

interface StoreCreateModalProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function StoreCreateModal({ isVisible, onClose }: Readonly<StoreCreateModalProps>) {
  const { mutateAsync } = useAddNewStore();

  const {
    formState: { errors },
    handleSubmit: submitForm,
    register,
    getValues: getFormValues,
    resetField: resetFormField,
    setValue: setFormValue,
  } = useForm<IAddNewStoreInput>({
    resolver: yupResolver(validationSchema),
  });

  const handleSignin = async (input: IAddNewStoreInput) => {
    mutateAsync(input);
    onClose();
  };

  const handleLogoUpload = (url: string) => {
    setFormValue("logoUrl", url);
  };

  return (
    <Dialog isDraggable open={isVisible} onClose={onClose} maxWidth='sm' fullWidth>
      <DialogTitle variant='h5'>Create store</DialogTitle>
      <DialogContent dividers>
        <Form onSubmit={submitForm(handleSignin)} rowGap={1}>
          {getFormValues("logoUrl") ? <img src={getFormValues("logoUrl")} alt='Logo' style={{ maxWidth: "100px", maxHeight: "100px" }} /> : null}
          {getFormValues("logoUrl") ? <Button onClick={() => resetFormField("logoUrl")}>Remove</Button> : <UploadWidget onUpload={handleLogoUpload}>Upload Logo</UploadWidget>}
          <Typography>{errors.logoUrl?.message}</Typography>

          <Divider />

          <TextField register={register} name='name' label='Store name' error={!!errors.name} helperText={errors.name?.message} autoFocus />
        </Form>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant='text'>
          Close
        </Button>
        <Button onClick={submitForm(handleSignin)} variant='contained' startIcon={<AddIcon />}>
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
