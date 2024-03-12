import { useEffect } from "react";

import { useAuthContext } from "@/context/AuthContext";
import useNavigation from "@/navigation/useNavigation";

export default function FourOFourScreen() {
  const navigation = useNavigation();
  const { isAuthenticated } = useAuthContext();

  useEffect(() => {
    if (isAuthenticated) {
      navigation.navigate("/home");
    } else {
      navigation.navigate("/authentication");
    }
  }, [isAuthenticated, navigation]);

  return <></>;
}
