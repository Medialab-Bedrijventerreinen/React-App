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
      style={[styles.container, styles.background, { marginBottom: 200 }]}
    >
      {/* <Text style={[styling.h1, styling.colorBlack, { fontFamily: 'Cookie-Regular' }]}>Homepage</Text> */}

      <Flex direction="row" mb="10" mt="1.5" w={344}>
        <View style={styles.container} w={154}>
          <Button
            style={[styling.homeButtonTop]}
            shadow="7"
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
            style={[styling.homeButtonTop, styling.buttonDisabled]}
            shadow="7"
            title="Surrounding"
          >
            <Flex direction="row">
              <Image source={require('../assets/images/omgeving_button.svg')} style={styling.homeButtonTopIcon} />
              <Text style={styling.homeButtonTopText}>Omgeving</Text>
            </Flex>
          </Button>
        </View>

        <View style={styles.container} w={154}>
          <Spacer />
          <Button
            onPress={() => { navigation.navigate("Home_custom"); }}
            shadow="7"
          ><Flex direction="row">
              <Image source={require('../assets/images/omgeving_button.svg')} style={styling.homeButtonTopIcon} />
              <Text style={styling.homeButtonTopText}>Alternatieve stijl</Text>
            </Flex></Button>
        </View>

      </Flex>

      <Flex direction="row" mb="5" mt="1.5" w={360}>
        <View style={styles.container} w={150}>
          <Button
            style={[styling.homeButton]}
            shadow="7"
            title="Sound"
            onPress={() => navigation.navigate('Sound')}
          ><Image source={require('../assets/images/geluid_knop.svg')} style={styling.homeButtonIcon} /></Button>
          <Text style={[styling.homeButtonText, styling.paragraphSmall, styling.colorBlack, { fontFamily: 'Quicksand-500' }]}>Geluiden</Text>
        </View>
        <View style={styles.container} w={150}>
          <Button
            style={[styling.homeButton, styling.buttonDisabled]}
            shadow="7"
            title="Smell"
          // onPress={() => navigation.navigate('Sound')}
          ><Image source={require('../assets/images/geur_knop.svg')} style={styling.homeButtonIcon} /></Button>
          <Text style={[styling.homeButtonText, styling.paragraphSmall, styling.colorBlack, { fontFamily: 'Quicksand-500' }]}>Geuren</Text>
        </View>
        <View style={styles.container} w={150}>
          <Button
            style={[styling.homeButton, styling.buttonDisabled]}
            shadow="7"
            title="Light"
          // onPress={() => navigation.navigate('Sound')}
          ><Image source={require('../assets/images/licht_knop.svg')} style={styling.homeButtonIcon} /></Button>
          <Text style={[styling.homeButtonText, styling.paragraphSmall, styling.colorBlack, { fontFamily: 'Quicksand-500' }]}>Licht</Text>
        </View>
      </Flex>

      <Flex direction="row" mb="2.5" mt="1.5">
        <View style={styles.container} w={150}>
          <Button
            style={[styling.homeButton, styling.buttonDisabled]}
            shadow="7"
            title="Climate"
          // onPress={() => navigation.navigate('Sound')}
          ><Image source={require('../assets/images/klimaat_knop.svg')} style={styling.homeButtonIcon} /></Button>
          <Text style={[styling.homeButtonText, styling.paragraphSmall, styling.colorBlack, { fontFamily: 'Quicksand-500' }]}>Klimaat</Text>
        </View>
        <View style={styles.container} w={150}>
          <Button
            style={[styling.homeButton, styling.buttonDisabled]}
            shadow="7"
            title="Chair functions"
          // onPress={() => navigation.navigate('Sound')}
          ><Image source={require('../assets/images/stoel_functies_knop.svg')} style={styling.homeButtonIcon} /></Button>
          <Text style={[styling.homeButtonText, styling.paragraphSmall, styling.colorBlack, { fontFamily: 'Quicksand-500' }]}>Stoel functies</Text>
        </View>


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