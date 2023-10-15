import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
  ActivityIndicator
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

import React, { useState, useEffect } from 'react'
import axios from 'axios'
//linear gradient
import LinearGradient from 'react-native-linear-gradient'

// the stylesheet
import styles from '../style/Style';
//components
import EditRectangle from '../components/EditRectangle';
import AppButton from '../components/Button';

// profile
import Profile from './Profile'

const EditProfile = ({ navigation } ) => {
  StatusBar.setHidden(true);
 
  const [isLoading, setIsLoading] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [data, setData] = useState([]);
  const [userType, setUserType] = useState("Contractor");
  
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      const id = await AsyncStorage.getItem('user_id');
      if (value) {
       
      fetchData(value,id)
      postData(value, id)
      }
    } catch (e) {
      // error reading value
    }
  };
  
  const postData = async (value , id) => {
    const url='https://bymilli.firstcity.ai/api/users/'+id;
    try {
      setIsLoading(true);
      const body = {
        "full_name": fullName,
        "email": email,
        "phone_number": phoneNumber,
       
      }
      headersConfig = {
        "headers": {
          Authorization: 'Bearer '+value,
          Accept: "*/*"
        }
      }
      const response = await axios.post(url, body ,headersConfig);
      console.log("🚀 ~ file: app.js:6 ~ constGET_REQ= ~ data:", response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("🚀 ~ file: app.js:5 ~ constPOST_REQ= ~ error:", error);
      setIsLoading(false);
    }
  };
  useEffect(() => {

    getData()

  }, []);
  const fetchData = async (value , id) => {
    setIsLoading(true);
    headersConfig = {
      "headers": {
        Authorization: 'Bearer '+value,
        Accept: "*/*"
      }
    }
    try {
      const response = await axios.get("https://bymilli.firstcity.ai/api/users/"+id , headersConfig);
      const x = response.data.data;
      setData(x);     
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  const head = () => {
    return (
      <View style={{ width: '100%', height: 190 }}>
        {/* ----- the grey filled square ------ */}
        <View style={{
          width: '100%',
          height: 120,
          backgroundColor: '#D9D9D9',
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
        }}>

          {/* ----- the head title----- */}
          <Text style={[styles.headtitle, { fontSize: 20 }, { marginHorizontal: '10%' }, {marginTop:'5%'}]}>
          Edit Profile </Text>

          {/*------ back arrow ------ */}
          <TouchableOpacity style={{ height: 30, width: 30, marginTop: '10%' }}>
            <Image source={require('C:/Users/rahaf/MilliFProject/assets/back.png')}
              style={{ height: 30, width: 30 }} />
          </TouchableOpacity>
          {/* ------ profile image ------ */}
          <Image
            source={require('C:/Users/rahaf/MilliFProject/assets/user.png')}
            style={[styles.profileImage, { backgroundColor: '#fff' }]}
          />
        </View>
      </View>
    )
  }
  const userInfo = () => {
    return (
      <View>
        <>
    
        {/* <Text style={styles.usertype}> {data.user_type}</Text> */}
      
          <EditRectangle title={"Name"} placeholder={data.full_name} data={fullName} setData={setFullName} />
          <EditRectangle title={"Email"} placeholder={data.email} data={email} setData={setEmail} />
          <EditRectangle title={"Phone Number"} placeholder={data.phone_number} type={'numeric'} data={phoneNumber} setData={setPhoneNumber} />
          <EditRectangle title={"Projects"} placeholder={data.user_projects}/>
            </>
      </View>
    )
  }
  return (
    <LinearGradient
      colors={['#DEB754', '#FAF9F9']}
      start={{ x: 3.5, y: 0.5 }}
      end={{ x: 0.5, y: 0 }}
      style={[styles.linearGradient, {
        paddingLeft: 0,
        paddingRight: 0,
      }]} >
      <View>
        <View>
          {head()}
          {userInfo()}
        </View>


        {isLoading ? (<ActivityIndicator color={'#000'}style={{top:'10%'}} />) : (
          <AppButton style={[styles.BlackButton, { left: '10%' }, { top: '5%' }, , { width: 300 }]} title="Save" onPress={postData} />)}
      </View>
    </LinearGradient>
  );
}
export default EditProfile;