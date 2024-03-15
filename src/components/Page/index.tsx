import { Paper, PaperProps, SxProps, Toolbar } from "@mui/material";
import { ReactNode, Suspense } from "react";

import useThemeStyles from "@/theme/hooks/useThemeStyles";

interface PageProps extends Omit<PaperProps, "sx" | "variant"> {
  children: ReactNode;
  isSuspense?: boolean;
  sx?: SxProps;
  variant?: "one" | "two" | "three" | "zero";
}

export default function Page({ children, isSuspense, sx, variant = "one" }: Readonly<PageProps>) {
  let pageStyle = useThemeStyles<SxProps>((theme) => ({
    background: theme.palette.background.paper,
    width: "100vw",
    ...sx,
  }));

  if (isSuspense) {
    return (
      <Suspense>
        <Paper sx={pageStyle} elevation={0}>
          {children}
        </Paper>
      </Suspense>
    );
  }

  if (variant === "one") {
    return (
      <Paper sx={pageStyle} elevation={0}>
        <Toolbar></Toolbar>
        {children}
      </Paper>
    );
  }

  if (variant === "two") {
    return (
      <Paper sx={pageStyle} elevation={0}>
        <Toolbar></Toolbar>
        <Toolbar></Toolbar>
        {children}
      </Paper>
    );
  }

  if (variant === "three") {
    return (
      <Paper sx={pageStyle} elevation={0}>
        <Toolbar></Toolbar>
        <Toolbar></Toolbar>
        <Toolbar></Toolbar>
        {children}
      </Paper>
    );
  }

  return <Paper sx={pageStyle} elevation={0}>{children}</Paper>;
}
