import { TouchableOpacityProps } from 'react-native';
import { Container, Title, Load } from './styles';

type Props = TouchableOpacityProps & {
  title?: string;
  isLoading?: boolean;
  isActive?: boolean;
};

export function Button({
  title,
  isLoading = false,
  isActive = true,
  ...rest
}: Props) {
  return (
    <Container isActive={isActive} {...rest}>
      {isLoading ? <Load /> : <Title>{title}</Title>}
    </Container>
  );
}
