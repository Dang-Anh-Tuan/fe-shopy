import styled from "@emotion/styled";
import { ListItemText, MenuItem } from "@mui/material";

export const StyledSideBar = styled.div`
  width: 300px;
  min-height: calc(100vh - 64px);
  box-shadow: 0px 10px 5px 5px #ccc;
  z-index: 10;
`;

export const StyledMenuItem = styled(MenuItem)`
  color: ${({ theme }) => theme.palette.text.main};
  font-size: 1.6rem !important;
  background-color: ${(props) => {
    if (props.active) return "#d23f57";
  }};
  color: ${(props) => {
    if (props.active) return "#fff";
  }};

  &:hover {
    background-color: ${(props) => {
      if (props.active) return "#d23f57";
    }};
    color: ${(props) => {
      if (props.active) return "#fff";
    }};
  }
`;

export const StyledListItemText = styled(ListItemText)`
  span {
    font-size: 1.6rem !important;
  }
`;
