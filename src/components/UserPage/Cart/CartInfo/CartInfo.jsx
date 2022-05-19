import {
  Button,
  Input,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FlexFB } from "../../../container/FlexSB";
import { StyledPaperCartInfo } from "./CartInfo.styled";

function CartInfo() {
  const { totalPrice } = useSelector((state) => state.cart);

  return (
    <StyledPaperCartInfo elevation={5}>
      <FlexFB>
        <Typography style={{ color: "#979faf" }}>Total:</Typography>
        <Typography variant="u-bold-24">{totalPrice} $</Typography>
      </FlexFB>
      <Typography style={{ marginBottom: "14px", fontWeight: "bold" }}>
        Additional Note :{" "}
      </Typography>
      <TextareaAutosize
        style={{
          width: "100%",
          height: "100px",
          padding: "12px",
          fontSize: "1.6rem",
          fontWeight: "300",
          marginBottom: "26px",
        }}
        placeholder="Note ..."
      ></TextareaAutosize>

      <TextField
        label="Voucher"
        style={{ width: "100%", marginBottom: "20px" }}
      ></TextField>
      <Button
        variant="outlined"
        style={{ width: "100%", marginBottom: "50px" }}
      >
        Apply Voucher
      </Button>
      <Button
        to="/checkout"
        component={Link}
        variant="contained"
        style={{ width: "100%" }}
      >
        Checkout
      </Button>
    </StyledPaperCartInfo>
  );
}

export default CartInfo;
