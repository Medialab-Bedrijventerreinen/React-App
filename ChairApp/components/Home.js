import * as React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { Button, Flex, Spacer, View } from "native-base";
import { useStyling } from '../styles/style.js';
import { LinearGradient } from 'expo-linear-gradient';

//The Home component to load in and exporting it for the navigation
export const Home = ({ navigation }) => {
  const styling = useStyling;

  return (
    <LinearGradient
      // Background Linear Gradient
      colors={['#EAC7B3', '#FBF4F0']}
      style={[styles.container, styles.background]}
    >
      {/* <Text style={[styling.h1, styling.colorBlack, { fontFamily: 'Cookie-Regular' }]}>Homepage</Text> */}

      <Flex direction="row" mb="2.5" mt="1.5" w={344}>
        <View style={styles.container} w={154}>
          <Button
            style={[styling.homeButtonTop]}
            title="Themes"
            onPress={() => navigation.navigate('Themes')}
          >
            <Flex direction="row">
              <Image source={require('../assets/images/thema_button.svg')} style={styling.homeButtonTopIcon} />
              <Text style={styling.homeButtonTopText}>Thema's</Text>
            </Flex>
          </Button>
        </View>
        <View style={styles.container} w={154}>
          <Spacer />
          <Button
            style={[styling.homeButtonTop]}
            title="Surrounding"
          >
            <Flex direction="row">
              <Image source={require('../assets/images/omgeving_button.svg')} style={styling.homeButtonTopIcon} />
              <Text style={styling.homeButtonTopText}>Omgeving</Text>
            </Flex>
          </Button>
        </View>
      </Flex>

      <Flex direction="row" mb="2.5" mt="1.5">
        <Button
          style={[styling.homeButton]}
          title="Sound"
          onPress={() => navigation.navigate('Sound')}
        >Geluiden</Button>
        <Button
          style={[styling.homeButton]}
          title="Smell"
        >Geuren</Button>
        <Button
          style={[styling.homeButton]}
          title="Light"
        >Licht</Button>
      </Flex>

      <Flex direction="row" mb="2.5" mt="1.5">
        <Button
          style={[styling.homeButton]}
          title="Climate"
        >Klimaat</Button>
        <Button
          style={[styling.homeButton]}
          title="Chair functions"
        >Stoel functies</Button>
      </Flex>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});