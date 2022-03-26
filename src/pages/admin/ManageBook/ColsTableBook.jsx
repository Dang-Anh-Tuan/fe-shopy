import { Button } from "@mui/material";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import ButtonActionDeleteRecord from "../../../components/AdminPage/TableListProduct/ButtonActionDeleteRecord";

export const colsTableBook = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "title", headerName: "Title", width: 250 },
  { field: "authorName", headerName: "Author", width: 150 },
  { field: "language", headerName: "Language", width: 150 },
  { field: "publisherName", headerName: "Publisher", width: 150 },
  { field: "categoryType", headerName: "Category", width: 150 },
  {
    field: "action",
    headerName: "Action",
    width: 150,
    sortable: false,
    renderCell: (cellValue) => {
      const { row } = cellValue;

      return (
        <>
          <Button
            href={`/admin/product/book/edit/${row.id}`}
            color="blue"
          >
            <ModeEditOutlineOutlinedIcon fontSize="large" />
          </Button>
          <ButtonActionDeleteRecord
            id={row.id}
            onDelete={row.onDelete}
          ></ButtonActionDeleteRecord>
        </>
      );
    },
  },
];
