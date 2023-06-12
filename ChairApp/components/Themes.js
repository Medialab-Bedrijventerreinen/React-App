import * as React from 'react';
import { StyleSheet, Text, Image } from 'react-native';
import { Button, Flex, Center } from "native-base";
import { useStyling } from '../styles/style.js';
import { LinearGradient } from 'expo-linear-gradient';

//The Home component to load in and exporting it for the navigation
export const Themes = ({navigation}) => {
  const styling = useStyling;

  return (
      <LinearGradient
        // Background Linear Gradient
        colors={['#EAC7B3', '#FBF4F0']}
        style={[styles.container, styles.background]}
      >
        <Text style={[styling.h1, styling.colorBlack, { fontFamily: 'Cookie-Regular' }]}>Thema's</Text>
        <Button
          title="Go to Welcome"
          onPress={() => navigation.navigate('Home')}
        >Go back</Button>

        <Flex direction="row" mb="2.5" mt="1.5">
            <Flex direction="col" mb="2.5" mt="1.5">
                <Center width="88" height="97" borderRadius="10" bg="#B2CAC0">
                    <Image source={require('../assets/images/hemelse_sereniteit.svg')} style={styles.image} />
                </Center>
                <Text>Hemelse Sereniteit</Text>
            </Flex>
            <Center size="16" bg="primary.200" _text={{color: "coolGray.800"}}>
                200
            </Center>
            <Center size="16" bg="primary.300" _text={{color: "coolGray.800"}}>
                300
            </Center>
        </Flex>
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
  image: {
    width: 56,
    height: 56,
  },
});