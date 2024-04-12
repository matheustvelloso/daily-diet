
import { EdgeInsets } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

type ContainerProps = {
  insets: EdgeInsets;
  isDiet: boolean;
}


export const Container = styled.View<ContainerProps>`
  flex: 1;
  
  padding-top: ${({ insets }) => insets.top + 24}px;

  background-color: ${({ theme, isDiet }) => isDiet ? theme.product.grenn_light : theme.product.red_light};
`;

export const ContentContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.base.white};

  gap: 12px;
  padding: 24px;

  border-radius: 18px 18px 0 0;
`;

export const Title = styled.Text`
  ${({ theme }) => css({
  fontSize: theme.font_size['md'],
  fontFamily: theme.font_family.extra_bold

})}

  margin: 14px 0;
  text-align: center;
`;