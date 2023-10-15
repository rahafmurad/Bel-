

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
import { Dropdown } from 'react-native-element-dropdown';

import AppButton from '../components/Button';
import Rectangle from '../components/Rectangle';
import Dropdown1 from '../components/Dropdown1';
import MainTextField from '../components/MainTextField';
 import CreateProject from './CreateProject';
import LogoContainer from '../components/LogoContainer';
import Signature from '../components/Signature';
import DatePicker from '../components/DatePicker';
import VerCode from './VerCode';


const SNA4 = ({navigation , route}) => {
  StatusBar.setHidden(true);
  const [user_type, setUser] = useState("");
  const [Input2 , setInput]= useState(route.params.arr);
  console.log(Input2);
    const handleOnchange = (value, id) => {
    setInput(change => ({ ...change, [id]: value }));
};

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
    <Text style={[styles.headtitle , {marginTop : '8%'},{left:'8%'},{fontSize:20} ]}>Contractor Pledge</Text>
    {/*------ back arrow ------ */} 
    <TouchableOpacity style={{ height: 40, width: 40 ,top:'7%'}}>
        <Image
          source={require('C:/Users/rahaf/MilliFProject/assets/back.png')}
          style={{ height: 30, width: 30}}
        /> 
      
      </TouchableOpacity>
      <View style={{top : '18%' , right:'90%'}}>
      <Text style={[styles.subtitile, { top: '10%' }, { left: '13%' },{alignContent:'center'}]} >The contractor undertakes that the works to be {'\n'} commenced are in conformity with the plans  {'\n'}and all contract documents. </Text>

    </View>
      </View>
  
  
    );
  
  };
  const Dropdown1=()=>{
    const [isFocus, setIsFocus] = useState(false);

    return (
      <View style={[styles.Drobcontainer , {top:'5%'}]}>
        
        <Text style={{  fontWeight: 'bold', color: '#000000' ,top:'15%',right:'50%'}}>Major:</Text>

        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: '#FFDE59' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="label"
          placeholder={!isFocus ? ' Select One' : '...'}
          searchPlaceholder="Search..."
          value={user_type}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
          setUser(item.label);
            setIsFocus(false);
          }}

        />
      </View>
    );
  };
  const Section2 =()=>{
    return(
      <View  style={{bottom:'3%'}}>
        <Text style={{marginLeft:'10%', marginBottom:'5%' , fontWeight:'bold',color:'black' }}>Contractor Name:</Text>
  <MainTextField style={[styles.Textinput, { width: 150 }, { height: 36 },{marginLeft:'8%'} ,{marginTop:'1%'} ]} text={"Full Name"} />  

 <Text style={{bottom:'34%',marginLeft:'55%', fontWeight:'bold',color:'black' }}>Start Date:</Text> 

<View style={{bottom:'32%' , left:'49%'}}>
   <DatePicker/>   
    </View>  
  <Text style={{ fontWeight:'bold',color:'black',marginLeft:'10%', bottom:'25%' }}> Submission Date:</Text>

<View style={{bottom:'25%' , left:'7%'}}>
   <DatePicker/>   
    </View>
    
      </View>
    );
  };

  const Section3 =()=>{
    return(
      <View style={{right:'10%', bottom:'5%'  }}>
        <Signature/>
      </View>
    );
  };
  
  const Section4 =()=>{
    return(
      <View style={{flexDirection: 'row', alignItems: 'center' ,bottom:'10%'}}>
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
  const Section5=()=>{
    return(
      <View >
        <Text style={{marginLeft:'10%', marginBottom:'5%' ,top:'2%', fontWeight:'bold',color:'black' }}>Name:</Text>
  <MainTextField style={[styles.Textinput, { width: 150 }, { height: 36 },{marginLeft:'8%'} ,{marginTop:'1%'} ]} text={"Full Name"} />  

 <Text style={{bottom:'49%',marginLeft:'55%', fontWeight:'bold',color:'black' }}>Date:</Text> 

<View style={{bottom:'47%' , left:'49%'}}>
   <DatePicker/>   
    </View>  
</View>
    );
  };
  const Section6=()=>{
    return(
      <View style={{right:'10%', bottom:'5%'  }}>
      <Signature/>

    </View>
    );
  };
  return (
    
  <LinearGradient
  colors={['#DEB754' ,'#FAF9F9' ]}
  start={{x: 3.5, y: 0.5}}
  end={{x: 0.5, y:0}}
  style={styles.linearGradient}
>

<ScrollView > 

{Intro()}
{Dropdown1()}
{Section2()}
{Section3()}
{Section4()}
{Section5()}
{Section6()}

   
<AppButton style={[styles.BlackButton , {bottom:'2%' },{left:'8%'},{width:310}]} title= "Submit"  onPress={() =>{ navigation.navigate('HomePage')}}/> 

    
</ScrollView>

</LinearGradient>

  );
};


export default SNA4;