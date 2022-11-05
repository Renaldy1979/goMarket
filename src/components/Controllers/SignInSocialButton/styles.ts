import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Button = styled(TouchableOpacity)`
  height: ${RFValue(56)}px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 6px;
  align-items: center;
  flex-direction: row;
  margin-bottom: 16px;
`;
export const ImageContainer = styled.View`
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-right-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_200};
  padding: ${RFValue(16)}px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
`;
export const Text = styled.Text`
  flex: 1;
  text-align: center;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${RFValue(14)}px;
`;
