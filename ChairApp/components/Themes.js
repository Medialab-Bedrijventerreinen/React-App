import * as React from 'react';
import { StyleSheet, Text, Image, View, useState } from 'react-native';
import { Button, Flex, Center, ScrollView, Modal } from "native-base";
import { useStyling } from '../styles/style.js';
import { LinearGradient } from 'expo-linear-gradient';

//The Home component to load in and exporting it for the navigation
export const Themes = ({navigation}) => {
  const styling = useStyling;

  const [showModal, setShowModal] = React.useState(false);

  return (
      <LinearGradient
        colors={['#EAC7B3', '#FBF4F0']}
        style={[styles.container, styles.background]}
      >
        <Text style={[styling.paragraph, styling.colorBlack, { fontFamily: 'Quicksand-500', justifyContent: "flex-start" }]}>Naar Home</Text>
        <View style={styles.center}>
            <Text style={[styling.h1, styling.colorBlack, { fontFamily: 'Cookie-Regular' }]}>Thema's</Text>
            <Button
            title="Go to Welcome"
            onPress={() => setShowModal(true)}
            >Test Modal</Button>

                    <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                        <Modal.Content width="350px">
                            <LinearGradient
                                colors={['#B2CAC0', '#E5EDEA']}
                                style={[styles.container, styles.background]}
                            >
                                <Modal.CloseButton />
                                <Modal.Body>
                                    <Text style={[styling.h5, styling.colorBlack, {fontFamily: "Cookie-Regular"}]}>Thema</Text>
                                    <Text style={[styling.paragraphSmall, styling.colorBlack, {fontFamily: "Quicksand-500"}]}>Verborgen groen</Text>
                                    <View style={styles.center}>
                                        <Button>Kies dit thema</Button>
                                    </View>
                                </Modal.Body>
                            </LinearGradient>
                        </Modal.Content>
                    </Modal>

            <ScrollView w="300" h="600">
                <Flex direction="row" mb="2.5" mt="1.5">
                    <Flex direction="col" mb="2.5" mt="1.5" w="100">
                        <Center width="88" height="97" borderRadius="10" bg="#B2CAC0">
                            <Image source={require('../assets/images/hemelse_sereniteit.svg')} style={styles.image} />
                        </Center>
                        <Center style={styling.center} width="88">
                            <Text style={[styling.paragraphSmaller, styling.colorBlack, { fontFamily: 'Quicksand-500'}]}>Hemelse Sereniteit</Text>
                        </Center>
                    </Flex>

                    <Flex direction="col" mb="2.5" mt="1.5" w="100">
                        <Center width="88" height="97" borderRadius="10" bg="#B2CAC0">
                            <Image source={require('../assets/images/energieke_landschappen.svg')} style={styles.image} />
                        </Center>
                        <Center style={styling.center} width="88">
                            <Text style={[styling.paragraphSmaller, styling.colorBlack, { fontFamily: 'Quicksand-500'}]}>Energieke Landschappen</Text>
                        </Center>
                    </Flex>
                    <Flex direction="col" mb="2.5" mt="1.5" w="100">
                        <Center width="88" height="97" borderRadius="10" bg="#B2CAC0">
                            <Image source={require('../assets/images/magisch_stadsbos.svg')} style={styles.image} />
                        </Center>
                        <Center style={styling.center} width="88">
                            <Text style={[styling.paragraphSmaller, styling.colorBlack, { fontFamily: 'Quicksand-500'}]}>Magisch Stadsbos</Text>
                        </Center>
                    </Flex>
                </Flex>

                <Flex direction="row" mb="2.5" mt="1.5">
                    <Flex direction="col" mb="2.5" mt="1.5" w="100">
                        <Center width="88" height="97" borderRadius="10" bg="#B2CAC0">
                            <Image source={require('../assets/images/revitaliserende_energie.svg')} style={styles.image} />
                        </Center>
                        <Center style={styling.center} width="88">
                            <Text style={[styling.paragraphSmaller, styling.colorBlack, { fontFamily: 'Quicksand-500'}]}>Revitaliserende Energie</Text>
                        </Center>
                    </Flex>
                    <Flex direction="col" mb="2.5" mt="1.5" w="100">
                        <Center width="88" height="97" borderRadius="10" bg="#B2CAC0">
                            <Image source={require('../assets/images/ontdek_de_wereld_nabij.svg')} style={styles.image} />
                        </Center>
                        <Center style={styling.center} width="88">
                            <Text style={[styling.paragraphSmaller, styling.colorBlack, { fontFamily: 'Quicksand-500'}]}>Ontdek de wereld nabij</Text>
                        </Center>
                    </Flex>
                    <Flex direction="col" mb="2.5" mt="1.5" w="100">
                        <Center width="88" height="97" borderRadius="10" bg="#B2CAC0">
                            <Image source={require('../assets/images/utopia.svg')} style={styles.image} />
                        </Center>
                        <Center style={styling.center} width="88">
                            <Text style={[styling.paragraphSmaller, styling.colorBlack, { fontFamily: 'Quicksand-500'}]}>Utopia</Text>
                        </Center>
                    </Flex>
                </Flex>

                <Flex direction="row" mb="2.5" mt="1.5">
                    <Flex direction="col" mb="2.5" mt="1.5" w="100">
                        <Center width="88" height="97" borderRadius="10" bg="#B2CAC0">
                            <Image source={require('../assets/images/hemelse_sereniteit.svg')} style={styles.image} />
                        </Center>
                        <Center style={styling.center} width="88">
                            <Text style={[styling.paragraphSmaller, styling.colorBlack, { fontFamily: 'Quicksand-500'}]}>Hemelse Sereniteit</Text>
                        </Center>
                    </Flex>
                    <Flex direction="col" mb="2.5" mt="1.5" w="100">
                        <Center width="88" height="97" borderRadius="10" bg="#B2CAC0">
                            <Image source={require('../assets/images/energieke_landschappen.svg')} style={styles.image} />
                        </Center>
                        <Center style={styling.center} width="88">
                            <Text style={[styling.paragraphSmaller, styling.colorBlack, { fontFamily: 'Quicksand-500'}]}>Energieke Landschappen</Text>
                        </Center>
                    </Flex>
                    <Flex direction="col" mb="2.5" mt="1.5" w="100">
                        <Center width="88" height="97" borderRadius="10" bg="#B2CAC0">
                            <Image source={require('../assets/images/magisch_stadsbos.svg')} style={styles.image} />
                        </Center>
                        <Center style={styling.center} width="88">
                            <Text style={[styling.paragraphSmaller, styling.colorBlack, { fontFamily: 'Quicksand-500'}]}>Magisch Stadsbos</Text>
                        </Center>
                    </Flex>
                </Flex>

                <Flex direction="row" mb="2.5" mt="1.5">
                    <Flex direction="col" mb="2.5" mt="1.5" w="100">
                        <Center width="88" height="97" borderRadius="10" bg="#B2CAC0">
                            <Image source={require('../assets/images/revitaliserende_energie.svg')} style={styles.image} />
                        </Center>
                        <Center style={styling.center} width="88">
                            <Text style={[styling.paragraphSmaller, styling.colorBlack, { fontFamily: 'Quicksand-500'}]}>Revitaliserende Energie</Text>
                        </Center>
                    </Flex>
                    <Flex direction="col" mb="2.5" mt="1.5" w="100">
                        <Center width="88" height="97" borderRadius="10" bg="#B2CAC0">
                            <Image source={require('../assets/images/ontdek_de_wereld_nabij.svg')} style={styles.image} />
                        </Center>
                        <Center style={styling.center} width="88">
                            <Text style={[styling.paragraphSmaller, styling.colorBlack, { fontFamily: 'Quicksand-500'}]}>Ontdek de wereld nabij</Text>
                        </Center>
                    </Flex>
                    <Flex direction="col" mb="2.5" mt="1.5" w="100">
                        <Center width="88" height="97" borderRadius="10" bg="#B2CAC0">
                            <Image source={require('../assets/images/utopia.svg')} style={styles.image} />
                        </Center>
                        <Center style={styling.center} width="88">
                            <Text style={[styling.paragraphSmaller, styling.colorBlack, { fontFamily: 'Quicksand-500'}]}>Utopia</Text>
                        </Center>
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
  image: {
    width: 56,
    height: 56,
  },
});