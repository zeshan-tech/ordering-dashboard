import { useEffect, useState } from "react";
import { useGetCategories, useGetCategoryById, useUpdateCategory } from "../hooks";
import { useForm } from "react-hook-form";
import { IUpdateCategoryInput } from "../types";
import { Form, SelectInput, TextField } from "@/components/Form";
import { AppBar, FormControlLabel, LinearProgress, ListItemText, MenuItem, Stack, Switch, Toolbar, Typography, styled } from "@mui/material";
import { useWorkspaceManager } from "@/context/WorkspaceManagerContext";
import Button from "@/components/Button";
import { ClearIcon, SaveIcon } from "@/components/icons";
import { Dialog } from "@/components/Dialog";
import useNavigation from "@/navigation/useNavigation";
import { useParams } from "react-router-dom";

export default function UpdateCategoryScreen() {
  const navigation = useNavigation();
  let { categoryId } = useParams();
  const { storeId } = useWorkspaceManager();

  const [markAsChildCategory, setMarkAsChildCategory] = useState(false);

  const { data: categories, isLoading: isCategoriesLoading } = useGetCategories();
  const { data: category, isLoading: isCategoryLoading } = useGetCategoryById(categoryId!);
  const { mutateAsync, isPending } = useUpdateCategory();

  const { handleSubmit, reset: resetForm, setValue: setFormValue, control: formControl } = useForm<IUpdateCategoryInput>();

  useEffect(() => {
    if (category) {
      setFormValue("name", category.name);
      setFormValue("parentCategoryId", category.parentCategoryId);
      setMarkAsChildCategory(!!category.parentCategoryId);
    }
  }, [category]);

  const handleAddCategory = async (input: IUpdateCategoryInput) => {
    await mutateAsync({ $id: categoryId!, input: { name: input.name, parentCategoryId: input.parentCategoryId, organizationId: storeId } });
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
          <Typography variant='h5'>Update category</Typography>
        </Toolbar>
      </AppBar>

      {isCategoryLoading ? <LinearProgress /> : null}

      <StyledForm onSubmit={handleSubmit(handleAddCategory)} gap={1}>
        <TextField control={formControl} name='name' label='Category name' />

        <SelectInput name='parentCategoryId' control={formControl} disabled={!markAsChildCategory} label='Parent category'>
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

        <FormControlLabel control={<Switch onChange={(e) => setMarkAsChildCategory(e.target.checked)} checked={markAsChildCategory} />} label={"Mark as sub category"} />

        <Stack flexDirection={"row"} gap={1} justifyContent={"end"}>
          <Button onClick={handleReset} variant='text'>
            Cancel
          </Button>
          <Button loading={isPending} autoFocus startIcon={<SaveIcon />} variant='contained' onClick={handleSubmit(handleAddCategory)}>
            Update
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
