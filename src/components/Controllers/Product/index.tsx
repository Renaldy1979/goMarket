import React from 'react';
import { Text } from 'react-native';
import {
  Container,
  Card,
  ProductName,
  ProductUnity,
  ProductType,
  ProductImage,
} from './styles';

type ProductProps = {
  productId: string;
  productName: string;
  productUnity: string;
  productType: string;
  productImg: string;
};

type Props = {
  data: ProductProps;
};

export function Product({ data }: Props) {
  console.log('produto exibido');
  return (
    <Container>
      <Card>
        <ProductImage
          source={{
            uri: data.productImg,
          }}
          resizeMode="contain"
        />
        <ProductName>{data.productName}</ProductName>
        <ProductType>{data.productType}</ProductType>
        <ProductUnity>{data.productUnity}</ProductUnity>
      </Card>
    </Container>
  );
}
