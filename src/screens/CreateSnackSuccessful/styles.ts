
import { EdgeInsets } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

type ContainerProps = {
  insets: EdgeInsets;
}

type TitleProps = {
  color: string;
}


export const Container = styled.View<ContainerProps>`
  flex: 1;

  padding-top: ${({ insets }) => insets.top + 24}px;
  background-color: ${({ theme }) => theme.base.white};
`;

export const ContentContainer = styled.View`
  flex: 1;

  padding: 24px;

  align-items: center;
  justify-content: space-evenly;

`;

export const Title = styled.Text<TitleProps>`
 ${({ theme, color }) => css({
  fontSize: theme.font_size['2xl'],
  fontFamily: theme.font_family.bold,
  color: color === 'green' ? theme.product.green_dark : theme.product.red_dark,
})}
text-align: center;
margin-bottom: 8px;
`;

export const Message = styled.Text`
  ${({ theme }) => css({
  fontSize: theme.font_size['lg'],
  fontFamily: theme.font_family.regular,

})}
text-align: center;
`;

export const Span = styled.Text`
${({ theme }) => css({
  fontSize: theme.font_size['lg'],
  fontFamily: theme.font_family.bold,
})}
text-align: center;
`;