import FilterAltIcon from "@mui/icons-material/FilterAlt";
import {
  FormControlLabel, Radio,
  RadioGroup,
  Rating,
  Slider,
  Typography
} from "@mui/material";
import React from "react";
import {
  StyledHeadingFilter,
  StyledSeparation,
  StyledSideBarUser
} from "./SideBar.styled";
import SidebarCheckbox from "./SidebarCheckbox";

function SideBar() {
  function handleFilterByType() {}

  return (
    <StyledSideBarUser>
      <Typography variant="u-bold-16">
        <FilterAltIcon
          style={{ fontSize: "1.6rem", position: "relative", top: "2px" }}
        />
        Filter :{" "}
      </Typography>
      <StyledSeparation />
      <StyledHeadingFilter variant="u-regular-16">Type :</StyledHeadingFilter>
      <SidebarCheckbox label={"Book"} onChange={handleFilterByType} />
      <SidebarCheckbox label={"Mobile"} onChange={handleFilterByType} />
      <SidebarCheckbox label={"Laptop"} onChange={handleFilterByType} />
      <SidebarCheckbox label={"Clothes"} onChange={handleFilterByType} />
      <StyledHeadingFilter variant="u-regular-16">Price :</StyledHeadingFilter>
      <Slider
        aria-label="Temperature"
        defaultValue={30}
        valueLabelDisplay="auto"
        step={100000}
        marks
        min={0}
        max={1000000}
      />
      <StyledHeadingFilter variant="u-regular-16">Rate :</StyledHeadingFilter>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
        style={{ marginLeft: "14px" }}
      >
        <FormControlLabel
          value="1"
          control={<Radio />}
          label={<Rating value={1} readOnly />}
        />
        <FormControlLabel
          value="2"
          control={<Radio />}
          label={<Rating value={2} readOnly />}
        />
        <FormControlLabel
          value="3"
          control={<Radio />}
          label={<Rating value={3} readOnly />}
        />
        <FormControlLabel
          value="4"
          control={<Radio />}
          label={<Rating value={4} readOnly />}
        />
        <FormControlLabel
          value="5"
          control={<Radio />}
          label={<Rating value={5} readOnly />}
        />
      </RadioGroup>
    </StyledSideBarUser>
  );
}

export default SideBar;
