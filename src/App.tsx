import MainStack from "./navigation/Main.routes";
import { I18nextProvider } from "react-i18next";
import { i18n } from "./i18n";
import { ThemeProvider } from "./theme/Theme.context";
import { UserDetailsProvider } from "./context/UserDetails.context";
import { AuthContextProvider } from "./context/AuthContext";
import { GraphQlErrorProvider } from "./context/GraphQlErrorContext";
import { LicenseInfo as DataGridLicenseInfo } from "@mui/x-data-grid-pro";
import { SidebarContextProvider } from "./context/SidebarContext";
import { FirebaseProvider } from "./context/FirebaseContext";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { StoreProvider } from "./context/StoreContext";
import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import KeyboardShortcutsContext from "./context/KeyboardShortcutsContext";
import { ClerkProvider } from "@clerk/clerk-react";

DataGridLicenseInfo.setLicenseKey("76c34ab47f811b623345476a6f326e4aTz01NzA5OSxFPTE3MDQ0NzYyNjQyODMsUz1wcm8sTE09c3Vic2NyaXB0aW9uLEtWPTI=");

const queryClient = new QueryClient({ queryCache: new QueryCache(), mutationCache: new MutationCache() });

// TODO: Clerk authentication is in pending
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <FirebaseProvider>
          <BrowserRouter>
              <I18nextProvider i18n={i18n}>
                <SnackbarProvider maxSnack={3}>
                  <AuthContextProvider>
                    <StoreProvider>
                      <ThemeProvider>
                        <UserDetailsProvider>
                          <GraphQlErrorProvider>
                            <SidebarContextProvider>
                              <KeyboardShortcutsContext>
                                <MainStack />
                              </KeyboardShortcutsContext>
                            </SidebarContextProvider>
                          </GraphQlErrorProvider>
                        </UserDetailsProvider>
                      </ThemeProvider>
                    </StoreProvider>
                  </AuthContextProvider>
                </SnackbarProvider>
              </I18nextProvider>
          </BrowserRouter>
        </FirebaseProvider>
      </ClerkProvider>
    </QueryClientProvider>
  );
}

export default App;
