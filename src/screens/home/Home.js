/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styles from "../style/Style"
import {
  View,
  Text,
  Alert,
Image,
TouchableOpacity,
StatusBar,
} from 'react-native';
import AppButton from '../components/Button';
import Login from './Login';
import Signup from './Signup';



const Home = ({navigation}) => {
  StatusBar.setHidden(true);

 
  return(    
<LinearGradient
        colors={['#848484' ,'#FAF9F9' ]}
        start={{x: 0.5, y: 1.5}}
        end={{x: 1, y: 0}}
        style={styles.linearGradient}
     >


  <View style={styles.Homecontainer}>
  <View >
      <Image
        style={styles.Logo}
        source={require('C:/Users/rahaf/MilliFProject/assets/Logo.png')}
      />
    </View>
    <View>
  
<AppButton style={styles.YellButton} title="Login"  onPress={() =>  navigation.navigate('Login')}/>

  </View>

  <View style={{top:'5%'}}>
  
  <AppButton style={styles.BlackButton} title="Sign up"  onPress={() =>  navigation.navigate('Signup')}/>

  </View>
 
 </View>

</LinearGradient>
  ); };




export default Home;