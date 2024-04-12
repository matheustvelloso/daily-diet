
import { Circle } from "phosphor-react-native";
import { EdgeInsets } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

type ContainerProps = {
  insets: EdgeInsets;
}

type InputButtonProps = {
  bgColor?: string;
}

type DotProps = {
  iconColor?: string;
}



export const Container = styled.View<ContainerProps>`
  flex: 1;

  padding-top: ${({ insets }) => insets.top + 24}px;

  background-color: ${({ theme }) => theme.base.gray_500};
`;

export const ContentContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.base.white};


  padding: 24px;

  border-radius: 20px 20px 0 0;
  margin-top: 42px;
`;

export const Title = styled.Text`
 ${({ theme }) => css({
  fontSize: theme.font_size['md'],
  fontFamily: theme.font_family.bold,
  color: theme.base.gray_100,
})}
`;

export const InputButton = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 1,
})) <InputButtonProps>`
  flex: 1;
  flex-direction: row;
  border: 1px solid ${({ theme, bgColor }) => {
    switch (bgColor) {
      case 'green':
        return theme.product.green_dark;
      case 'red':
        return theme.product.red_dark;
      default:
        return theme.base.gray_500;

    }
  }};
  border-radius: 5px;
  
  background-color: ${({ theme, bgColor }) => {
    switch (bgColor) {
      case 'green':
        return theme.product.grenn_light;
      case 'red':
        return theme.product.red_light;
      default:
        return theme.base.gray_500;

    }
  }};
  
  margin-top: 4px;
  padding: 10px;
  gap: 6px;

  justify-content: center;
  align-items: center;

`;

export const Dot = styled(Circle).attrs<DotProps>(({ theme, iconColor }) => ({
  color: iconColor === 'red' ? theme.product.red_dark : theme.product.green_dark,
  size: 8,
  weight: 'fill'
})
)``;

