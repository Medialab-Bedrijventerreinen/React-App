import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Tab from './Tab';

const {width} = Dimensions.get('screen');

//The TabBar component to load in 
const TabBar = ({state, navigation}) => {
    const [selected, setSelected] = useState('home');
    const {routes} = state;
    const handlePress = (activeTab, index) => {
        if(state.index !== index) {
            setSelected(activeTab);
            navigation.navigate(activeTab);
        }
    }

    //Return bottom navigator 
    // return (
    //     <View style={{ position: 'absolute', bottom: 0, width: width}}>
    //     <View
    //         style={[styles.container,{ backgroundColor: 'white' }]}>
    //         {routes.map((route, index) => (
    //         <Tab
    //             styles={styles.tab}
    //             tab={route}
    //             onPress={() => handlePress(route.name, index)}
    //             color='white'
    //             key={route.key}
    //         />
    //         ))}
    //     </View>
    //     </View>
    // )
};

//Styling for the TabBar component
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingBottom: 30,
        paddingTop: 30,
    },
})

//Export the TabBar
export default TabBar