
import {
  View,
  Text,
  Image,
  Pressable,
  StatusBar,
Alert
} from 'react-native'

import React, { useState , useEffect } from 'react';

// the stylesheet
import styles from '../style/Style'
// components
import AppButton from '../components/Button'
import MainTextField from '../components/MainTextField'
import AsyncStorage from '@react-native-async-storage/async-storage';

// linear gradient
import LinearGradient from 'react-native-linear-gradient';
 import axios from 'axios'
import NaviBar from './NaviBar'


const Login = ({navigation}) => {
    StatusBar.setHidden(true);

    const storeData = async (value , type ,id) => {
      try {
       
        await AsyncStorage.setItem('token', value);
        await AsyncStorage.setItem('user_type', type);
        await AsyncStorage.setItem('user_id', id.toString());
  
        console.log(value , type ,id );
       
      } catch (e) {
        // saving error
      }
    };
  

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [isLoading, setIsLoading] = useState(false);
const url = 'http://bymilli.firstcity.ai/api/login';

const sendData = async () => {
  try {
    setIsLoading(true);
    const headers = {
      "Accept": "*/*",
      "Content-Type": "application/json",
    }
  
    const body = {
   
      "email": email,
      "password": password,
     
  }
    const response = await axios.post(url, body, {headers});
     var value = response.data.token
    var type = response.data.user_type
    var id = response.data.user_id
     storeData(value , type , id)
   
      navigation.navigate("NaviBar");
    // console.log("🚀 ~ file: app.js:6 ~ constGET_REQ= ~ data:", response.data);
    setIsLoading(false);
  } catch (error) {
    console.error("🚀 ~ file: app.js:5 ~ constPOST_REQ= ~ error:", error.message);
    Alert.alert('Login Failed', "Please enter a correct email and password and try again");
    // Alert.alert('Login Failed', error.response.data.message);
    setIsLoading(false);
  }
};

  const head = () => {
    return (
      <View style={{ height: 120, width: '100%', marginVertical: '10%' }}>

        {/* ----- logo ----- */}
        <Image
          style={[styles.Logo1, { marginTop: '2%', marginLeft:'75%' }]}
          source={require('C:/Users/rahaf/MilliFProject/assets/LogoW.png')} />

        {/* the welcome text */}
        <View style={{right:'10%'}}>
        <Text style={[styles.headtitle , {marginLeft:'15%'},{marginTop:'7%'}]} >Welcome Back!😍</Text>
        <Text style={[styles.subtitile, { fontSize: 15 }, {fontWeight:'400'}, {marginTop:'15%'},{marginRight:'10%'}]}>Happy to see you again! please enter your account information to  login to your account.</Text>

        </View>
      </View>
    )
  }



  return (
    <LinearGradient
      colors={['#DEB754', '#FAF9F9']}
      start={{ x: 3.5, y: 0.5 }}
      end={{ x: 0.5, y: 0 }}
      style={styles.linearGradient}
    >

      <View style={{ flex: 1 }}>

        {head()}
        <View style={{flexDirection:'column', alignItems:'center'}}>
          {/* ------ email ------ */}
        <MainTextField style={[styles.Textinput]} text="Email Address / Phone Number" change={(value) => setEmail(value)}/>

        {/* ------ password ------ */}
        <MainTextField style={[styles.Textinput]} text={"Your Password"} isSecure={true} change={(value) => setPassword(value)} />

        </View>
        
        <AppButton style={[styles.BlackButton, {alignSelf:'center'}, { width: 300 }, {marginTop:'70%'}]} title="Login" onPress={() => sendData()}/>

        {/* signup nevigation */}
        <View style={{alignSelf:'center', flexDirection:'row' ,marginTop:'2%'}}>
        <Text>Don't have an account ?</Text>
        <Pressable onPress={() => navigation.navigate('Signup')}>
        <Text style={{ fontSize: 16, color: '#000000', fontWeight: "bold" , marginTop:'0%' , marginLeft:'5%'}}>Sign up</Text>
        </Pressable>
        </View>
      </View>
    </LinearGradient>

  );
}

export default Login;