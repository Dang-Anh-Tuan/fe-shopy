import { Button, Grid, Rating, Typography } from "@mui/material";
import React, { useLayoutEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { handleAddItem } from "../CartSide/cartHandle";
import {
  StyledContainerImageProduct,
  StyledImageProduct,
} from "./ProductDetail.styled";

const fakeProduct = {
  id: 10,
  img: "https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2FGroceries%20Shop%2Fstrawberry.png&w=1920&q=75",
  name: "Fresh Strawberry",
  price: 98.7,
  rate: 4.5,
};

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    // Call APi get product
    setProduct(fakeProduct);
  }, []);

  return (
    <div>
      {product && (
        <Grid container style={{ height: "350px" }}>
          <Grid item xs={6} style={{ paddingLeft: "20px" }}>
            <StyledContainerImageProduct>
              <StyledImageProduct src={product.img}></StyledImageProduct>
            </StyledContainerImageProduct>
          </Grid>
          <Grid item xs={6} style={{ paddingLeft: "20px" }}>
            <Typography
              variant="u-bold-36"
              style={{ marginTop: "80px" }}
              component="h3"
            >
              {product.name}
            </Typography>
            <Typography
              variant="u-regular-24"
              style={{ marginTop: "32px" }}
              component="p"
            >
              Rate :
              <Rating
                name="read-only"
                value={+product.rate}
                readOnly
                precision={0.5}
              />
            </Typography>
            <Typography
              variant="u-bold-36"
              style={{ marginTop: "32px" }}
              component="p"
              color="primary"
            >
              ${product.price}
            </Typography>
            <Button
              variant="contained"
              style={{ marginTop: "32px" }}
              onClick={() => handleAddItem(product, dispatch)}
            >
              {" "}
              Add to Cart
            </Button>
          </Grid>
        </Grid>
      )}
    </div>
  );
}

export default ProductDetail;
