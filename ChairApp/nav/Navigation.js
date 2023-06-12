import React from 'react';
import TabBar from './TabBar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Load all components in for the navigation 
import { Welcome } from '../components/Welcome.js'
import { Home } from '../components/Home.js'
import { Themes } from '../components/Themes.js'

const Tab = createBottomTabNavigator ();

//Export for App.js and all navigation components
export function Navigation() {
  
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} state={{...props.state, routes: props.state.routes.slice(0,4)}}/>}>
      <Tab.Screen 
        name="Welcome" 
        component={Welcome}
        options={{
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} 
      />
      <Tab.Screen 
        name="Home" 
        component={Home}
        options={{
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} 
      />
      <Tab.Screen 
        name="Themes" 
        component={Themes}
        options={{
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} 
      />
    </Tab.Navigator>
  );
}
