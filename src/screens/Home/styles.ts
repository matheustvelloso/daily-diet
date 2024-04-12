
import { EdgeInsets } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

type ContainerProps = {
  insets: EdgeInsets;
}


export const Container = styled.View<ContainerProps>`
  flex: 1;

  padding-top: ${({ insets }) => insets.top + 24}px;
  background-color: ${({ theme }) => theme.base.white};
`;

export const Title = styled.Text`
 ${({ theme }) => css({
  fontSize: theme.font_size['lg'],
  fontFamily: theme.font_family.regular,
  color: theme.base.gray_100,
})}
`;

export const DateText = styled.Text`
  ${({ theme }) => css({
  fontSize: theme.font_size['xl'],
  fontFamily: theme.font_family.extra_bold,
  color: theme.base.gray_100,
})}
margin: 24px 0 8px 0;
`;