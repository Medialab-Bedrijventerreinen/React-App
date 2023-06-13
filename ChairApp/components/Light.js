import * as React from "react";
import { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity} from "react-native";
import { NativeBaseProvider, IconButton, HStack, Center, Box, Button, Radio, Slider, ScrollView, VStack } from "native-base";
import { useStyling } from "../styles/style.js";
import { PoweroffOutlined, CheckCircleOutlined, PlusCircleFilled } from "@ant-design/icons";
import ColorPicker, {
  Preview,
  BrightnessSlider,
  HueSlider,
  SaturationSlider,
} from "reanimated-color-picker";
import { MaterialIcons } from "@expo/vector-icons";


//The Home component to load in and exporting it for the navigation
export const Light = ({ navigation }) => {
  const styling = useStyling;
  const [brightnessValue, setBrightnessValue] = useState(0)

  
  function ColorSet() {
    return (
      <HStack space={5} justifyContent="center">
        <TouchableOpacity>
          <Center h="20" w="20" bg={styling.shadow} rounded="md" shadow={5} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Center h="20" w="20" bg="primary.500" rounded="md" shadow={5} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Center h="20" w="20" bg="primary.700" rounded="md" shadow={5} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Center h="20" w="20" bg="primary.900" rounded="md" shadow={5} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Center h="20" w="20" bg="primary.1100" rounded="md" shadow={5} />
        </TouchableOpacity>
      </HStack>
    );
  };

  function TransitionRadio() {
    const [value, setValue] = React.useState("one");
  return (
    <ScrollView w={["200", "300"]} h="80">
      <Center mt="3" mb="4">
      <Radio.Group
        name="myRadioGroup"
        accessibilityLabel="favorite number"
        size="lg"
        value={value}
        onChange={(nextValue) => {
          setValue(nextValue);
        }}
      >
        <Radio value="Sterrenhemel" icon={<CheckCircleOutlined />} my={1}>
          Sterrenhemel
        </Radio>
        <Radio value="Zonsondergang" icon={<CheckCircleOutlined />} my={1}>
          Zonsondergang
        </Radio>
        <Radio value="Aurora Beaurealis" icon={<CheckCircleOutlined />} my={1}>
          Aurora Beaurealis
        </Radio>
        <Radio value="Zachte Gloed" icon={<CheckCircleOutlined />} my={1}>
          Zachte Gloed
        </Radio>
        <Radio
          value="Natuurlijk Daglicht"
          icon={<CheckCircleOutlined />}
          my={1}
        >
          Natuurlijk Daglicht
        </Radio>
      </Radio.Group>
      </Center>
    </ScrollView>
  );
  };

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

      <Box>
        <IconButton
          style={{ fontSize: "100px" }}
          icon={<PoweroffOutlined />}
          borderRadius="full"
        />
      </Box>
      <Box>
        <HStack space={3} justifyContent="center">
          <ColorPicker
            style={{ width: "50%", justifyContent: "center" }}
            sliderThickness={20}
            thumbSize={20}
            thumbShape="ball"
          >
            <Preview
              style={[styling.previewStyle, styling.shadow]}
              textStyle={{ fontSize: 18 }}
              colorFormat="hex"
              hideInitialColor
            />
            <HueSlider
              style={[{ borderRadius: 15, marginBottom: 25 }, styling.shadow]}
            />
            <BrightnessSlider
              style={[{ borderRadius: 15, marginBottom: 25 }, styling.shadow]}
            />
            <SaturationSlider
              style={[{ borderRadius: 15, marginBottom: 25 }, styling.shadow]}
            />
          </ColorPicker>
          <IconButton
            style={{ fontSize: "100px" }}
            icon={<PlusCircleFilled />}
            borderRadius="full"
          />
        </HStack>
        <HStack space={3} justifyContent="center">
          <MaterialIcons name="brightness-3" size={24} color="black" />
          <Slider
            w="3/4"
            maxW="300"
            defaultValue={brightnessValue}
            minValue={0}
            maxValue={100}
            onValueChange={(e) => setBrightnessValue(e)}
            step={10}
          >
            <Slider.Track>
              <Slider.FilledTrack />
            </Slider.Track>
            <Slider.Thumb />
          </Slider>
          <MaterialIcons name="brightness-1" size={24} color="black" />
        </HStack>
      </Box>
      <Box>
        <ColorSet />
      </Box>
      <Box>
        <TransitionRadio />
      </Box>
      <Button
        size="sm"
        variant="subtle"
        colorScheme="Info"
        onPress={() => navigation.navigate("Home")}
      >
        Pas Toe
      </Button>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 0,
    width: "100%",
    maxWidth: 500,
    margin: "auto",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
