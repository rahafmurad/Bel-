import React, { useRef } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FloatingAction } from "react-native-floating-action";



const Fab = ({ onPress }) => {
  let x = useRef('');
const storeData = async (name) => {
  try {
    await AsyncStorage.setItem('name', name);
    console.log(name);

  } catch (e) {
    console.log('error');
  }
};
  const actions = [
    {
      text: "WIR",
      icon: require("C:/Users/rahaf/MilliFProject/assets/back.png"),
      name: "WIR",
      position: 2,
      color: '#DEB754',
      onPress: () => storeData('2'),
    },
    {
      text: "SNA",
      icon: require("C:/Users/rahaf/MilliFProject/assets/back.png"),
      name: "SNA",
      position: 1,
      color: '#DEB754',
      onPress: () => storeData('1'),
    },
  ];

  return (
    <View style={{ left: 380, top: 30 }}>
      <FloatingAction
        ref={(ref) => { x = ref; }}
        actions={actions}
        onPressItem={onPress}
        color='#000'
      />
    </View>
  );
};

export default Fab;