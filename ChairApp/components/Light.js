import * as React from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { NativeBaseProvider, Button, Slider, Box } from "native-base";
import { useStyling } from "../styles/style.js";

//The Home component to load in and exporting it for the navigation
export const Light = ({ navigation }) => {
  const styling = useStyling;

  return (
    <NativeBaseProvider>
      <Box>
        <Button
          size="sm"
          variant="subtle"
          colorScheme="secondary"
          onPress={() => navigation.navigate("Home")}
        >
          Back
        </Button>
      </Box>
      <View style={styles.container}>
        <Text style={styling.header}>Geluid</Text>
        <Box alignItems="center" w="100%">
          <Slider
            w="3/4"
            maxW="300"
            defaultValue={70}
            minValue={0}
            maxValue={100}
            accessibilityLabel="hello world"
            step={10}
          >
            <Slider.Track>
              <Slider.FilledTrack />
            </Slider.Track>
            <Slider.Thumb />
          </Slider>
        </Box>
      </View>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
