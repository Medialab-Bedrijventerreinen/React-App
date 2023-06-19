import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar} from 'react-native';
import { NativeBaseProvider, Button, Input, Flex } from "native-base";
import { useStyling } from '../styles/style.js';
import { LinearGradient } from 'expo-linear-gradient';

//The Home component to load in and exporting it for the navigation
export const Welcome = ({navigation}) => {
  const styling = useStyling;

  const ref_input2 = React.useRef();
  const ref_input3 = React.useRef();
  const ref_input4 = React.useRef();

  return (
    <LinearGradient
      // Background Linear Gradient
      colors={['#EAC7B3', '#FBF4F0']}
      style={[styles.container, styles.background]}
    >
      <Text style={[styling.h1, styling.colorBlack, {fontFamily: 'Cookie-Regular'}]}>Welkom!</Text>
      <Text style={[styling.paragraph, styling.colorBlack, styling.center, {fontFamily: 'Quicksand-500'}]}>
        Vul de 4-cijferige code in, deze is te vinden in de binnenkant van de
        stoel.
      </Text>
      <Flex direction="row" mb="10" mt="8" w={344} style={styles.container}>
        <Input 
          mx="3" 
          w="10%"
          maxLength={1}
          keyboardType="numeric"
          returnKeyType="next"
          onChange={() => ref_input2.current.focus()}
        ></Input>
        <Input 
          mx="3" 
          w="10%"
          maxLength={1}
          keyboardType="numeric"
          returnKeyType="next"
          onChange={() => ref_input3.current.focus()}
          ref={ref_input2}
        ></Input>
        <Input 
          mx="3" 
          w="10%"
          maxLength={1}
          keyboardType="numeric"
          returnKeyType="next"
          onChange={() => ref_input4.current.focus()}
          ref={ref_input3}
        ></Input>
        <Input 
          mx="3" 
          w="10%"
          maxLength={1}
          keyboardType="numeric"
          ref={ref_input4}
        ></Input>
      </Flex>
      <Text style={[styling.paragraph, styling.colorBlack, styling.center, {fontFamily: 'Quicksand-500'}]}>
        Om behalve lekker in de Eco Lounge chair neer te ploffen maak ook gebruik van alle functies die de stoel te bieden heeft
      </Text>
      <Button
        onPress={() => navigation.navigate("Home")}
      >
        Start
      </Button>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
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