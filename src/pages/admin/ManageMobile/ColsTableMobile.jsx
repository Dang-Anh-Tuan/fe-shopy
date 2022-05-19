import { Button } from "@mui/material";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import ButtonActionDeleteRecord from "../../../components/AdminPage/TableListProduct/ButtonActionDeleteRecord";

export const colsTableMobile = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "gpu", headerName: "GPU", width: 100 },
  { field: "cpu", headerName: "CPU", width: 100 },
  { field: "storageSize", headerName: "Storage Size", width: 100 },
  { field: "ram", headerName: "RAM", width: 100 },
  { field: "screenSize", headerName: "Screen Size", width: 150 },
  { field: "battery", headerName: "Battery", width: 150 },
  { field: "os", headerName: "OS", width: 150 },
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
            href={`/admin/product/mobile/edit/${row.id}`}
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
