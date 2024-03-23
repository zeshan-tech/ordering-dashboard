/* import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Form } from "@/components/Form";
import { useTranslation } from "react-i18next";
import { useUser } from "@clerk/clerk-react";
import { useCreateAppwriteSession } from "../hooks";
import { DialogContent, TextField } from "@mui/material";
import Button from "@/components/Button";
import { Dialog, DialogTitle } from "@/components/Dialog";

export default function SessionCreateForm() {
  const { t } = useTranslation();
  const { user } = useUser();
  const { mutateAsync, isPending } = useCreateAppwriteSession();
  const [recaptchaValue, setRecaptchaValue] = useState<null | string>(null);

  const handleCreateSession = async () => {
    if (recaptchaValue) {
      await mutateAsync({ email: user?.primaryEmailAddress?.emailAddress!, id: user!.id });
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

          <ReCAPTCHA sitekey="6Lcv-qEpAAAAAEpR_gcb0_WxEla6g3X3ZKrrLInC" onChange={(e) => setRecaptchaValue(e)} />

          <Button type='submit' variant='contained' loading={isPending}>
            {t("continue")}
          </Button>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
 */

import { Form } from "@/components/Form";
import { useTranslation } from "react-i18next";
import { useUser } from "@clerk/clerk-react";
import { useCreateAppwriteSession } from "../hooks";
import { DialogContent, TextField } from "@mui/material";
import Button from "@/components/Button";
import { Dialog, DialogTitle } from "@/components/Dialog";

export default function SessionCreateForm() {
  const { t } = useTranslation();
  const { user } = useUser();
  const { mutateAsync, isPending } = useCreateAppwriteSession();

  const handleCreateSession = async () => {
    await mutateAsync({ email: user?.primaryEmailAddress?.emailAddress!, id: user!.id });
  };

  return (
    <Dialog open fullWidth maxWidth='xs'>
      <DialogTitle textAlign={"center"}>Additional check</DialogTitle>

      <DialogContent dividers>
        <Form onSubmit={handleCreateSession} rowGap={1}>
          <TextField name={""} InputProps={{ readOnly: true }} value={user?.primaryEmailAddress?.emailAddress!} label='Email' />
          <TextField name={""} InputProps={{ readOnly: true }} value={user?.id} label='UserId' />
          <Button type='submit' variant='contained' loading={isPending}>
            {t("continue")}
          </Button>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
