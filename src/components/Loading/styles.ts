import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.base.gray_600};
`;

export const LoadIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.base.gray_100
}))``;