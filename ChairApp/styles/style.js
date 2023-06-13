import { StyleSheet } from 'react-native';

export const useStyling = StyleSheet.create({
    header: {
        fontSize: 40,
        fontFamily: 'Klara',
    },
    
    paragraph: {
        fontSize: 16,
        fontFamily: 'Quicksand',
    },
    
    center: {
        textAlign: 'center',
    },
    sliderLabel: {
    fontSize: 20,
    color: '#000',
    marginBottom: 10,
  },
  previewStyle: {
    height: 55,
    borderRadius: 50,
    marginBottom: 30,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});