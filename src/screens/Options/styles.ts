import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  justify-content: center;
  align-items: center;
`;

export const Row = styled.View`
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 15px;
  background-color: 'orange';
  margin-top: 10px;
`;

export const Title = styled.Text`
  font-weight: bold;
  color: 'white';
  font-size: 32px;
`;

export const UnderlayLeftStyle = styled.View`
  flex: 1;
  background-color: 'tomato';
  justify-content: flex-end;
  flex-direction: row;
  align-items: center;
  padding: 15px;
`;
