import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import { Button } from "native-base";
import { useStyling } from '../styles/style.js';

//The Home component to load in and exporting it for the navigation
export const Welcome = ({navigation}) => {
  const styling = useStyling;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={[styling.h1, styling.colorBlack, { fontFamily: 'Cookie-Regular' }]}>Welkom!</Text>
        <Text style={[styling.center, styling.paragraph, styling.colorBlack, { fontFamily: 'Quicksand-500' }]}>
          Vul je de 4-cijferige code in die te vinden is aan de binnenkant van de stoel.
        </Text>
        <Text style={[styling.center, styling.paragraph, styling.colorBlack, { fontFamily: 'Quicksand-500' }]}>
          Om behalve lekker in de Eco Lounge chair neer te ploffen ook gebruik te kunnen maken van alle functies die de stoel te bieden heeft. 
        </Text>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        >Start</Button>
      </View>
    </SafeAreaView>

    // <View style={styles.container}>
    //   <Text style={styling.header}>Homepage</Text>
    //   <StatusBar style="auto" />
    // </View>
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