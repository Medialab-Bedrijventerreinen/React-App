import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

export default function fonts() {
    const [fontsLoaded] = useFonts({
        'Cookie-Regular': require('../assets/fonts/cookie/Cookie-Regular.ttf'),
    });
}

export const useStyling = StyleSheet.create({
    h1: {
        fontSize: 96,
        lineHeight: 110,
    },
    h2: {
        fontSize: 64,
        lineHeight: 760,
    },
    h3: {
        fontSize: 48,
        lineHeight: 56,
    },
    h4: {
        fontSize: 36,
        lineHeight: 42,
    },
    h5: {
        fontSize: 32,
        lineHeight: 36,
    },
    
    paragraph: {
        fontSize: 18,
        lineHeight: 24,
    },
    paragraphSemibold: {
        fontSize: 18,
        lineHeight: 24,
    },
    paragraphBold: {
        fontSize: 18,
        lineHeight: 24,
    },
    paragraphSmall: {
        fontSize: 14,
        lineHeight: 18,
    },
    paragraphSmallSemiBold: {
        fontSize: 14,
        lineHeight: 18,
    },
    paragraphSmaller: {
        fontSize: 10,
        lineHeight: 14,
    },

    colorOne: {
        color: '#EAC7B3',
    },
    colorOneLight: {
        color: '#F2DDD2',
    },
    colorOneLighter: {
        color: '#FBF4F0',
    },
    colorOneDark: {
        color: '#A48B7D',
    },
    colorOneDarker: {
        color: '#5D5048',
    },

    colorTwo: {
        color: '#7EA796',
    },
    colorTwoLight: {
        color: '#B2CAC0',
    },
    colorTwoLighter: {
        color: '#E5EDEA',
    },
    colorTwoDark: {
        color: '#597569',
    },
    colorTwoDarker: {
        color: '#33433C',
    },
    colorTwoDarkest: {
        color: '#27342F',
    },

    colorThree: {
        color: '#597FA3',
    },
    colorThreeLight: {
        color: '#9CB2C8',
    },
    colorThreeLighter: {
        color: '#DEE5ED',
    },
    colorThreeDark: {
        color: '#3F5972',
    },
    colorThreeDarker: {
        color: '#243341',
    },

    colorBlack: {
        color: '#393939',
    },
    colorBlackLight: {
        color: '#888888',
    },
    colorBlackLighter: {
        color: '#D7D7D7',
    },
    colorBlackDark: {
        color: '#282828',
    },
    colorBlackDarker: {
        color: '#171717',
    },

    colorWhite: {
        color: '#FFFFFF',
    },
    colorWhiteLight: {
        color: '#FFFFFF',
    },
    colorWhiteLighter: {
        color: '#B2B2B2',
    },
    colorWhiteDark: {
        color: '#282828',
    },
    colorWhiteDarker: {
        color: '#666666',
    },
    
    center: {
        textAlign: 'center',
    },

    sliderThumb: {
        backgroundColor: '#E5EDEA',
    }
});