/* import { round } from "lodash";

export default function handleFormatPrice(value: number | undefined): string {
  if (value === undefined) {
    return "";
  }
  const roundedValue = round(value, 2);
  return roundedValue.toLocaleString();
}
 */

export default function handleFormatPrice(price: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(price);
}
