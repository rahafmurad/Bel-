
import React, {useState, useEffect} from 'react';

import axios from 'axios';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import styles from '../style/Style';
import { SearchBar } from 'react-native-screens';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Tab from '../components/Tab';
const Projects = ({navigation}) => {
  StatusBar.setHidden(true);
  const [search, setSearch] = useState('');
   
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);


   const [data, setData] = useState('');

   const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value) {
        console.log(value);
      fetchData(value)
      }
    } catch (e) {
      // error reading value
    }
  };
  
  useEffect(() => {
  
    getData() }, []);

    const fetchData = async (value) => {

      // setIsLoading(true)
  
      headersConfig = {
        "headers": {
          Authorization: 'Bearer '+value,
          Accept: "*/*"
        }
      }
  
      axios.get('https://bymilli.firstcity.ai/api/projects', headersConfig)
        .then(function (response) {
          console.log(response)
  
          console.log(response.data)
          const data = response.data;
          setData(data);
          setFilteredDataSource(data);
          setMasterDataSource(data);
          
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
  

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(
        function (item) {
          const itemData = item.project_name
            ? item.project_name.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemView = ({item}) => {
    return (
      // Flat List Item
      <Text
        style={styles1.itemStyle}
        onPress={() => getItem(item)}>
        {item.project_name}
        {'.'}
        {item.project_name.toUpperCase()}
      </Text>
    );
  };



  const getItem = (item) => {
    // Function for click on an item
    alert('Id : ' + item.id + ' Title : ' + item.project_name);
  };

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#fff'}}>

      <View style={{justifyContent: 'center', alignItems: 'center' , backgroundColor:'#fff'}}>
      <View style={{flexDirection: 'row', marginTop:35 ,paddingHorizontal:5}}>
      <TouchableOpacity style={{ height: 40, width: 40 }}>
    <Image
      source={require('C:/Users/rahaf/MilliFProject/assets/back.png')}
      style={{ height: 30, width: 30}}
    /> 
  </TouchableOpacity>
      <Text style={{   fontSize: 20,
    color: "#000",
   marginRight:'65%',
    fontWeight: "bold",}}>Projects</Text>

  </View>
  <View style={{paddingBottom:40}}>
        <TextInput
          style={styles.searchcontainer}
          onChangeText={(text) => searchFilterFunction(text)}
          value={search}
          underlineColorAndroid="transparent"
          placeholder="Search Here"
        />
        <Image source={require("C:/Users/rahaf/MilliFProject/assets/search.png")}
                    style={{ height: 18, width: 18 , marginLeft:'75%', marginTop:'-9%'}}/>
       </View>
        <FlatList
      
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) =><Tab itemData={item} onPress={() => navigation.navigate("Viewproject")}/>}
         
        />
      </View>
    </SafeAreaView>
  );
};



export default Projects;