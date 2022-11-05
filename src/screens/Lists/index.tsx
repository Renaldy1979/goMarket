import React, { useCallback } from 'react';

import { Header } from '@components/Layout/Header';

import { Lists as ListsComponent } from '@components/Lists/Lists';
import { NewList } from '@components/Controllers/NewList';
import { useFocusEffect } from '@react-navigation/native';
import { Container } from './styles';
import { useList } from '../../hooks/list';

export function Lists() {
  const { fetchLists } = useList();

  useFocusEffect(
    useCallback(() => {
      fetchLists();
    }, []),
  );

  return (
    <>
      <Header />
      <Container>
        <ListsComponent />
        <NewList />
      </Container>
    </>
  );
}
