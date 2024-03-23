import { Dialog, DialogActions, DialogTitle } from "@/components/Dialog";
import Button from "@/components/Button";
import { Card, CardActions, DialogContent, Divider, Typography, styled } from "@mui/material";
import { AddIcon } from "@/components/icons";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Form, TextField } from "@/components/Form";
import { yupResolver } from "@hookform/resolvers/yup";
import UploadWidget from "@/components/UploadWidget";
import { useAddNewStore } from "../hooks/queryHooks";
import { IAddNewStoreInput } from "../types";

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
    watch: watchForm,
    setValue: setFormValue,
  } = useForm<IAddNewStoreInput>({
    resolver: yupResolver(validationSchema),
  });

  const handleSignin = async (input: IAddNewStoreInput) => {
    mutateAsync(input);
    onClose();
  };

  return (
    <Dialog isDraggable open={isVisible} onClose={onClose} maxWidth='sm' fullWidth>
      <DialogTitle variant='h5'>Create store</DialogTitle>
      <DialogContent dividers>
        <Form onSubmit={submitForm(handleSignin)} rowGap={1}>
          <StyledLogoViewer>
            <StyledImg src={watchForm("logoUrl")} />

            <CardActions>
              <UploadWidget onUpload={(e) => setFormValue("logoUrl", e)}>Change Logo</UploadWidget>
            </CardActions>
          </StyledLogoViewer>

          <Typography>{errors.logoUrl?.message}</Typography>

          <Divider />

          <TextField register={register} name='name' label='Store name' error={!!errors.name} helperText={errors.name?.message} autoFocus />
        </Form>
      </DialogContent>
      <DialogActions>
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

const StyledLogoViewer = styled(Card)`
  width: fit-content;
`;

const StyledImg = styled("img")(({ theme }) => ({
  height: theme.spacing(18),
  width: theme.spacing(18),
  mb: theme.spacing(1),
}));
