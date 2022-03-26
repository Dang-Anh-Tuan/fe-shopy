import styled from "@emotion/styled";

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100% - 64px);
  background-color: ${({ theme }) => theme.palette.bgAdminContent.main};
  flex: 1;
  padding: 26px;
`;
