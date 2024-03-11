import { round } from "lodash";

export default function handleFormatPrice(value: number | undefined): string {
  if (value === undefined) {
    return "";
  }
  const roundedValue = round(value, 2);
  return roundedValue.toLocaleString();
}
