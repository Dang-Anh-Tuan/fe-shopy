import { Button, Grid } from "@mui/material";
import React, { useLayoutEffect, useState } from "react";
import { deleteBook, getAllBook } from "../../../api/Book.api";
import TableListProduct from "../../../components/AdminPage/TableListProduct/TableListProduct";
import { convertBookJsonToBookDataGrid } from "../../../helper/handleBookData";
import { colsTableBook } from "./ColsTableBook";

function ManageBook() {
  const [listBook, setListBook] = useState([]);

  function handleDeleteBook(id) {
    setListBook(listBook.filter((item) => item.id !== id));
    deleteBook(id).then((res) => console.log(res.data))
  }

  useLayoutEffect(() => {
    getAllBook().then((res) => {
      setListBook(convertBookJsonToBookDataGrid(res.data));
    });
  }, []);

  return (
    <>
      <Grid container direction="row" justifyContent="flex-end">
        <Grid item xs={2}>
          <Button
            href="/admin/product/book/add"
            variant="contained"
            size="large"
            sx={{ margin: "12px" }}
          >
            Create
          </Button>
        </Grid>
      </Grid>

      <TableListProduct
        columns={colsTableBook}
        rows={listBook}
        onDelete={handleDeleteBook}
      />
    </>
  );
}

export default ManageBook;
