import { Button, Paper, Rating, Typography, Box } from "@mui/material";
import React from "react";
import { ProductImage } from "./ProductCard.styled";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export default function ProductCard({ name, price, rate }) {
  return (
    <Paper elevation={3}>
      <ProductImage
        src={"https://cf.shopee.vn/file/4a70fc0c2ae31337cecf9b38aee826ea"}
      ></ProductImage>
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
            <AddShoppingCartIcon sx={{fontSize: '2rem'}}/>
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}
