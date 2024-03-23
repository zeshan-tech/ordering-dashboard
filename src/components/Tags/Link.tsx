import { styled } from "@mui/system";
import { CSSProperties } from "react";
import { Path, Link as RouterDomLink, LinkProps as RouterDomLinkProps } from "react-router-dom";
import { TypographyProps } from "@mui/material/Typography";
import { AuthenticatedRouteParams, UnAuthenticatedRouteParams } from "@/navigation";

interface LinkProps extends Omit<RouterDomLinkProps, "to"> {
  to: keyof AuthenticatedRouteParams | keyof UnAuthenticatedRouteParams | Partial<Path>;
  style?: CSSProperties;
}

export default function Link({ to, children, style, ...restProps }: Readonly<LinkProps>) {
  return (
    <StyledLink to={to} style={style} {...restProps}>
      {children}
    </StyledLink>
  );
}

const StyledLink = styled(RouterDomLink)<TypographyProps>(({ theme, style }: { theme: any; style?: CSSProperties }) => ({
  textDecoration: "none",
  ...theme.typography.body1,
  ...style,
}));
