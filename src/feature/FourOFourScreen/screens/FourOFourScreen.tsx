import { useEffect } from "react";

import useNavigation from "@/navigation/useNavigation";

export default function FourOFourScreen() {
  const navigation = useNavigation();
  const isAuthenticated = true;

  useEffect(() => {
    if (isAuthenticated) {
      navigation.navigate("/home");
    } else {
      navigation.navigate("/authentication");
    }
  }, [isAuthenticated, navigation]);

  return <></>;
}
