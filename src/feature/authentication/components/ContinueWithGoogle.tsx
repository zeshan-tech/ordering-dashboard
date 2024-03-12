import Button from "@/components/Button";
import { GoogleIcon } from "@/components/icons";
import React from "react";
import { useTranslation } from "react-i18next";

export default function ContinueWithGoogle() {
  const { t } = useTranslation();

  return <Button startIcon={<GoogleIcon />}>{t("continueWithGoogle")}</Button>;
}
