import styled, { css } from "styled-components/native";

type Props = {
  bgColor: string;
  flex1: boolean
}


export const Container = styled.View<Props>`
  background-color: ${({ theme, bgColor }) => {
    switch (bgColor) {
      case "green_light":
        return theme.product.grenn_light;
      case "red_light":
        return theme.product.red_light;
      default:
        return theme.base.gray_600;
    }
  }};

  padding: 18px 24px;
  gap: 12px;
  flex: ${({ flex1 }) => flex1 ? 1 : 'none'};

  border-radius: 10px;
`;

export const Title = styled.Text`
  ${({ theme }) => css({
  fontSize: theme.font_size['2xl'],
  fontFamily: theme.font_family.bold,
  color: theme.base.gray_100,
})}
text-align:center
`;

export const StatusText = styled.Text`
  ${({ theme }) => css({
  fontSize: theme.font_size['md'],
  fontFamily: theme.font_family.regular,
  color: theme.base.gray_200,
})}
text-align:center
`;