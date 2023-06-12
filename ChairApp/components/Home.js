import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import { Button } from "native-base";
import { useStyling } from '../styles/style.js';

//The Home component to load in and exporting it for the navigation
export const Home = ({navigation}) => {
  const styling = useStyling;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={[styling.h1, styling.colorBlack, { fontFamily: 'Cookie-Regular' }]}>Homepage</Text>
        <Button
          title="Go to Welcome"
          onPress={() => navigation.navigate('Welcome')}
        >Go back</Button>
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