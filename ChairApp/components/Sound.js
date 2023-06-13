import * as React from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import { Button, Flex, Spacer, Center, ScrollView, Modal } from "native-base";
import { useStyling } from '../styles/style.js';
import { LinearGradient } from 'expo-linear-gradient';

//The Home component to load in and exporting it for the navigation
export const Sound = ({navigation}) => {
    const styling = useStyling;

    const [showModal1, setShowModal1] = React.useState(false);
    const [showModal2, setShowModal2] = React.useState(false);
    const [showModal3, setShowModal3] = React.useState(false);
    const [showModal4, setShowModal4] = React.useState(false);
    const [showModal5, setShowModal5] = React.useState(false);
    const [showModal6, setShowModal6] = React.useState(false);

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
                <Text style={[styling.h1, styling.colorBlack, { fontFamily: 'Cookie-Regular', marginTop: "25px", marginBottom: "25px" }]}>Geluid</Text>
                <ScrollView w="300" h="600">
                    <Flex direction="row" mb="2.5" mt="1.5">
                        <Flex direction="col" mb="2.5" mt="1.5" w="100">
                            <TouchableOpacity onPress={() => setShowModal1(true)}>
                                <Center width="88" height="97" borderRadius="10" bg="#B2CAC0">
                                    <Image source={require('../assets/images/hemelse_sereniteit.svg')} style={styles.image} />
                                </Center>
                                <Center style={styling.center} width="88">
                                    <Text style={[styling.paragraphSmaller, styling.colorBlack, { fontFamily: 'Quicksand-500'}]}>Hemelse Sereniteit</Text>
                                </Center>
                            </TouchableOpacity>
                        </Flex>
                        <Flex direction="col" mb="2.5" mt="1.5" w="100">
                            <TouchableOpacity onPress={() => setShowModal2(true)}>
                                <Center width="88" height="97" borderRadius="10" bg="#B2CAC0">
                                    <Image source={require('../assets/images/energieke_landschappen.svg')} style={styles.image} />
                                </Center>
                                <Center style={styling.center} width="88">
                                    <Text style={[styling.paragraphSmaller, styling.colorBlack, { fontFamily: 'Quicksand-500'}]}>Energieke Landschappen</Text>
                                </Center>
                            </TouchableOpacity>
                        </Flex>
                        <Flex direction="col" mb="2.5" mt="1.5" w="100">
                            <TouchableOpacity onPress={() => setShowModal3(true)}>
                                <Center width="88" height="97" borderRadius="10" bg="#B2CAC0">
                                    <Image source={require('../assets/images/magisch_stadsbos.svg')} style={styles.image} />
                                </Center>
                                <Center style={styling.center} width="88">
                                    <Text style={[styling.paragraphSmaller, styling.colorBlack, { fontFamily: 'Quicksand-500'}]}>Magisch Stadsbos</Text>
                                </Center>
                            </TouchableOpacity>
                        </Flex>
                    </Flex>

                    <Flex direction="row" mb="2.5" mt="1.5">
                        <Flex direction="col" mb="2.5" mt="1.5" w="100">
                            <TouchableOpacity onPress={() => setShowModal4(true)}>
                                <Center width="88" height="97" borderRadius="10" bg="#B2CAC0">
                                    <Image source={require('../assets/images/revitaliserende_energie.svg')} style={styles.image} />
                                </Center>
                                <Center style={styling.center} width="88">
                                    <Text style={[styling.paragraphSmaller, styling.colorBlack, { fontFamily: 'Quicksand-500'}]}>Revitaliserende Energie</Text>
                                </Center>
                            </TouchableOpacity>
                        </Flex>
                        <Flex direction="col" mb="2.5" mt="1.5" w="100">
                            <TouchableOpacity onPress={() => setShowModal5(true)}>
                                <Center width="88" height="97" borderRadius="10" bg="#B2CAC0">
                                    <Image source={require('../assets/images/ontdek_de_wereld_nabij.svg')} style={styles.image} />
                                </Center>
                                <Center style={styling.center} width="88">
                                    <Text style={[styling.paragraphSmaller, styling.colorBlack, { fontFamily: 'Quicksand-500'}]}>Ontdek de wereld nabij</Text>
                                </Center>
                            </TouchableOpacity>
                        </Flex>
                        <Flex direction="col" mb="2.5" mt="1.5" w="100">
                            <TouchableOpacity onPress={() => setShowModal6(true)}>
                                <Center width="88" height="97" borderRadius="10" bg="#B2CAC0">
                                    <Image source={require('../assets/images/utopia.svg')} style={styles.image} />
                                </Center>
                                <Center style={styling.center} width="88">
                                    <Text style={[styling.paragraphSmaller, styling.colorBlack, { fontFamily: 'Quicksand-500'}]}>Utopia verborgen groen</Text>
                                </Center>
                            </TouchableOpacity>
                        </Flex>
                    </Flex>

                    <Flex direction="row" mb="2.5" mt="1.5">
                        <Flex direction="col" mb="2.5" mt="1.5" w="100">
                            <TouchableOpacity onPress={() => setShowModal7(true)}>
                                <Center width="88" height="97" borderRadius="10" bg="#B2CAC0">
                                    <Image source={require('../assets/images/revitaliserende_energie.svg')} style={styles.image} />
                                </Center>
                                <Center style={styling.center} width="88">
                                    <Text style={[styling.paragraphSmaller, styling.colorBlack, { fontFamily: 'Quicksand-500'}]}>Revitaliserende Energie</Text>
                                </Center>
                            </TouchableOpacity>
                        </Flex>
                        <Flex direction="col" mb="2.5" mt="1.5" w="100">
                            <TouchableOpacity onPress={() => setShowModal8(true)}>
                                <Center width="88" height="97" borderRadius="10" bg="#B2CAC0">
                                    <Image source={require('../assets/images/ontdek_de_wereld_nabij.svg')} style={styles.image} />
                                </Center>
                                <Center style={styling.center} width="88">
                                    <Text style={[styling.paragraphSmaller, styling.colorBlack, { fontFamily: 'Quicksand-500'}]}>Ontdek de wereld nabij</Text>
                                </Center>
                            </TouchableOpacity>
                        </Flex>
                        <Flex direction="col" mb="2.5" mt="1.5" w="100">
                            <TouchableOpacity onPress={() => setShowModal9(true)}>
                                <Center width="88" height="97" borderRadius="10" bg="#B2CAC0">
                                    <Image source={require('../assets/images/utopia.svg')} style={styles.image} />
                                </Center>
                                <Center style={styling.center} width="88">
                                    <Text style={[styling.paragraphSmaller, styling.colorBlack, { fontFamily: 'Quicksand-500'}]}>Utopia verborgen groen</Text>
                                </Center>
                            </TouchableOpacity>
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
});