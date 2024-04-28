import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import MenuItems from './components/MenuItems';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <LittleLemonHeader />
        <MenuItems />
      </View>
      <LittleLemonFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57',
  },
  header:{
    flex: 1,
  }
});
