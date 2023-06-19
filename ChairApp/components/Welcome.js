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
      <View style={[styles.textContainer, {marginTop: "28px"}]}>
        <Text style={[styling.paragraph, styling.colorBlack, styling.center, {fontFamily: 'Quicksand-500'}]}>
          Vul de 4-cijferige code in, deze is te vinden in de binnenkant van de
          stoel.
        </Text>
      </View>
      <Flex direction="row" mb="10" mt="8" w={344} style={styles.container}>
        <Input 
          mx="3" 
          style={[styling.inputHome, styling.colorBlack, {fontFamily: 'Quicksand-500'}]}
          maxLength={1}
          keyboardType="numeric"
          returnKeyType="next"
          onChange={() => ref_input2.current.focus()}
        ></Input>
        <Input 
          mx="3" 
          style={[styling.inputHome, {fontFamily: 'Quicksand-500'}]}
          maxLength={1}
          keyboardType="numeric"
          returnKeyType="next"
          onChange={() => ref_input3.current.focus()}
          ref={ref_input2}
        ></Input>
        <Input 
          mx="3" 
          style={[styling.inputHome, {fontFamily: 'Quicksand-500'}]}
          maxLength={1}
          keyboardType="numeric"
          returnKeyType="next"
          onChange={() => ref_input4.current.focus()}
          ref={ref_input3}
        ></Input>
        <Input 
          mx="3" 
          style={[styling.inputHome, {fontFamily: 'Quicksand-500'}]}
          maxLength={1}
          keyboardType="numeric"
          ref={ref_input4}
        ></Input>
      </Flex>
      <View style={[styles.textContainer, {marginBottom: "80px"}]}>
        <Text style={[styling.paragraph, styling.colorBlack, styling.center, {fontFamily: 'Quicksand-500'}]}>
          Om behalve lekker in de Eco Lounge chair neer te ploffen maak ook gebruik van alle functies die de stoel te bieden heeft
        </Text>
      </View>
      <Button
        onPress={() => {navigation.navigate("Home"); SendRaspberryRequest()}}
      >
        <Text style={[styling.colorTwoLighter, styling.paragraphSemibold, {fontFamily: 'Quicksand-500'}]}>Start</Text>
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
  textContainer: {
    width: 282,
  },
});


const SendRaspberryRequest = () => {
  // fetch("192.168.137.146:8080", {
  //   method: 'GET',
  //   mode: 'no-cors'
  // })
  // .then((response) => {
  //   console.log("[MICRO CONTROLLER] successfully connected with raspberry")
  // })
  fetch("http://192.168.137.146:8080", {
    method: "POST",
    mode: 'no-cors',
    headers: {},
    body: "on"
  }).then(() => console.log("[MICRO CONTROLLER] request successful, closing connecton"))
  .catch(() => console.log("[MICRO CONTROLLER] something is wrong with your connection"))
}
