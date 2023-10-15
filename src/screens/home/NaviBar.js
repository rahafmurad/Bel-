import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import HomePage from './HomePage';
import Profile from './Profile';
import EditProfile from './EditProfile';
import CreateProject from './CreateProject';
import Projects from './Projects';
 const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



const NaviBar = ({navigation}) => {
  return (
    
    <Tab.Navigator 
      screenOptions={({ route }) => ({
       
        headerShown:false ,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
             
          if (route.name === 'HomePage') {
            iconName = focused ? require('C:/Users/rahaf/MilliFProject/assets/homeB.png') : require('C:/Users/rahaf/MilliFProject/assets/home.png');
          } else if (route.name === 'Profile') {
            iconName = focused ? require('C:/Users/rahaf/MilliFProject/assets/profileB.png') : require('C:/Users/rahaf/MilliFProject/assets/profile.png');
          }
          
    

          return <Image source={iconName} style={{ width: 25, height: 25 }} />;
        },
      })}
    > 
      <Tab.Screen name="HomePage" component={HomePage}  />
      <Tab.Screen name="Profile" component={Profile} />

    </Tab.Navigator>
   

  );
};




export default NaviBar;