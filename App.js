import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { BasketProvider } from "./Context"; // Ensure correct import
import HotelRoom from './screens/HotelRoom'; // Ensure correct import

import { getPosts } from './firetest';

export default function App() {
  // const [data, setData] = useState({});
  // useEffect(()=>{
  //   getPosts(setData);
  // }, [])
  // console.log(data[0].vegetableName);
  return (
    <BasketProvider>
      <View style={styles.container}>
        <HotelRoom />
        {/* <Firebase/> */}
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
