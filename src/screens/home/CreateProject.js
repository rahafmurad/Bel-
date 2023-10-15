
import {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styles from "../style/Style"
import {
    View,
Image,
StatusBar,
Text,
ScrollView,
Pressable,
SafeAreaView,
TouchableOpacity,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import AppButton from '../components/Button';
import MainTextField from '../components/MainTextField';
import DatePicker from '../components/DatePicker';
import axios from 'axios';


const CreateProject = ({navigation}) => {
  
  StatusBar.setHidden(true);
  const url = "https://bymilli.firstcity.ai/api/project"
  const headersConfig = {
    "headers": {
      "Authorization": 'Bearer 7|AczjzioLFnFjagzMz5ctxf2Q74kqnBgJ4KCjGMux',
      "Accept": "*/*",
      "Content-Type": "application/json",
    },
  };
  const [isLoading, setIsLoading] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [consultantName, setConsultantName] = useState("");
  const [consultantEmail, setConsultantEmail] = useState("");
  const [contractorName, setContractorName] = useState("");
  const [contractorEmail, setContractorEmail] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [projectLogo, setProjectLogo] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [location, setLocation] = useState("");

  const postData = async () => {
  try {
    setIsLoading(true);
    const body = {
      "project_name":projectName,
        "owner_name":ownerName,
        "consultant_name":consultantName,
        "consultant_email":consultantEmail,
        "contractor_name":contractorName,
        "contractor_email":contractorEmail,
        "start_date":startDate,
        "end_date":endDate,
        "project_logo":projectLogo,
        "project_description":projectDescription,
        "location":location,
    }
   
    const response = await axios.post(url, body,headersConfig);
    console.log("🚀 ~ file: app.js:6 ~ constGET_REQ= ~ data:", response.data);
    setIsLoading(false);
  } catch (error) {
    console.error("🚀 ~ file: app.js:5 ~ constPOST_REQ= ~ error:", error);
    setIsLoading(false);
  }
};
const Intro = () => {
  return (
    <View>
      <Image
        style={[styles.Logo1, { marginLeft: '70%' }, {marginTop:'0%'}]}
        source={require('C:/Users/rahaf/MilliFProject/assets/LogoW.png')}
      />
      {/*------ back arrow ------ */}
      <TouchableOpacity style={{ height: 30, width: 30, paddingHorizontal: 10 }}>
        <Image
          source={require('C:/Users/rahaf/MilliFProject/assets/back.png')}
          style={{ height: 40, width: 40, marginTop: '245%' }}
        />
      </TouchableOpacity>
      <Text style={[styles.headtitle, { marginTop: '5%' }, { marginLeft: '10%' }]}> New Project</Text></View>
  );
};
const MainTxt = () => {
  return (
    <View style={{ marginTop: '15%', marginLeft: '3%' }}>
      <MainTextField style={[styles.Textinput]} text={"Project Name"} value={projectName} change={(value) => setProjectName(value)}/>
      <MainTextField style={[styles.Textinput]} text={"Clint Name"} value={ownerName} change={(value) => setOwnerName(value)} />
      <MainTextField style={[styles.Textinput]} text={"Office Name"} value={consultantName} change={(value) => setConsultantName(value)}/>
      <MainTextField style={[styles.Textinput]} text={"Office  Email"} value={consultantEmail} change={(value) => setConsultantEmail(value)} />
      <MainTextField style={[styles.Textinput]} text={"Contractor Name"} value={contractorName} change={(value) => setContractorName(value)}/>
      <MainTextField style={[styles.Textinput]} text={"Contractor Email"} value={contractorEmail} change={(value) => setContractorEmail(value)}/>
      <MainTextField style={[styles.Textinput]} text={"City"} value={location}  change={(value) => setLocation(value)}/>
    </View>
  );
};
async function PickImage() {
  try {
    const image = await ImagePicker.openPicker({
      width: 100,
      height: 200,
      cropping: true,
  
    });
    return image;
    // do something with the image data
  } catch (err) {
    console.log(err);
  }
}
const selectImage = async () => {
  const selectedImage = await PickImage();
  if (!(selectedImage instanceof Blob)) {
    console.error('Invalid image selected');
    return;
  }

  const data = new FormData();
  data.append('name', 'Image Upload');
  data.append('file_attachment', selectedImage);
  console.log(data);

  const imagePath = URL.createObjectURL(selectedImage);
  setProjectLogo('imagePath');

}
const AttachPhoto = () => {
  return (
    <View style={{ marginTop: '20%', marginRight: '52%' }} >
      <TouchableOpacity style={[styles.Textinput, { bottom: '80%' }, { left: '8%' }]} onPress={selectImage}>
        <Text style={[{ bottom: '50%' }, { fontSize: 16 }, { fontWeight: 'bold' }]}>Attach Project Logo</Text>
        <Image
        
          source={require('C:/Users/rahaf/MilliFProject/assets/upload.png')}
          style={{ left: '42%', bottom: '13%' }}
        />
      </TouchableOpacity>
    </View>
  );
};
const DatePicke = (navigation) => {
  return (
    <View style={{ height: 300, fontWeight: 'bold', marginLeft: '10%', bottom: '5%' }}>
      <View style={{ marginBottom: '50%', marginLeft: '30%' }}>
        <DatePicker setsDate={setStartDate}/>
        <DatePicker setsDate={setEndDate}/>
      </View>
      <Text style={{ fontSize: 15, fontWeight: 'bold', bottom: '92%', fontSize: 18 }}>Start Date:</Text>
      <Text style={{ fontSize: 15, fontWeight: 'bold', marginTop: '10%', bottom: '90%', fontSize: 18 }}>End Date:</Text>

      <MainTextField style={[styles.Textinput, { height: 70 }, { bottom: '77%' }, { right: '5%' }]} text={"Project Description...."} 
      value={projectDescription} change={(value) => setProjectDescription(value)}/>
      
     
      <AppButton style={[styles.BlackButton, { bottom: '65%' }, { width: 300 }]} title="Create Project" onPress={() => navigation.navigate('HomePage')}/>
     
    </View>

  );
};

  return (
    <LinearGradient
      colors={['#DEB754', '#FAF9F9']}
      start={{ x: 3.5, y: 0.5 }}
      end={{ x: 0.5, y: 0 }}
      style={styles.linearGradient} >
      <ScrollView>
        {Intro()}
        {MainTxt()}
        {AttachPhoto()}
        {DatePicke(navigation)}
      </ScrollView>
    </LinearGradient>
  );
};
export default CreateProject;