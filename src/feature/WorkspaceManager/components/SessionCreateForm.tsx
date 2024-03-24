import { FormEventHandler, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Form } from "@/components/Form";
import { useTranslation } from "react-i18next";
import { useUser } from "@clerk/clerk-react";
import { useCreateAppwriteSession } from "../hooks";
import { DialogContent, TextField } from "@mui/material";
import Button from "@/components/Button";
import { Dialog, DialogTitle } from "@/components/Dialog";
import { environment } from "@/environment/environment";
import useNavigation from "@/navigation/useNavigation";

export default function SessionCreateForm() {
  const { t } = useTranslation();
  const { user } = useUser();
  const navigation = useNavigation();
  const { mutateAsync, isPending } = useCreateAppwriteSession();
  const [recaptchaValue, setRecaptchaValue] = useState<null | string>(null);

  const handleCreateSession: FormEventHandler<HTMLElement> = async (e) => {
    e.preventDefault(); // Prevent default form submission

    if (!recaptchaValue) {
      await mutateAsync();
      navigation.navigate("/")
    } else {
      alert("Please verify reCAPTCHA");
    }
  };

  return (
    <Dialog open fullWidth maxWidth='xs'>
      <DialogTitle textAlign={"center"}>Additional check</DialogTitle>

      <DialogContent dividers>
        <Form onSubmit={handleCreateSession} rowGap={1}>
          <TextField name={""} InputProps={{ readOnly: true }} value={user?.primaryEmailAddress?.emailAddress!} label='Email' />

          <TextField name={""} InputProps={{ readOnly: true }} value={user?.id} label='UserId' />

          <ReCAPTCHA sitekey={environment.GOOGLE_RECEPTCHA_SITE_KEY} onChange={(e) => setRecaptchaValue(e)} />

          <Button type='submit' variant='contained' loading={isPending}>
            {t("continue")}
          </Button>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
