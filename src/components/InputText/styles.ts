import styled, { css } from "styled-components/native";
import MaskInput from 'react-native-mask-input';

export const InputTitle = styled.Text`
 ${({ theme }) => css({
  fontSize: theme.font_size['md'],
  fontFamily: theme.font_family.bold,
  color: theme.base.gray_100,
})}
`;

export const Input = styled(MaskInput)`
  border: 1px solid ${({ theme }) => theme.base.gray_500};
  border-radius: 5px;
  padding: 8px;
  margin-top: 4px;
`;