import Button from "@/components/Button";
import { MicrosoftIcon } from "@/components/icons";
import { useTranslation } from "react-i18next";

export default function ContinueWithMicrosoft() {
  const { t } = useTranslation();
  return <Button startIcon={<MicrosoftIcon />}>{t("continueWithMicrosoft")}</Button>;
}
