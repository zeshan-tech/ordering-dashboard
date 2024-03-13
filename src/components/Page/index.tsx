import { Paper, PaperProps, SxProps, Toolbar } from "@mui/material";
import { ReactNode, Suspense } from "react";

import useThemeStyles from "@/theme/hooks/useThemeStyles";

interface PageProps extends Omit<PaperProps, "sx" | "variant"> {
  children: ReactNode;
  isSuspense?: boolean;
  sx?: SxProps;
  heightType?: "max" | "min" | "fixed";
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
      <>
        <Toolbar></Toolbar>
        <Paper sx={pageStyle} elevation={0}>
          {children}
        </Paper>
      </>
    );
  }

  if (variant === "two") {
    return (
      <>
        <Toolbar></Toolbar>
        <Toolbar></Toolbar>
        <Paper sx={pageStyle} elevation={0}>
          {children}
        </Paper>
      </>
    );
  }

  if (variant === "three") {
    return (
      <>
        <Toolbar></Toolbar>
        <Toolbar></Toolbar>
        <Toolbar></Toolbar>
        <Paper sx={pageStyle} elevation={0}>
          {children}
        </Paper>
      </>
    );
  }

  return <Paper sx={pageStyle}>{children}</Paper>;
}
