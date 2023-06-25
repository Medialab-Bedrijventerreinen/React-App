import * as React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { Button, Flex, Spacer, View } from "native-base";
import { useStyling } from '../styles/style.js';
import { LinearGradient } from 'expo-linear-gradient';

//The Home component to load in and exporting it for the navigation
export const Home_custom = ({ navigation }) => {
  const styling = useStyling;

  return (
    <View style={{ backgroundColor: "#B2CAC0", height: "100vh", justifyContent: "end" }}>
      <Image source={require('../assets/images/stoel.png')} style={{ width: "100vw", height: "100vw", marginBottom: "-1px" }} />
      
      
      <View style={{ backgroundColor: "#597569", height: "35vh", alignItems: "center" }}>

        <View style={{ backgroundColor: "white", padding: "15px", flexDirection: "row", alignItems: "center", borderRadius: "100px", width: "90vw" }}>
          <Image source={require('../assets/images/spotify.png')} style={{ width: "50px", height: "50px", margin: "20px" }} />
          <View style={{}}>
            <Text>Now playing</Text>
            <Text style={{fontSize: "30px", fontWeight:"bold", marginTop: "-10px", marginBottom: "-10px"}}>Bird Sounds</Text>
            <Text>By Mr. Nature</Text>

          </View>
          <Image source={require('../assets/images/arrow.svg')} style={{ width: "25px", height: "40px", margin: "20px", marginLeft:"auto" }} />
        </View>

        <View style={{ backgroundColor: "white", padding: "15px", flexDirection: "row", alignItems: "center", borderRadius: "100px", width: "90vw", marginTop: "20px" }}>
          <Image source={require('../assets/images/brush_icon.png')} style={{ width: "50px", height: "50px", margin: "20px" }} />
          <View style={{}}>
            <Text>Current theme</Text>
            <Text style={{fontSize: "30px", fontWeight:"bold"}}>Bird Sounds</Text>

          </View>
          <Image source={require('../assets/images/arrow.svg')} style={{ width: "25px", height: "40px", margin: "20px", marginLeft:"auto" }} />
        </View>

      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});