import styled from "@emotion/styled/macro";
import { IconButton, MenuList } from "@mui/material";

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 44px;
  border: 1px solid ${({ theme }) => theme.palette.secondSubText.main};
  border-radius: 30px;
  width: 678px;

  &:hover {
    border-color: ${({ theme }) => theme.palette.primary.main};
  }

  &:focus-within {
    border-color: ${({ theme }) => theme.palette.primary.main};
    border-width: 2px;
  }
`;

export const SearchIconWrapper = styled.div`
  width: 40px;
  text-align: center;
  vertical-align: center;
  svg {
    font-size: 1.6rem;
  }
`;

export const StyledInputBase = styled.input`
  flex: 1;
  font-size: 1.6rem;
  outline: none;
  border: none;
`;

export const StyledRightNavWrapper = styled.div`
  display: flex;
`;

export const StyledIconButton = styled(IconButton)`
  width: 44px;
  height: 44px;
  background-color: #f3f5f9;
  margin-right: 12px;
  font-size: 2rem;

  &:last-child {
    margin-right: 0;
  }
`;

export const StyledCartCount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 18px;
  width: 18px;
  background-color: ${({ theme }) => theme.palette.primary.main};
  top: -4px;
  right: -4px;
  border-radius: 50%;

  span {
    color: ${({ theme }) => theme.palette.white.main};
    font-size: 1.2rem;
    line-height: 1.2rem;
  }
`;


export const StyledMenuList = styled(MenuList)`
  display: none;
  position: absolute;
  top: calc(100% + 10px);
  right: 12px;
  width: 230px;
  background-color: ${({ theme }) => theme.palette.primary.main};
  padding: 0;
  font-size: 1.6rem;

  &::before{
    content: '';
    position: absolute;
    top: -20px;
    width: 100%;
    height: 20px;
    background-color: transparent;
  }

  &::after {
    content: "";
    position: absolute;
    top: -20px;
    right: 5px;
    border-width: 10px 15px;
    border-style: solid;
    border-color: transparent transparent
      ${({ theme }) => theme.palette.primary.main} transparent;
  }
`;


export const StyledContainerAvatar = styled.div`
  position: relative;
  cursor: pointer;

  &:hover ${StyledMenuList}{
    display: block;
  }
`;
