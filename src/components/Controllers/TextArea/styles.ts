import styled from 'styled-components/native';
import { TextInput, TextInputProps } from 'react-native';

export const Container = styled(TextInput).attrs<TextInputProps>(
  ({ theme }) => ({
    placeholderTextColor: theme.COLORS.GRAY_400,
  }),
)<TextInputProps>`
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 12px;
  font-size: 14px;
  padding: 7px 0;
  padding-left: 20px;
  margin-bottom: 16px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  color: ${({ theme }) => theme.COLORS.GRAY_400};
`;
