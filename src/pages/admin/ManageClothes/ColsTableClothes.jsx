import { Button } from "@mui/material";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import ButtonActionDeleteRecord from "../../../components/AdminPage/TableListProduct/ButtonActionDeleteRecord";

export const colsTableClothes = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "color", headerName: "Color", width: 200},
  { field: "material", headerName: "Material", width: 200 },
  { field: "size", headerName: "Size", width: 200 },
  { field: "brandName", headerName: "Brand", width: 200 },
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
            href={`/admin/product/clothes/edit/${row.id}`}
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
