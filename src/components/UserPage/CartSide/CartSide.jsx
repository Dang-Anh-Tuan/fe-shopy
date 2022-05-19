import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  handleAddItem,
  handleCloseCartSide,
  handleRemoveItem,
  handleSubtractItem
} from "./cartHandle";
import CartItem from "./CartItem";
import {
  ContainerCartSide,
  StyledBackDrop,
  StyledContainerButtonCheck,
  StyledContainerListItem,
  StyledHeading,
  StyledPaper
} from "./CartSide.styled";


function CartSide() {
  const { listItem, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // function fakeAddNewItem() {
  //   const newItem = {
  //     id: 4,
  //     name: "Ford 2019",
  //     image:
  //       "https://dictionary.cambridge.org/vi/images/thumb/sports_noun_002_35307.jpg?version=5.0.234",
  //     price: 29.5,
  //   };

  //   const action = addItem(newItem);
  //   dispatch(action);
  // }

  return (
    <ContainerCartSide>
      <StyledBackDrop
        onClick={() => handleCloseCartSide(dispatch)}
      ></StyledBackDrop>
      <StyledPaper elevation={2}>
        <StyledHeading>
          <ShoppingCartIcon fontSize="large" />
          <Typography variant="u-bold-16" style={{ marginLeft: "4px" }}>
            {listItem.length} item
          </Typography>
        </StyledHeading>
        <StyledContainerListItem>
          {listItem &&
            listItem.map((item, index) => (
              <CartItem
                key={index}
                cartItem={item}
                dispatch={dispatch}
                handleAddItem={handleAddItem}
                handleSubtractItem={handleSubtractItem}
                handleRemoveItem={handleRemoveItem}
              />
            ))}
        </StyledContainerListItem>

        <StyledContainerButtonCheck>
          <Button
            to="/checkout"
            component={Link}
            variant="contained"
          >{`Checkout Now ${totalPrice}$`}</Button>
          <Button
            to="/cart"
            variant="outlined"
            component={Link}
            sx={{ marginTop: "12px" }}
          >
            {"View Cart"}
          </Button>
        </StyledContainerButtonCheck>
      </StyledPaper>
    </ContainerCartSide>
  );
}

export default CartSide;
