/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, createContext} from 'react';
// import { Provider } from 'react-redux'
import { createAppContainer } from 'react-navigation';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

// import store from './src/redux/store'

// export const Store = createContext();

import AppNavigator from './src/route/index'

const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  return (
    // <Store.Provider value={store}>
      <AppContainer></AppContainer>
    // </Store.Provider>    
  );
};

const styles = StyleSheet.create({

});

export default App;
