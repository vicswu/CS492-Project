import * as React from "react";

import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";

export default function FormInputNumber({ name, control, label }) {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <TextField
          type="number"
          required
          helperText={error ? error.message : null}
          error={!!error}
          onChange={onChange}
          value={value}
          fullWidth
          label={label}
          variant="outlined"
          InputProps={{
            inputProps: {
              min: 0,
              max: name === "AGE" ? 125 : name === "WKSWORK1" ? 52 : 168,
            },
          }}
        />
      )}
    />
  );
}
