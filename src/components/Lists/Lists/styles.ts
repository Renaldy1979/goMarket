import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
  color: ${({ theme }) => theme.COLORS.GRAY_400};
  margin-bottom: 12px;
`;

export const Counter = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
  color: ${({ theme }) => theme.COLORS.GRAY_400};
  margin-bottom: 12px;
`;
