import { ScrollView, TouchableOpacity } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(ScrollView)`
  flex: 1;
`;

export const Header = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.PINK_700};
  justify-content: space-around;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 40px;
`;

export const Slogan = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${RFValue(26)}px;
  text-align: center;
`;

export const SignInTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${RFValue(18)}px;
  text-align: center;
`;

export const Footer = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.GREEN_SECONDARY};
  flex: 1;
`;
export const FooterWrapper = styled.View`
  margin-top: ${RFPercentage(-4)}px;
  padding: 0 32px;
`;

export const Bottom = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 20px;
  flex: 1;
  padding: 0 32px;
`;

export const BottomText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_700};
`;
export const BottomLink = styled(TouchableOpacity)``;

export const BottomTextLink = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_500};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;
