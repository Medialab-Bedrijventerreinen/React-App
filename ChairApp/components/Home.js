import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import { Button } from "native-base";
import { useStyling } from '../styles/style.js';
import { LinearGradient } from 'expo-linear-gradient';

//The Home component to load in and exporting it for the navigation
export const Home = ({navigation}) => {
  const styling = useStyling;

  return (
    <LinearGradient
      // Background Linear Gradient
      colors={['#EAC7B3', '#FBF4F0']}
      style={[styles.container, styles.background]}
    >
      <Text style={[styling.h1, styling.colorBlack, { fontFamily: 'Cookie-Regular' }]}>Homepage</Text>
      <Button
        title="Themes"
        onPress={() => navigation.navigate('Themes')}
      >Thema's</Button>
      <Button
        title="Themes"
        onPress={() => navigation.navigate('Sound')}
      >Geluid</Button>
    </LinearGradient>
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