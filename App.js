import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import HomeScreen from './Screens/HomeScreen';
import Constants from 'expo-constants';
import dictionary from './database'

export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    padding: 8,
  },
});
