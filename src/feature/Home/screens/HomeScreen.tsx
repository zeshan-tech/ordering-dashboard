import Page from "@/components/Page";
import { CreateOrganization, OrganizationProfile, useOrganization } from "@clerk/clerk-react";

export default function HomeScreen() {
  const { organization } = useOrganization()
  console.log(organization?.createdAt);
  
  return (
    <Page>
      <OrganizationProfile routing='path' path="/organization-profile" />
      <CreateOrganization />
    </Page>
  );
}
