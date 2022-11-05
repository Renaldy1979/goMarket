import {
  Container,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  LogOutButton,
} from './styles';

import { useAuth } from '../../../hooks/auth';

export function Header() {
  const { user, signOut } = useAuth();
  return (
    <Container>
      <UserWrapper>
        <UserInfo>
          <Photo
            source={{
              uri: user!.user.photo,
            }}
          />
          <User>
            <UserGreeting>Olá,</UserGreeting>
            <UserName>{user!.user.name}</UserName>
          </User>
        </UserInfo>
        <LogOutButton onPress={signOut}>
          <Icon />
        </LogOutButton>
      </UserWrapper>
    </Container>
  );
}
