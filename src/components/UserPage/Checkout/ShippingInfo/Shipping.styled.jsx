import styled from "@emotion/styled";
import { TextField } from "@mui/material";

export const StyledFormShippingInfo = styled.div`
  margin-bottom: 50px;
`;

export const StyledInputShipping = styled(TextField)`
  width: ${(props) => (props.small ? "45%" : "100%")};
`;
