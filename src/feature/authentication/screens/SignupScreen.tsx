import Page from "@/components/Page";
import SignupForm from "../components/SignupForm";
import { ContinueWithFacebook, ContinueWithGoogle, ContinueWithMicrosoft } from "../components";
import { Paper, Stack, SxProps } from "@mui/material";
import useThemeStyles from "@/theme/hooks/useThemeStyles";
import Button from "@/components/Button";
import useNavigation from "@/navigation/useNavigation";

export default function SignupScreen() {
  const navigation = useNavigation();

  const pageStyle = useThemeStyles<SxProps>((theme) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    rowGap: theme.spacing(2),
    backgroundImage: "url('https://www.martechcube.com/wp-content/uploads/2023/08/E-Commerce.jpg')",
  }));

  return (
    <Page sx={pageStyle}>
      <SignupForm />

      <Stack component={Paper} p={2} gap={1} sx={{ width: 500 }}>
        <Button variant='text' onClick={() => navigation.navigate("/authentication")}>
          Already have an account
        </Button>
        <ContinueWithFacebook />
        <ContinueWithGoogle />
        <ContinueWithMicrosoft />
      </Stack>
    </Page>
  );
}
