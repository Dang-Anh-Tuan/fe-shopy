import styled from "@emotion/styled";

export const ProductImage = styled.div`
    width: 100%;
    height : 20rem;
    background-image: ${props => "url(" + props.src + ")"};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`