import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Box, Button, Paper, Rating, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { ProductImage } from "./ProductCard.styled";

export default function ProductCard({ product }) {
  const { id, img, name, price, rate } = product;
  return (
    <Paper
      to={`/products/${id}`}
      elevation={3}
      component={Link}
      style={{ textDecoration: "none", display: "block" }}
    >
      <ProductImage src={img}></ProductImage>
      <Box padding={1}>
        <Typography variant="h4" component="h3" marginBottom={2} marginTop={2}>
          {name}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
          marginBottom={1}
        >
          <Rating name="read-only" value={rate} readOnly precision={0.5} />
          <Typography
            variant="subtitle1"
            component="span"
            marginLeft={1}
            fontSize="1.2rem;"
          >
            {rate}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="u-bold-16" component="span" color="primary">
            {price} đ
          </Typography>
          <Button
            variant="outlined"
            color="primary"
            size="small"
            sx={{
              padding: "8px",
            }}
          >
            <AddShoppingCartIcon sx={{ fontSize: "2rem" }} />
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}
