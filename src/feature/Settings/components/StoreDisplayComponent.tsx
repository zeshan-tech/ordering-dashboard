import { useEffect } from "react";
import { useGetStoreById, useUpdateStore } from "../hooks";
import { Controller, useForm } from "react-hook-form";
import { Form, TextField } from "@/components/Form";
import { Card, Paper, Stack, LinearProgress, styled, Switch, FormGroup, FormControlLabel } from "@mui/material";
import Button from "@/components/Button";
import { IUpdateStoreInput } from "../types";
import { OpenTabIcon } from "@/components/icons";
import UploadWidget from "@/components/UploadWidget";

export default function StoreForm() {
  const { data: storeData, isLoading, refetch: refetchStore } = useGetStoreById();
  const { mutateAsync: updateStoreMutateAsync, isPending: isUpdateStoreLoading } = useUpdateStore();

  const { handleSubmit, setValue: setFormValue, watch: watchForm, control: formController, formState } = useForm<IUpdateStoreInput>();

  useEffect(() => {
    if (storeData) {
      setFormValue("name", storeData.name);
      setFormValue("active", storeData.active);
      setFormValue("logoUrl", storeData.logoUrl);
      setFormValue("backgroundImageUrl", storeData.backgroundImageUrl);
    }
  }, [storeData]);

  const handleUpdateStore = async (formData: IUpdateStoreInput) => {
    await updateStoreMutateAsync(formData);
    await refetchStore();
  };

  return (
    <Form gap={1}>
      {isLoading ? <LinearProgress /> : null}

      <Stack alignItems={"end"}>
        <Button onClick={() => open("https://glowing-marigold-3c3b5e.netlify.app/")} startIcon={<OpenTabIcon />}>
          Open
        </Button>
      </Stack>

      <StyledBackgroundImageViewer imageUrl={watchForm("backgroundImageUrl")}>
        <UploadWidget onUpload={(e) => setFormValue("backgroundImageUrl", e)}>Change image</UploadWidget>
      </StyledBackgroundImageViewer>

      <Stack alignItems={"start"}>
        <StyledLogoViewer>
          <StyledCardMedia src={watchForm("logoUrl")} />
          <UploadWidget onUpload={(e) => setFormValue("logoUrl", e)}>Change Logo</UploadWidget>
        </StyledLogoViewer>
      </Stack>

      <TextField name={"name"} control={formController} label='Store name' fullWidth />

      <Controller
        control={formController}
        name='active'
        render={(field) => (
          <FormGroup>
            <FormControlLabel {...field} control={<Switch defaultChecked />} label='Active' />
          </FormGroup>
        )}
      />

      {formState.isDirty ? (
        <Stack flexDirection={"row"} gap={1} justifyContent={"end"}>
          <Button variant='text'>Cancel</Button>
          <Button variant='contained' onClick={handleSubmit(handleUpdateStore)} loading={isUpdateStoreLoading}>
            Change
          </Button>
        </Stack>
      ) : null}
    </Form>
  );
}

const StyledBackgroundImageViewer = styled(Paper)<{ imageUrl: string }>(({ theme, imageUrl }) => ({
  backgroundImage: `url("${imageUrl}")`,
  height: theme.spacing(32),
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  backgroundSize: "cover",
  padding: theme.spacing(2),
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "flex-end",
}));

const StyledCardMedia = styled("img")(({ theme }) => ({
  height: theme.spacing(18),
  width: theme.spacing(18),
  mb: theme.spacing(1),
}));

const StyledLogoViewer = styled(Card)`
  padding: ${({ theme }) => theme.spacing(1)};
`;
