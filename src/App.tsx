import { NavigationContainer } from '@react-navigation/native';
import UserLocation from 'components/UserLocation';
import React from 'react';
import { Provider } from 'react-redux';
import AppStack from 'route/AppStack';
import { store } from 'store/store';

const App = () => {
  return (
    <Provider store={store}>
      <UserLocation />
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
