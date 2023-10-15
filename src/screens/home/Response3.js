
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
import CreateProject from './CreateProject';
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
style={[styles.Logo1,{left:'75%'} ]}
source={require('C:/Users/rahaf/MilliFProject/assets/LogoW.png')}
/>
<Text style={[styles.headtitle , {top : '65%'},{left:'6%'} ]}> Response</Text>
{/*------ back arrow ------ */} 
<TouchableOpacity style={{ height: 40, width: 40 ,top:'7%'}}>
    <Image
      source={require('C:/Users/rahaf/MilliFProject/assets/back.png')}
      style={{ height: 30, width: 30}}
    /> 
  
  </TouchableOpacity>
  <View style={{top : '15%' , right:'65%'}}>

</View>
  </View>

  
    );

};



const Section2 = ()=>{
    return(
      <View style={{flexDirection: 'row', alignItems: 'center' ,paddingTop:60}}>
      <View style={{flex: 1, height: 1.5, backgroundColor: '#898A8D'}} />
          <View>
              <Text style={{
                color:'#4c4c4c',
                fontWeight:'500',
              }}>Owner Approval / Representative</Text>
          </View>
      <View style={{flex: 1, height: 1.5, backgroundColor: '#898A8D'}} />
    </View> 
  
    );
};
const Section3 =() =>{
    return(    

        <View style= {{paddingTop:20, flexDirection:'row'}}>
        <Text style={{ fontWeight:'bold',color:'black',left:'60%' }}>Name:</Text>
        <MainTextField style={[styles.Textinput, { width: 150 }, { height: 36 },{top:'5%'},{right:'40%'}]} text={"Full Name"} />

        <Text style={{ fontWeight:'bold',color:'black' }}>Job:</Text>
             

          <MainTextField style={[styles.Textinput, { width: 150 }, { height: 36 },{top:'5%'},{left:'-85%'}]} text={"Job"} />
   </View>
    );
};
const Section4 =()=>{
  return(
    <View style={{marginLeft:'10%',marginTop:'10%'}}>
    <View> 
    <Text style={{ fontWeight:'bold',color:'black' }}>Date:</Text>
        <DatePicker/>   
       </View>
       <View style={{top:'5%' , right:'20%'}}>
    <Signature/>
    </View>
    <AppButton style={[styles.BlackButton,{marginTop:'40%'}, { width: 300 }]} title="Next"   />

    </View> 

  );
};
const Response3 = () => {
  StatusBar.setHidden(true);

  return (
    <LinearGradient
      colors={['#DEB754', '#FAF9F9']}
      start={{ x: 3.5, y: 0.5 }}
      end={{ x: 0.5, y: 0 }}
      style={styles.linearGradient} >

     <View style = {[styles.container ]}>
{Intro()}
 {Section2()} 
  {Section3()}
  {Section4()} 



     </View>

  
    </LinearGradient>

  );
};
export default Response3;