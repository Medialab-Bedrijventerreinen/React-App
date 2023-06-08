import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './nav/Navigation.js';
import React from 'react';
import { useStyling } from './styles/style.js';

export default function App() {
  const styling = useStyling;

  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>

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
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
