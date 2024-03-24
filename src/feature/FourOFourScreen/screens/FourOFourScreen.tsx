import { useEffect } from "react";

import useNavigation from "@/navigation/useNavigation";
import { useAuth } from "@clerk/clerk-react";

export default function FourOFourScreen() {
  const { userId, orgId } = useAuth();
  const navigation = useNavigation();

  useEffect(() => {
    if (userId) {
      if (!orgId) {
        navigation.navigate("/workspace/org");
        return
      }

      navigation.navigate("/home");
    } else {
      navigation.navigate("/");
    }
  }, [userId]);

  return <></>;
}
