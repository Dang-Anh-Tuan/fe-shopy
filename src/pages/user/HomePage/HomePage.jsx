import { Container } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ContainerListProduct } from "../../../components/container/ContainerListProduct/ContainerListProduct";
import { Flex } from "../../../components/container/Flex/Flex";
import CartSide from "../../../components/UserPage/CartSide/CartSide";
import ListProduct from "../../../components/UserPage/ListProduct/ListProduct";
import SideBar from "../../../components/UserPage/SideBar/SideBar";

const listProduct = [
  {
    id : 1,
    img: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2FGroceries%20Shop%2Fstrawberry.png&w=1920&q=75",
    name: "Fresh Strawberry",
    price: 98.7,
    rate: 4.5,
  },
  {
    id : 2,
    img: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2FGroceries%20Shop%2Fstrawberry.png&w=1920&q=75",
    name: "Fresh Strawberry",
    price: 98.7,
    rate: 4.5,
  },
  {
    id : 3,
    img: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2FGroceries%20Shop%2Fstrawberry.png&w=1920&q=75",
    name: "Fresh Strawberry",
    price: 98.7,
    rate: 4.5,
  },
  {
    id : 4,
    img: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2FGroceries%20Shop%2Fstrawberry.png&w=1920&q=75",
    name: "Fresh Strawberry",
    price: 98.7,
    rate: 4.5,
  },
  {
    id : 5,
    img: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2FGroceries%20Shop%2Fstrawberry.png&w=1920&q=75",
    name: "Fresh Strawberry",
    price: 98.7,
    rate: 4.5,
  },
  {
    id : 6,
    img: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2FGroceries%20Shop%2Fstrawberry.png&w=1920&q=75",
    name: "Fresh Strawberry",
    price: 98.7,
    rate: 4.5,
  },
  {
    id : 7,
    img: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2FGroceries%20Shop%2Fstrawberry.png&w=1920&q=75",
    name: "Fresh Strawberry",
    price: 98.7,
    rate: 4.5,
  },
];

function HomePage() {
  const isOpen = useSelector((state) => state.cart.isOpen);

  return (
    <>
      <Container>
        <Flex>
          <SideBar />
          <ContainerListProduct>
            <ListProduct
              listProduct={listProduct}
              heading={"Popular Products"}
              subtitle={"Best collection in 2021 for you!"}
            />
          </ContainerListProduct>
        </Flex>
      </Container>
      {isOpen && <CartSide />}
    </>
  );
}

export default HomePage;
