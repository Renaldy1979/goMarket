import styled from 'styled-components/native';

import { Dimensions } from 'react-native';

export const Background = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: ${Dimensions.get('window').width}px;
  height: ${Dimensions.get('window').height}px;
  background-color: rgba(255, 255, 255, 0.5);
`;

export const BackgroundModal = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: ${Dimensions.get('window').width}px;
  height: ${Dimensions.get('window').height}px;
  background-color: rgba(235, 235, 235, 1); ;
`;
