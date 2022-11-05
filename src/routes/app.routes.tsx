/* eslint-disable react/no-unstable-nested-components */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useTheme } from 'styled-components';
import {
  FontAwesome,
  AntDesign,
  FontAwesome5,
  MaterialIcons,
} from '@expo/vector-icons';
import { Home } from '@screens/Home';
import { Products } from '@screens/Products';
import { Lists } from '@screens/Lists';
import { Options } from '@screens/Options';
import { ListProvider } from '../hooks/list';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  const theme = useTheme();

  return (
    <ListProvider>
      <Navigator
        initialRouteName="Início"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: theme.COLORS.PINK_700,
          tabBarInactiveTintColor: theme.COLORS.GRAY_300,
        }}
      >
        <Screen
          name="Início"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <FontAwesome name="home" size={size} color={color} />;
            },
          }}
        />
        <Screen
          name="Produtos"
          component={Products}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <AntDesign name="appstore1" size={size} color={color} />;
            },
          }}
        />
        <Screen
          name="Listas"
          component={Lists}
          options={{
            tabBarIcon: ({ color, size }) => {
              return (
                <FontAwesome5 name="shopping-bag" size={size} color={color} />
              );
            },
          }}
        />
        <Screen
          name="Opções"
          component={Options}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <MaterialIcons name="menu" size={size} color={color} />;
            },
          }}
        />
      </Navigator>
    </ListProvider>
  );
}
