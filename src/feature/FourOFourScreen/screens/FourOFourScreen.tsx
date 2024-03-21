import { useEffect } from "react";

import useNavigation from "@/navigation/useNavigation";
import { useAuth } from "@clerk/clerk-react";

export default function FourOFourScreen() {
  const { userId } = useAuth()
  const navigation = useNavigation();

  useEffect(() => {
    if (userId) {
      navigation.navigate("/home");
    } else {
      navigation.navigate("/");
    }
  }, [userId, navigation]);

  return <></>;
}
