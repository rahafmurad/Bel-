import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  ScrollView,
  ActivityIndicator,
  Alert
} from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import LinearGradient from 'react-native-linear-gradient'
import styles from '../style/Style'
import Rectangle from '../components/Rectangle'
import AppButton from '../components/Button' 
import Home from './Home'
import AsyncStorage from '@react-native-async-storage/async-storage';
import EditProfile from './EditProfile'
const Profile = ({navigation}) => {
  StatusBar.setHidden(true);
  const [data, setData] = useState([]);
  const [logOut, setLogOut] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
   
      const id = await AsyncStorage.getItem('user_id');
      if (value) {
       
      fetchData(value,id)
    
      }
    } catch (e) {
      // error reading value
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
      const x = response.data.user;
      setData(x);
      console.log(x);
      
      console.log(x);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const head = () => {
    return (
      <View style={{ width: '100%', height: 190 }}>
        <View style={{
          width: '100%',
          height: 120,
          backgroundColor: '#D9D9D9',
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
        }}>
          <Text style={[styles.headtitle, { fontSize: 20 }, { marginHorizontal: '10%' }, { marginTop: '5%' }]}>
            Profile
          </Text>
          <TouchableOpacity style={{ height: 30, width: 30, marginTop: '10%' }}>
            <Image source={require('C:/Users/rahaf/MilliFProject/assets/back.png')}
              style={{ height: 30, width: 30 }} />
          </TouchableOpacity>
          <Image
            source={require('C:/Users/rahaf/MilliFProject/assets/user.png')}
            style={[styles.profileImage, { backgroundColor: '#fff' },{ marginTop: '0.1%'}]}
          />
        </View>
      </View>
    );
  };
  const user = ({ navigation }) => {
    return (
      <View>
        <Text style={styles.usertype}>{data.user_type}</Text>
        <TouchableOpacity style={styles.smallrec} onPress={() =>{ navigation.navigate('EditProfile')}}>
          <Text style={styles.editext}>Edit profile</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const userInfo = () => {
    return (
      <View>
        {isLoading ? (
          (<ActivityIndicator color={'red'} style={{ top: '90%' }} />)
        ) : (
          <>
            <Rectangle
              style={[styles.rectangle, { height: 50 }]}
              title="Name"
              text={data.full_name}
            />
            <Rectangle
              style={[styles.rectangle, { height: 50 }]}
              title="Email"
              text={data.email}
            />
            <Rectangle
              style={[styles.rectangle, { height: 50 }]}
              title="Phone Number"
              text={data.phone_number}
            />
           
            <Rectangle
              style={[styles.rectangle, { height: 75 }]}
              title="Projects"
             
          text={data.user_projects && data.user_projects.length ? data.user_projects : "AL-Baik"}/>
          </>
        )}
      </View>
    );
  };
  return (
    <LinearGradient
      colors={['#DEB754', '#FAF9F9']}
      start={{ x: 3.5, y: 0.5 }}
      end={{ x: 0.5, y: 0 }}
      style={[styles.linearGradient, { paddingLeft: 0, paddingRight: 0 }]}>
      <View style={{ flex: 1 }}>
        {head()}
        {user({ navigation })}
        {userInfo()}
        <AppButton
          style={[styles.BlackButton, { top: '3%' }, { left: '11%' }, { width: 300 }]}
          title="Log Out"
          onPress={() => {
            Alert.alert(
              "Log Out",
              "Are you sure you want to log out?",
              [
                { text: "Cancel" },
                { onPress:() => { Alert.alert(logOut, 'see you soon') ,navigation.navigate('Home')}}
              ]
            );
          }}
        />
      </View>
    </LinearGradient>
  );
};

export default Profile;