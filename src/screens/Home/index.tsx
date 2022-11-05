import { Header } from '@components/Layout/Header';
import React from 'react';

import { Container, Title } from './styles';

export function Home() {
  return (
    <>
      <Header />
      <Container>
        <Title>Home</Title>
      </Container>
    </>
  );
}
