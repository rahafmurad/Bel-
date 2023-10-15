import {
    View,
    Image,
    StatusBar,
    Text,
    TouchableOpacity,
    FlatList
} from 'react-native';
import axios from 'axios';
//components
import Tab from '../components/Tab';
import Comp from '../components/Comp';
import FloatingButton from '../components/FloatingButton';
import CreateProject from './CreateProject';
import Projects from './Projects';
import AsyncStorage from '@react-native-async-storage/async-storage';

//the stylesheet
import styles from '../style/Style';
import React, {useState, useEffect} from 'react';
import Fab from '../components/Fab';

const HomePage = ({navigation}) => {
    StatusBar.setHidden(true);


const [data, setData] = useState('');
const [isLoading, setIsLoading] = useState(false);

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

    axios.get('https://bymilli.firstcity.ai/api/project', headersConfig)
      .then(function (response) {
        // console.log(response)

        // console.log(response.data)
        const data = response.data.data;
        setData(data);
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


    const head = () => {
        return (
            <View style={{ height: 50, width: '100%', marginVertical: '8%' }}>

                {/* ----- logo ----- */}
                <Image
                    style={[styles.Logo1, { top: '0%' } , {marginLeft:'70%'}]}
                    source={require('C:/Users/rahaf/MilliFProject/assets/LogoW.png')} />

                {/* the welcome text */}
                <Text style={[styles.headtitle, { fontSize: 20 }, { marginHorizontal: 20 }]}>How’s your day.. 👋{'\n'}Mohammed !</Text>
                {/* mohammed will be input from database */}
            </View>
        )
    }   

    const Tabtitle = ({navigation}) => {
        return (
            <View style={{ flexDirection: 'row', marginTop: '8%', alignItems: 'center' }}>
                {/* the headtitle to the tab */}
                <Text style={[styles.tabText, { fontSize: 20 }, { marginLeft: '5%' }]}>Projects</Text>
                <Text style={[styles.tabText, { fontSize: 18 }, { marginLeft: '50%' }]}>view all</Text>

                {/* the arrow */}
                <TouchableOpacity  onPress={() =>  navigation.navigate('Projects')}>
                
                    <Image source={require('C:/Users/rahaf/MilliFProject/assets/To.png')}
                        style={{ height: 18, width: 21, marginTop: '10%' }} />
                      
                </TouchableOpacity>
            </View>
    )}
    return (
        <View style={{ flex: 1 ,justifyContent: 'center', alignItems: 'center'}}>

            {head()}

            {/* {/the app caculations/} */}
            <Comp rejected={'90'} accepted={'30'} Requests={'82'} Projects={'75'} />

            {Tabtitle({navigation})}

            <FlatList
      style={{marginLeft:'1%' , marginTop:'10%'}}
      data={data}
      keyExtractor={(item, index) => index.toString()}
      
      renderItem={({item}) =><Tab itemData={item} onPress={() => navigation.navigate("Viewproject")}/>}
    />

            {/* ----- the floating button ----- */}
       

            <View style={{bottom:'7%' , left:'50%'}}>
      
    <FloatingButton fun={() => navigation.navigate('CreateProject')} />
 

 
  
</View>
        </View>
    );
};
export default HomePage;