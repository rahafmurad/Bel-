import React from 'react';
import styles from "../style/Style";
import {TextInput } from 'react-native';


const MainTextField=({text, style, type ,change , isSecure})=> {
  return (
    <TextInput style={style} placeholder={text} keyboardType={type}  onChangeText={change} secureTextEntry={isSecure}/>
  );
}

export default MainTextField;