
import { Circle } from "phosphor-react-native";
import { EdgeInsets } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

type ContainerProps = {
  insets: EdgeInsets;
  color: boolean;
  modalVisible: boolean;
}

type DotProps = {
  iconColor?: string;
}


export const Container = styled.View<ContainerProps>`
  flex: 1;

  padding-top: ${({ insets }) => insets.top + 24}px;

  background-color: ${({ theme, color }) => color ? theme.product.grenn_light : theme.product.red_light};
  opacity: ${({ modalVisible }) => modalVisible ? 0.25 : 1};
`;

export const ContentContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.base.white};

  padding: 24px;
  margin-top: 42px;

  border-radius: 20px 20px 0 0;
  
`;


export const Dot = styled(Circle).attrs<DotProps>(({ theme, iconColor }) => ({
  color: iconColor === 'red' ? theme.product.red_dark : theme.product.green_dark,
  size: 12,
  weight: 'fill'
})
)``;

export const SnackName = styled.Text`
 ${({ theme }) => css({
  fontSize: theme.font_size['xl'],
  fontFamily: theme.font_family.bold,
  color: theme.base.gray_100,
})}`;

export const SnackDescription = styled.Text`
 ${({ theme }) => css({
  fontSize: theme.font_size['lg'],
  fontFamily: theme.font_family.regular,
  color: theme.base.gray_100,
})}`;

export const SnackDateAndTimeTitle = styled.Text`
 ${({ theme }) => css({
  fontSize: theme.font_size['lg'],
  fontFamily: theme.font_family.bold,
  color: theme.base.gray_100,
})}`;

export const SnackDateAndTime = styled.Text`
 ${({ theme }) => css({
  fontSize: theme.font_size['lg'],
  fontFamily: theme.font_family.regular,
  color: theme.base.gray_100,
})}`;

export const SnackIsDiet = styled.Text` ${({ theme }) => css({
  fontSize: theme.font_size['md'],
  fontFamily: theme.font_family.regular,
  color: theme.base.gray_100,
})}`;

export const IsDietContainer = styled.View`
  flex-direction: row;
  align-items: center ;
  justify-content: center;
  background-color: ${({ theme }) => theme.base.gray_600};
  padding: 8px 16px;
  width: 140px;
  gap: 6px;
  border-radius: 20px;
`;


