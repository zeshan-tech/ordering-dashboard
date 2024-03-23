import { NoRecordFoundIllustration } from "@/assets/Illestrations";
import { Box, Typography, styled } from "@mui/material";
import { useTranslation } from "react-i18next";

interface DataGridEmptyComponentProps {
  message?: string;
}

export default function DataGridEmptyComponent({ message }: Readonly<DataGridEmptyComponentProps>) {
  const { t } = useTranslation();

  return (
    <StyledBox display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
      <NoRecordFoundIllustration />
      <Typography>{message ?? t("message")}</Typography>
    </StyledBox>
  );
}

const StyledBox = styled(Box)(() => ({
  width: "100%",
  height: "100%",
}));
