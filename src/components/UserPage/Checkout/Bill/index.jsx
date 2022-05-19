import { Paper, Typography, Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Flex } from "../../../container/Flex/Flex";
import { FlexFB } from "../../../container/FlexSB";
import { StyledBillItem, StyledLineSeparate } from "./Bill.styled";

const SHIPPING_FEE = 5;

function Bill() {
  const { listItem, totalPrice } = useSelector((state) => state.cart);

  return (
    <Paper elevation={2} style={{ padding: "36px" }}>
      <Typography
        variant="u-bold-18"
        style={{ marginBottom: "20px" }}
        component="p"
      >
        Your order
      </Typography>
      {listItem &&
        listItem.map((item) => (
          <StyledBillItem key={item.id}>
            <FlexFB>
              <Flex>
                <Typography variant="u-bold-16" style={{ marginRight: "4px" }}>
                  {item.amount}
                </Typography>
                <Typography variant="u-regular-16"> x {item.name}</Typography>
              </Flex>
              <Typography variant="u-regular-16">
                $ {item.amount * item.price}
              </Typography>
            </FlexFB>
          </StyledBillItem>
        ))}
      <StyledLineSeparate />
      <FlexFB>
        <Typography
          variant="u-regular-16"
          style={{ marginRight: "4px", color: "#979faf" }}
        >
          SubTotal:
        </Typography>
        <Typography variant="u-bold-16">$ {totalPrice}</Typography>
      </FlexFB>
      <FlexFB>
        <Typography
          variant="u-regular-16"
          style={{ marginRight: "4px", color: "#979faf" }}
        >
          Shipping:
        </Typography>
        <Typography variant="u-bold-16">$ {SHIPPING_FEE}</Typography>
      </FlexFB>
      <StyledLineSeparate />
      <FlexFB>
        <Typography variant="u-regular-16" style={{ marginRight: "4px" }}>
          Total:
        </Typography>
        <Typography variant="u-bold-16" color="primary">
          $ {totalPrice + SHIPPING_FEE}
        </Typography>
      </FlexFB>
      <Button variant="contained" style={{width: "100%"}}>
        Order Place
      </Button>
    </Paper>
  );
}

export default Bill;
