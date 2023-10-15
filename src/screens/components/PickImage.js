import ImagePicker from 'react-native-image-crop-picker';
import {
    View,
  Text,
  Image,
  TouchableOpacity,
  } from 'react-native';
  // the stylesheet
  import styles from '../style/Style'

async function PickImage() {
    try {
      const image = await ImagePicker.openPicker({
        width: 100,
        height: 200,
        cropping: true,
    
      });
      console.log(image.path);
      // do something with the image data
    } catch (err) {
      console.log(err);
    }
  }
  export default PickImage;