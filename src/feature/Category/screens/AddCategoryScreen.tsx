import { useState } from "react";
import { useAddNewCategory, useGetCategories } from "../hooks";
import { useForm } from "react-hook-form";
import { IAddNewCategoryInput } from "../types";
import { Form, SelectInput, TextField } from "@/components/Form";
import { AppBar, FormControlLabel, LinearProgress, ListItemText, MenuItem, Stack, Switch, Toolbar, Typography, styled } from "@mui/material";
import Button from "@/components/Button";
import { ClearIcon, SaveIcon } from "@/components/icons";
import { Dialog } from "@/components/Dialog";
import useNavigation from "@/navigation/useNavigation";
import { useAuth } from "@clerk/clerk-react";

export default function AddCategoryScreen() {
  const navigation = useNavigation();
  const { orgId } = useAuth();

  const [markAsChildCategory, setMarkAsChildCategory] = useState(false);

  const { data: categories, isLoading: isCategoriesLoading } = useGetCategories();
  const { mutateAsync, isPending } = useAddNewCategory();

  const { register: formRegister, handleSubmit, reset: resetForm } = useForm<IAddNewCategoryInput>();

  const handleAddCategory = async (input: IAddNewCategoryInput) => {
    await mutateAsync({ name: input.name, ...(markAsChildCategory ? { parentCategoryId: input.parentCategoryId } : {}), organizationId: orgId! });
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
    <Dialog fullScreen open onClose={handleBackNavigate}>
      <AppBar sx={{ position: "relative" }}>
        <Toolbar>
          <ClearIcon iconButton onClick={handleBackNavigate} />
          <Typography variant='h5'>Create category</Typography>
        </Toolbar>
      </AppBar>
      <StyledForm onSubmit={handleSubmit(handleAddCategory)} gap={1}>
        <TextField register={formRegister} name='name' label='Category name' />

        <SelectInput name='parentCategoryId' register={formRegister} disabled={!markAsChildCategory} label='Parent category'>
          {isCategoriesLoading ? (
            <LinearProgress />
          ) : (
            (categories?.documents ?? []).map((store) => {
              return (
                <MenuItem value={store.$id}>
                  <ListItemText>{store.name}</ListItemText>
                </MenuItem>
              );
            })
          )}
        </SelectInput>

        <FormControlLabel control={<Switch onChange={() => setMarkAsChildCategory(!markAsChildCategory)} />} label={"Mark as sub category"} />

        <Stack flexDirection={"row"} gap={1} justifyContent={"end"}>
          <Button onClick={handleReset} variant='text'>
            Cancel
          </Button>
          <Button loading={isPending} autoFocus startIcon={<SaveIcon />} variant='contained' onClick={handleSubmit(handleAddCategory)}>
            save
          </Button>
        </Stack>
      </StyledForm>
    </Dialog>
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
