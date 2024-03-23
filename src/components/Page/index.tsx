import { Paper, PaperProps, Toolbar, styled } from "@mui/material";
import { ReactNode, Suspense } from "react";


interface PageProps extends Omit<PaperProps, "variant"> {
  children: ReactNode;
  isSuspense?: boolean;
  variant?: "one" | "two" | "three" | "zero";
}

export default function Page({ children, isSuspense, variant = "one", ...restProps }: Readonly<PageProps>) {
  if (isSuspense) {
    return (
      <Suspense>
        <StyledPaper elevation={0} {...restProps}>
          {children}
        </StyledPaper>
      </Suspense>
    );
  }

  if (variant === "one") {
    return (
      <StyledPaper elevation={0} {...restProps}>
        <Toolbar></Toolbar>
        {children}
      </StyledPaper>
    );
  }

  if (variant === "two") {
    return (
      <StyledPaper elevation={0} {...restProps}>
        <Toolbar></Toolbar>
        <Toolbar></Toolbar>
        {children}
      </StyledPaper>
    );
  }

  if (variant === "three") {
    return (
      <StyledPaper elevation={0} {...restProps}>
        <Toolbar></Toolbar>
        <Toolbar></Toolbar>
        <Toolbar></Toolbar>
        {children}
      </StyledPaper>
    );
  }

  return <StyledPaper elevation={0}>{children}</StyledPaper>;
}

const StyledPaper = styled(Paper)(({ theme }) => ({
  background: theme.palette.background.paper,
  width: "100vw",
}));
