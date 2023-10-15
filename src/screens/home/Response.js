

import React from 'react';
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
import AppButton from '../components/Button';
import Rectangle from '../components/Rectangle';
import LogoContainer from '../components/LogoContainer';
import MainTextField from '../components/MainTextField';
import DatePicker from '../components/DatePicker';
import Dropdown1 from '../components/Dropdown1';
import Signature from '../components/Signature';
const  data = [      
    { label: 'Area', value: '1' },
    { label: ' Structural', value: '2' },
    { label: 'electricity', value: '3' },
    { label: 'architectural', value: '4' }, 
    { label: 'mechanics', value: '5' },
    { label: 'General Site', value: '6' },
  ];
  const Intro=()=>{
    return(
      <View style={{flexDirection: 'row', paddingVertical:10}}>
      <Image
    style={[styles.Logo1 ,{left:'75%'} ]}
    source={require('C:/Users/rahaf/MilliFProject/assets/LogoW.png')}
    />
    <Text style={[styles.headtitle , {top : '80%'},{left:'6%'} ]}> Response</Text>
    {/*------ back arrow ------ */} 
    <TouchableOpacity style={{ height: 40, width: 40 ,top:'7%'}}>
        <Image
          source={require('C:/Users/rahaf/MilliFProject/assets/back.png')}
          style={{ height: 30, width: 30 }}
        /> 
      
      </TouchableOpacity>
      <View style={{top : '15%' , right:'70%'}}>
    
    </View>
      </View>
    );

};

const Dropdown = ()=>{
    return(
    <View style={{ right:'30%'}}>
    <Text style={{left:'40%',top:'25%', fontWeight:'bold',color:'black' }}>Consultant:</Text>
    <Dropdown1 data = {data}/>
    </View>
    );
    };

const Textinput = ()=>{
    return(
        <View style={{  right:'10%',marginTop:'10%'}}>
        <Text style={{left:'18%',bottom:'110%', fontWeight:'bold',color:'black' }}> Consultant Name:</Text>
        <MainTextField style={[styles.Textinput, { width: 150 }, { height: 36 },{bottom:'100%'},{left:'17%'}]} text={"Full Name"} />
   </View>
    );
};
const Signt =() =>{
    return(
        <Signature style ={{ right:'10%',bottom:'8%' }}/> 
        

    );
};
const Response = () => {
  StatusBar.setHidden(true);

  return (
    <LinearGradient
      colors={['#DEB754', '#FAF9F9']}
      start={{ x: 3.5, y: 0.5 }}
      end={{ x: 0.5, y: 0 }}
      style={styles.linearGradient} >
<View style={styles.container }>
{ Intro()}
{ Dropdown()}
{Textinput()}
{Signt()}
</View>

  
      <AppButton style={[styles.BlackButton, { width: 300 }, { left: '9%' }, { marginBottom: '4%' }]} title="Next"   />
  
    </LinearGradient>

  );
};


export default Response;