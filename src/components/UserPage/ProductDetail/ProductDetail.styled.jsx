import styled from "@emotion/styled";

export const StyledContainerImageProduct = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const StyledImageProduct = styled.div`
  height: 280px;
  width: 280px;
  background-image: ${(props) => `url(${props.src})`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;
