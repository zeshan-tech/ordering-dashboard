import { AppBar, Box, Stack, Step, StepLabel, Stepper, Toolbar, Typography, styled } from "@mui/material";
import { ClearIcon } from "@/components/icons";
import { Dialog } from "@/components/Dialog";
import useNavigation from "@/navigation/useNavigation";
import { useParams } from "react-router-dom";
import { AddProductForm, AddVarientForm } from "../components";
import { useRef, useState } from "react";

export default function AddProductScreen() {
  const navigation = useNavigation();
  const { categoryId } = useParams();
  const productIdRef = useRef<string>("");
  const [activeStep, setActiveStep] = useState(0); // State to manage active step

  const handleProductCreate = (pId: string) => {
    productIdRef.current = pId;
    setActiveStep(1);
  };

  return (
    <Dialog fullScreen open onClose={() => navigation.goBack()}>
      <AppBar sx={{ position: "relative" }}>
        <Toolbar>
          <ClearIcon iconButton onClick={() => navigation.goBack()} />
          <Typography variant='h5'>Add product</Typography>
        </Toolbar>
      </AppBar>

      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={1} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      <StyledStack>
        {activeStep === 0 ? <AddProductForm onProductCreate={handleProductCreate} categoryId={categoryId!} /> : null}
        {activeStep === 1 ? <AddVarientForm productId={productIdRef.current} /> : null}
      </StyledStack>
    </Dialog>
  );
}

const steps = ["Add product", "Add varients"];

const StyledStack = styled(Stack)(({ theme }) => ({
  width: "50%",
  margin: "auto",
  [theme.breakpoints.down("md")]: {
    width: "80%",
  },
}));
