import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: ${RFPercentage(16)}px;
  background-color: ${({ theme }) => theme.COLORS.PINK_700};
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
`;

export const UserWrapper = styled.View`
  width: 100%;
  padding: 0 10px;
  margin-top: ${RFValue(28)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
  flex: 1;
`;

export const Photo = styled.Image`
  width: ${RFValue(55)}px;
  height: ${RFValue(55)}px;
  border-radius: 10px;
`;

export const User = styled.View`
  margin-left: 17px;
`;

export const UserGreeting = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const UserName = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const Icon = styled(FontAwesome).attrs(({ theme }) => ({
  size: RFValue(24),
  color: theme.COLORS.WHITE,
  name: 'power-off',
}))``;

export const LogOutButton = styled(TouchableOpacity)`
  margin-right: 5px;
`;
