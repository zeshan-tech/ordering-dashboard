import { useEffect, useState } from "react";
import { useAddNewCategory, useGetCategoriesByStoreId, useGetCategoryById } from "../hooks";
import { useForm } from "react-hook-form";
import { IAddNewCategoryInput } from "../types";
import { Form, SelectInput, TextField } from "@/components/Form";
import { AppBar, FormControlLabel, LinearProgress, ListItemText, MenuItem, Stack, Switch, Toolbar, Typography, styled } from "@mui/material";
import { useStore } from "@/context/StoreContext";
import Button from "@/components/Button";
import { ClearIcon, SaveIcon } from "@/components/icons";
import { Dialog } from "@/components/Dialog";
import useNavigation from "@/navigation/useNavigation";
import { useParams } from "react-router-dom";

export default function UpdateCategoryScreen() {
  const navigation = useNavigation();
  let { categoryId } = useParams();

  const { activeStoreId } = useStore();

  const [markAsSubCategory, setMarkAsSubCategory] = useState(false);

  const { data: categories, isLoading: isCategoriesLoading } = useGetCategoriesByStoreId();
  const { data: category } = useGetCategoryById(categoryId!);
  const { mutateAsync, isPending } = useAddNewCategory();

  const { register: formRegister, handleSubmit, reset: resetForm, setValue: setFormValue } = useForm<IAddNewCategoryInput>();

  useEffect(() => {
    if (category) {
      setFormValue("name", category.name);
      setFormValue("parentCategoryId", category.parentCategoryId);
      setMarkAsSubCategory(!!category.parentCategoryId);
    }
  }, []);

  const handleAddCategory = async (input: IAddNewCategoryInput) => {
    await mutateAsync({ name: input.name, ...(markAsSubCategory ? { parentCategoryId: input.parentCategoryId } : {}), storeId: activeStoreId });
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

        <SelectInput name='parentCategoryId' register={formRegister} disabled={!markAsSubCategory} label='Parent category'>
          {isCategoriesLoading ? (
            <LinearProgress />
          ) : (
            (categories ?? []).map((store) => {
              return (
                <MenuItem value={store.ID}>
                  <ListItemText>{store.name}</ListItemText>
                </MenuItem>
              );
            })
          )}
        </SelectInput>

        <FormControlLabel control={<Switch onChange={() => setMarkAsSubCategory(!markAsSubCategory)} />} label={"Mark as sub category"} />

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
