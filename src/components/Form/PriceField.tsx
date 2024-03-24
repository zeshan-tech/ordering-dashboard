import { FieldValues } from "react-hook-form";
import { TextField, TextFieldProps } from ".";
import { InputAdornment } from "@mui/material";
import { DollarIcon } from "../icons";

export default function PriceField<T extends FieldValues>({ ...restProps }: Readonly<TextFieldProps<T>>) {
  return (
    <TextField
      type='number'
      inputProps={{ maxLength: 5 }}
      InputProps={{
        startAdornment: (
          <InputAdornment position='start'>
            <DollarIcon fontSize='small' solid />
          </InputAdornment>
        ),
      }}
      {...restProps}
    />
  );
}
