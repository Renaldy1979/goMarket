import React from 'react';
import { Button } from '@components/Controllers/Button';
import { Container } from './styles';

export function NewProduct() {
  return (
    <Container>
      <Button title="Novo produto" style={{ width: '100%', marginTop: 10 }} />
    </Container>
  );
}
