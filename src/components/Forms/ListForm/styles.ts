import styled from 'styled-components/native';

export const Form = styled.View`
  width: 100%;
`;

export const FormBottom = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
  color: ${({ theme }) => theme.COLORS.GRAY_400};
  margin-bottom: 10px;
  align-self: center;
  text-transform: uppercase;
`;
