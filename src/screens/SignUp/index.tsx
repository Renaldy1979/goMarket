/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import LogoSvg from '@assets/logo.svg';
import { Button } from '@components/Controllers/Button';
import { Input } from '@components/Controllers/Input';

import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Alert } from 'react-native';

import auth from '@react-native-firebase/auth';
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

export function SignUp() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function handleNewAccount() {
    setIsLoading(true);
    if (email && password) {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => Alert.alert('Conta', 'Cadastrado com sucesso!'))
        .catch((error: any) => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
            Alert.alert('Alerta', 'Email ja associado a outra conta!');
          }

          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
            Alert.alert('Alerta', 'Email no formato inválido!');
          }
          Alert.alert('Alerta', 'Não foi possível criar a conta');
          console.log(error);
        })
        .finally(() => setIsLoading(false));
    } else {
      Alert.alert('Alerta', 'Os campos email e senha devem ser preenchidos!');
      setIsLoading(false);
    }
  }

  function handleSigIn() {
    navigation.navigate('SignIn');
  }

  return (
    <Container contentContainerStyle={{ flexGrow: 1 }}>
      <Header>
        <LogoSvg width={70} height={70} />
        <Slogan>Controle suas compras{'\n'}de forma muito simples</Slogan>
        <SignInTitle>Cadastre sua conta</SignInTitle>
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
          <Button
            title="Cadastrar"
            isLoading={isLoading}
            onPress={handleNewAccount}
          />
        </FooterWrapper>
        <Bottom>
          <BottomLink onPress={handleSigIn}>
            <BottomTextLink>Já tenho uma conta</BottomTextLink>
          </BottomLink>
        </Bottom>
      </Footer>
    </Container>
  );
}
