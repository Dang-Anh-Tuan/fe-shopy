import { Grid } from "@mui/material";
import React from "react";
import { StyledInput, StyledLabel } from "./FormCreateProduct.styled";

function FormRowInput({
  title,
  placeholder,
  type = "text",
  name,
  value,
  readonly,
  onChange,
}) {
  return (
    <>
      <Grid item xs={2}>
        <StyledLabel variant="u-regular-20">{title} : </StyledLabel>
      </Grid>
      <Grid item xs={10}>
        <StyledInput
          onChange={onChange}
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          readOnly={readonly}
        ></StyledInput>
      </Grid>
    </>
  );
}

export default FormRowInput;
