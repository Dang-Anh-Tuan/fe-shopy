import styled from "@emotion/styled/macro";
import { Typography } from "@mui/material";

export const FormContainer = styled.div`
  padding: 0 50px 50px 50px;

  & .MuiInputLabel-root {
    font-size: 1.6rem;
  }
`;

export const StyledHeadingGroup = styled(Typography)`
  display: block;
  padding: 50px 0;
`;

export const StyledLabel = styled(Typography)`
  width: 100%;
`;

export const StyledInput = styled.input`
  outline: none;
  font-size: 1.6rem;
  width: 100%;
  padding: 16px 24px;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.palette.primary.main};

	&:focus{
		border-width: 2px;
	}

  &[type='checkbox']{
    width: 100px;
    cursor: pointer;
  }
`;


export const StyledSelect = styled.select`
  width: 100%;
	outline: none;
  font-size: 1.6rem;
  width: 100%;
  padding: 16px 24px;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.palette.primary.main};
`;


export const StyledOption = styled.option`
  width: 100%;
`;


