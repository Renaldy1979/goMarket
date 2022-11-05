import React, { useState } from 'react';
import { Button } from '@components/Controllers/Button';
import { Filter } from '@components/Controllers/Filter';
import { FlatList } from 'react-native';
import { Container, Options } from './styles';

type Props = {
  onFilter: (status: string) => void;
};

type CategoryProps = {
  name: string;
  id: string;
};
const category: CategoryProps[] = [
  { name: 'Todos', id: '0' },
  { name: 'Alimentos', id: '1' },
  { name: 'Bebidas', id: '2' },
  { name: 'Limpeza', id: '3' },
  { name: 'Eletrônicos', id: '4' },
  { name: 'Açougue', id: '5' },
];

export function Filters() {
  const [select, setSelect] = useState('0');

  function handleCategory(data: CategoryProps) {
    setSelect(data.id);
  }

  return (
    <Container>
      <Options>
        <FlatList
          data={category}
          renderItem={({ item }) => (
            <Filter
              title={item.name}
              style={{ marginRight: 10 }}
              onPress={() => handleCategory(item)}
              isActive={select === item.id}
            />
          )}
          keyExtractor={(item: CategoryProps) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </Options>
    </Container>
  );
}
