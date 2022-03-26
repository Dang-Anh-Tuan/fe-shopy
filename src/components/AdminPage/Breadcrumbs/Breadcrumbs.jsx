import React, { useLayoutEffect, useState } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Breadcrumbs as MUIBreadcrumbs } from "@mui/material";
import { StyledListItemText } from "../SideBar/SideBar.styled";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function Breadcrumbs() {
  const [breadcrumbsMap, setBreadcrumbsMap] = useState();

  useLayoutEffect(() => {
    const path = window.location.pathname;
    setBreadcrumbsMap(path.split("/").slice(2));
  }, []);

  return (
    <MUIBreadcrumbs separator={<NavigateNextIcon fontSize="large" />} sx={{ marginBottom : "24px" }}>
      <HomeOutlinedIcon fontSize="large" />
      {breadcrumbsMap &&
        breadcrumbsMap.map((item, index) => (
          <StyledListItemText key={index}>{item}</StyledListItemText>
        ))}
    </MUIBreadcrumbs>
  );
}

export default Breadcrumbs;
