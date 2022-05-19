import { Button, Grid } from "@mui/material";
import React, { useLayoutEffect, useState } from "react";
import { deleteMobile, getAllMobile } from "../../../api/Mobile.api";
import TableListProduct from "../../../components/AdminPage/TableListProduct/TableListProduct";
import { colsTableMobile } from "./ColsTableMobile";

function ManageMobile() {
  const [listMobile, setListMobile] = useState([]);

  function handleDeleteLaptop(id) {
    setListMobile(listMobile.filter((item) => item.id !== id));
    deleteMobile(id);
  }

  useLayoutEffect(() => {
    getAllMobile().then((res) => {
      setListMobile((res.data));
    });
  }, []);

  return (
    <>
      <Grid container direction="row" justifyContent="flex-end">
        <Grid item xs={2}>
          <Button
            href="/admin/product/mobile/add"
            variant="contained"
            size="large"
            sx={{ margin: "12px" }}
          >
            Create
          </Button>
        </Grid>
      </Grid>

      <TableListProduct
        columns={colsTableMobile}
        rows={listMobile}
        onDelete={handleDeleteLaptop}
      />
    </>
  );
}

export default ManageMobile;
