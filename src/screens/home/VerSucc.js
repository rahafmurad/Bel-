


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
} from 'react-native';
import AppButton from '../components/Button';
import MainTextField from '../components/MainTextField';

import NaviBar from './NaviBar'
import HomePage from './HomePage';

const Logo =()=>{
  return(
    <View>
      <Image
          style={[styles.Logo1 ,{marginLeft:270}] }
          source={require('C:/Users/rahaf/MilliFProject/assets/LogoW.png')}
        />
    </View>
  );
};
const Image1 =()=>{
  return(
    <View style={{marginTop:180 , marginLeft:105}}>
    <Image
    
     source={require('C:/Users/rahaf/MilliFProject/assets/Success.png')}
   />
   </View>
  );
};
const Text1 =()=>{
  return(
    <View >
       <Text style={[styles.headtitle , {fontSize: 30},{alignSelf:'center'},{marginTop:5}]}>Verification{'\n'}Successful </Text>
       <View style={{marginLeft:25}}>
       <Text style={[styles.subtitile  ,{fontSize: 16} ,{textAlign: 'center'}  ,{marginTop:70} ]} >You now have full access to {'\n'}our system </Text>
    </View>
    </View>
  );
};
const VerSucc= ({navigation}) => {
    StatusBar.setHidden(true);

    return(  
   
      
  <LinearGradient
          colors={['#DEB754' ,'#FAF9F9' ]}
          start={{x: 3.5, y: 0.5}}
          end={{x: 0.5, y:0}}
          style={styles.linearGradient}
        >
  

   <View style={styles.container}>
{Logo()}
{Image1()}
{Text1()}
<AppButton style={[styles.BlackButton,{marginTop:'20%'},{marginLeft:'21%'}, {width: 200}]} title= "Let’s start!" onPress={() => navigation.navigate('NaviBar')}/>

</View>



 
      

       
  </LinearGradient>

    ); };


export default VerSucc;