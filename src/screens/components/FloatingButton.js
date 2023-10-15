import React, { useRef, useState } from 'react';
import { StyleSheet, TouchableOpacity, Image, Animated, View, Text } from 'react-native';
import styles from '../style/Style';
import CreateProject from '../home/CreateProject';



const FloatingButton = ({navigation,fun}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [pressed, setPressed] = useState(false)

  const handlePress = () => {
    // Add any motivating action here
    Animated.timing(animatedValue, {
      toValue: -1,
      duration: 500,
      useNativeDriver: true,
    }).start();
    setPressed(prev => !prev)
  };

  const animatedStyle = {
    transform: [
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [-10, 280],
        }),

      },
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 0],
        }),
      },
    ],
  };

  const creatView = () => {
    
    return (
      <View style={styles.floatingText} >
      <TouchableOpacity onPress={fun}>
        <Text style={[styles.appButtonText, { color: '#000' }]}>Start a new Project</Text>
        </TouchableOpacity>
        </View>
    )
  }

  return (

    <Animated.View style={animatedStyle}>
      {pressed ? creatView({navigation}) : null}
      <TouchableOpacity style={styles.floatingButton} onPress={handlePress}>
        <Image source={require('C:/Users/rahaf/MilliFProject/assets/add.png')}
          style={[styles.addicon]}
        />
      </TouchableOpacity>
    </Animated.View>
  );
};

export default FloatingButton;