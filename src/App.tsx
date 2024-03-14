import MainStack from "./navigation/Main.routes";
import { I18nextProvider } from "react-i18next";
import { i18n } from "./i18n";
import { ThemeProvider } from "./theme/Theme.context";
import { UserDetailsProvider } from "./context/UserDetails.context";
import { AuthContextProvider } from "./context/AuthContext";
import { GraphQlErrorProvider } from "./context/GraphQlErrorContext";
import { LocalizationProvider, LicenseInfo as DatePickerLicenseInfo } from "@mui/x-date-pickers-pro";
import { AdapterDateFns } from "@mui/x-date-pickers-pro/AdapterDateFns";
import { LicenseInfo as DataGridLicenseInfo } from "@mui/x-data-grid-pro";
import { SidebarContextProvider } from "./context/SidebarContext";
import { FirebaseProvider } from "./context/FirebaseContext";
import KeyboardShortcutsContext from "./context/KeyboardShortcutsContext";
import { BrowserRouter } from "react-router-dom";
import { StoreProvider } from "./context/StoreContext";
import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from "@tanstack/react-query";

DataGridLicenseInfo.setLicenseKey("76c34ab47f811b623345476a6f326e4aTz01NzA5OSxFPTE3MDQ0NzYyNjQyODMsUz1wcm8sTE09c3Vic2NyaXB0aW9uLEtWPTI=");
DatePickerLicenseInfo.setLicenseKey("76c34ab47f811b623345476a6f326e4aTz01NzA5OSxFPTE3MDQ0NzYyNjQyODMsUz1wcm8sTE09c3Vic2NyaXB0aW9uLEtWPTI=");

const queryClient = new QueryClient({ queryCache: new QueryCache(), mutationCache: new MutationCache() });

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <FirebaseProvider>
        <BrowserRouter>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <I18nextProvider i18n={i18n}>
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
            </I18nextProvider>
          </LocalizationProvider>
        </BrowserRouter>
      </FirebaseProvider>
    </QueryClientProvider>
  );
}

export default App;
