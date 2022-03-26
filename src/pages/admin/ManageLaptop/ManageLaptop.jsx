import { Button, Grid } from "@mui/material";
import React, { useLayoutEffect, useState } from "react";
import { deleteLaptop, getAllLaptop } from "../../../api/Laptop.api";
import TableListProduct from "../../../components/AdminPage/TableListProduct/TableListProduct";
import { convertLaptopJsonToLaptopDataGrid } from "../../../helper/handleLaptopData";
import { colsTableLaptop } from "./ColsTableLaptop";

function ManageLaptop() {
  const [listLaptop, setListLaptop] = useState([]);

  function handleDeleteLaptop(id) {
    setListLaptop(listLaptop.filter((item) => item.id !== id));
    deleteLaptop(id);
  }

  useLayoutEffect(() => {
    getAllLaptop().then((res) => {
      setListLaptop(convertLaptopJsonToLaptopDataGrid(res.data));
    });
  }, []);

  return (
    <>
      <Grid container direction="row" justifyContent="flex-end">
        <Grid item xs={2}>
          <Button
            href="/admin/product/laptop/add"
            variant="contained"
            size="large"
            sx={{ margin: "12px" }}
          >
            Create
          </Button>
        </Grid>
      </Grid>

      <TableListProduct
        columns={colsTableLaptop}
        rows={listLaptop}
        onDelete={handleDeleteLaptop}
      />
    </>
  );
}

export default ManageLaptop;
