import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar} from 'react-native';
import { NativeBaseProvider, Button, Input } from "native-base";
import { useStyling } from '../styles/style.js';

//The Home component to load in and exporting it for the navigation
export const Welcome = ({navigation}) => {
  const styling = useStyling;

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Text style={styling.header}>Welkom!</Text>
        <Text stle={styling.paragraph}>
          Vul de 4-cijferige code in, deze is te vinden in de binnenkant van de
          stoel.
        </Text>
        <Input mx="3" placeholder="Input" w="10%"></Input>
        <Text stle={styling.paragraph}>
          Om behalve lekker in de Eco Lounge chair neer te ploffen maak ook gebruik van alle functies die de stoel te bieden heeft
        </Text>
        <Button
          size="sm"
          variant="subtle"
          colorScheme="secondary"
          onPress={() => navigation.navigate("Home")}
        >
          Go to Home
        </Button>
      </View>
    </NativeBaseProvider>
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