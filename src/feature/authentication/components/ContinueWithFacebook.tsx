import Button from "@/components/Button";
import { FacebookIcon } from "@/components/icons";
import { useTranslation } from "react-i18next";

export default function ContinueWithFacebook() {
  const { t } = useTranslation();

  return <Button startIcon={<FacebookIcon />}>{t("continueWithFacebook")}</Button>;
}
