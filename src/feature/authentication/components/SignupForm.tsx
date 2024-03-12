import { CssBaseline, Stack, Paper, Typography } from "@mui/material";
import Button from "@/components/Button";
import { SignupFormDataInterface } from "../types";
import { TextField } from "@/components/Form";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { createUserWithEmailAndPassword } from "firebase/auth";
import useFirebase from "@/context/FirebaseContext";
import { useTranslation } from "react-i18next";

export default function SignupForm() {
  const { t } = useTranslation();
  const { auth } = useFirebase();

  const { handleSubmit, register: formRegister } = useForm<SignupFormDataInterface>({
    resolver: yupResolver(validationSchema),
  });

  const handleCallSignIn = async (formData: SignupFormDataInterface) => {
    const result = await createUserWithEmailAndPassword(auth!, formData.email, formData.password);
    console.log(result);
  };

  return (
    <Stack component={Paper} p={2} sx={{ width: 500 }}>
      <CssBaseline />
      <Typography variant='h5' align='center'>
        {t("signupTitle")}
      </Typography>
      <Typography variant='caption' align='center' mb={4}>
        {t("signupSubtitle")}
      </Typography>
      <Stack component='form' noValidate onSubmit={handleSubmit(handleCallSignIn)} spacing={2}>
        <TextField register={formRegister} fullWidth id='email' label={t("emailLabel")} name='email' autoComplete='email' autoFocus />
        <TextField register={formRegister} fullWidth name='password' label={t("passwordLabel")} type='password' id='password' autoComplete='current-password' />
        <Button type='submit' variant='contained' fullWidth>
          {t("signUp")}
        </Button>
      </Stack>
    </Stack>
  );
}

const validationSchema = yup.object().shape({
  email: yup.string().required("Email is required"),
  password: yup.string().required("Password is required"),
});
