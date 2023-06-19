import * as React from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import { Button, Flex, Spacer, Center, ScrollView, Modal } from "native-base";
import { useStyling } from '../styles/style.js';
import { LinearGradient } from 'expo-linear-gradient';

//The Home component to load in and exporting it for the navigation
export const Themes = ({ navigation }) => {
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
                <Text style={[styling.h1, styling.colorBlack, { fontFamily: 'Cookie-Regular', marginTop: "25px", marginBottom: "25px" }]}>Thema's</Text>
                <ScrollView w="300" h="555">
                    <Flex direction="row" mb="2.5" mt="1.5">
                        <Flex direction="col" mb="2.5" mt="1.5" w="100">
                            <TouchableOpacity onPress={() => setShowModal1(true)}>
                                <Center width="88" height="97" borderRadius="10" bg="#B2CAC0">
                                    <Image source={require('../assets/images/hemelse_sereniteit.svg')} style={styles.image} />
                                </Center>
                                <Center style={styling.center} width="88">
                                    <Text style={[styling.paragraphSmaller, styling.colorBlack, { fontFamily: 'Quicksand-500' }]}>Hemelse Sereniteit</Text>
                                </Center>
                            </TouchableOpacity>
                            <Modal isOpen={showModal1} onClose={() => setShowModal1(false)} _backdrop={{ bg: "#393939" }}>
                                <Modal.Content width="348px">
                                    <LinearGradient
                                        colors={['#B2CAC0', '#E5EDEA']}
                                        style={[styles.container, styles.background]}
                                    >
                                        <Modal.CloseButton />
                                        <Modal.Body>
                                            <Text style={[styling.h5, styling.colorBlack, { fontFamily: "Cookie-Regular" }]}>Thema</Text>
                                            <Text style={[styling.paragraphSmall, styling.colorBlack, { fontFamily: "Quicksand-500" }]}>Hemelse Sereniteit</Text>
                                            <View style={[styles.center, { marginTop: "20px" }]}>
                                                <Flex direction="row" style={styles.center} mb="1.5" mt="1.5" w="297">
                                                    <Center width="130" height="95" borderRadius="10" bg="#FFFFFF">
                                                        <Text style={[styling.paragraphSmall, styling.colorBlack, { fontFamily: 'Quicksand-500' }]}>Licht</Text>
                                                        <Flex direction="row" mb="2.5" mt="1.5">
                                                            <Center width="31px" height="43px" bg="#6866D6"></Center>
                                                            <Center width="31px" height="43px" bg="#171D5D"></Center>
                                                            <Center width="43px" height="43px" bg="#0E025D"></Center>
                                                        </Flex>
                                                    </Center>
                                                    <Spacer />
                                                    <Center width="130" height="95" borderRadius="10" bg="#FFFFFF">
                                                        <Text style={[styling.paragraphSmall, styling.colorBlack, { fontFamily: 'Quicksand-500' }]}>Geluid</Text>
                                                        <Flex direction="row" mb="2.5" mt="1.5">
                                                            <Center>
                                                                <Image source={require('../assets/images/bird.svg')} style={styles.imageModal} />
                                                            </Center>
                                                            <Center>
                                                                <Image source={require('../assets/images/trees.svg')} style={styles.imageModal} />
                                                            </Center>
                                                        </Flex>
                                                    </Center>
                                                </Flex>
                                            </View>
                                            <View style={[styles.center, { marginTop: "20px" }]}>
                                                <Center width="130" height="95" borderRadius="10" bg="#FFFFFF">
                                                    <Text style={[styling.paragraphSmall, styling.colorBlack, { fontFamily: 'Quicksand-500' }]}>Geur</Text>
                                                    <Flex direction="row" mb="2.5" mt="1.5">
                                                        <Center>
                                                            <Image source={require('../assets/images/trees.svg')} style={styles.imageModal} />
                                                        </Center>
                                                    </Flex>
                                                </Center>
                                            </View>
                                            <View style={[styles.center, { marginTop: "30px", marginBottom: "9px" }]}>
                                                <Button>
                                                    <Text style={[styling.colorTwoLighter, styling.paragraphSmall, { fontFamily: 'Quicksand-500' }]}>Kies dit thema</Text>
                                                </Button>
                                            </View>
                                        </Modal.Body>
                                    </LinearGradient>
                                </Modal.Content>
                            </Modal>
                        </Flex>

                        <Flex direction="col" mb="2.5" mt="1.5" w="100">
                            <TouchableOpacity onPress={() => setShowModal2(true)}>
                                <Center width="88" height="97" borderRadius="10" bg="#B2CAC0">
                                    <Image source={require('../assets/images/energieke_landschappen.svg')} style={styles.image} />
                                </Center>
                                <Center style={styling.center} width="88">
                                    <Text style={[styling.paragraphSmaller, styling.colorBlack, { fontFamily: 'Quicksand-500' }]}>Energieke Landschappen</Text>
                                </Center>
                            </TouchableOpacity>
                            <Modal isOpen={showModal2} onClose={() => setShowModal2(false)} _backdrop={{ bg: "#393939" }}>
                                <Modal.Content width="348px">
                                    <LinearGradient
                                        colors={['#B2CAC0', '#E5EDEA']}
                                        style={[styles.container, styles.background]}
                                    >
                                        <Modal.CloseButton />
                                        <Modal.Body>
                                            <Text style={[styling.h5, styling.colorBlack, { fontFamily: "Cookie-Regular" }]}>Thema</Text>
                                            <Text style={[styling.paragraphSmall, styling.colorBlack, { fontFamily: "Quicksand-500" }]}>Energieke Landschappen</Text>
                                            <View style={[styles.center, { marginTop: "20px" }]}>
                                                <Flex direction="row" style={styles.center} mb="1.5" mt="1.5" w="297">
                                                    <Center width="130" height="95" borderRadius="10" bg="#FFFFFF">
                                                        <Text style={[styling.paragraphSmall, styling.colorBlack, { fontFamily: 'Quicksand-500' }]}>Licht</Text>
                                                        <Flex direction="row" mb="2.5" mt="1.5">
                                                            <Center width="31px" height="43px" bg="#98FA87"></Center>
                                                            <Center width="31px" height="43px" bg="#49961D"></Center>
                                                            <Center width="43px" height="43px" bg="#169600"></Center>
                                                        </Flex>
                                                    </Center>
                                                    <Spacer />
                                                    <Center width="130" height="95" borderRadius="10" bg="#FFFFFF">
                                                        <Text style={[styling.paragraphSmall, styling.colorBlack, { fontFamily: 'Quicksand-500' }]}>Geluid</Text>
                                                        <Flex direction="row" mb="2.5" mt="1.5">
                                                            <Center>
                                                                <Image source={require('../assets/images/bird.svg')} style={styles.imageModal} />
                                                            </Center>
                                                            <Center>
                                                                <Image source={require('../assets/images/trees.svg')} style={styles.imageModal} />
                                                            </Center>
                                                        </Flex>
                                                    </Center>
                                                </Flex>
                                            </View>
                                            <View style={[styles.center, { marginTop: "20px" }]}>
                                                <Center width="130" height="95" borderRadius="10" bg="#FFFFFF">
                                                    <Text style={[styling.paragraphSmall, styling.colorBlack, { fontFamily: 'Quicksand-500' }]}>Geur</Text>
                                                    <Flex direction="row" mb="2.5" mt="1.5">
                                                        <Center>
                                                            <Image source={require('../assets/images/trees.svg')} style={styles.imageModal} />
                                                        </Center>
                                                    </Flex>
                                                </Center>
                                            </View>
                                            <View style={[styles.center, { marginTop: "30px", marginBottom: "9px" }]}>
                                                <Button>
                                                    <Text style={[styling.colorTwoLighter, styling.paragraphSmall, { fontFamily: 'Quicksand-500' }]}>Kies dit thema</Text>
                                                </Button>
                                            </View>
                                        </Modal.Body>
                                    </LinearGradient>
                                </Modal.Content>
                            </Modal>
                        </Flex>

                        <Flex direction="col" mb="2.5" mt="1.5" w="100">
                            <TouchableOpacity onPress={() => setShowModal3(true)}>
                                <Center width="88" height="97" borderRadius="10" bg="#B2CAC0">
                                    <Image source={require('../assets/images/magisch_stadsbos.svg')} style={styles.image} />
                                </Center>
                                <Center style={styling.center} width="88">
                                    <Text style={[styling.paragraphSmaller, styling.colorBlack, { fontFamily: 'Quicksand-500' }]}>Magisch Stadsbos</Text>
                                </Center>
                            </TouchableOpacity>
                            <Modal isOpen={showModal3} onClose={() => setShowModal3(false)} _backdrop={{ bg: "#393939" }}>
                                <Modal.Content width="348px">
                                    <LinearGradient
                                        colors={['#B2CAC0', '#E5EDEA']}
                                        style={[styles.container, styles.background]}
                                    >
                                        <Modal.CloseButton />
                                        <Modal.Body>
                                            <Text style={[styling.h5, styling.colorBlack, { fontFamily: "Cookie-Regular" }]}>Thema</Text>
                                            <Text style={[styling.paragraphSmall, styling.colorBlack, { fontFamily: "Quicksand-500" }]}>Magisch Stadsbos</Text>
                                            <View style={[styles.center, { marginTop: "20px" }]}>
                                                <Flex direction="row" style={styles.center} mb="1.5" mt="1.5" w="297">
                                                    <Center width="130" height="95" borderRadius="10" bg="#FFFFFF">
                                                        <Text style={[styling.paragraphSmall, styling.colorBlack, { fontFamily: 'Quicksand-500' }]}>Licht</Text>
                                                        <Flex direction="row" mb="2.5" mt="1.5">
                                                            <Center width="31px" height="43px" bg="#9FFFB3"></Center>
                                                            <Center width="31px" height="43px" bg="#3BADBD"></Center>
                                                            <Center width="43px" height="43px" bg="#6800BD"></Center>
                                                        </Flex>
                                                    </Center>
                                                    <Spacer />
                                                    <Center width="130" height="95" borderRadius="10" bg="#FFFFFF">
                                                        <Text style={[styling.paragraphSmall, styling.colorBlack, { fontFamily: 'Quicksand-500' }]}>Geluid</Text>
                                                        <Flex direction="row" mb="2.5" mt="1.5">
                                                            <Center>
                                                                <Image source={require('../assets/images/bird.svg')} style={styles.imageModal} />
                                                            </Center>
                                                            <Center>
                                                                <Image source={require('../assets/images/trees.svg')} style={styles.imageModal} />
                                                            </Center>
                                                        </Flex>
                                                    </Center>
                                                </Flex>
                                            </View>
                                            <View style={[styles.center, { marginTop: "20px" }]}>
                                                <Center width="130" height="95" borderRadius="10" bg="#FFFFFF">
                                                    <Text style={[styling.paragraphSmall, styling.colorBlack, { fontFamily: 'Quicksand-500' }]}>Geur</Text>
                                                    <Flex direction="row" mb="2.5" mt="1.5">
                                                        <Center>
                                                            <Image source={require('../assets/images/trees.svg')} style={styles.imageModal} />
                                                        </Center>
                                                    </Flex>
                                                </Center>
                                            </View>
                                            <View style={[styles.center, { marginTop: "30px", marginBottom: "9px" }]}>
                                                <Button>
                                                    <Text style={[styling.colorTwoLighter, styling.paragraphSmall, { fontFamily: 'Quicksand-500' }]}>Kies dit thema</Text>
                                                </Button>
                                            </View>
                                        </Modal.Body>
                                    </LinearGradient>
                                </Modal.Content>
                            </Modal>
                        </Flex>
                    </Flex>

                    <Flex direction="row" mb="2.5" mt="1.5">
                        <Flex direction="col" mb="2.5" mt="1.5" w="100">
                            <TouchableOpacity onPress={() => setShowModal4(true)}>
                                <Center width="88" height="97" borderRadius="10" bg="#B2CAC0">
                                    <Image source={require('../assets/images/revitaliserende_energie.svg')} style={styles.image} />
                                </Center>
                                <Center style={styling.center} width="88">
                                    <Text style={[styling.paragraphSmaller, styling.colorBlack, { fontFamily: 'Quicksand-500' }]}>Revitaliserende Energie</Text>
                                </Center>
                            </TouchableOpacity>
                            <Modal isOpen={showModal4} onClose={() => setShowModal4(false)} _backdrop={{ bg: "#393939" }}>
                                <Modal.Content width="348px">
                                    <LinearGradient
                                        colors={['#B2CAC0', '#E5EDEA']}
                                        style={[styles.container, styles.background]}
                                    >
                                        <Modal.CloseButton />
                                        <Modal.Body>
                                            <Text style={[styling.h5, styling.colorBlack, { fontFamily: "Cookie-Regular" }]}>Thema</Text>
                                            <Text style={[styling.paragraphSmall, styling.colorBlack, { fontFamily: "Quicksand-500" }]}>Revitaliserende Energie</Text>
                                            <View style={[styles.center, { marginTop: "20px" }]}>
                                                <Flex direction="row" style={styles.center} mb="1.5" mt="1.5" w="297">
                                                    <Center width="130" height="95" borderRadius="10" bg="#FFFFFF">
                                                        <Text style={[styling.paragraphSmall, styling.colorBlack, { fontFamily: 'Quicksand-500' }]}>Licht</Text>
                                                        <Flex direction="row" mb="2.5" mt="1.5">
                                                            <Center width="31px" height="43px" bg="#F9FC8B"></Center>
                                                            <Center width="31px" height="43px" bg="#FCC300"></Center>
                                                            <Center width="43px" height="43px" bg="#967400"></Center>
                                                        </Flex>
                                                    </Center>
                                                    <Spacer />
                                                    <Center width="130" height="95" borderRadius="10" bg="#FFFFFF">
                                                        <Text style={[styling.paragraphSmall, styling.colorBlack, { fontFamily: 'Quicksand-500' }]}>Geluid</Text>
                                                        <Flex direction="row" mb="2.5" mt="1.5">
                                                            <Center>
                                                                <Image source={require('../assets/images/bird.svg')} style={styles.imageModal} />
                                                            </Center>
                                                            <Center>
                                                                <Image source={require('../assets/images/trees.svg')} style={styles.imageModal} />
                                                            </Center>
                                                        </Flex>
                                                    </Center>
                                                </Flex>
                                            </View>
                                            <View style={[styles.center, { marginTop: "20px" }]}>
                                                <Center width="130" height="95" borderRadius="10" bg="#FFFFFF">
                                                    <Text style={[styling.paragraphSmall, styling.colorBlack, { fontFamily: 'Quicksand-500' }]}>Geur</Text>
                                                    <Flex direction="row" mb="2.5" mt="1.5">
                                                        <Center>
                                                            <Image source={require('../assets/images/trees.svg')} style={styles.imageModal} />
                                                        </Center>
                                                    </Flex>
                                                </Center>
                                            </View>
                                            <View style={[styles.center, { marginTop: "30px", marginBottom: "9px" }]}>
                                                <Button>
                                                    <Text style={[styling.colorTwoLighter, styling.paragraphSmall, { fontFamily: 'Quicksand-500' }]}>Kies dit thema</Text>
                                                </Button>
                                            </View>
                                        </Modal.Body>
                                    </LinearGradient>
                                </Modal.Content>
                            </Modal>
                        </Flex>

                        <Flex direction="col" mb="2.5" mt="1.5" w="100">
                            <TouchableOpacity onPress={() => setShowModal5(true)}>
                                <Center width="88" height="97" borderRadius="10" bg="#B2CAC0">
                                    <Image source={require('../assets/images/ontdek_de_wereld_nabij.svg')} style={styles.image} />
                                </Center>
                                <Center style={styling.center} width="88">
                                    <Text style={[styling.paragraphSmaller, styling.colorBlack, { fontFamily: 'Quicksand-500' }]}>Ontdek de wereld nabij</Text>
                                </Center>
                            </TouchableOpacity>
                            <Modal isOpen={showModal5} onClose={() => setShowModal5(false)} _backdrop={{ bg: "#393939" }}>
                                <Modal.Content width="348px">
                                    <LinearGradient
                                        colors={['#B2CAC0', '#E5EDEA']}
                                        style={[styles.container, styles.background]}
                                    >
                                        <Modal.CloseButton />
                                        <Modal.Body>
                                            <Text style={[styling.h5, styling.colorBlack, { fontFamily: "Cookie-Regular" }]}>Thema</Text>
                                            <Text style={[styling.paragraphSmall, styling.colorBlack, { fontFamily: "Quicksand-500" }]}>Ontdek de wereld nabij</Text>
                                            <View style={[styles.center, { marginTop: "20px" }]}>
                                                <Flex direction="row" style={styles.center} mb="1.5" mt="1.5" w="297">
                                                    <Center width="130" height="95" borderRadius="10" bg="#FFFFFF">
                                                        <Text style={[styling.paragraphSmall, styling.colorBlack, { fontFamily: 'Quicksand-500' }]}>Licht</Text>
                                                        <Flex direction="row" mb="2.5" mt="1.5">
                                                            <Center width="31px" height="43px" bg="#7EC5DE"></Center>
                                                            <Center width="31px" height="43px" bg="#00A9DE"></Center>
                                                            <Center width="43px" height="43px" bg="#005570"></Center>
                                                        </Flex>
                                                    </Center>
                                                    <Spacer />
                                                    <Center width="130" height="95" borderRadius="10" bg="#FFFFFF">
                                                        <Text style={[styling.paragraphSmall, styling.colorBlack, { fontFamily: 'Quicksand-500' }]}>Geluid</Text>
                                                        <Flex direction="row" mb="2.5" mt="1.5">
                                                            <Center>
                                                                <Image source={require('../assets/images/bird.svg')} style={styles.imageModal} />
                                                            </Center>
                                                            <Center>
                                                                <Image source={require('../assets/images/trees.svg')} style={styles.imageModal} />
                                                            </Center>
                                                        </Flex>
                                                    </Center>
                                                </Flex>
                                            </View>
                                            <View style={[styles.center, { marginTop: "20px" }]}>
                                                <Center width="130" height="95" borderRadius="10" bg="#FFFFFF">
                                                    <Text style={[styling.paragraphSmall, styling.colorBlack, { fontFamily: 'Quicksand-500' }]}>Geur</Text>
                                                    <Flex direction="row" mb="2.5" mt="1.5">
                                                        <Center>
                                                            <Image source={require('../assets/images/trees.svg')} style={styles.imageModal} />
                                                        </Center>
                                                    </Flex>
                                                </Center>
                                            </View>
                                            <View style={[styles.center, { marginTop: "30px", marginBottom: "9px" }]}>
                                                <Button>
                                                    <Text style={[styling.colorTwoLighter, styling.paragraphSmall, { fontFamily: 'Quicksand-500' }]}>Kies dit thema</Text>
                                                </Button>
                                            </View>
                                        </Modal.Body>
                                    </LinearGradient>
                                </Modal.Content>
                            </Modal>
                        </Flex>

                        <Flex direction="col" mb="2.5" mt="1.5" w="100">
                            <TouchableOpacity onPress={() => setShowModal6(true)}>
                                <Center width="88" height="97" borderRadius="10" bg="#B2CAC0">
                                    <Image source={require('../assets/images/utopia.svg')} style={styles.image} />
                                </Center>
                                <Center style={styling.center} width="88">
                                    <Text style={[styling.paragraphSmaller, styling.colorBlack, { fontFamily: 'Quicksand-500' }]}>Utopia verborgen groen</Text>
                                </Center>
                            </TouchableOpacity>
                            <Modal isOpen={showModal6} onClose={() => setShowModal6(false)} _backdrop={{ bg: "#393939" }}>
                                <Modal.Content width="348px">
                                    <LinearGradient
                                        colors={['#B2CAC0', '#E5EDEA']}
                                        style={[styles.container, styles.background]}
                                    >
                                        <Modal.CloseButton />
                                        <Modal.Body>
                                            <Text style={[styling.h5, styling.colorBlack, { fontFamily: "Cookie-Regular" }]}>Thema</Text>
                                            <Text style={[styling.paragraphSmall, styling.colorBlack, { fontFamily: "Quicksand-500" }]}>Utopia verborgen groen</Text>
                                            <View style={[styles.center, { marginTop: "20px" }]}>
                                                <Flex direction="row" style={styles.center} mb="1.5" mt="1.5" w="297">
                                                    <Center width="130" height="95" borderRadius="10" bg="#FFFFFF">
                                                        <Text style={[styling.paragraphSmall, styling.colorBlack, { fontFamily: 'Quicksand-500' }]}>Licht</Text>
                                                        <Flex direction="row" mb="2.5" mt="1.5">
                                                            <Center width="31px" height="43px" bg="#F0699E"></Center>
                                                            <Center width="31px" height="43px" bg="#F00069"></Center>
                                                            <Center width="43px" height="43px" bg="#820039"></Center>
                                                        </Flex>
                                                    </Center>
                                                    <Spacer />
                                                    <Center width="130" height="95" borderRadius="10" bg="#FFFFFF">
                                                        <Text style={[styling.paragraphSmall, styling.colorBlack, { fontFamily: 'Quicksand-500' }]}>Geluid</Text>
                                                        <Flex direction="row" mb="2.5" mt="1.5">
                                                            <Center>
                                                                <Image source={require('../assets/images/bird.svg')} style={styles.imageModal} />
                                                            </Center>
                                                            <Center>
                                                                <Image source={require('../assets/images/trees.svg')} style={styles.imageModal} />
                                                            </Center>
                                                        </Flex>
                                                    </Center>
                                                </Flex>
                                            </View>
                                            <View style={[styles.center, { marginTop: "20px" }]}>
                                                <Center width="130" height="95" borderRadius="10" bg="#FFFFFF">
                                                    <Text style={[styling.paragraphSmall, styling.colorBlack, { fontFamily: 'Quicksand-500' }]}>Geur</Text>
                                                    <Flex direction="row" mb="2.5" mt="1.5">
                                                        <Center>
                                                            <Image source={require('../assets/images/trees.svg')} style={styles.imageModal} />
                                                        </Center>
                                                    </Flex>
                                                </Center>
                                            </View>
                                            <View style={[styles.center, { marginTop: "30px", marginBottom: "9px" }]}>
                                                <Button>
                                                    <Text style={[styling.colorTwoLighter, styling.paragraphSmall, { fontFamily: 'Quicksand-500' }]}>Kies dit thema</Text>
                                                </Button>
                                            </View>
                                        </Modal.Body>
                                    </LinearGradient>
                                </Modal.Content>
                            </Modal>
                        </Flex>
                    </Flex>
                    <Flex direction="row" mb="2.5" mt="1.5">
                        <Flex direction="col" mb="2.5" mt="1.5" w="100">
                            <TouchableOpacity onPress={() => setShowModal1(true)}>
                                <Center width="88" height="97" borderRadius="10" bg="#B2CAC0">
                                    <Image source={require('../assets/images/hemelse_sereniteit.svg')} style={styles.image} />
                                </Center>
                                <Center style={styling.center} width="88">
                                    <Text style={[styling.paragraphSmaller, styling.colorBlack, { fontFamily: 'Quicksand-500' }]}>Hemelse Sereniteit</Text>
                                </Center>
                            </TouchableOpacity>
                            <Modal isOpen={showModal1} onClose={() => setShowModal1(false)} _backdrop={{ bg: "#393939" }}>
                                <Modal.Content width="348px">
                                    <LinearGradient
                                        colors={['#B2CAC0', '#E5EDEA']}
                                        style={[styles.container, styles.background]}
                                    >
                                        <Modal.CloseButton />
                                        <Modal.Body>
                                            <Text style={[styling.h5, styling.colorBlack, { fontFamily: "Cookie-Regular" }]}>Thema</Text>
                                            <Text style={[styling.paragraphSmall, styling.colorBlack, { fontFamily: "Quicksand-500" }]}>Hemelse Sereniteit</Text>
                                            <View style={[styles.center, { marginTop: "20px" }]}>
                                                <Flex direction="row" style={styles.center} mb="1.5" mt="1.5" w="297">
                                                    <Center width="130" height="95" borderRadius="10" bg="#FFFFFF">
                                                        <Text style={[styling.paragraphSmall, styling.colorBlack, { fontFamily: 'Quicksand-500' }]}>Licht</Text>
                                                        <Flex direction="row" mb="2.5" mt="1.5">
                                                            <Center width="31px" height="43px" bg="#6866D6"></Center>
                                                            <Center width="31px" height="43px" bg="#171D5D"></Center>
                                                            <Center width="43px" height="43px" bg="#0E025D"></Center>
                                                        </Flex>
                                                    </Center>
                                                    <Spacer />
                                                    <Center width="130" height="95" borderRadius="10" bg="#FFFFFF">
                                                        <Text style={[styling.paragraphSmall, styling.colorBlack, { fontFamily: 'Quicksand-500' }]}>Geluid</Text>
                                                        <Flex direction="row" mb="2.5" mt="1.5">
                                                            <Center>
                                                                <Image source={require('../assets/images/bird.svg')} style={styles.imageModal} />
                                                            </Center>
                                                            <Center>
                                                                <Image source={require('../assets/images/trees.svg')} style={styles.imageModal} />
                                                            </Center>
                                                        </Flex>
                                                    </Center>
                                                </Flex>
                                            </View>
                                            <View style={[styles.center, { marginTop: "20px" }]}>
                                                <Center width="130" height="95" borderRadius="10" bg="#FFFFFF">
                                                    <Text style={[styling.paragraphSmall, styling.colorBlack, { fontFamily: 'Quicksand-500' }]}>Geur</Text>
                                                    <Flex direction="row" mb="2.5" mt="1.5">
                                                        <Center>
                                                            <Image source={require('../assets/images/trees.svg')} style={styles.imageModal} />
                                                        </Center>
                                                    </Flex>
                                                </Center>
                                            </View>
                                            <View style={[styles.center, { marginTop: "30px", marginBottom: "9px" }]}>
                                                <Button>
                                                    <Text style={[styling.colorTwoLighter, styling.paragraphSmall, { fontFamily: 'Quicksand-500' }]}>Kies dit thema</Text>
                                                </Button>
                                            </View>
                                        </Modal.Body>
                                    </LinearGradient>
                                </Modal.Content>
                            </Modal>
                        </Flex>

                        <Flex direction="col" mb="2.5" mt="1.5" w="100">
                            <TouchableOpacity onPress={() => setShowModal2(true)}>
                                <Center width="88" height="97" borderRadius="10" bg="#B2CAC0">
                                    <Image source={require('../assets/images/energieke_landschappen.svg')} style={styles.image} />
                                </Center>
                                <Center style={styling.center} width="88">
                                    <Text style={[styling.paragraphSmaller, styling.colorBlack, { fontFamily: 'Quicksand-500' }]}>Energieke Landschappen</Text>
                                </Center>
                            </TouchableOpacity>
                            <Modal isOpen={showModal2} onClose={() => setShowModal2(false)} _backdrop={{ bg: "#393939" }}>
                                <Modal.Content width="348px">
                                    <LinearGradient
                                        colors={['#B2CAC0', '#E5EDEA']}
                                        style={[styles.container, styles.background]}
                                    >
                                        <Modal.CloseButton />
                                        <Modal.Body>
                                            <Text style={[styling.h5, styling.colorBlack, { fontFamily: "Cookie-Regular" }]}>Thema</Text>
                                            <Text style={[styling.paragraphSmall, styling.colorBlack, { fontFamily: "Quicksand-500" }]}>Energieke Landschappen</Text>
                                            <View style={[styles.center, { marginTop: "20px" }]}>
                                                <Flex direction="row" style={styles.center} mb="1.5" mt="1.5" w="297">
                                                    <Center width="130" height="95" borderRadius="10" bg="#FFFFFF">
                                                        <Text style={[styling.paragraphSmall, styling.colorBlack, { fontFamily: 'Quicksand-500' }]}>Licht</Text>
                                                        <Flex direction="row" mb="2.5" mt="1.5">
                                                            <Center width="31px" height="43px" bg="#98FA87"></Center>
                                                            <Center width="31px" height="43px" bg="#49961D"></Center>
                                                            <Center width="43px" height="43px" bg="#169600"></Center>
                                                        </Flex>
                                                    </Center>
                                                    <Spacer />
                                                    <Center width="130" height="95" borderRadius="10" bg="#FFFFFF">
                                                        <Text style={[styling.paragraphSmall, styling.colorBlack, { fontFamily: 'Quicksand-500' }]}>Geluid</Text>
                                                        <Flex direction="row" mb="2.5" mt="1.5">
                                                            <Center>
                                                                <Image source={require('../assets/images/bird.svg')} style={styles.imageModal} />
                                                            </Center>
                                                            <Center>
                                                                <Image source={require('../assets/images/trees.svg')} style={styles.imageModal} />
                                                            </Center>
                                                        </Flex>
                                                    </Center>
                                                </Flex>
                                            </View>
                                            <View style={[styles.center, { marginTop: "20px" }]}>
                                                <Center width="130" height="95" borderRadius="10" bg="#FFFFFF">
                                                    <Text style={[styling.paragraphSmall, styling.colorBlack, { fontFamily: 'Quicksand-500' }]}>Geur</Text>
                                                    <Flex direction="row" mb="2.5" mt="1.5">
                                                        <Center>
                                                            <Image source={require('../assets/images/trees.svg')} style={styles.imageModal} />
                                                        </Center>
                                                    </Flex>
                                                </Center>
                                            </View>
                                            <View style={[styles.center, { marginTop: "30px", marginBottom: "9px" }]}>
                                                <Button>
                                                    <Text style={[styling.colorTwoLighter, styling.paragraphSmall, { fontFamily: 'Quicksand-500' }]}>Kies dit thema</Text>
                                                </Button>
                                            </View>
                                        </Modal.Body>
                                    </LinearGradient>
                                </Modal.Content>
                            </Modal>
                        </Flex>

                        <Flex direction="col" mb="2.5" mt="1.5" w="100">
                            <TouchableOpacity onPress={() => setShowModal3(true)}>
                                <Center width="88" height="97" borderRadius="10" bg="#B2CAC0">
                                    <Image source={require('../assets/images/magisch_stadsbos.svg')} style={styles.image} />
                                </Center>
                                <Center style={styling.center} width="88">
                                    <Text style={[styling.paragraphSmaller, styling.colorBlack, { fontFamily: 'Quicksand-500' }]}>Magisch Stadsbos</Text>
                                </Center>
                            </TouchableOpacity>
                            <Modal isOpen={showModal3} onClose={() => setShowModal3(false)} _backdrop={{ bg: "#393939" }}>
                                <Modal.Content width="348px">
                                    <LinearGradient
                                        colors={['#B2CAC0', '#E5EDEA']}
                                        style={[styles.container, styles.background]}
                                    >
                                        <Modal.CloseButton />
                                        <Modal.Body>
                                            <Text style={[styling.h5, styling.colorBlack, { fontFamily: "Cookie-Regular" }]}>Thema</Text>
                                            <Text style={[styling.paragraphSmall, styling.colorBlack, { fontFamily: "Quicksand-500" }]}>Magisch Stadsbos</Text>
                                            <View style={[styles.center, { marginTop: "20px" }]}>
                                                <Flex direction="row" style={styles.center} mb="1.5" mt="1.5" w="297">
                                                    <Center width="130" height="95" borderRadius="10" bg="#FFFFFF">
                                                        <Text style={[styling.paragraphSmall, styling.colorBlack, { fontFamily: 'Quicksand-500' }]}>Licht</Text>
                                                        <Flex direction="row" mb="2.5" mt="1.5">
                                                            <Center width="31px" height="43px" bg="#9FFFB3"></Center>
                                                            <Center width="31px" height="43px" bg="#3BADBD"></Center>
                                                            <Center width="43px" height="43px" bg="#6800BD"></Center>
                                                        </Flex>
                                                    </Center>
                                                    <Spacer />
                                                    <Center width="130" height="95" borderRadius="10" bg="#FFFFFF">
                                                        <Text style={[styling.paragraphSmall, styling.colorBlack, { fontFamily: 'Quicksand-500' }]}>Geluid</Text>
                                                        <Flex direction="row" mb="2.5" mt="1.5">
                                                            <Center>
                                                                <Image source={require('../assets/images/bird.svg')} style={styles.imageModal} />
                                                            </Center>
                                                            <Center>
                                                                <Image source={require('../assets/images/trees.svg')} style={styles.imageModal} />
                                                            </Center>
                                                        </Flex>
                                                    </Center>
                                                </Flex>
                                            </View>
                                            <View style={[styles.center, { marginTop: "20px" }]}>
                                                <Center width="130" height="95" borderRadius="10" bg="#FFFFFF">
                                                    <Text style={[styling.paragraphSmall, styling.colorBlack, { fontFamily: 'Quicksand-500' }]}>Geur</Text>
                                                    <Flex direction="row" mb="2.5" mt="1.5">
                                                        <Center>
                                                            <Image source={require('../assets/images/trees.svg')} style={styles.imageModal} />
                                                        </Center>
                                                    </Flex>
                                                </Center>
                                            </View>
                                            <View style={[styles.center, { marginTop: "30px", marginBottom: "9px" }]}>
                                                <Button>
                                                    <Text style={[styling.colorTwoLighter, styling.paragraphSmall, { fontFamily: 'Quicksand-500' }]}>Kies dit thema</Text>
                                                </Button>
                                            </View>
                                        </Modal.Body>
                                    </LinearGradient>
                                </Modal.Content>
                            </Modal>
                        </Flex>
                    </Flex>

                    <Flex direction="row" mb="2.5" mt="1.5">
                        <Flex direction="col" mb="2.5" mt="1.5" w="100">
                            <TouchableOpacity onPress={() => setShowModal4(true)}>
                                <Center width="88" height="97" borderRadius="10" bg="#B2CAC0">
                                    <Image source={require('../assets/images/revitaliserende_energie.svg')} style={styles.image} />
                                </Center>
                                <Center style={styling.center} width="88">
                                    <Text style={[styling.paragraphSmaller, styling.colorBlack, { fontFamily: 'Quicksand-500' }]}>Revitaliserende Energie</Text>
                                </Center>
                            </TouchableOpacity>
                            <Modal isOpen={showModal4} onClose={() => setShowModal4(false)} _backdrop={{ bg: "#393939" }}>
                                <Modal.Content width="348px">
                                    <LinearGradient
                                        colors={['#B2CAC0', '#E5EDEA']}
                                        style={[styles.container, styles.background]}
                                    >
                                        <Modal.CloseButton />
                                        <Modal.Body>
                                            <Text style={[styling.h5, styling.colorBlack, { fontFamily: "Cookie-Regular" }]}>Thema</Text>
                                            <Text style={[styling.paragraphSmall, styling.colorBlack, { fontFamily: "Quicksand-500" }]}>Revitaliserende Energie</Text>
                                            <View style={[styles.center, { marginTop: "20px" }]}>
                                                <Flex direction="row" style={styles.center} mb="1.5" mt="1.5" w="297">
                                                    <Center width="130" height="95" borderRadius="10" bg="#FFFFFF">
                                                        <Text style={[styling.paragraphSmall, styling.colorBlack, { fontFamily: 'Quicksand-500' }]}>Licht</Text>
                                                        <Flex direction="row" mb="2.5" mt="1.5">
                                                            <Center width="31px" height="43px" bg="#F9FC8B"></Center>
                                                            <Center width="31px" height="43px" bg="#FCC300"></Center>
                                                            <Center width="43px" height="43px" bg="#967400"></Center>
                                                        </Flex>
                                                    </Center>
                                                    <Spacer />
                                                    <Center width="130" height="95" borderRadius="10" bg="#FFFFFF">
                                                        <Text style={[styling.paragraphSmall, styling.colorBlack, { fontFamily: 'Quicksand-500' }]}>Geluid</Text>
                                                        <Flex direction="row" mb="2.5" mt="1.5">
                                                            <Center>
                                                                <Image source={require('../assets/images/bird.svg')} style={styles.imageModal} />
                                                            </Center>
                                                            <Center>
                                                                <Image source={require('../assets/images/trees.svg')} style={styles.imageModal} />
                                                            </Center>
                                                        </Flex>
                                                    </Center>
                                                </Flex>
                                            </View>
                                            <View style={[styles.center, { marginTop: "20px" }]}>
                                                <Center width="130" height="95" borderRadius="10" bg="#FFFFFF">
                                                    <Text style={[styling.paragraphSmall, styling.colorBlack, { fontFamily: 'Quicksand-500' }]}>Geur</Text>
                                                    <Flex direction="row" mb="2.5" mt="1.5">
                                                        <Center>
                                                            <Image source={require('../assets/images/trees.svg')} style={styles.imageModal} />
                                                        </Center>
                                                    </Flex>
                                                </Center>
                                            </View>
                                            <View style={[styles.center, { marginTop: "30px", marginBottom: "9px" }]}>
                                                <Button>
                                                    <Text style={[styling.colorTwoLighter, styling.paragraphSmall, { fontFamily: 'Quicksand-500' }]}>Kies dit thema</Text>
                                                </Button>
                                            </View>
                                        </Modal.Body>
                                    </LinearGradient>
                                </Modal.Content>
                            </Modal>
                        </Flex>

                        <Flex direction="col" mb="2.5" mt="1.5" w="100">
                            <TouchableOpacity onPress={() => setShowModal5(true)}>
                                <Center width="88" height="97" borderRadius="10" bg="#B2CAC0">
                                    <Image source={require('../assets/images/ontdek_de_wereld_nabij.svg')} style={styles.image} />
                                </Center>
                                <Center style={styling.center} width="88">
                                    <Text style={[styling.paragraphSmaller, styling.colorBlack, { fontFamily: 'Quicksand-500' }]}>Ontdek de wereld nabij</Text>
                                </Center>
                            </TouchableOpacity>
                            <Modal isOpen={showModal5} onClose={() => setShowModal5(false)} _backdrop={{ bg: "#393939" }}>
                                <Modal.Content width="348px">
                                    <LinearGradient
                                        colors={['#B2CAC0', '#E5EDEA']}
                                        style={[styles.container, styles.background]}
                                    >
                                        <Modal.CloseButton />
                                        <Modal.Body>
                                            <Text style={[styling.h5, styling.colorBlack, { fontFamily: "Cookie-Regular" }]}>Thema</Text>
                                            <Text style={[styling.paragraphSmall, styling.colorBlack, { fontFamily: "Quicksand-500" }]}>Ontdek de wereld nabij</Text>
                                            <View style={[styles.center, { marginTop: "20px" }]}>
                                                <Flex direction="row" style={styles.center} mb="1.5" mt="1.5" w="297">
                                                    <Center width="130" height="95" borderRadius="10" bg="#FFFFFF">
                                                        <Text style={[styling.paragraphSmall, styling.colorBlack, { fontFamily: 'Quicksand-500' }]}>Licht</Text>
                                                        <Flex direction="row" mb="2.5" mt="1.5">
                                                            <Center width="31px" height="43px" bg="#7EC5DE"></Center>
                                                            <Center width="31px" height="43px" bg="#00A9DE"></Center>
                                                            <Center width="43px" height="43px" bg="#005570"></Center>
                                                        </Flex>
                                                    </Center>
                                                    <Spacer />
                                                    <Center width="130" height="95" borderRadius="10" bg="#FFFFFF">
                                                        <Text style={[styling.paragraphSmall, styling.colorBlack, { fontFamily: 'Quicksand-500' }]}>Geluid</Text>
                                                        <Flex direction="row" mb="2.5" mt="1.5">
                                                            <Center>
                                                                <Image source={require('../assets/images/bird.svg')} style={styles.imageModal} />
                                                            </Center>
                                                            <Center>
                                                                <Image source={require('../assets/images/trees.svg')} style={styles.imageModal} />
                                                            </Center>
                                                        </Flex>
                                                    </Center>
                                                </Flex>
                                            </View>
                                            <View style={[styles.center, { marginTop: "20px" }]}>
                                                <Center width="130" height="95" borderRadius="10" bg="#FFFFFF">
                                                    <Text style={[styling.paragraphSmall, styling.colorBlack, { fontFamily: 'Quicksand-500' }]}>Geur</Text>
                                                    <Flex direction="row" mb="2.5" mt="1.5">
                                                        <Center>
                                                            <Image source={require('../assets/images/trees.svg')} style={styles.imageModal} />
                                                        </Center>
                                                    </Flex>
                                                </Center>
                                            </View>
                                            <View style={[styles.center, { marginTop: "30px", marginBottom: "9px" }]}>
                                                <Button>
                                                    <Text style={[styling.colorTwoLighter, styling.paragraphSmall, { fontFamily: 'Quicksand-500' }]}>Kies dit thema</Text>
                                                </Button>
                                            </View>
                                        </Modal.Body>
                                    </LinearGradient>
                                </Modal.Content>
                            </Modal>
                        </Flex>

                        <Flex direction="col" mb="2.5" mt="1.5" w="100">
                            <TouchableOpacity onPress={() => setShowModal6(true)}>
                                <Center width="88" height="97" borderRadius="10" bg="#B2CAC0">
                                    <Image source={require('../assets/images/utopia.svg')} style={styles.image} />
                                </Center>
                                <Center style={styling.center} width="88">
                                    <Text style={[styling.paragraphSmaller, styling.colorBlack, { fontFamily: 'Quicksand-500' }]}>Utopia verborgen groen</Text>
                                </Center>
                            </TouchableOpacity>
                            <Modal isOpen={showModal6} onClose={() => setShowModal6(false)} _backdrop={{ bg: "#393939" }}>
                                <Modal.Content width="348px">
                                    <LinearGradient
                                        colors={['#B2CAC0', '#E5EDEA']}
                                        style={[styles.container, styles.background]}
                                    >
                                        <Modal.CloseButton />
                                        <Modal.Body>
                                            <Text style={[styling.h5, styling.colorBlack, { fontFamily: "Cookie-Regular" }]}>Thema</Text>
                                            <Text style={[styling.paragraphSmall, styling.colorBlack, { fontFamily: "Quicksand-500" }]}>Utopia verborgen groen</Text>
                                            <View style={[styles.center, { marginTop: "20px" }]}>
                                                <Flex direction="row" style={styles.center} mb="1.5" mt="1.5" w="297">
                                                    <Center width="130" height="95" borderRadius="10" bg="#FFFFFF">
                                                        <Text style={[styling.paragraphSmall, styling.colorBlack, { fontFamily: 'Quicksand-500' }]}>Licht</Text>
                                                        <Flex direction="row" mb="2.5" mt="1.5">
                                                            <Center width="31px" height="43px" bg="#F0699E"></Center>
                                                            <Center width="31px" height="43px" bg="#F00069"></Center>
                                                            <Center width="43px" height="43px" bg="#820039"></Center>
                                                        </Flex>
                                                    </Center>
                                                    <Spacer />
                                                    <Center width="130" height="95" borderRadius="10" bg="#FFFFFF">
                                                        <Text style={[styling.paragraphSmall, styling.colorBlack, { fontFamily: 'Quicksand-500' }]}>Geluid</Text>
                                                        <Flex direction="row" mb="2.5" mt="1.5">
                                                            <Center>
                                                                <Image source={require('../assets/images/bird.svg')} style={styles.imageModal} />
                                                            </Center>
                                                            <Center>
                                                                <Image source={require('../assets/images/trees.svg')} style={styles.imageModal} />
                                                            </Center>
                                                        </Flex>
                                                    </Center>
                                                </Flex>
                                            </View>
                                            <View style={[styles.center, { marginTop: "20px" }]}>
                                                <Center width="130" height="95" borderRadius="10" bg="#FFFFFF">
                                                    <Text style={[styling.paragraphSmall, styling.colorBlack, { fontFamily: 'Quicksand-500' }]}>Geur</Text>
                                                    <Flex direction="row" mb="2.5" mt="1.5">
                                                        <Center>
                                                            <Image source={require('../assets/images/trees.svg')} style={styles.imageModal} />
                                                        </Center>
                                                    </Flex>
                                                </Center>
                                            </View>
                                            <View style={[styles.center, { marginTop: "30px", marginBottom: "9px" }]}>
                                                <Button>
                                                    <Text style={[styling.colorTwoLighter, styling.paragraphSmall, { fontFamily: 'Quicksand-500' }]}>Kies dit thema</Text>
                                                </Button>
                                            </View>
                                        </Modal.Body>
                                    </LinearGradient>
                                </Modal.Content>
                            </Modal>
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