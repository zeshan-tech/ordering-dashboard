import Page from "@/components/Page";
import { ProductsTable } from "../components";
import { useParams } from "react-router-dom";

export default function ProductsScreen() {
  const { categoryId } = useParams();

  return (
    <Page variant='zero'>
      <ProductsTable categoryId={categoryId!} />
    </Page>
  );
}
