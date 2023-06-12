import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar} from 'react-native';
import { NativeBaseProvider, Button, Input } from "native-base";
import { useStyling } from '../styles/style.js';
import { LinearGradient } from 'expo-linear-gradient';

//The Home component to load in and exporting it for the navigation
export const Welcome = ({navigation}) => {
  const styling = useStyling;

  return (
    <LinearGradient
      // Background Linear Gradient
      colors={['#EAC7B3', 'transparent']}
      style={[styles.container, styles.background]}
    >
      <Text style={[styling.h1, styling.colorBlack, {fontFamily: 'Cookie-Regular'}]}>Welkom!</Text>
      <Text style={[styling.paragraph, styling.colorBlack, styling.center, {fontFamily: 'Quicksand-500'}]}>
        Vul de 4-cijferige code in, deze is te vinden in de binnenkant van de
        stoel.
      </Text>
      <Input mx="3" placeholder="Input" w="10%"></Input>
      <Text style={[styling.paragraph, styling.colorBlack, styling.center, {fontFamily: 'Quicksand-500'}]}>
        Om behalve lekker in de Eco Lounge chair neer te ploffen maak ook gebruik van alle functies die de stoel te bieden heeft
      </Text>
      <Button
        size="sm"
        variant="subtle"
        colorScheme="primary"
        onPress={() => navigation.navigate("Home")}
      >
        Start
      </Button>
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
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});