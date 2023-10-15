
import React from 'react';
import styles from '../style/Style';
import {
  View,
  Image,
  StatusBar,
  Text,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AppButton from '../components/Button';
import Rectangle from '../components/Rectangle';
import LogoContainer from '../components/LogoContainer';
import MainTextField from '../components/MainTextField';
import DatePicker from '../components/DatePicker';

import Signature from '../components/Signature';
import Radio from '../components/Radio';
import SigntView from '../components/SigntView';

  const Intro=()=>{
    return(
    <View style={{flexDirection: 'row', paddingVertical:10}}>
  <Image
style={[styles.Logo1 ,{marginLeft:260} ]}
source={require('C:/Users/rahaf/MilliFProject/assets/LogoW.png')}
/>
<Text style={[styles.headtitle , {top : '38%'},{left:'6%'} ]}> Response</Text>
{/*------ back arrow ------ */} 
<TouchableOpacity style={{ height: 40, width: 40 ,top:'7%'}}>
    <Image
      source={require('C:/Users/rahaf/MilliFProject/assets/back.png')}
      style={{ height: 30, width: 30}}
    /> 
  
  </TouchableOpacity>
  <View style={{top : '15%' , right:'65%'}}>
<LogoContainer/>
</View>
  </View>

  
    );

};


//text iput from database
const Section2 = ()=>{
    return(

        <View style= {{paddingTop:20, flexDirection:'row',top:'15%'}}>
        <Text style={{ fontWeight:'bold',color:'black',left:'45%' }}>Consultant:</Text>
        <Rectangle style={[styles.rectangle, { width: 150 }, { height: 50 }, { marginHorizontal: 10 },{top:'0%'},{right:'55%'}]} text={"Structural"} />

        <Text style={{ fontWeight:'bold',color:'black', right:'43%' }}>Consultant Name:</Text>
             

          <Rectangle style={[styles.rectangle, { width: 150 }, { height: 50 }, { marginHorizontal: 10 },{top:'0%'},{right:'185%'}]} text={"Khaled ahmed"} />
   </View>
  
    );
};
const Section3 =() =>{
    return(    

        <View style= {{paddingTop:90, flexDirection:'row'}}>
        <Text style={{ fontWeight:'bold',color:'black',left:'25%' }}>Accreditation Status:</Text>
        <Rectangle style={[styles.rectangle,  { width: 150 }, { height: 50 }, { marginHorizontal: 10 },{top:'0%'}, {right:'85%'}]} text={"A (Acceptable)"} /> 
        <View style={{right:'85%'}}>           
    <SigntView/>
    </View> 
   </View>
    );
};
const Section4 =()=>{
  return(
    <View style={{flexDirection: 'row', alignItems: 'center' ,paddingTop:20}}>
    <View style={{flex: 1, height: 1.5, backgroundColor: '#898A8D'}} />
        <View>

            <Text style={{
              color:'#4c4c4c',
              fontWeight:'500',
            }}>Project manager (consultant)</Text>
        </View>
    <View style={{flex: 1, height: 1.5, backgroundColor: '#898A8D'}} />
  </View> 

  );
};
const Section5 = ()=>{
return( 
     <View style= {{paddingTop:30, flexDirection:'row'}}>
<Text style={{ fontWeight:'bold',color:'black',left:'15%' }}>Name:</Text>
<Rectangle style={[styles.rectangle, { width: 150 }, { height: 50 }, { marginHorizontal: 10 },{top:'0%'}, {right:'14%'}]} text={"Murad mohammed"} /> 
<View style={{right:'20%' ,top:'3%'}}>  
<Text  style={{ fontWeight:'bold',color:'black',left:'15%' ,bottom:'5%'}}>Date:</Text>         
<DatePicker/>
<View style={{right:'75%', top:'10%'}}>
<SigntView/>
</View>
</View> 
</View>
);
};
const Section6 =()=>{
  return(
    <View style={{flexDirection: 'row', alignItems: 'center' ,paddingTop:50}}>
    <View style={{flex: 1, height: 1.5, backgroundColor: '#898A8D'}} />
        <View>
            <Text style={{
              color:'#4c4c4c',
              fontWeight:'500',
            }}>Owner Approval/Representative</Text>
        </View>
    <View style={{flex: 1, height: 1.5, backgroundColor: '#898A8D'}} />
  </View>  
  );
};
const Section7 =()=>{
  return(
    <View style= {{paddingTop:10, flexDirection:'row'}}>
    <Text style={{ fontWeight:'bold',color:'black',left:'15%' }}>Name:</Text>
    <Rectangle style={[styles.rectangle, { width: 150 }, { height: 50 }, { marginHorizontal: 10 },{top:'0%'}, {right:'14%'}]} text={"Murad mohammed"} /> 
    <View style={{right:'20%' ,top:'3%'}}>  
    <Text  style={{ fontWeight:'bold',color:'black',left:'25%' ,bottom:'5%'}}>Job:</Text>         
    <Rectangle style={[styles.rectangle, { width: 150 }, { height: 50 }, { marginLeft: 40 },{bottom:30} ]} text={"Murad mohammed"} /> 

    <View style={{right:'80%', bottom:'8%'}}>
    <Text  style={{ fontWeight:'bold',color:'black',left:'10%'}}>Date:</Text>         
    <DatePicker/>
    </View>
    </View> 
    </View>
  );
};
const Section8 =()=>{
  return(
    <View style={{left:'5%' , bottom:'1%'}}>
      <SigntView/>
    </View>
  );
};
const ViewDet = () => {
  StatusBar.setHidden(true);

  return (
    <LinearGradient
      colors={['#DEB754', '#FAF9F9']}
      start={{ x: 3.5, y: 0.5 }}
      end={{ x: 0.5, y: 0 }}
      style={styles.linearGradient} >

<ScrollView  >
    
{Intro()}
{Section2()}
{Section3()} 
{Section4()}

{Section5()}  

{Section6()}  

{Section7()}  
{Section8()}
{/* // this button depends on the page  */}
<AppButton style={[styles.YellButton, { width: 260 },{left:'15%'},{bottom:'1%'}]} title="New submission"  titilestyle={{color:'black'}} />

  </ScrollView>

  
    </LinearGradient>

  );
};


export default ViewDet;