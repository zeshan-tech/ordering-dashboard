import Button from "@/components/Button";
import { GoogleIcon } from "@/components/icons";
import { useAuthContext } from "@/context/AuthContext";
import useFirebase from "@/context/FirebaseContext";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useTranslation } from "react-i18next";

export default function ContinueWithGoogle() {
  const { t } = useTranslation();
  const { auth } = useFirebase();
  const { handleAuthenticate } = useAuthContext();

  const handleContinue = async () => {
    const result = await signInWithPopup(auth!, new GoogleAuthProvider());
    handleAuthenticate(await result.user.getIdToken());
  };

  return (
    <Button onClick={handleContinue} startIcon={<GoogleIcon />}>
      {t("continueWithGoogle")}
    </Button>
  );
}
