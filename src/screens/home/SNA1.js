
import LinearGradient from 'react-native-linear-gradient';
import styles from "../style/Style"
import {
  View,
  Image,
  StatusBar,
  Text,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AppButton from '../components/Button';
import Rectangle from '../components/Rectangle';
import SNA2 from './SNA2';
import LogoContainer from '../components/LogoContainer';
import AsyncStorage from '@react-native-async-storage/async-storage';



const SNA1 = ({navigation}) => {
  StatusBar.setHidden(true);

  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value) {
        console.log(value);
     

      fetchData(value )
      }
    } catch (e) {
      // error reading value
    }
  };
  
  useEffect(() => {
  
    getData() }, []);

  const fetchData = async (value ) => {

    // setIsLoading(true)

    headersConfig = {
      "headers": {
        Authorization: 'Bearer '+value,
        Accept: "*/*"
      }
    }

    axios.get('https://bymilli.firstcity.ai/api/projects/1/form/1', headersConfig)
      .then(function (response) {
        // console.log(response)

        console.log(response.data)
        const data = response.data
        console.log(data);
        setData(data)

       const data1 = response.data.project_data
        setData1(data1)
        // setIsLoading(false)


      }).catch(function (error) {
        if (error.response) {
          // console.log(error.response.data);
          console.log(error);
        } else if (error.request) {
          console.log('the request was not made there is something that prevent the request');
        }
        // setIsLoading(false)
      });
  }

 

  const Intro = () => {

    return (
      <View style={{ flexDirection: 'row', paddingVertical: 15 }}>
        <Image
          style={[styles.Logo1, { left: '75%' }]}
          source={require('C:/Users/rahaf/MilliFProject/assets/LogoW.png')}
        />
        <Text style={[styles.headtitle, { marginTop: '10%' }, { left: '6%' }, { fontSize: 18 }]}> Project Info</Text>
        {/*------ back arrow ------ */}
        <TouchableOpacity style={{ height: 40, width: 40, top: '7%' }}>
          <Image
            source={require('C:/Users/rahaf/MilliFProject/assets/back.png')}
            style={{ height: 30, width: 30 }}
          />

        </TouchableOpacity>
        <View style={{ top: '15%', right: '60%' }}>
          <Text style={[styles.subtitile, { top: '15%' }, { left: '4%' }]} >Welcome! Here is the project information .....</Text>
        </View>
      </View>


    );

  };
  const Section1 = () => {
    return (
      <View style={{ top: '10%' }}>
        <Text style={{ fontWeight: 'bold', color: '#000000', top: '15%', marginLeft: '10%' }}>Project start date:</Text>
        <Text style={{ fontWeight: 'bold', color: '#000000', marginLeft: '55%' }}>Expected finished date:</Text>

        <View style={{ flexDirection: 'row', bottom: '7%', marginLeft: '6%' }}>
          <Rectangle style={[styles.rectangle, { width: 150 }, { height: 50 }, { marginHorizontal: 5 }]} text={data1.start_date} />
          <Rectangle style={[styles.rectangle, { width: 150 }, { height: 50 }, { marginHorizontal: 5 }]} text={data1.end_date} />

        </View>
      </View>
    );
  };
  const Section2 = () => {
    return (
      <View style={{ top: '6%' }}>
        <Text style={{ fontWeight: 'bold', color: '#000000', top: '15%', marginLeft: '10%' }}>Project Name:</Text>
        <Text style={{ fontWeight: 'bold', color: '#000000', marginLeft: '55%' }}>City:</Text>

        <View style={{ flexDirection: 'row', bottom: '7%', marginLeft: '6%' }}>
          <Rectangle style={[styles.rectangle, { width: 150 }, { height: 50 }, { marginHorizontal: 5 }]} text={data1.project_name} />
          <Rectangle style={[styles.rectangle, { width: 150 }, { height: 50 }, { marginHorizontal: 5 }]} text={data1.location} />

        </View>
      </View>
    );
  };
  const Section3 = () => {
    return (
      <View style={{ top: '4%' }}>
        <Text style={{ fontWeight: 'bold', color: '#000000', top: '15%', marginLeft: '10%' }}>Order Number:</Text>
        <Text style={{ fontWeight: 'bold', color: '#000000', marginLeft: '55%' }}>Version Number:</Text>

        <View style={{ flexDirection: 'row', bottom: '7%', marginLeft: '6%' }}>
          <Rectangle style={[styles.rectangle, { width: 150 }, { height: 50 }, { marginHorizontal: 5 }]} text={data.order_number} />
          <Rectangle style={[styles.rectangle, { width: 150 }, { height: 50 }, { marginHorizontal: 5 }]} text={'version :' + data.version_number} />

        </View>
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
      <View style={[styles.container]}>
        {Intro()}
        {Section1()}
        {Section2()}
        {Section3()}


        <AppButton style={[styles.BlackButton, { width: 300 }, { left: '9%' }, { marginTop: '50%' }]} title="Next"  onPress={() => navigation.navigate('SNA2')}/>
      </View>

    </LinearGradient>

  );
};


export default SNA1;