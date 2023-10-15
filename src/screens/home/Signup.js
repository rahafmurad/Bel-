
import React, { useState , useEffect } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styles from "../style/Style"
import ImagePicker from 'react-native-image-crop-picker';
import PickImage from '../components/PickImage';
import { Dropdown } from 'react-native-element-dropdown';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
  Image,
  StatusBar,
  Text,
  Pressable,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import AppButton from '../components/Button';
import MainTextField from '../components/MainTextField';

import Login from './Login';
import VerCode from './VerCode';
import axios from 'axios';
import { types } from 'react-native-document-picker';




const Signup = ({navigation}) => {
  const [full_name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone] = useState("");
  const [password, setPassword] = useState("");
  
  const [user_type, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  StatusBar.setHidden(true);
  const data = [
    { label: 'Contractor', value: '1' },
    { label: 'Engineering Office', value: '2' },
    { label: 'Owner', value: '3' },

  ];
  const storeData = async (value ,type , id) => {
    try {
      await AsyncStorage.setItem('token', value);
      await AsyncStorage.setItem('userType', type);
      await AsyncStorage.setItem('user_id', id.toString());

      console.log(value ,type ,id );
    } catch (e) {
      // saving error
    }
  };


  const url = 'http://bymilli.firstcity.ai/api/register/';

  const sendData = async () => {
 
    try {
      setIsLoading(true);
      const headers = {
        "Accept": "*/*",
        "Content-Type": "application/json",
      }
    
      const body = {
        "full_name": full_name,
        "email": email,
        "password": password,
        "user_type": user_type,
        "phone_number": phone_number,
    }
    

      const response = await axios.post(url, body, {headers}); 
     var value = response.data.token
     var type = response.data.user_type
     var id = response.data.user_id
      storeData(value , type , id)
      navigation.navigate('VerCode')
     
      console.log("🚀 ~ file: app.js:6 ~ constGET_REQ= ~ data:", response.data);
      setIsLoading(false);
    } catch (error) {
      Alert.alert( 'Field is required','Please fill all required fields')
      console.error("🚀 ~ file: app.js:5 ~ constPOST_REQ= ~ error:", error.message);
      setIsLoading(false);
    }
  };

  const Dropdown1 = () => {
    const [isFocus, setIsFocus] = useState(false);

    return (
      <View style={styles.Drobcontainer}>

        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: '#FFDE59' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="label"
          placeholder={!isFocus ? ' Select One' : '...'}
          searchPlaceholder="Search..."
          value={user_type}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
          setUser(item.label);
            setIsFocus(false);
          }}

        />
      </View>
    );
  };

  const Intro = () => {
    return (
      <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
        <Image
          style={[styles.Logo1, { left: '75%' }, { marginTop: '5%' }]}
          source={require('C:/Users/rahaf/MilliFProject/assets/LogoW.png')}
        />
        <Text style={[styles.headtitle, { marginTop: '13%' }, { left: '6%' }]}> Sign up</Text>

        <View style={{ top: '23%', right: '50%' }}>
          <Text style={[styles.subtitile, { left: '17%' }]} >Welcome! Please enter your Name, email and {'\n'} password to create your account.</Text>
        </View>
      </View>


    );

  };

  const Section1 = () => {


    return (

      <View style={{ marginTop: '25%', marginLeft: '5%' }}>
        <MainTextField style={[styles.Textinput]} text={"Full Name"} change={(value) => setFullName(value)} />
        <MainTextField style={[styles.Textinput]} text={"Email Address"} change={(value) => setEmail(value)} />
        <MainTextField style={[styles.Textinput]} text={"Phone Number"} type={'numeric'} change={(value) => setPhone(value)} />
        <MainTextField style={[styles.Textinput]} text={"Password"} isSecure={true} change={(value) => setPassword(value)} />

        
        <View style={{ marginLeft: '5%', marginTop: '50%' }}>
          <AppButton style={[styles.BlackButton, { width: 300 }]} title="Sign Up" onPress={() => { sendData() }} />
        </View>
      </View>
    );
  };
  const Section2 = () => {

   

    return (
      <View style={{ bottom: '10%' }} >
        <Text style={{ fontSize: 15, marginLeft: '12%' , bottom:'72%'}}>Sign up As</Text>
        <View style={{ bottom: '97%', marginRight: '85%' }}>
          {Dropdown1()}
        </View>
      </View>
    );
  };
  const Section3 = () => {


    return (
      <View style={{ bottom: '30%', marginLeft: '15%' }}>
        <Text style={{ marginLeft: '10%' }}>Already have an account? </Text>

        <Pressable onPress={() => navigation.navigate('Login')} >
          <Text style={[{ fontSize: 16 }, { marginLeft: '65%' }, { bottom: '91%' },
          { color: '#000000' },
          { fontWeight: "bold" }]}>Login</Text>
        </Pressable>
      </View>
    );
  };


  return (
    <LinearGradient
      colors={['#DEB754', '#FAF9F9']}
      start={{ x: 3.5, y: 0.5 }}
      end={{ x: 0.5, y: 0 }}
      style={styles.linearGradient}
    >

      <View style={styles.container}>

        {Intro()}
        {Section1()}
        {Section2()}
        {Section3()}

      </View>

    </LinearGradient>

  );
};


export default Signup;