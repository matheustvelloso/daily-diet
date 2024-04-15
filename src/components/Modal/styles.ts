import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 22px;
`;

export const ModalView = styled.View`
  margin: 20px;
  background-color: ${({ theme }) => theme.base.white};
  border-radius: 20px;
  padding: 35px;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.base.gray_400} 
`;

export const ModalText = styled.Text`
  text-align: center;
  ${({ theme }) => css({
  color: theme.base.gray_100,
  fontFamily: theme.font_family.bold,
  fontSize: theme.font_size['xl']
})}
`;
