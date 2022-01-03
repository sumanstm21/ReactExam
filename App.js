import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './components/Navigation';
import { Provider } from 'react-redux';
import { store } from './store/store';

export default function App() {
  return (
    // <View style={styles.container}>
    <Provider store={store}>
      <Navigation></Navigation>
    </Provider>
    // </View>
  );
}

const styles = StyleSheet.create({
  container:{
    marginTop: 40,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'sans-serif'
  },
});
