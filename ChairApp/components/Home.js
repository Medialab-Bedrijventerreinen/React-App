import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar,  TouchableOpacity } from 'react-native';
import { NativeBaseProvider, Button ,IconButton, Icon, Image, createIcon} from "native-base";
import { useStyling } from '../styles/style.js';

//The Home component to load in and exporting it for the navigation
export const Home = ({navigation}) => {
  const styling = useStyling;

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Text style={styling.header}>Homepage</Text>
        <Button
          size="sm"
          variant="subtle"
          colorScheme="secondary"
          onPress={() => navigation.navigate("Sound")}
        >Geluid</Button>
        <Button
          size="sm"
          variant="subtle"
          colorScheme="secondary"
          onPress={() => navigation.navigate("Light")}
        >Licht</Button>
        <Button
          size="sm"
          variant="subtle"
          colorScheme="secondary"
          onPress={() => navigation.navigate("Smell")}
        >Geur</Button>
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