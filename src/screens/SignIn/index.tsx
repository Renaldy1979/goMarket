/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import GoogleSvg from '@assets/google.svg';
import LogoSvg from '@assets/logo.svg';
import { Button } from '@components/Controllers/Button';
import { Input } from '@components/Controllers/Input';

import { SignSocialButton } from '@components/Controllers/SignInSocialButton';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { ActivityIndicator, Alert, Text } from 'react-native';

import { useTheme } from 'styled-components';
import auth from '@react-native-firebase/auth';
import { api } from '../../services/api';

import { useAuth } from '../../hooks/auth';
import {
  Container,
  Header,
  Slogan,
  SignInTitle,
  Footer,
  FooterWrapper,
  Bottom,
  BottomLink,
  BottomTextLink,
} from './styles';

export function SignIn() {
  const navigation = useNavigation();

  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signWithEmailPassword, signInWithGoogleSocial, createUserWithSign } =
    useAuth();
  const theme = useTheme();

  async function handleSignInWithGoogle() {
    try {
      setIsLoading(true);
      const userLogged = await signInWithGoogleSocial();
      await createUserWithSign(userLogged);
    } catch (error) {
      console.log(error);
      Alert.alert('Não foi possível conectar com a conta Google');
    } finally {
      setIsLoading(false);
    }
  }

  function handleSignWithEmailPassword() {
    signWithEmailPassword(email, password);
  }

  function handleForgotPasword() {
    if (email) {
      auth()
        .sendPasswordResetEmail(email)
        .then(() =>
          Alert.alert('Redefinir senha', 'Enviamos um email para você!'),
        )
        .catch((error: any) => {
          Alert.alert('Alerta', 'Erro!');
          console.log(error);
        });
    } else {
      Alert.alert('Alerta', 'Preencha o campo email!');
    }
  }
  function handleSignUp() {
    navigation.navigate('SignUp');
  }

  return (
    <Container contentContainerStyle={{ flexGrow: 1 }}>
      <Header>
        <LogoSvg width={70} height={70} />
        <Slogan>Controle suas compras{'\n'}de forma muito simples</Slogan>
        <SignInTitle>Acesse sua conta</SignInTitle>
      </Header>

      <Footer>
        <FooterWrapper>
          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={setEmail}
          />
          <Input
            placeholder="Senha"
            secureTextEntry
            onChangeText={setPassword}
          />
          <Button title="Acessar" onPress={handleSignWithEmailPassword} />
          <Text style={{ textAlign: 'center', padding: 10 }}>ou</Text>
          <SignSocialButton
            title="Entrar com Google"
            svg={GoogleSvg}
            onPress={handleSignInWithGoogle}
          />
        </FooterWrapper>
        {isLoading && (
          <ActivityIndicator
            color={theme.COLORS.PINK_700}
            style={{ marginTop: 18 }}
          />
        )}
        <Bottom>
          <BottomLink onPress={handleSignUp}>
            <BottomTextLink>CADASTRE-SE</BottomTextLink>
          </BottomLink>
          <BottomLink onPress={handleForgotPasword}>
            <BottomTextLink>ESQUECI SENHA</BottomTextLink>
          </BottomLink>
        </Bottom>
      </Footer>
    </Container>
  );
}
