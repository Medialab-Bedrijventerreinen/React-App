import * as React from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import { Button, Flex, Center, ScrollView, Slider, Spacer } from "native-base";
import { useStyling } from '../styles/style.js';
import { LinearGradient } from 'expo-linear-gradient';

//The Home component to load in and exporting it for the navigation
export const Sound = ({ navigation }) => {
    const styling = useStyling;

    const [shouldShow1, setShouldShow1] = React.useState(false);
    const [shouldShow2, setShouldShow2] = React.useState(false);
    const [shouldShow3, setShouldShow3] = React.useState(false);
    const [shouldShow4, setShouldShow4] = React.useState(false);
    const [shouldShow5, setShouldShow5] = React.useState(false);
    const [shouldShow6, setShouldShow6] = React.useState(false);
    const [shouldShow7, setShouldShow7] = React.useState(false);
    const [shouldShow8, setShouldShow8] = React.useState(false);
    const [shouldShow9, setShouldShow9] = React.useState(false);
    const [shouldShow10, setShouldShow10] = React.useState(false);
    const [shouldShow11, setShouldShow11] = React.useState(false);
    const [shouldShow12, setShouldShow12] = React.useState(false);

    return (
        <LinearGradient
            colors={['#EAC7B3', '#FBF4F0']}
            style={[styles.container, styles.background]}
        >
            <View style={{ marginLeft: "40px", marginRight: "40px", marginTop: "15px", marginBottom: "15px" }}>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <Flex direction="row" mb="1.5" mt="1.5" w="297">
                        <Image source={require('../assets/icons/arrow_back.svg')} style={[styles.arrowBack, { marginRight: "8px" }]} />
                        <Text style={[styling.paragraph, styling.colorBlack, { fontFamily: 'Quicksand-500', justifyContent: "flex-start" }]}>Naar Home</Text>
                    </Flex>
                </TouchableOpacity>
            </View>
            <View style={styles.center}>
                <Text style={[styling.h1, styling.colorBlack, { fontFamily: 'Cookie-Regular', marginTop: "25px" }]}>Geluid</Text>
                <Button style={styles.powerButton} onPress={() => {setShouldShow1(false), setShouldShow2(false), setShouldShow3(false), setShouldShow4(false), setShouldShow5(false), setShouldShow6(false), setShouldShow7(false), setShouldShow8(false), setShouldShow9(false), setShouldShow10(false), setShouldShow11(false), setShouldShow12(false)}}>
                    <Image source={require('../assets/icons/power_button.svg')} style={styles.powerIcon} />
                </Button>
                <View style={{ marginTop: "30px" }}>
                    <Slider w="230px" defaultValue={60} minValue={0} maxValue={100} step={10}>
                        <Slider.Track w="230px" style={{ transform: [{ scaleY: 0.625 }] }}>
                            <LinearGradient
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                colors={['#676767', '#FFFFFF']}
                                style={[styles.container, styles.background]}
                            />
                        </Slider.Track>
                        <Slider.Thumb w={30} h={30} style={styling.sliderThumb} />
                    </Slider>
                </View>
                <View w="3/5" style={{ marginBottom: "30px" }}>
                    <Flex direction="row" mb="1.5" mt="1.5" w="230px">
                        <Image source={require('../assets/icons/volume_mute.svg')} style={styles.volumeIcon} />
                        <Spacer />
                        <Image source={require('../assets/icons/volume_up.svg')} style={styles.volumeIcon} />
                    </Flex>
                </View>
                <ScrollView w="300" h="400">
                    <Flex direction="row" mb="2.5" mt="1.5">
                        <Flex direction="col" mb="2.5" mt="1.5" w="100">
                            <TouchableOpacity style={[styles.underneath]} onPress={() => {setShouldShow1(true), setShouldShow2(false), setShouldShow3(false), setShouldShow4(false), setShouldShow5(false), setShouldShow6(false), setShouldShow7(false), setShouldShow8(false), setShouldShow9(false), setShouldShow10(false), setShouldShow11(false), setShouldShow12(false)}}>
                                <Center width="88" height="97" borderRadius="10" bg="#B2CAC0">
                                    <Image source={require('../assets/images/trees.svg')} style={styles.image} />
                                </Center>
                                <Center style={styling.center} width="88">
                                    <Text style={[styling.paragraphSmaller, styling.colorBlack, { fontFamily: 'Quicksand-500' }]}>Bos geruis</Text>
                                </Center>
                            </TouchableOpacity>
                            {shouldShow1 ? (
                                <View style={[styles.overlay]}>
                                    <Button style={styles.playButton} onPress={() => setShouldShow1(false)}>
                                        <Image source={require('../assets/icons/play_button.svg')} style={styles.playIcon} />
                                    </Button>
                                </View>
                            ) : null}
                        </Flex>
                        <Flex direction="col" mb="2.5" mt="1.5" w="100">
                            <TouchableOpacity style={[styles.underneath]} onPress={() => {setShouldShow1(false), setShouldShow2(true), setShouldShow3(false), setShouldShow4(false), setShouldShow5(false), setShouldShow6(false), setShouldShow7(false), setShouldShow8(false), setShouldShow9(false), setShouldShow10(false), setShouldShow11(false), setShouldShow12(false)}}>
                                <Center width="88" height="97" borderRadius="10" bg="#B2CAC0">
                                    <Image source={require('../assets/images/regen.svg')} style={styles.image} />
                                </Center>
                                <Center style={styling.center} width="88">
                                    <Text style={[styling.paragraphSmaller, styling.colorBlack, { fontFamily: 'Quicksand-500' }]}>Regen</Text>
                                </Center>
                            </TouchableOpacity>
                            {shouldShow2 ? (
                                <View style={[styles.overlay]}>
                                    <Button style={styles.playButton} onPress={() => setShouldShow2(false)}>
                                        <Image source={require('../assets/icons/play_button.svg')} style={styles.playIcon} />
                                    </Button>
                                </View>
                            ) : null}
                        </Flex>
                        <Flex direction="col" mb="2.5" mt="1.5" w="100">
                            <TouchableOpacity style={[styles.underneath]} onPress={() => {setShouldShow1(false), setShouldShow2(false), setShouldShow3(true), setShouldShow4(false), setShouldShow5(false), setShouldShow6(false), setShouldShow7(false), setShouldShow8(false), setShouldShow9(false), setShouldShow10(false), setShouldShow11(false), setShouldShow12(false)}}>
                                <Center width="88" height="97" borderRadius="10" bg="#B2CAC0">
                                    <Image source={require('../assets/images/storm.svg')} style={styles.image} />
                                </Center>
                                <Center style={styling.center} width="88">
                                    <Text style={[styling.paragraphSmaller, styling.colorBlack, { fontFamily: 'Quicksand-500' }]}>Storm</Text>
                                </Center>
                            </TouchableOpacity>
                            {shouldShow3 ? (
                                <View style={[styles.overlay]}>
                                    <Button style={styles.playButton} onPress={() => setShouldShow3(false)}>
                                        <Image source={require('../assets/icons/play_button.svg')} style={styles.playIcon} />
                                    </Button>
                                </View>
                            ) : null}
                        </Flex>
                    </Flex>

                    <Flex direction="row" mb="2.5" mt="1.5">
                        <Flex direction="col" mb="2.5" mt="1.5" w="100">
                            <TouchableOpacity style={[styles.underneath]} onPress={() => {setShouldShow1(false), setShouldShow2(false), setShouldShow3(false), setShouldShow4(true), setShouldShow5(false), setShouldShow6(false), setShouldShow7(false), setShouldShow8(false), setShouldShow9(false), setShouldShow10(false), setShouldShow11(false), setShouldShow12(false)}}>
                                <Center width="88" height="97" borderRadius="10" bg="#B2CAC0">
                                    <Image source={require('../assets/images/waterval.svg')} style={styles.image} />
                                </Center>
                                <Center style={styling.center} width="88">
                                    <Text style={[styling.paragraphSmaller, styling.colorBlack, { fontFamily: 'Quicksand-500' }]}>Waterval</Text>
                                </Center>
                            </TouchableOpacity>
                            {shouldShow4 ? (
                                <View style={[styles.overlay]}>
                                    <Button style={styles.playButton} onPress={() => setShouldShow4(false)}>
                                        <Image source={require('../assets/icons/play_button.svg')} style={styles.playIcon} />
                                    </Button>
                                </View>
                            ) : null}
                        </Flex>
                        <Flex direction="col" mb="2.5" mt="1.5" w="100">
                            <TouchableOpacity style={[styles.underneath]} onPress={() => {setShouldShow1(false), setShouldShow2(false), setShouldShow3(false), setShouldShow4(false), setShouldShow5(true), setShouldShow6(false), setShouldShow7(false), setShouldShow8(false), setShouldShow9(false), setShouldShow10(false), setShouldShow11(false), setShouldShow12(false)}}>
                                <Center width="88" height="97" borderRadius="10" bg="#B2CAC0">
                                    <Image source={require('../assets/images/maan_sterren.svg')} style={styles.image} />
                                </Center>
                                <Center style={styling.center} width="88">
                                    <Text style={[styling.paragraphSmaller, styling.colorBlack, { fontFamily: 'Quicksand-500' }]}>Sterrennacht</Text>
                                </Center>
                            </TouchableOpacity>
                            {shouldShow5 ? (
                                <View style={[styles.overlay]}>
                                    <Button style={styles.playButton} onPress={() => setShouldShow5(false)}>
                                        <Image source={require('../assets/icons/play_button.svg')} style={styles.playIcon} />
                                    </Button>
                                </View>
                            ) : null}
                        </Flex>
                        <Flex direction="col" mb="2.5" mt="1.5" w="100">
                            <TouchableOpacity style={[styles.underneath]} onPress={() => {setShouldShow1(false), setShouldShow2(false), setShouldShow3(false), setShouldShow4(false), setShouldShow5(false), setShouldShow6(true), setShouldShow7(false), setShouldShow8(false), setShouldShow9(false), setShouldShow10(false), setShouldShow11(false), setShouldShow12(false)}}>
                                <Center width="88" height="97" borderRadius="10" bg="#B2CAC0">
                                    <Image source={require('../assets/images/zee.svg')} style={styles.image} />
                                </Center>
                                <Center style={styling.center} width="88">
                                    <Text style={[styling.paragraphSmaller, styling.colorBlack, { fontFamily: 'Quicksand-500' }]}>Zee</Text>
                                </Center>
                            </TouchableOpacity>
                            {shouldShow6 ? (
                                <View style={[styles.overlay]}>
                                    <Button style={styles.playButton} onPress={() => setShouldShow6(false)}>
                                        <Image source={require('../assets/icons/play_button.svg')} style={styles.playIcon} />
                                    </Button>
                                </View>
                            ) : null}
                        </Flex>
                    </Flex>

                    <Flex direction="row" mb="2.5" mt="1.5">
                        <Flex direction="col" mb="2.5" mt="1.5" w="100">
                        <TouchableOpacity style={[styles.underneath]} onPress={() => {setShouldShow1(false), setShouldShow2(false), setShouldShow3(false), setShouldShow4(false), setShouldShow5(false), setShouldShow6(false), setShouldShow7(true), setShouldShow8(false), setShouldShow9(false), setShouldShow10(false), setShouldShow11(false), setShouldShow12(false)}}>
                                <Center width="88" height="97" borderRadius="10" bg="#B2CAC0">
                                    <Image source={require('../assets/images/zee_storm.svg')} style={styles.image} />
                                </Center>
                                <Center style={styling.center} width="88">
                                    <Text style={[styling.paragraphSmaller, styling.colorBlack, { fontFamily: 'Quicksand-500' }]}>Zee storm</Text>
                                </Center>
                            </TouchableOpacity>
                            {shouldShow7 ? (
                                <View style={[styles.overlay]}>
                                    <Button style={styles.playButton} onPress={() => setShouldShow7(false)}>
                                        <Image source={require('../assets/icons/play_button.svg')} style={styles.playIcon} />
                                    </Button>
                                </View>
                            ) : null}
                        </Flex>
                        <Flex direction="col" mb="2.5" mt="1.5" w="100">
                            <TouchableOpacity style={[styles.underneath]} onPress={() => {setShouldShow1(false), setShouldShow2(false), setShouldShow3(false), setShouldShow4(false), setShouldShow5(false), setShouldShow6(false), setShouldShow7(false), setShouldShow8(true), setShouldShow9(false), setShouldShow10(false), setShouldShow11(false), setShouldShow12(false)}}>
                                <Center width="88" height="97" borderRadius="10" bg="#B2CAC0">
                                    <Image source={require('../assets/images/bird.svg')} style={styles.image} />
                                </Center>
                                <Center style={styling.center} width="88">
                                    <Text style={[styling.paragraphSmaller, styling.colorBlack, { fontFamily: 'Quicksand-500' }]}>Vogel geluiden (dag)</Text>
                                </Center>
                            </TouchableOpacity>
                            {shouldShow8 ? (
                                <View style={[styles.overlay]}>
                                    <Button style={styles.playButton} onPress={() => setShouldShow8(false)}>
                                        <Image source={require('../assets/icons/play_button.svg')} style={styles.playIcon} />
                                    </Button>
                                </View>
                            ) : null}
                        </Flex>
                        <Flex direction="col" mb="2.5" mt="1.5" w="100">
                            <TouchableOpacity style={[styles.underneath]} onPress={() => {setShouldShow1(false), setShouldShow2(false), setShouldShow3(false), setShouldShow4(false), setShouldShow5(false), setShouldShow6(false), setShouldShow7(false), setShouldShow8(false), setShouldShow9(true), setShouldShow10(false), setShouldShow11(false), setShouldShow12(false)}}>
                                <Center width="88" height="97" borderRadius="10" bg="#B2CAC0">
                                    <Image source={require('../assets/images/uil.svg')} style={styles.image} />
                                </Center>
                                <Center style={styling.center} width="88">
                                    <Text style={[styling.paragraphSmaller, styling.colorBlack, { fontFamily: 'Quicksand-500' }]}>Vogel geluiden (nacht)</Text>
                                </Center>
                            </TouchableOpacity>
                            {shouldShow9 ? (
                                <View style={[styles.overlay]}>
                                    <Button style={styles.playButton} onPress={() => setShouldShow9(false)}>
                                        <Image source={require('../assets/icons/play_button.svg')} style={styles.playIcon} />
                                    </Button>
                                </View>
                            ) : null}
                        </Flex>
                    </Flex>

                    <Flex direction="row" mb="2.5" mt="1.5">
                        <Flex direction="col" mb="2.5" mt="1.5" w="100">
                            <TouchableOpacity style={[styles.underneath]} onPress={() => {setShouldShow1(false), setShouldShow2(false), setShouldShow3(false), setShouldShow4(false), setShouldShow5(false), setShouldShow6(false), setShouldShow7(false), setShouldShow8(false), setShouldShow9(false), setShouldShow10(true), setShouldShow11(false), setShouldShow12(false)}}>
                                <Center width="88" height="97" borderRadius="10" bg="#B2CAC0">
                                    <Image source={require('../assets/images/trees.svg')} style={styles.image} />
                                </Center>
                                <Center style={styling.center} width="88">
                                    <Text style={[styling.paragraphSmaller, styling.colorBlack, { fontFamily: 'Quicksand-500' }]}>Bos geruis</Text>
                                </Center>
                            </TouchableOpacity>
                            {shouldShow10 ? (
                                <View style={[styles.overlay]}>
                                    <Button style={styles.playButton} onPress={() => setShouldShow10(false)}>
                                        <Image source={require('../assets/icons/play_button.svg')} style={styles.playIcon} />
                                    </Button>
                                </View>
                            ) : null}
                        </Flex>
                        <Flex direction="col" mb="2.5" mt="1.5" w="100">
                            <TouchableOpacity style={[styles.underneath]} onPress={() => {setShouldShow1(false), setShouldShow2(false), setShouldShow3(false), setShouldShow4(false), setShouldShow5(false), setShouldShow6(false), setShouldShow7(false), setShouldShow8(false), setShouldShow9(false), setShouldShow10(false), setShouldShow11(true), setShouldShow12(false)}}>
                                <Center width="88" height="97" borderRadius="10" bg="#B2CAC0">
                                    <Image source={require('../assets/images/regen.svg')} style={styles.image} />
                                </Center>
                                <Center style={styling.center} width="88">
                                    <Text style={[styling.paragraphSmaller, styling.colorBlack, { fontFamily: 'Quicksand-500' }]}>Regen</Text>
                                </Center>
                            </TouchableOpacity>
                            {shouldShow11 ? (
                                <View style={[styles.overlay]}>
                                    <Button style={styles.playButton} onPress={() => setShouldShow11(false)}>
                                        <Image source={require('../assets/icons/play_button.svg')} style={styles.playIcon} />
                                    </Button>
                                </View>
                            ) : null}
                        </Flex>
                        <Flex direction="col" mb="2.5" mt="1.5" w="100">
                            <TouchableOpacity style={[styles.underneath]} onPress={() => {setShouldShow1(false), setShouldShow2(false), setShouldShow3(false), setShouldShow4(false), setShouldShow5(false), setShouldShow6(false), setShouldShow7(false), setShouldShow8(false), setShouldShow9(false), setShouldShow10(false), setShouldShow11(false), setShouldShow12(true)}}>
                                <Center width="88" height="97" borderRadius="10" bg="#B2CAC0">
                                    <Image source={require('../assets/images/storm.svg')} style={styles.image} />
                                </Center>
                                <Center style={styling.center} width="88">
                                    <Text style={[styling.paragraphSmaller, styling.colorBlack, { fontFamily: 'Quicksand-500' }]}>Storm</Text>
                                </Center>
                            </TouchableOpacity>
                            {shouldShow12 ? (
                                <View style={[styles.overlay]}>
                                    <Button style={styles.playButton} onPress={() => setShouldShow12(false)}>
                                        <Image source={require('../assets/icons/play_button.svg')} style={styles.playIcon} />
                                    </Button>
                                </View>
                            ) : null}
                        </Flex>
                    </Flex>
                </ScrollView>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    arrowBack: {
        width: 24,
        height: 24,
    },
    image: {
        width: 56,
        height: 56,
    },
    imageModal: {
        width: 40,
        height: 40,
    },
    powerIcon: {
        width: 32,
        height: 32,
    },
    powerButton: {
        width: 50,
        height: 60,
        backgroundColor: '#7EA796',
        borderRadius: 10,
    },
    volumeIcon: {
        width: 24,
        height: 24,
    },
    underneath: {
        position: 'relative',
    },
    overlay: {
        backgroundColor: 'rgba(36, 51, 65, 0.5)',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        width: 88,
        height: 97,
        borderRadius: 10,
    },
    playIcon: {
        width: 24,
        height: 24,
    },
    playButton: {
        width: 40,
        height: 50,
    },
});