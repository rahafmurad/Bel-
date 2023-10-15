
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
import Radio from '../components/Radio';
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
    <View style={{flexDirection: 'row'}}>
  <Image
style={[styles.Logo1 ,{marginLeft:260} ]}
source={require('C:/Users/rahaf/MilliFProject/assets/LogoW.png')}
/>
<Text style={[styles.headtitle , {top : '45%'},{left:'6%'} ]}> Response</Text>
{/*------ back arrow ------ */} 
<TouchableOpacity style={{ height: 40, width: 40 ,top:'7%'}}>
    <Image
      source={require('C:/Users/rahaf/MilliFProject/assets/back.png')}
      style={{ height: 30, width: 30}}
    /> 
  </TouchableOpacity>
  <View style={{top :'20%' , right:'68%'}}>

</View>
  </View>

  
    );

};

const Section1 = ()=>{
    return(
      <View style={{top:'6%',right:'8%'}} >
      <Text style={{ fontWeight:'bold',color:'black', left:'17%'}}>Accreditation Status:</Text>
      <Radio/>
      <Text style={{fontSize:15, fontWeight:'bold',color:'black', left:'17%' }}>Notes:</Text>
      <MainTextField style={[styles.Textinput ,{left:'15%'}, {height:70}]} text={"Write yor notes...."} />
      </View>
    );
    };

const Section2 = ()=>{
    return(
      <View style={{flexDirection: 'row', alignItems: 'center' ,paddingTop:100}}>
      <View style={{flex: 1, height: 1.5, backgroundColor: '#898A8D'}} />
          <View>
              <Text style={{
                color:'#4c4c4c',
                fontWeight:'500',
              }}>Project Manager (Contractor)</Text>
          </View>
      <View style={{flex: 1, height: 1.5, backgroundColor: '#898A8D'}} />
    </View> 
  
    );
};
const Section3 =() =>{
    return(    

        <View style= {{paddingTop:30, paddingLeft:30 }}>
        <Text style={{ fontWeight:'bold',color:'black' }}>Name:</Text>
        <MainTextField style={[styles.Textinput, { width: 150 }, { height: 36 }]} text={"Full Name"} />

        <Text style={{ fontWeight:'bold',color:'black' }}>Date:</Text>
        <DatePicker/>  
   </View>
    

    );
};
const Section4 =()=>{
  return(
    <View style={{right:'10%'}}>
  <Signature/>
  <View style={{ marginTop:40, marginBottom:20 }}>
  <AppButton style={[styles.BlackButton,{left:'19%'}, { width: 300 }]} title="Next"   />
</View>
    </View> 

  );
};

const Response2 = () => {
  StatusBar.setHidden(true);

  return (
    
    <LinearGradient
      colors={['#DEB754', '#FAF9F9']}
      start={{ x: 3.5, y: 0.5 }}
      end={{ x: 0.5, y: 0 }}
      style={styles.linearGradient} >
<ScrollView style = {[styles.container ]}>
    
{Intro()}
{Section1()}
{Section2()}
{Section3()}
{Section4()}
 
  </ScrollView>
</LinearGradient>
   

  
    

  );
};


export default Response2;