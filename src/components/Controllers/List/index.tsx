import React, { useRef, RefObject } from 'react';
import { formatDateToDisplay } from '@utils/formatDate';
import {
  GestureHandlerRootView,
  TouchableOpacity,
} from 'react-native-gesture-handler';

import Swipeable from 'react-native-gesture-handler/Swipeable';

import { FontAwesome } from '@expo/vector-icons';

import { Alert, Animated, Text } from 'react-native';
import {
  Container,
  Card,
  Content,
  TitleList,
  TitleListText,
  AdressList,
  AdressListText,
  Options,
  DateView,
  ValueView,
  DateIcon,
  DateList,
  ValueIcon,
  ValueList,
  TotalView,
  TotalIcon,
  TotalItensList,
  ContainerLeftOptions,
} from './styles';
import { useList } from '../../../hooks/list';

interface ListProps {
  id: string;
  name: string;
  dateShopping: string;
  markets: {
    name: string;
    img: string;
    adrress: string;
  };
  totalValue: number;
  totalItems: number;
}

type Props = {
  data: ListProps;
};

type RightActionsProps = {
  progress: Animated.AnimatedInterpolation;
  dragX: Animated.AnimatedInterpolation;
  data: ListProps;
};

function RightActions({ progress, dragX, data }: RightActionsProps) {
  const { removeList } = useList();

  // eslint-disable-next-line react/destructuring-assignment
  const scale = dragX.interpolate({
    inputRange: [-50, 0],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  function handleDeleteItem() {
    Alert.alert('Remover', `Deseja remover a lista ${data.name}`, [
      {
        text: 'Não',
        style: 'cancel',
      },
      {
        text: 'Sim',
        onPress: () => {
          try {
            removeList(data.id);
          } catch (error) {
            Alert.alert('Não foi possível remover!');
          }
        },
      },
    ]);
  }

  return (
    <ContainerLeftOptions
      style={{
        transform: [{ scale }],
      }}
    >
      <TouchableOpacity
        style={{ flex: 1, justifyContent: 'center' }}
        onPress={handleDeleteItem}
      >
        <Text
          style={{
            color: 'white',
          }}
        >
          <FontAwesome name="trash-o" size={40} color="white" />
        </Text>
      </TouchableOpacity>
    </ContainerLeftOptions>
  );
}

export function List({ data }: Props) {
  const swipeRef = useRef<Swipeable>(null);

  const close = () => {
    swipeRef.current?.close();
  };

  const openRight = () => {
    swipeRef.current?.openRight();
  };

  return (
    <GestureHandlerRootView>
      <Swipeable
        ref={swipeRef}
        overshootRight={false}
        friction={2}
        // onSwipeableOpen={close}
        renderRightActions={(progress, dragX) => (
          <RightActions progress={progress} dragX={dragX} data={data} />
        )}
      >
        <Container key={data.id}>
          <Card>
            <Content>
              <TitleList>
                <TitleListText>{data.name}</TitleListText>
              </TitleList>
              <AdressList>
                <AdressListText>
                  {data.markets.name} - {data.markets.adrress}
                </AdressListText>
              </AdressList>
              <Options>
                <DateView>
                  <DateIcon />
                  <DateList>
                    {formatDateToDisplay(String(data.dateShopping))}
                  </DateList>
                </DateView>
                <ValueView>
                  <ValueIcon />
                  <ValueList>{data.totalValue}</ValueList>
                </ValueView>
                <TotalView>
                  <TotalIcon />
                  <TotalItensList>{data.totalItems} itens</TotalItensList>
                </TotalView>
              </Options>
            </Content>
          </Card>
        </Container>
      </Swipeable>
    </GestureHandlerRootView>
  );
}
