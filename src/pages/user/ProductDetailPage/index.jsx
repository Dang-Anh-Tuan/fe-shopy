import { Container } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { ContainerFull } from "../../../components/container/ContainerFull/ContainerFull";
import CartSide from "../../../components/UserPage/CartSide/CartSide";
import { StyledContainerRowCart } from "../CartPage/CartPage.style";
import ProductDetail from "../../../components/UserPage/ProductDetail";

function ProductDetailPage() {
  const { isOpen } = useSelector((state) => state.cart);

  return (
    <ContainerFull>
      <Container>
        <StyledContainerRowCart>
          <ProductDetail />
        </StyledContainerRowCart>
      </Container>
      {isOpen && <CartSide />}
    </ContainerFull>
  );
}

export default ProductDetailPage;
