
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styles from "../style/Style"
import {
    View,
Image,
StatusBar,
Text,
Pressable,
} from 'react-native';
import AppButton from '../components/Button';
import MainTextField from '../components/MainTextField';
import VerSucc from './VerSucc';
import Code from '../components/Code';
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
const Text1 =()=>{
  return(
    <View style={{marginTop:160}}>
       <Text style={[styles.headtitle , {fontSize: 30},{alignSelf:'center'},{marginTop:5}]}>Verification{'\n'}Successful </Text>
       <View style={{marginRight:80}}>
       <Text style={[styles.subtitile  ,{fontSize: 16}  ,{marginTop:70} ,{textAlign: 'center'},]} >Please enter the 4-digits code send to your email </Text>
    </View>
    </View>
  );
};

const Code1 =()=>{
  return(
 <Code/>
  );
};
const Button1 =({navigation})=>{

  return(
    <View style={{ marginLeft:'22%'}}>
   <AppButton style={[styles.BlackButton,{width: 200}]} title= "Submit" onPress={() => navigation.navigate('VerSucc')}/>
      <Text style={ [ {color:'#289BF6'},{fontSize: 17},{marginLeft:'18%'}, {marginTop:'2%'}]}>Resend code</Text>
    </View>
  );
};
const VerCode= ({navigation }) => {
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
{Text1()}
{Code1()}
{Button1({navigation})}
    
</View>

       
  </LinearGradient>
  
    ); };


export default VerCode;