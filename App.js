/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, createContext} from 'react';
// import { Provider } from 'react-redux'
import { StateProvider } from './src/redux/store';
import { createAppContainer } from 'react-navigation';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

// import store from './src/redux/store'

// export const Store = createContext();

import AppNavigator from './src/route/index'
import reducer, { initialState } from './src/redux/reducer'

const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <AppContainer></AppContainer>
    </StateProvider>    
  );
};

const styles = StyleSheet.create({

});

export default App;
