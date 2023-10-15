import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StatusBar,
    ActivityIndicator,
  } from 'react-native';
  import React, { useState, useEffect } from 'react';
  import axios from 'axios';
   import SNA1 from './SNA1';
  // the stylesheet
import styles from '../style/Style';
  import Container from './Container';
  //components
import AppButton from '../components/Button';
import Fab from '../components/Fab';  
  const Viewproject = ({navigation} ) => {
    StatusBar.setHidden(true);
    const [data, setData] = useState({});
    const [imageURL, setImageURL] = useState('');
    const [isLoading, setIsLoading] = useState(false);
  
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get('https://bymilli.firstcity.ai/api/project/5');
        const x = response.data.data;
        setData(x);
        setImageURL(x.project_logo);
        // console.log(x);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
  
    const imageSlider = () => {
      return (
        <View style={{ height: '50%' }}>
          {/*------ back arrow ------ */}
          <TouchableOpacity style={{ height: 30, width: 30, marginTop: '10%' }}>
            <Image
              source={require('C:/Users/rahaf/MilliFProject/assets/back.png')}
              style={{ height: 30, width: 30 }}
            />
          </TouchableOpacity>
  
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <View
              style={{
                borderBottomWidth: 2.5,
                borderBottomColor: '#F2F1F1',
                backgroundColor: '#F5F4F4',
              }}
            >
                <Image
              source={require('C:/Users/rahaf/MilliFProject/assets/Albaik_logo.svg.png')}
              style={{ height: 270, width: 270 , marginLeft:'15%'}}
            />
            </View>
          )}
        </View>
      );
    };
  
    const description = () => {
      return (
        <View style={{ height: '40%' }}>
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <Text
              style={[
                styles.headtitle,
                { fontSize: 25 },
                { fontWeight: '600', margin: '5%', top: '0%' },
              ]}
            >
              {data.project_name}
            </Text>
          )}
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <View style={{ flexDirection: 'row', marginTop: '15%', paddingHorizontal: '10%' }}>
              <Image
                source={require('C:/Users/rahaf/MilliFProject/assets/location.png')}
                style={{ height: 18, width: 20 }}
                resizeMode="contain"
              />
              <Text
                style={[
                  styles.tabText,
                  { fontSize: 14, color: '#000', fontWeight: '500', marginLeft: '1%' },
                ]}
              >
                {data.location}
              </Text>
            </View>
          )}
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <Text
              style={{
                fontSize: 16,
                fontWeight: '500',
                color: '#818F9C',
                paddingHorizontal: 45,
                paddingTop: '2%',
              }}
            >
              {data.project_description}
            </Text>
          )}
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <View style={{ flexDirection: 'row', paddingHorizontal: '8%', paddingTop: '5%' }}>
              <Image
                source={require('C:/Users/rahaf/MilliFProject/assets/calender.png')}
                style={{ height: 25, width: 25 }}
                resizeMode="contain"
              />
              <Text style={[styles.textv, { color: '#000' }]}>Start in: </Text>
              <Text style={[styles.textv, { color: '#818F9C' }]}>{data.start_date} | </Text>
              <Text style={[styles.textv, { color: '#000' }]}>End in: </Text>
              <Text style={[styles.textv, { color: '#818F9C' }]}>{data.end_date}</Text>
            </View>
          )}
        </View>
      );
    };
  
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        {imageSlider()}
        {description()}
        {/* the fab to initialize a new request */}
        <View style={{ flexDirection: 'row' }}>
        <Fab onPress={() => navigation.navigate("SNA1") } />
         
            style={[styles.BlackButton, { backgroundColor: '#c4c4c4' }, { width: 240 }, { marginLeft: '10%' }]}
            title="View Requests"
            onPress={() => navigation.navigate('Container')}
          />
        </View>
      </View>
    );
  };
  
  export default Viewproject;