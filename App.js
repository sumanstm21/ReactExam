import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './components/Navigation';

export default function App() {
  return (
    // <View style={styles.container}>
      <Navigation></Navigation>
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
  },
});
