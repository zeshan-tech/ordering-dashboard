import Page from "@/components/Page";
import { useOrganization } from "@clerk/clerk-react";

export default function HomeScreen() {
  const { organization } = useOrganization();
  console.log(organization?.slug);

  return (
    <Page>
      <></>
    </Page>
  );
}
