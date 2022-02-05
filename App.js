import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Login from './src/components/Login';

const App = () => {
  return (
    <SafeAreaView>
      <Login />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  view: {
    margin: 10,
  },
  text: {
    color: 'white',
    backgroundColor: 'blue',
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  loginBtn: {
    marginTop: 30,
  },
});
