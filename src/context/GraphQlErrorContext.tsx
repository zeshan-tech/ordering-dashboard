import { ClearIcon } from "@/components/icons";
import { Snackbar } from "@mui/material";
import { createContext, useContext, useState, ReactNode } from "react";

interface GraphQlErrorContextProps {
  showGraphQlError: (error: ServerErrorResponse) => void;
  showSnackbar: (error: string) => void;
}

const GraphQlErrorContext = createContext<GraphQlErrorContextProps | undefined>(undefined);

export function GraphQlErrorProvider({ children }: { children: ReactNode }) {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const showGraphQlError = (error: ServerErrorResponse) => {
    setErrorMessage(error.message);
  };

  const showSnackbar = (error: string) => {
    setErrorMessage(error);
  };

  const handleClose = () => {
    setErrorMessage(null);
  };

  return (
    <GraphQlErrorContext.Provider value={{ showGraphQlError, showSnackbar }}>
      <Snackbar open={!!errorMessage} message={errorMessage} onClose={handleClose} action={<ClearIcon  onClick={handleClose} />} />
      {children}
    </GraphQlErrorContext.Provider>
  );
}

export function useGraphQlError(): GraphQlErrorContextProps {
  const context = useContext(GraphQlErrorContext);
  if (!context) throw new Error("useGraphQlError must be used within a GraphQlErrorProvider");
  return context;
}
