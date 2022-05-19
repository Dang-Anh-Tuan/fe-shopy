import React from "react";
import {
  StyledButtonAddRemove,
  StyledContainerBtnLeft,
  StyledContainerBtnRight,
  StyledContainerContent,
  StyledContainerInfo,
  StyledContainerItem,
  StyledImage,
  StyleInfoDesc,
  StyleInfoName,
  StyleInfoPrice,
} from "./CartSide.styled";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import { Button, Typography } from "@mui/material";

function CartItem({
  cartItem,
  dispatch,
  handleAddItem,
  handleSubtractItem,
  handleRemoveItem,
}) {
  const { name, amount, img, price } = cartItem;
  return (
    <StyledContainerItem>
      <StyledContainerBtnLeft>
        <StyledButtonAddRemove
          variant="outlined"
          onClick={() => handleAddItem(cartItem, dispatch)}
        >
          <AddIcon fontSize="large" />
        </StyledButtonAddRemove>
        <Typography variant="u-regular-16">{amount}</Typography>
        <StyledButtonAddRemove
          variant="outlined"
          onClick={() => handleSubtractItem(cartItem, dispatch)}
        >
          <RemoveIcon fontSize="large" />
        </StyledButtonAddRemove>
      </StyledContainerBtnLeft>
      <StyledContainerContent>
        <StyledImage style={{ backgroundImage: `url(${img})` }}></StyledImage>
        <StyledContainerInfo>
          <StyleInfoName variant="">{name}</StyleInfoName>
          <StyleInfoDesc>{`$ ${price} x ${amount}`}</StyleInfoDesc>
          <StyleInfoPrice>{"$" + price * amount}</StyleInfoPrice>
        </StyledContainerInfo>
      </StyledContainerContent>
      <StyledContainerBtnRight>
        <Button onClick={() => handleRemoveItem(cartItem, dispatch)}>
          <CloseIcon fontSize="large" />
        </Button>
      </StyledContainerBtnRight>
    </StyledContainerItem>
  );
}

export default CartItem;
