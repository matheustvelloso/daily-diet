import styled, { css } from "styled-components/native";

import { ForkKnife, ArrowUpRight, ArrowLeft } from 'phosphor-react-native'

type Props = {
  isDiet?: boolean;
}

export const Container = styled.View`
    flex-direction: column;

    padding: 0 24px;
    margin-bottom: 24px;
`;

export const StatusContainer = styled.TouchableOpacity<Props>`
  flex-direction: row;
  background-color: ${({ theme, isDiet }) => isDiet ? theme.product.grenn_light : theme.product.red_light};

  border-radius: 10px;

  padding: 8px;
  margin-top: 36px; 

`;

export const StatusHeaderContainer = styled.View<Props>`
  flex-direction: row;
  background-color: ${({ theme, isDiet }) => isDiet ? theme.product.grenn_light : theme.product.red_light};

  padding: 0 24px;
  margin-bottom: 24px;
`;

export const ForkAndKnife = styled(ForkKnife).attrs(({ theme }) => ({
  weight: 'bold',
  color: theme.base.gray_100,
  size: 42
}))``;

// export const LeftArrow = styled(ArrowLeft).attrs(({ theme }) => ({
//   color: theme.base.gray_200,
//   size: 27,
// }))``;

export const LeftArrow = styled(ArrowLeft).attrs<Props>(({ theme, isDiet }) => ({
  color: isDiet ? theme.product.green_dark : theme.product.red_dark,
  size: 25,
}))``;


export const AppName = styled.Text`
  ${({ theme }) => css({
  fontSize: theme.font_size["lg"],
  fontFamily: theme.font_family.extra_bold,
})}
`;

// export const Title = styled.Text`
//   ${({ theme }) => css({
//   fontSize: theme.font_size["xl"],
//   fontFamily: theme.font_family.extra_bold
// })}
//   margin: 0 auto;
// `;

export const RightUpArrow = styled(ArrowUpRight).attrs<Props>(({ theme, isDiet }) => ({
  color: isDiet ? theme.product.green_dark : theme.product.red_dark,
  size: 25,
}))``;

export const TextContainer = styled.View`
  margin: 16px auto;
`;

export const Percent = styled.Text`
  ${({ theme }) => css({
  fontFamily: theme.font_family.bold,
  fontSize: theme.font_size['3xl']
})}
  text-align: center;
`;

export const Text = styled.Text`
  ${({ theme }) => css({
  fontFamily: theme.font_family.regular,
  fontSize: theme.font_size['md'],
  color: theme.base.gray_100
})}
  text-align: center;
`;