import styled from "@emotion/styled";
import { Button, Paper, Typography } from "@mui/material";

export const  ContainerCartSide = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1000;
`

export const StyledBackDrop = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 380px;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1000;
`;
export const StyledPaper = styled(Paper)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 380px;
  z-index: 1000;
  height: 100vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  z-index: 1000;

`;
export const StyledHeading = styled.div`
  display: flex;
  align-items: center;
  height: 72px;
  padding: 20px;
  border-bottom: solid 0.1px #ddd;
`;

export const StyledContainerListItem = styled.div`
	flex: 1;
`
export const StyledContainerItem = styled.div`
  display: flex;
  height: 120px;
  margin-top: 20px;
  border-bottom: solid 0.1px #ddd;
`;
export const StyledContainerBtnLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 68px;
  height: 100%;
`;

export const StyledButtonAddRemove = styled(Button)`
  & {
    border-radius: 50%;
    padding: 4px;
    height: fit-content;
    min-width: 0px !important;
  }
`;
export const StyledContainerContent = styled.div`
  display: flex;
  flex: 1;
`;
export const StyledContainerBtnRight = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > button {
    color: #bbb;
  }
`;

export const StyledImage = styled.div`
  margin-top: 18px;
  width: 88px;
  height: 88px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;
export const StyledContainerInfo = styled.div`
  flex: 1;
  margin-top: 18px;
  margin-left: 4px;
`;
export const StyleInfoName = styled(Typography)`
  font-size: 1.6rem;
  font-weight: 500;
  letter-spacing: 0.5px;
`;
export const StyleInfoDesc = styled(Typography)`
  margin-top: 8px;
  font-size: 1.2rem;
  color: rgb(91, 91, 220);
`;
export const StyleInfoPrice = styled(Typography)`
  margin-top: 8px;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.palette.primary.main};
  font-weight: 500;
`;

export const StyledContainerButtonCheck = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px;
`;
