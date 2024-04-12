import { PencilSimpleLine, Plus, Trash } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

type Props = {
  buttonColor?: string
}


export const Container = styled.TouchableOpacity<Props>`
  width: 100%;
  background-color: ${({ theme, buttonColor }) => buttonColor === 'gray_200' ? theme.base.gray_200 : theme.base.white};
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border: 1px solid ${({ theme }) => theme.base.gray_200};

  padding: 8px;

  border-radius: 6px;
  margin: 10px 0;
`;

export const PlusIcon = styled(Plus).attrs(({ theme }) => ({
  size: 16,
  color: theme.base.white
}))``;

export const EditIcon = styled(PencilSimpleLine).attrs(({ theme }) => ({
  size: 16,
  color: theme.base.white
}))``;

export const TrashIcon = styled(Trash).attrs(({ theme }) => ({
  size: 16,
  color: theme.base.gray_200,
  weight: 'bold'
}))``;

export const ButtonText = styled.Text<Props>`
  ${({ theme, buttonColor }) => css({
  color: buttonColor === 'gray_200' ? theme.base.white : theme.base.gray_200,
  fontFamily: theme.font_family.bold,
  fontSize: theme.font_size['sm']
})}

  margin: 8px;
`;