
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
import axios from 'axios';
import DocumentPicker from 'react-native-document-picker';

import { useState } from 'react';
import AppButton from '../components/Button';
import Rectangle from '../components/Rectangle';
import MainTextField from '../components/MainTextField';
    import CreateProject from './CreateProject';

import { Dropdown } from 'react-native-element-dropdown';

const SNA2 = ({navigation}) => {
  StatusBar.setHidden(true);
  const [user_type, setUser] = useState("");
  const [user_type1, setUser1] = useState("");
  const [Input , setInput]= useState({});

  

const  data2 = [      
    { label: 'Area', value: '1' },
    { label: ' Structural', value: '2' },
    { label: 'electricity', value: '3' },
    { label: 'architectural', value: '4' }, 
    { label: 'mechanics', value: '5' },
    { label: 'General Site', value: '6' },
  ];
  const  data3 = [      
    { label: 'Schematics', value: '1' },
    { label: ' Receive Requests', value: '2' },
    { label: 'Accreditation Requests', value: '3' },
    { label: 'Letters', value: '4' }, 
    { label: 'Bills', value: '5' },
    { label: 'Test Results', value: '6' },
    { label: 'Photos', value: '7' },
    { label: 'Other', value: '8' },
  ];
    console.log(Input);
  const handleOnchange = (value, id) => {
   
    setInput(change => ({ ...change, [id]: value }));
   
};


    const formData = new FormData();

    Object.keys(Input).forEach((key) => {
      formData.append( key,Input[key]);
    });
    console.log(Input);

  const Intro=()=>{
  return(
    <View style={{flexDirection: 'row', paddingVertical:10}}>
    <Image
  style={[styles.Logo1 ,{left:'75%'} ]}
  source={require('C:/Users/rahaf/MilliFProject/assets/LogoW.png')}
  />
  <Text style={[styles.headtitle , {marginTop : '8%'},{left:'8%'},{fontSize:20} ]}>Order Data</Text>
  {/*------ back arrow ------ */} 
  <TouchableOpacity style={{ height: 40, width: 40 ,top:'7%'}}>
      <Image
        source={require('C:/Users/rahaf/MilliFProject/assets/back.png')}
        style={{ height: 30, width: 30}}
      /> 
    
    </TouchableOpacity>
    <View style={{top : '15%' , right:'60%'}}>
    <Text style={[styles.subtitile, { top: '15%' }, { left: '6%' }]} >Welcome! Please enter request information</Text>


  </View>
    </View>


  );

};

const Dropdown2=()=>{
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
          data={data2}
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
          handleOnchange(item.label ,1);
          setUser(item.label);
            setIsFocus(false);
          }}

        />
      </View>
  );
};

const TxtInput2 =()=>{
  return(
    <View style={{bottom:'10%' }}>
<Text style={{  fontWeight: 'bold', color: '#000000' ,top:'15%',marginLeft:'10%'}}>Stage:</Text>
       <Text style={{  fontWeight: 'bold', color: '#000000'  ,marginLeft:'55%'}}>Region:</Text> 
          {/* handleOnchange(item.label ,1);
          setUser(item.label); */}
          <View style={{ flexDirection: 'row' , marginLeft:"6%" }}>
            <MainTextField style={[styles.Textinput, { width: 150 }, { height: 50 }, { marginHorizontal: 10 }]} text={"Order Num"} change={(value) => handleOnchange(value ,2)}  />  
           
             <MainTextField style={[styles.Textinput, { width: 150 }, { height: 50 }, { marginHorizontal: 10 }]} text={"Optional"} change={(value) => handleOnchange(value ,3)} />
          </View>
</View>
   
  );
};
const TxtInput3 =()=>{
  return(
    <View style={{bottom:'12%' }}>
<Text style={{  fontWeight: 'bold', color: '#000000' ,top:'15%',marginLeft:'10%'}}>Building:</Text>
       <Text style={{  fontWeight: 'bold', color: '#000000'  ,marginLeft:'55%'}}>Role:</Text> 
         

          <View style={{ flexDirection: 'row' , marginLeft:"6%" }}>
            <MainTextField style={[styles.Textinput, { width: 150 }, { height: 50 }, { marginHorizontal: 10 }]} text={"Optional"} change={(value) => handleOnchange(value ,4)}  />  
            {/* text here as parameter  */}
             <MainTextField style={[styles.Textinput, { width: 150 }, { height: 50 }, { marginHorizontal: 10 }]} text={"Optional"} change={(value) => handleOnchange(value ,5)} />
          </View>
</View>
   
  );
};
const Dropdown3=()=>{
  const [isFocus, setIsFocus] = useState(false);

    return (
      <View style={[styles.Drobcontainer , {top:'-14%'}]}>
        <Text style={{  fontWeight: 'bold', color: '#000000' ,top:'15%',right:'50%'}}>Attachments:</Text>

        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: '#FFDE59' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data3}
          search
          maxHeight={300}
          labelField="label"
          valueField="label"
          placeholder={!isFocus ? ' Select One' : '...'}
          searchPlaceholder="Search..."
          value={user_type1}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
           handleOnchange(item.label ,6)
          setUser1(item.label);
            setIsFocus(false);
          }}

        />
      </View>
  );
};


async function PickDocument() {
  try {
    const result = await DocumentPicker.pick({
      type: [DocumentPicker.types.allFiles],
    });
    console.log(
      result.uri,
      result.type, // mime type
      result.name,
      result.size
    );
    return result;
    // do something with the file data
  } catch (err) {
    if (DocumentPicker.isCancel(err)) {
      // User cancelled the picker
    } else {
      // Error occurred
    }
  }
}
const selectFile = async () => {
  const selectedFile = await PickDocument();

    const filename = selectedFile[0].name;
    const formattedFile = {
        uri:
            Platform.OS === 'android'? selectedFile[0].uri: selectedFile[0].uri.replace('file://', ''),
        name: filename,
        type:selectedFile[0].type
    }
    console.log(formattedFile);
    handleOnchange(formattedFile ,7)

  setFile(formattedFile)
  
}
const AttachDocument =()=>{
  return(
<View style={{height:70, bottom:'23%' , marginLeft:'7%' }} >
      <TouchableOpacity style={[styles.Textinput]} onPress={selectFile}>
  <Text style={[{bottom:'50%'} ,  {fontSize:16},{fontWeight:'bold'}]}>Attach Project Logo</Text>
  <Image
                  source={require('C:/Users/rahaf/MilliFProject/assets/upload.png')}
                  style={{ left:'42%',bottom:'13%'}}
                />
</TouchableOpacity>

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

<View > 

{Intro()}
{Dropdown2()}
{TxtInput2()}
{TxtInput3()}
{Dropdown3()}
  {AttachDocument()} 

      
  <AppButton style={[styles.BlackButton ,{bottom:'13%'},{left:'9%'},{width:310}]} title= "Next" onPress={() =>{ navigation.navigate('SNA3', {arr:Input}),console.log(Input) }}/>  



</View>

</LinearGradient>

  );
};


export default SNA2;