import React from "react";
import { ContainerFull } from "../../../components/container/ContainerFull/ContainerFull";
import { Container, Grid } from "@mui/material";
import ShippingInfo from "../../../components/UserPage/Checkout/ShippingInfo";
import Bill from "../../../components/UserPage/Checkout/Bill";
import { StyledContainerRowCart } from "../CartPage/CartPage.style";
import CartSide from "../../../components/UserPage/CartSide/CartSide";
import { useSelector } from "react-redux";

function CheckoutPage() {
  const { isOpen } = useSelector((state) => state.cart);

  return (
    <ContainerFull>
      <Container>
        <StyledContainerRowCart>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <ShippingInfo />
            </Grid>
            <Grid item xs={4}>
              <Bill />
            </Grid>
          </Grid>
        </StyledContainerRowCart>
        {isOpen && <CartSide />}
      </Container>
    </ContainerFull>
  );
}

export default CheckoutPage;
