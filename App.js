import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { BasketProvider } from "./Context"; // Ensure correct import
import HotelRoom from './screens/HotelRoom'; // Ensure correct import

export default function App() {
  return (
    <BasketProvider>
      <View style={styles.container}>
        <HotelRoom />
        <StatusBar style="auto" />
      </View>
    </BasketProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
