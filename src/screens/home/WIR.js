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
    { label: 'Copy of the approved workshop plan', value: '1' },
    { label: ' Copy of the materials approval request', value: '2' },
    { label: 'Copy of the accompaniment', value: '3' },
    { label: 'Copy of the accompaniment', value: '4' }, 
    { label: 'Copy of the change order, if any', value: '5' },
    { label: 'Other', value: '6' },
  ];
  const Intro=()=>{
    return(
      <View style={{flexDirection: 'row', paddingVertical:10}}>
      <Image
    style={[styles.Logo1 ,{left:'75%'} ]}
    source={require('C:/Users/rahaf/MilliFProject/assets/LogoW.png')}
    />
    <Text style={[styles.headtitle , {top : '30%'},{left:'6%'} ]}> Job Description</Text>
    {/*------ back arrow ------ */} 
    <TouchableOpacity style={{ height: 40, width: 40 ,top:'7%'}}>
        <Image
          source={require('C:/Users/rahaf/MilliFProject/assets/back.png')}
          style={{ height: 30, width: 30}}
        /> 
      
      </TouchableOpacity>
      <View style={{top : '15%' , right:'50%'}}>
      <Text style={[styles.subtitile, { top: '7%' }, { left: '11%' }]} >Welcome! Please enter request information</Text>

    <LogoContainer/>
    </View>
      </View>

  
    );

};



const Section1 = ()=>{
    return(
      <View style={{marginTop:80 , marginLeft:20}}>
     <Text style={{ fontSize:15, fontWeight:'bold',color:'black',left:'5%' }}>Tasks:</Text>

    <MainTextField style={[styles.Textinput ,{height:70}  ]} text={"Tasks to start...."} />
    </View> 
  
    );
};
const Section2 =() =>{
    return(    

        <View style= {{paddingTop:30, flexDirection:'row'}}>
        <Text style={{ fontWeight:'bold',color:'black',left:'60%',bottom:'5%' }}>Location:</Text>
        <MainTextField style={[styles.Textinput, { width: 150 }, { height: 36 },{right:'60%'}]} text={"Location in detail"} />

        <Text style={{ fontWeight:'bold',color:'black',right:'12%',bottom:'5%' }}> Elevation:</Text>
             

          <MainTextField style={[styles.Textinput, { width: 150 }, { height: 36 },{right:'160%'}]} text={" Elevation"} />
   </View>
    );
};
const Section3 =()=>{
  return(
    <View style={{marginTop:5 , marginLeft:20}}>
    <Text style={{ fontSize:14, fontWeight:'bold',color:'black' , left:'5%' }}>Work Themes:</Text>

   <MainTextField style={[styles.Textinput ,{height:70}  ]} text={"Write work themes...."} />
   </View>  

  );
};
const Section4 =()=>{
  return(
    <View style={{ bottom:'5%' , right:'28%'}}>
    <Text style={{left:'36%',top:'24%', fontWeight:'bold',color:'black' ,left:'40%'}}>Attached Documents:</Text>
    <Dropdown1 data = {data}/>
    </View> 

  );
};
const WIR = () => {
  StatusBar.setHidden(true);

  return (
    <LinearGradient
      colors={['#DEB754', '#FAF9F9']}
      start={{ x: 3.5, y: 0.5 }}
      end={{ x: 0.5, y: 0 }}
      style={styles.linearGradient} >

     <View style = {[styles.container ]}>
 {Intro()}
 {Section1()} 
  {Section2()}
  {Section3()}
  {Section4()}
  <AppButton style={[styles.BlackButton, { width: 300 },{left:'10%'},{bottom:'12%'}]} title="Next"   />


     </View>

  
    </LinearGradient>

  );
};


export default WIR;