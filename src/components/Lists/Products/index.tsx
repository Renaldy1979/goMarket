import React, { useState } from 'react';
import { Load } from '@components/Animations/Load';
import { Product } from '@components/Controllers/Product';
import { FlatList } from 'react-native';
import { Filters } from '@components/Controllers/Filters';
import { useList } from '../../../hooks/list';

import { Container } from './styles';

type ProductProps = {
  productId: string;
  productName: string;
  productUnity: string;
  productType: string;
  productImg: string;
};

export function Products() {
  const { products, isLoading } = useList();
  const renderItem = (item: ProductProps) => {
    return <Product data={item} />;
  };

  return isLoading ? (
    <Load />
  ) : (
    <Container>
      <Filters />
      <FlatList
        keyExtractor={item => item.productId}
        data={products.sort((a, b) =>
          a.productName.localeCompare(b.productName),
        )}
        renderItem={item => renderItem(item.item)}
        showsVerticalScrollIndicator={false}
        horizontal={false}
        numColumns={2}
      />
    </Container>
  );
}
