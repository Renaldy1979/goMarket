import { TextInput } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(TextInput)`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-radius: 6px;
  padding: 16px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_300};
  border-width: 1px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  margin-bottom: 20px;
`;
