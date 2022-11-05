import React, { useCallback } from 'react';

import { Header } from '@components/Layout/Header';
import { Products as ProductsComponent } from '@components/Lists/Products';
import { NewProduct } from '@components/Controllers/NewProduct';
import { useFocusEffect } from '@react-navigation/native';
import { Container } from './styles';
import { useList } from '../../hooks/list';

export function Products() {
  const { fetchProducts } = useList();

  useFocusEffect(
    useCallback(() => {
      fetchProducts();
    }, []),
  );

  return (
    <>
      <Header />
      <Container>
        <ProductsComponent />
        <NewProduct />
      </Container>
    </>
  );
}
