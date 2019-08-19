/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import { Provider } from 'react-redux'
import { createAppContainer } from 'react-navigation';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import store from './src/redux/store'

import AppNavigator from './src/route/index'

const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer></AppContainer>
    </Provider>
    
    // <View>
    //     {/* <Login></Login> */}
    //     {/* <PostList></PostList> */}
    // </View>
  );
};

const styles = StyleSheet.create({

});

export default App;
