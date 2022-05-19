import { Button, Grid } from "@mui/material";
import React, { useLayoutEffect, useState } from "react";
import { getAllClothes } from "../../../api/Clothes.api";
import TableListProduct from "../../../components/AdminPage/TableListProduct/TableListProduct";
import { convertClothesJsonToClothesDataGrid } from "../../../helper/handleClothesData";
import { colsTableClothes } from "./ColsTableClothes";

function ManageClothes() {
  const [listClothes, setListClothes] = useState([]);

  function handleDeleteLaptop(id) {
    setListClothes(listClothes.filter((item) => item.id !== id));
    // deleteLaptop(id);
  }

  useLayoutEffect(() => {
    getAllClothes().then((res) => {
      setListClothes(convertClothesJsonToClothesDataGrid(res.data));
    });
  }, []);

  return (
    <>
      <Grid container direction="row" justifyContent="flex-end">
        <Grid item xs={2}>
          <Button
            href="/admin/product/clothes/add"
            variant="contained"
            size="large"
            sx={{ margin: "12px" }}
          >
            Create
          </Button>
        </Grid>
      </Grid>

      <TableListProduct
        columns={colsTableClothes}
        rows={listClothes}
        onDelete={handleDeleteLaptop}
      />
    </>
  );
}

export default ManageClothes;
