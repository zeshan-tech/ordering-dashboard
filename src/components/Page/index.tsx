import { Paper, PaperProps, SxProps } from "@mui/material";
import { ReactNode, Suspense } from "react";

import useThemeStyles from "@/theme/hooks/useThemeStyles";

interface PageProps extends PaperProps {
  children: ReactNode;
  isSuspense?: boolean;
}

export default function Page({ children, isSuspense }: Readonly<PageProps>) {
  const pageStyle = useThemeStyles<SxProps>((theme) => ({
    background: theme.palette.background.paper,
    py: theme.spacing(8),
    minHeight: "100vh",
    width: "100vw",
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
