import styled from 'styled-components/native';
import { Image } from 'react-native';

export const Container = styled.View`
  /* flex: 1; */
  align-items: center;
  justify-content: center;
  /* background-color: orange; */
  width: 50%;
`;

export const Card = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border: 1px ${({ theme }) => theme.COLORS.GRAY_300};
  max-width: 95%;
  min-width: 95%;
  border-radius: 6px;
  padding: 0px;
  justify-content: center;
  margin-bottom: 10px;
  align-items: center;
  height: 154px;
`;

export const ProductImage = styled(Image)`
  width: 50px;
  height: 55px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
export const ProductName = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  color: ${({ theme }) => theme.COLORS.GRAY_700};
`;
export const ProductType = styled.Text``;
export const ProductUnity = styled.Text``;
