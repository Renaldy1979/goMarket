/* eslint-disable camelcase */
import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

import { Loading } from '@components/Animations/Loading';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';

import { AuthProvider } from './src/hooks/auth';
import { Routes } from './src/routes';
import theme from './src/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor="#B91B60" />
      <AuthProvider>{fontsLoaded ? <Routes /> : <Loading />}</AuthProvider>
    </ThemeProvider>
  );
}
