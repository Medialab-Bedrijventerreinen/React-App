import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useStyling } from './styles/style.js';

export default function App() {
  const styling = useStyling;

  return (
    <View style={styles.container}>
      <Text style={styling.header}>Welkom!</Text>
      <Text style={[styling.paragraph, styling.center]}>Vul je de 4-cijferige code in die te vinden is aan de binnenkant van de stoel.</Text>
      <StatusBar style="auto" />
    </View>
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
