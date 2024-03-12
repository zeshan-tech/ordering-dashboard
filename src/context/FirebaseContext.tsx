import { FirebaseApp, initializeApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";
import { createContext, useContext, ReactNode, useState, useEffect } from "react";

interface FirebaseContextProps {
  app: FirebaseApp;
  auth: Auth | undefined;
}

interface FirebaseProviderProps {
  children: ReactNode;
}

const firebaseConfig = {
  apiKey: "AIzaSyAct8ayK5dWpCpeVyJjvGrZXNDrq9RK7Pk",
  authDomain: "ordering-416218.firebaseapp.com",
  projectId: "ordering-416218",
  storageBucket: "ordering-416218.appspot.com",
  messagingSenderId: "434574436112",
  appId: "1:434574436112:web:ba8b6177ba8696cc8d6795",
  measurementId: "G-X0BJCYHBPS"
};

const defaultValue = {
  app: initializeApp(firebaseConfig),
  auth: undefined,
};

const FirebaseContext = createContext<FirebaseContextProps | undefined>(undefined);

export function FirebaseProvider({ children }: Readonly<FirebaseProviderProps>) {
  const [state, setState] = useState<FirebaseContextProps>(defaultValue);

  useEffect(() => {
    setState((v) => ({ ...v, auth: getAuth(state.app) }));
  }, []);

  return <FirebaseContext.Provider value={{ ...state }}>{children}</FirebaseContext.Provider>;
}

export default function useFirebase() {
  const context = useContext(FirebaseContext);
  if (!context) {
    throw new Error("useFirebase must be used within a FirebaseProvider");
  }
  return context;
}
