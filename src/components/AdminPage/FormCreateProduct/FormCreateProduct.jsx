import { FormControl } from "@mui/material";
import React from "react";
import {
  FormContainer
} from "./FormCreateProduct.styled";

function FormCreateProduct({ children }) {
  return (
    <FormContainer>
      <FormControl fullWidth>{children}</FormControl>
    </FormContainer>
  );
}

export default FormCreateProduct;
