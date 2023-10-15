import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from './HomePage';
import Profile from './Profile';
import EvalRe from './EvalRe';
import Uneval from './Uneval';
const Tab = createBottomTabNavigator();

export default function Container ({navigation}) {
  
  return (

      <Tab.Navigator 
      screenOptions={({ route }) => ({
        headerShown:false ,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'EvalRe') {
            iconName = focused ? require('C:/Users/rahaf/MilliFProject/assets/evalPressed.png') : require('C:/Users/rahaf/MilliFProject/assets/evalUnpressed.png');
          } else if (route.name === 'Uneval') {
            iconName = focused ? require('C:/Users/rahaf/MilliFProject/assets/unevalPressed.png') : require('C:/Users/rahaf/MilliFProject/assets/unevalUnpressed.png');
          }
          return <Image source={iconName} style={{ width: 25, height: 25 }} />;
        },
      })}
    >
        <Tab.Screen name="EvalRe" component={EvalRe}/>
        <Tab.Screen name="Uneval" component={Uneval} />
     
      </Tab.Navigator>
  
  );
}