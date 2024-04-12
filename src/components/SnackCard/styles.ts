import { Circle } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

type DotProps = {
  iconColor?: string;
}
export const SnackListContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.base.gray_500};
  border-radius: 8px;
  padding: 18px;
  margin: 6px 0;
`;

export const Dot = styled(Circle).attrs<DotProps>(({ theme, iconColor }) => ({
  color: iconColor === 'red' ? theme.product.red_mid : theme.product.green_mid,
  size: 18,
  weight: 'fill'
})
)``;

export const TimeText = styled.Text`
 ${({ theme }) => css`
    color: ${theme.base.gray_100};
    font-family: ${theme.font_family.bold};
    font-size: ${theme.font_size.sm}px;
    border-right-color: ${theme.base.gray_400};
  `}
  text-align:center;
  border-width: 1px;
  border-top-color: transparent ;
  border-bottom-color: transparent ;
  border-left-color: transparent ;
  padding-right: 8px;
`;

export const NameText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.base.gray_200};
    font-family: ${theme.font_family.regular};
    font-size: ${theme.font_size.lg}px;
  `}
  text-align:center;
`;