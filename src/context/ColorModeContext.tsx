import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ReactNode, createContext, useContext, useMemo, useState } from "react";

interface IColorModeContext {
  toggleColorMode: () => void;
  handleToLight: () => void;
  handleToDark: () => void;
}

const ColorModeContext = createContext<IColorModeContext | undefined>(undefined);

export default function ColorModeProvider({ children }: Readonly<{ children: ReactNode }>) {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
      handleToLight: () => {
        setMode("light");
      },
      handleToDark: () => {
        setMode("dark");
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
        components: {
          MuiAppBar: {
            defaultProps: {
              color: "default",
            },
          },
          MuiTextField: {
            defaultProps: {
              size: "small",
            },
          },
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export function useColorMode() {
  const context = useContext(ColorModeContext);
  if (!context) {
    throw new Error("useColorMode must be used within a ColorModeProvider");
  }

  return context;
}
