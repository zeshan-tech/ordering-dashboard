import { CssBaseline, Stack, Paper, Typography } from "@mui/material";
import Button from "@/components/Button";
import { Form, TextField } from "@/components/Form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { SigninFormFieldInterface } from "../types";
import { useAuthContext } from "@/context/AuthContext";
import useFirebase from "@/context/FirebaseContext";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { useTranslation } from "react-i18next";
import { Link } from "@/components/Tags";

export default function SigninForm() {
  const { t } = useTranslation();
  const { auth } = useFirebase();
  const { handleAuthenticate } = useAuthContext();

  const {
    formState: { errors },
    handleSubmit: submitForm,
    register,
  } = useForm<SigninFormFieldInterface>({
    resolver: yupResolver(validationSchema),
  });

  const handleSignin = async (input: SigninFormFieldInterface) => {
    const result = await signInWithEmailAndPassword(auth!, input.email, input.password);
    handleAuthenticate(await result.user.getIdToken());
  };

  return (
    <Stack component={Paper} p={2} sx={{ width: 500 }}>
      <CssBaseline />
      <Typography variant='h5' align='center' mb={4}>
        {t("signinTitle")}
      </Typography>
      <Form onSubmit={submitForm(handleSignin)} rowGap={1}>
        <TextField register={register} name='email' label='Email Address' error={!!errors.password} helperText={errors.email?.message} autoFocus />
        <TextField register={register} name='password' label='Password' type='password' error={!!errors.password} helperText={errors.password?.message} />
        <Button type='submit' variant='contained' fullWidth>
          {t("signIn")}
        </Button>
      </Form>
      <Link to='/authentication' color='primary'>
        {t("forgotPassword?")}
      </Link>
    </Stack>
  );
}

const validationSchema = yup.object().shape({
  email: yup.string().required("Email is required"),
  password: yup.string().required("Password is required"),
});
