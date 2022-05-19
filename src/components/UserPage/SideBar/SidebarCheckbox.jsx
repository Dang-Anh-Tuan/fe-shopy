import { Checkbox, Grid } from "@mui/material";
import React from "react";
import { StyledLabel } from "../../AdminPage/FormCreateProduct/FormCreateProduct.styled";

function SidebarCheckbox({label, onChange}) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Checkbox inputProps={{ "aria-label": label }} size="large" onChange={onChange}/>
      <StyledLabel variant="u-regular-14">{label}</StyledLabel>
    </div>
  );
}

export default SidebarCheckbox;
