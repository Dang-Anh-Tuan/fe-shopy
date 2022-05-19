import React from "react";
import { ContainerFull } from "../../../components/container/ContainerFull/ContainerFull";
import { Container, Grid } from "@mui/material";
import ListCart from "../../../components/UserPage/Cart/ListCart/ListCart";
import CartInfo from "../../../components/UserPage/Cart/CartInfo/CartInfo";
import { StyledContainerRowCart } from "./CartPage.style";
import { useSelector } from "react-redux";
import CartSide from "../../../components/UserPage/CartSide/CartSide";

function CartPage() {
  const { isOpen } = useSelector((state) => state.cart);

  return (
    <ContainerFull>
      <Container>
        <StyledContainerRowCart>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <ListCart />
            </Grid>
            <Grid item xs={4}>
              <CartInfo />
            </Grid>
          </Grid>
        </StyledContainerRowCart>
      </Container>
      {isOpen && <CartSide />}
    </ContainerFull>
  );
}

export default CartPage;
