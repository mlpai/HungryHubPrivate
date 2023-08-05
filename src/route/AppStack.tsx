import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { map } from 'lodash';
import React from 'react';
import { useAppSelector } from '../hooks/redux';
import { Auth, Home } from './constants';
import RouteModel from './route.types';
import { authRoutes, nonAuthRoutes } from './routes';

const Stack = createNativeStackNavigator();

const NonAuthStack = () => {
  const { isLoggedIn } = useAppSelector((state) => state.AppState);

  const routes = isLoggedIn ? authRoutes : nonAuthRoutes;
  const intialRoute = isLoggedIn ? Home : Auth;

  return (
    <Stack.Navigator
      initialRouteName={intialRoute}
      screenOptions={{
        headerShown: false
      }}>
      {map(routes, ({ name, component }: RouteModel) => (
        <Stack.Screen key={name} name={name} component={component} />
      ))}
    </Stack.Navigator>
  );
};

export default NonAuthStack;
