import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './nav/Navigation.js';
import React from 'react';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NativeBaseProvider, extendTheme } from 'native-base';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Cookie-Regular': require('./assets/fonts/cookie/Cookie-Regular.ttf'),
    'Quicksand-500': require('./assets/fonts/quicksand/Quicksand-Medium.ttf'),
    'Quicksand-600': require('./assets/fonts/quicksand/Quicksand-SemiBold.ttf'),
    'Quicksand-700': require('./assets/fonts/quicksand/Quicksand-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const theme = extendTheme({
    components: {
      Button: {
        // Can simply pass default props to change default behaviour of components.
        baseStyle: {
          rounded: 'md',
        },
        defaultProps: {
          backgroundColor: '#7EA796',
          color: '#E5EDEA',
          fontFamily: 'Quicksand-500', //Werkt op de een of andere manier niet
          borderRadius: 10,
          height: 52,
          width: 160,
        },
      },
    }
  })

  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </NativeBaseProvider>

    // <View style={styles.container}>
    //   <Text style={styling.header}>Welkom!</Text>
    //   <Text style={[styling.paragraph, styling.center]}>Vul je de 4-cijferige code in die te vinden is aan de binnenkant van de stoel.</Text>
    //   <Link href="/components/Home">Start</Link>
    //   <StatusBar style="auto" />
    // </View>
  );
}
    
// const styles = StyleSheet.create({
//   container: {
//     flex: // 
//     backgro// uolor: '#fff',//      alignItems: 'center',
//   justifyContent: 'center',// /   },
// });
// 
