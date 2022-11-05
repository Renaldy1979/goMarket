/* eslint-disable react/jsx-no-constructed-context-values */
import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { Alert } from 'react-native';
import { GoogleSignin, User } from '@react-native-google-signin/google-signin';
import { api } from '../services/api';

const CLIENT_ID =
  '398035717636-9lqp910qog3g6etqk6bmcsnsjb5i5au0.apps.googleusercontent.com';

interface AuthProviderProps {
  children: ReactNode;
}

interface IAuthContextData {
  user: User | null;
  userStorageLoading: boolean;
  signWithEmailPassword(email: string, password: string): void;
  signInWithGoogleSocial(): Promise<FirebaseAuthTypes.UserCredential>;
  signOut: () => Promise<void>;
  createUserWithSign: (data: FirebaseAuthTypes.UserCredential) => Promise<void>;
}

const AuthContext = createContext({} as IAuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState('');
  const [initializing, setInitializing] = useState(true);
  const [userStorageLoading, setUserStorageLoading] = useState(true);

  const userStorageKey = '@gomarket:user';

  useEffect(() => {
    async function loadUserStorageDate(): Promise<void> {
      const data = await AsyncStorage.getItem(userStorageKey);
      if (data) {
        const userLogged = JSON.parse(data) as User;
        setUser(userLogged);
      }
      setUserStorageLoading(false);
    }
    loadUserStorageDate();

    const subscriber = auth().onAuthStateChanged(userCred => {
      if (userCred) {
        userCred.getIdToken().then(tokenUser => {
          setToken(tokenUser);
          AsyncStorage.setItem(
            '@gomarket:user:token',
            JSON.stringify(tokenUser),
          );

          api.defaults.headers.Authorization = `Bearer ${tokenUser}`;
          console.log(tokenUser);
        });
      }
    });
    return subscriber;
  }, []);

  async function createUserWithSign(data: FirebaseAuthTypes.UserCredential) {
    const formData = {
      name: data.user.displayName,
      username: data.user.email,
      picture: data.user.photoURL,
      usertype: 'user',
    };

    try {
      await api.post('/users/', formData);
    } catch (error) {
      console.log(error);
      Promise.reject(error);
    }
  }
  async function signInWithGoogleSocial() {
    GoogleSignin.configure({
      webClientId: CLIENT_ID,
    });

    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({
      showPlayServicesUpdateDialog: true,
    });

    // Get the user
    const userInfo = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(
      userInfo.idToken,
    );

    // Sign-in the user with the credential
    const authConnect = await auth().signInWithCredential(googleCredential);

    await createUserWithSign(authConnect);

    await AsyncStorage.setItem(userStorageKey, JSON.stringify(userInfo));
    setUser(userInfo);
    return authConnect;
  }

  async function signWithEmailPassword(email: string, password: string) {
    if (email && password) {
      try {
        const userCredential = await auth().signInWithEmailAndPassword(
          email,
          password,
        );

        const us = {
          user: {
            id: userCredential.user.uid,
            name: userCredential.user.displayName,
            email: userCredential.user.email,
            photo: userCredential.user.photoURL,
            familyName: userCredential.user.displayName,
            givenName: userCredential.user.displayName,
          },
        } as User;
        setUser(us);
      } catch (error: any) {
        if (error.code === 'auth/invalid-email') {
          console.log('auth/invalid-email');
        }
        if (error.code === 'auth/user-disabled') {
          console.log('auth/user-disabled');
        }
        if (error.code === 'auth/user-not-found') {
          console.log('auth/user-not-found');
        }
        if (error.code === 'auth/wrong-password') {
          console.log('auth/wrong-password');
        }
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
          Alert.alert('Alerta', 'Necessário preencher todos os campos!');
        }
      }
    } else {
      Alert.alert('Alerta', 'Necessário preencher todos os campos!');
    }
  }

  const signOut = useCallback(async () => {
    auth()
      .signOut()
      .then(() => setUser(null));
    await AsyncStorage.removeItem(userStorageKey);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signWithEmailPassword,
        userStorageLoading,
        signInWithGoogleSocial,
        user,
        signOut,
        createUserWithSign,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = (): IAuthContextData => {
  const context = useContext(AuthContext);
  return context;
};
export { AuthProvider, useAuth };
