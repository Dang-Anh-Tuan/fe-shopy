import React from "react";
import { DataGrid } from "@mui/x-data-grid";

function TableListProduct({ columns, rows, onDelete }) {

  const modifyRows = rows.map(item => ({
    ...item,
    onDelete: onDelete
  }))

  return (
    <DataGrid
      checkboxSelection={false}
      columns={columns}
      rows={modifyRows}
      pageSize={8}
      rowsPerPageOptions={[5]}
      pagination
      sx={{
        height: "100%",
        fontSize: "1.6rem",
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: "primary.main",
          color: "white.main",
        },
        "& .MuiTablePagination-displayedRows": {
          fontSize: "1.6rem",
        },
        "& .MuiSvgIcon-root": {
          fontSize: "2rem",
        },
        "& .MuiMenuItem-root": {
          fontSize: "1.6rem",
        },
      }}
    ></DataGrid>
  );
}

export default TableListProduct;
