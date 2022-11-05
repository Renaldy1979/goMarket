import styled from 'styled-components/native';
import { FontAwesome, Foundation } from '@expo/vector-icons';
import { Text, Animated } from 'react-native';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.View`
  border: 1px ${({ theme }) => theme.COLORS.GRAY_200};
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 6px;
  padding: 10px;
  justify-content: center;
  flex: 1;
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
  height: 100px;
`;

export const ListIcon = styled(FontAwesome).attrs(({ theme }) => ({
  size: 50,
  color: theme.COLORS.PINK_700,
  name: 'shopping-bag',
}))`
  margin-right: 5px;
  justify-content: center;
`;

export const Content = styled.View`
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
`;

export const TitleList = styled.View`
  justify-content: center;
  align-items: flex-start;
  flex: 1;
  width: 100%;
`;

export const TitleListText = styled(Text)`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const AdressList = styled.View`
  flex: 1;
  width: 100%;
`;

export const AdressListText = styled(Text)`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const Options = styled.View`
  flex-direction: row;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  flex: 1;
`;

export const DateView = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
`;

export const DateIcon = styled(FontAwesome).attrs(({ theme }) => ({
  size: 20,
  color: theme.COLORS.PINK_700,
  name: 'calendar-o',
}))`
  margin-right: 3px;
`;

export const DateList = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.GRAY_600};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  flex: 1;
  margin-left: 3px;
`;

export const ValueView = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ValueIcon = styled(Foundation).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GREEN,
  name: 'dollar',
}))`
  margin-right: 3px;
`;

export const ValueList = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.GRAY_600};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  margin-left: 3px;
`;

export const TotalView = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;

export const TotalIcon = styled(FontAwesome).attrs(({ theme }) => ({
  size: 20,
  color: theme.COLORS.PINK_700,
  name: 'list',
}))`
  margin-right: 3px;
`;

export const TotalItensList = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.GRAY_600};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  margin-left: 3px;
`;

export const Bottom = styled.View``;

export const ContainerLeftOptions = styled(Animated.View)`
  border: 1px ${({ theme }) => theme.COLORS.GRAY_200};
  background-color: red;
  border-radius: 6px;
  padding: 5px;
  justify-content: center;
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
  height: 100px;
  width: 50px;
`;
