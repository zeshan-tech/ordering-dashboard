import { Paper, PaperProps, SxProps } from "@mui/material";
import { ReactNode, Suspense } from "react";

import useThemeStyles from "@/theme/hooks/useThemeStyles";

interface PageProps extends Omit<PaperProps, "sx"> {
  children: ReactNode;
  isSuspense?: boolean;
  sx?: SxProps;
}

export default function Page({ children, isSuspense, sx }: Readonly<PageProps>) {
  const pageStyle = useThemeStyles<SxProps>((theme) => ({
    background: theme.palette.background.paper,
    py: theme.spacing(8),
    minHeight: "100vh",
    width: "100vw",
    ...sx,
  }));

  if (isSuspense) {
    return (
      <Suspense>
        <Paper sx={pageStyle}>{children}</Paper>;
      </Suspense>
    );
  }

  return <Paper sx={pageStyle}>{children}</Paper>;
}
