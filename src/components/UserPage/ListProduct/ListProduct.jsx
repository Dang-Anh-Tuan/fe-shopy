import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { ContainerFull } from "../../container/ContainerFull/ContainerFull";
import ProductCard from "../ProductCard";
import { StyledRowHeading } from "./ListProduct.styled";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function ListProduct({ listProduct, heading, subtitle }) {
  return (
    <ContainerFull>
      <StyledRowHeading>
        <Typography variant="u-bold-24" component="h3">
          {heading}
        </Typography>
        <Button>
          View All
          <ArrowForwardIosIcon />
        </Button>
      </StyledRowHeading>
      <Typography
        variant="u-regular-12"
        component="p"
        style={{ marginBottom: "50px" }}
    >
        {subtitle}
      </Typography>
      <Grid container spacing={4}>
        {listProduct &&
          listProduct.map((item, index) => (
            <Grid item xs={4}>
              <ProductCard
                key={index}
                product = {item}
              />
            </Grid>
          ))}
      </Grid>
    </ContainerFull>
  );
}

export default ListProduct;
