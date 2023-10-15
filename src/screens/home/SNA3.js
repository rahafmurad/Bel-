

import {useState} from 'react';
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

const SNA3 = ({navigation , route}) => {
  StatusBar.setHidden(true);
  const [Input1 , setInput]= useState(route.params.arr);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  console.log(Input1);
    const handleOnchange = (value, id) => {
    setInput(change => ({ ...change, [id]: value }));
};

const Intro=()=>{
  return(
    <View style={{flexDirection: 'row', paddingVertical:10}}>
    <Image
  style={[styles.Logo1 ,{left:'75%'} ]}
  source={require('C:/Users/rahaf/MilliFProject/assets/LogoW.png')}
  />
  <Text style={[styles.headtitle , {marginTop : '8%'},{left:'8%'},{fontSize:20} ]}>Job Description</Text>
  {/*------ back arrow ------ */} 
  <TouchableOpacity style={{ height: 40, width: 40 ,top:'7%'}}>
      <Image
        source={require('C:/Users/rahaf/MilliFProject/assets/back.png')}
        style={{ height: 30, width: 30}}
      /> 
    
    </TouchableOpacity>
    <View style={{top : '15%' , right:'60%'}}>
    <Text style={[styles.subtitile, { top: '10%' }, { left: '6%' }]} >Welcome! Please enter jop description </Text>

 
  </View>
    </View>


  );

};
const TxtField =()=>{
  return(
    <View style={{bottom:'5%'}}>
      <Text style={{marginTop:'33%',marginLeft:'10%', fontSize:15, fontWeight:'bold',color:'black' }}>Tasks:</Text>
     <MainTextField style={[styles.Textinput , {height:70,  marginLeft:'10%',}  ]} text={"Tasks to start...."}  change={(value) => handleOnchange(value ,8)}/>

    </View>
  );
};

const TxtInput=()=>{
  return(
    <View style={{bottom:'5%' }}>
    <Text style={{  fontWeight: 'bold', color: '#000000' ,top:'15%',marginLeft:'10%'}}>Location:</Text>
           <Text style={{  fontWeight: 'bold', color: '#000000'  ,marginLeft:'55%'}}> Elevation:</Text> 
             
    
              <View style={{ flexDirection: 'row' , marginLeft:"6%" }}>
                <MainTextField style={[styles.Textinput, { width: 150 }, { height: 50 }, { marginHorizontal: 10 }]} text={"Location in detail"} change={(value) => handleOnchange(value ,9)} />  
                {/* text here as parameter  */}
                 <MainTextField style={[styles.Textinput, { width: 150 }, { height: 50 }, { marginHorizontal: 10 }]} text={"Elevation"}  change={(value) => handleOnchange(value ,10)}/>
              </View>
    </View>
       
  );
};
const DatePicke = () => {
  return (
    <View style={{ height: 300, fontWeight: 'bold', marginLeft: '10%', bottom: '5%' }}>
      <View style={{ marginBottom: '50%', marginLeft: '30%' }}>
        <DatePicker setsDate={setStartDate}  />
        <DatePicker setsDate={setEndDate}/>
      
      </View>
      <Text style={{ fontSize: 15, fontWeight: 'bold', bottom: '92%', fontSize: 18 }}>Start Date:</Text>
      <Text style={{ fontSize: 15, fontWeight: 'bold', marginTop: '10%', bottom: '90%', fontSize: 18 }}>End Date:</Text>

      
    </View>

  );
};
  return (
    <LinearGradient
      colors={['#DEB754', '#FAF9F9']}
      start={{ x: 3.5, y: 0.5 }}
      end={{ x: 0.5, y: 0 }}
      style={styles.linearGradient} >

      <View style={styles.container}>
      {Intro()}
      {TxtField()}
      {TxtInput()}
      {DatePicke()}
     
      </View>
      <AppButton style={[styles.BlackButton, { width: 300 }, { left: '9%' }, { bottom: '5%' }]} title="Next"   onPress={() =>{ navigation.navigate('SNA4', {arr:Input1}),console.log(Input1) }}/>
  
    </LinearGradient>

  );
};


export default SNA3;