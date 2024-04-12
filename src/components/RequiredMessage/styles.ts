import styled, { css } from "styled-components/native";


export const Required = styled.Text`
    ${({ theme }) => css`
        color: ${theme.product.red_dark};
        font-family: ${theme.font_family.bold};
        font-size: ${theme.font_size.md}px;
    `}
    
    margin-top: 2px;
`;