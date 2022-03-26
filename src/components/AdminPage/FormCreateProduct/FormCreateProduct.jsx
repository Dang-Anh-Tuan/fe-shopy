import { FormControl, Grid } from "@mui/material";
import React from "react";
import {
  FormContainer,
  StyledHeadingGroup,
  StyledInput,
  StyledLabel,
  StyledOption,
  StyledSelect,
} from "./FormCreateProduct.styled";
import FormRowInput from "./FormRowInput";

function FormCreateProduct({ children }) {
  return (
    <FormContainer>
      <FormControl fullWidth>{children}</FormControl>
    </FormContainer>
  );
}

export default FormCreateProduct;
