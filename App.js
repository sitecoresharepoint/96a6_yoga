/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import colors from "./src/config/colors"
import Login from './src/screens/Login'
import PostList from './src/screens/PostList'

const App = () => {
  return (
    <View>
        <Login></Login>
        {/* <PostList></PostList> */}
    </View>
  );
};

const styles = StyleSheet.create({

});

export default App;
