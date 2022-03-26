import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import LaptopChromebookOutlinedIcon from '@mui/icons-material/LaptopChromebookOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import CheckroomOutlinedIcon from '@mui/icons-material/CheckroomOutlined';

export const SideBarData = [
  {
    title: "Dashboard",
    icon: <DashboardOutlinedIcon />,
    link: "/admin/home",
  },
  {
    title: "User",
    icon: <AssignmentIndOutlinedIcon />,
    link: "/admin/user",
  },
  {
    title: "Product",
    icon: <Inventory2OutlinedIcon />,
    link: "/admin/product",
    subMenu: [
      {
        title: "Book",
        icon: <MenuBookOutlinedIcon />,
        link: "/admin/product/book",
      },
      {
        title: "Laptop",
        icon: <LaptopChromebookOutlinedIcon />,
        link: "/admin/product/laptop",
      },
      {
        title: "Mobile",
        icon: <PhoneIphoneOutlinedIcon />,
        link: "/admin/product/mobile",
      },
      {
        title: "Clothes",
        icon: <CheckroomOutlinedIcon />,
        link: "/admin/product/clothes",
      },
    ],
  },
  {
    title: "Chart",
    icon: <ShowChartOutlinedIcon />,
    link: "/admin/chart",
  },
];
