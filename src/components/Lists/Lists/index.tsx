import React from 'react';
import { FlatList } from 'react-native';

import { Load } from '@components/Animations/Load';
import { List } from '@components/Controllers/List';

import { Container } from './styles';
import { useList } from '../../../hooks/list';

type ListProps = {
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
};

export function Lists() {
  const { lists, isLoading } = useList();

  const renderItem = (data: ListProps) => {
    return <List data={data} />;
  };

  return (
    <Container>
      {isLoading ? (
        <Load />
      ) : (
        <FlatList
          data={lists}
          keyExtractor={item => item.id}
          renderItem={item => renderItem(item.item)}
          showsVerticalScrollIndicator={false}
        />
      )}
    </Container>
  );
}
