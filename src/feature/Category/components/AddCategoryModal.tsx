import { useState } from "react";
import { useAddNewCategory } from "../hooks";
import { useForm } from "react-hook-form";
import { IAddNewCategoryInput } from "../types";
import { Form, SelectInput, TextField } from "@/components/Form";
import { AppBar, FormControlLabel, MenuItem, Stack, Switch, Toolbar, Typography, styled } from "@mui/material";
import { useStore } from "@/context/StoreContext";
import Button from "@/components/Button";
import { ClearIcon, SaveIcon } from "@/components/icons";
import { Dialog } from "@/components/Dialog";

interface IAddCategoryModal {
  isVisible: boolean;
  onClose: () => void;
}

export default function AddCategoryModal({ isVisible, onClose }: IAddCategoryModal) {
  const { activeStoreId } = useStore();

  const [markAsSubCategory, setMarkAsSubCategory] = useState(false); // State to manage the visibility of SelectBox

  const { mutateAsync } = useAddNewCategory();

  const { register: formRegister, handleSubmit, reset: resetForm } = useForm<IAddNewCategoryInput>();

  const handleAddCategory = (input: IAddNewCategoryInput) => {
    mutateAsync({ name: input.name, ...(markAsSubCategory ? { parentCategoryId: input.parentCategoryId } : {}), storeId: activeStoreId });
  };

  const handleReset = () => {
    onClose();
    resetForm();
  };

  return (
    <Dialog fullScreen open={isVisible} onClose={onClose}>
      <AppBar sx={{ position: "relative" }}>
        <Toolbar>
          <ClearIcon iconButton onClick={onClose} />
          <Typography variant='h5'>Create category</Typography>
        </Toolbar>
      </AppBar>
      <StyledForm onSubmit={handleSubmit(handleAddCategory)} gap={1}>
        <TextField register={formRegister} name='name' label="Category name" />

        <SelectInput name='parentCategoryId' register={formRegister} disabled={!markAsSubCategory} label="">
          <MenuItem>Category 1</MenuItem>
        </SelectInput>

        <FormControlLabel control={<Switch onChange={() => setMarkAsSubCategory(!markAsSubCategory)} />} label={"Mark as sub category"} />

        <Stack flexDirection={"row"} gap={1} justifyContent={"end"}>
          <Button onClick={handleReset} variant='text'>
            Reset
          </Button>
          <Button autoFocus startIcon={<SaveIcon />} variant='contained' onClick={handleSubmit(handleAddCategory)}>
            save
          </Button>
        </Stack>
      </StyledForm>
    </Dialog>
  );
}

const StyledToolbar = styled(Toolbar)`
  justify-content: space-between;
`;

const StyledForm = styled(Form)(({ theme }) => ({
  width: "50%",
  padding: theme.spacing(2),
  margin: "auto",
  [theme.breakpoints.down("md")]: {
    width: "80%", // Adjust width for medium and smaller screens
  },
}));
