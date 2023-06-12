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
        <Text style={[styling.h1, styling.colorBlack, { fontFamily: 'Cookie-Regular' }]}>Naar Home</Text>
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
            <Flex direction="col" mb="2.5" mt="1.5">
                <Center width="88" height="97" borderRadius="10" bg="#B2CAC0">
                    <Image source={require('../assets/images/energieke_landschappen.svg')} style={styles.image} />
                </Center>
                <Text>Energieke Landschappen</Text>
            </Flex>
            <Flex direction="col" mb="2.5" mt="1.5">
                <Center width="88" height="97" borderRadius="10" bg="#B2CAC0">
                    <Image source={require('../assets/images/magisch_stadsbos.svg')} style={styles.image} />
                </Center>
                <Text>Magisch Stadsbos</Text>
            </Flex>
        </Flex>

        <Flex direction="row" mb="2.5" mt="1.5">
            <Flex direction="col" mb="2.5" mt="1.5">
                <Center width="88" height="97" borderRadius="10" bg="#B2CAC0">
                    <Image source={require('../assets/images/revitaliserende_energie.svg')} style={styles.image} />
                </Center>
                <Text>Revitaliserende Energie</Text>
            </Flex>
            <Flex direction="col" mb="2.5" mt="1.5">
                <Center width="88" height="97" borderRadius="10" bg="#B2CAC0">
                    <Image source={require('../assets/images/ontdek_de_wereld_nabij.svg')} style={styles.image} />
                </Center>
                <Text>Ontdek de wereld nabij</Text>
            </Flex>
            <Flex direction="col" mb="2.5" mt="1.5">
                <Center width="88" height="97" borderRadius="10" bg="#B2CAC0">
                    <Image source={require('../assets/images/utopia.svg')} style={styles.image} />
                </Center>
                <Text>Utopia</Text>
            </Flex>
        </Flex>

        <Flex direction="row" mb="2.5" mt="1.5">
            <Flex direction="col" mb="2.5" mt="1.5">
                <Center width="88" height="97" borderRadius="10" bg="#B2CAC0">
                    <Image source={require('../assets/images/hemelse_sereniteit.svg')} style={styles.image} />
                </Center>
                <Text>Hemelse Sereniteit</Text>
            </Flex>
            <Flex direction="col" mb="2.5" mt="1.5">
                <Center width="88" height="97" borderRadius="10" bg="#B2CAC0">
                    <Image source={require('../assets/images/energieke_landschappen.svg')} style={styles.image} />
                </Center>
                <Text>Energieke Landschappen</Text>
            </Flex>
            <Flex direction="col" mb="2.5" mt="1.5">
                <Center width="88" height="97" borderRadius="10" bg="#B2CAC0">
                    <Image source={require('../assets/images/magisch_stadsbos.svg')} style={styles.image} />
                </Center>
                <Text>Magisch Stadsbos</Text>
            </Flex>
        </Flex>

        <Flex direction="row" mb="2.5" mt="1.5">
            <Flex direction="col" mb="2.5" mt="1.5">
                <Center width="88" height="97" borderRadius="10" bg="#B2CAC0">
                    <Image source={require('../assets/images/revitaliserende_energie.svg')} style={styles.image} />
                </Center>
                <Text>Revitaliserende Energie</Text>
            </Flex>
            <Flex direction="col" mb="2.5" mt="1.5">
                <Center width="88" height="97" borderRadius="10" bg="#B2CAC0">
                    <Image source={require('../assets/images/ontdek_de_wereld_nabij.svg')} style={styles.image} />
                </Center>
                <Text>Ontdek de wereld nabij</Text>
            </Flex>
            <Flex direction="col" mb="2.5" mt="1.5">
                <Center width="88" height="97" borderRadius="10" bg="#B2CAC0">
                    <Image source={require('../assets/images/utopia.svg')} style={styles.image} />
                </Center>
                <Text>Utopia</Text>
            </Flex>
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