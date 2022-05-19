import { Paper, Typography } from "@mui/material";
import React from "react";
import {
  StyledOption,
  StyledSelect,
} from "../../../AdminPage/FormCreateProduct/FormCreateProduct.styled";

import { StyledFormShippingInfo, StyledInputShipping } from "./Shipping.styled";
import { FlexFB } from "../../../../components/container/FlexSB";

function ShippingInfo() {
  return (
    <Paper elevation={2} style={{ padding: "36px" }}>
      <Typography
        variant="u-bold-18"
        style={{ marginBottom: "20px" }}
        component="p"
      >
        Delivery Address
      </Typography>
      <StyledFormShippingInfo>
        <FlexFB>
          <StyledInputShipping small label="Full Name" />
          <StyledInputShipping small label="Phone Number" />
        </FlexFB>
        <StyledInputShipping label="Address" />
      </StyledFormShippingInfo>
      <Typography
        variant="u-bold-18"
        style={{ marginBottom: "20px" }}
        component="p"
      >
        Payment Details
      </Typography>
      <StyledSelect defaultValue={1}>
        <StyledOption value={1}>COD</StyledOption>
        <StyledOption value={2}>Visa</StyledOption>
      </StyledSelect>
    </Paper>
  );
}

export default ShippingInfo;
