import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const StyledSideBarUser = styled.div`
    height: calc(100vh - 64px - 68px) ;
    box-shadow: 0px 4px 16px rgb(43 52 69 / 10%);
    border-radius: 5px;
    background-color: #fff;
    flex: 0 0 280px;
    margin-top: calc(68px + 64px);
    padding: 20px;
`

export const StyledSeparation = styled.div`
    &{
        position: relative;
        height: 2px;
        background-color: #efefef;
        margin-top: 5px;
    }
    &::after{
        content: "";
        width: 50%;
        height: 3px;
        background-color: rgba(210,63,87, 0.4);
        position: absolute;
        left: 0;
        top: -1px;
    }
`

export const StyledHeadingFilter = styled(Typography)`
    display: block;
    margin-bottom: 20px;
    margin-top: 20px;
`