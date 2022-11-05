import { SvgProps } from 'react-native-svg';
import { TouchableOpacityProps } from 'react-native';
import { Button, ImageContainer, Text } from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
  svg: React.FC<SvgProps>;
}

export function SignSocialButton({ title, svg: Svg, ...rest }: Props) {
  return (
    <Button {...rest}>
      <ImageContainer>
        <Svg />
      </ImageContainer>
      <Text>{title}</Text>
    </Button>
  );
}
