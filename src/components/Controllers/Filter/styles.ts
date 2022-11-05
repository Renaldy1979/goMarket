import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

type Props = {
  isActive: boolean;
};
export const Container = styled(TouchableOpacity)<Props>`
  /* flex: 1; */
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.COLORS.PINK_700 : theme.COLORS.PINK_500};
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  min-height: 40px;
  max-height: 40px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  padding: 10px;
`;

export const Load = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.WHITE,
}))``;
